/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NavigationFooter from "../../components/NavigationFooter";
import {
  Image,
  Flex,
  Text,
  Progress,
  Box,
  Textarea,
  Center,
  Spinner,
  Input,
  List,
  ListIcon,
  ListItem,
  Link,
  InputGroup,
  InputLeftAddon,
  useRadioGroup,
  Wrap,
} from "@chakra-ui/react";
import { Alert, AlertIcon, useToast } from "@chakra-ui/react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { CheckIcon } from "@chakra-ui/icons";
import useOnclickOutside from "react-cool-onclickoutside";
import axios from "axios";
import * as BDGraphics from "../../assets/";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import RadioCard from "../../components/RadioCard";
import { getIcon } from "../../functions";
require("dotenv").config();

const TYPES_OF_AID = ["GENERAL", "FOOD", "BABY ITEMS", "FLOOD SHELTER"];

const ReportForm = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const toast = useToast();
  const { t } = useTranslation();

  /* States */
  const [remark, setRemark] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [typeOfAid, setTypeOfAid] = useState("");
  const [progressBarValue, setProgressBarValue] = useState(5);
  const [locationLoading, setLocationLoading] = useState(false);

  const [useMyLocationEnable, setUseMyLocationEnable] = useState(true);
  const [searchLocationEnable, setSearchLocationEnable] = useState(true);

  const [submitLoading, setSubmitLoading] = useState(false);

  //catch errors
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  useEffect(() => {
    let value = 0;
    if (coordinates) value = value + 25;
    if (remark) value = value + 25;
    if (typeOfAid) value = value + 25;
    if (phoneNumber) value = value + 25;

    setProgressBarValue(value);
  }, [coordinates, remark, typeOfAid, phoneNumber]);

  const popupLocation = () => {
    setLocationLoading(true);
    function handlePermission() {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted" || result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            toast({
              title: "We need your location!",
              description: "Please enable it and try again",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            setLocationLoading(false);
          }
        });
    }

    // function that retrieves the position
    function showPosition(position) {
      setCoordinates({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
      setLocationLoading(false);
      setUseMyLocationEnable(false);
      setSearchLocationEnable(false);
    }
    handlePermission();
  };

  const handleRemark = (e) => {
    setRemark(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber("+60" + e.target.value);
    var reg = /^\d+$/;
    if (e.target.value === "") {
      setPhoneNumberError(false);
      return;
    }
    if (reg.test(`${e.target.value}`) === false) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  };

  const reportFlag = async () => {
    if (remark && coordinates && phoneNumberError === false && typeOfAid) {
      setSubmitLoading(true);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}flag/createflag`,
          {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            description: remark,
            phonenumber: phoneNumber,
            image: "",
            type: typeOfAid !== "" ? typeOfAid : "GENERAL",
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          toast({
            title: "Saved !",
            description: "This flag is being reported",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setSubmitLoading(false);
          setTimeout(() => {
            window.location = "/home";
          }, 1500);
        })
        .catch((err) => {
          toast({
            title: "Failed to save!",
            description: "Something went wrong on our side!",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setSubmitLoading(false);
        });
    } else {
      toast({
        title: "Please fill in all the fields!",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: (aid) => {
      setTypeOfAid(aid.toUpperCase());
    },
  });

  const group = getRootProps();

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          setCoordinates({
            longitude: lng,
            latitude: lat,
          });
          setUseMyLocationEnable(false);
        })
        .catch((error) => {});
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Flex
          key={id}
          onClick={handleSelect(suggestion)}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          mb="10px"
          padding="0.5rem"
          borderBottom="1px solid #EAEAEA"
          transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)"
          transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)"
        >
          <Text
            w="100%"
            flexDirection="row"
            alignItems="center"
            textAlign="start"
          >
            {" "}
            {main_text} {secondary_text}{" "}
          </Text>
        </Flex>
      );
    });

  return (
    <>
      <Flex w="100%" h="100%" backgroundColor="#F5F5F5" flexDirection="column">
        <Box
          className="navbar"
          backgroundColor="#FFFFFF"
          px="2.0rem"
          py="1.0rem"
        >
          <Flex
            position="relative"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              onClick={() => {
                window.location = "/home";
              }}
              className="back-button"
              position="absolute"
              left="5px"
            >
              {/* <Image h="25px" src={ BDGraphics.BackButtonIcon } alt="back button" /> */}
              <></>
            </Box>
            <Box className="screen-title">
              <Text fontFamily="Poppins" fontWeight="600">
                {t("report-form.report-for-help")}
              </Text>
            </Box>
            <Box className="info-button" position="absolute" right="5px">
              <Image h="18px" src={BDGraphics.InfoIcon} alt="back button" />
            </Box>
          </Flex>
        </Box>

        <Center padding="2rem" flexDirection="row">
          <Progress
            w="100%"
            borderRadius="50px"
            value={progressBarValue}
            size="md"
            colorScheme="linkedin"
          />
        </Center>
        <Flex
          className="Flag-Form-Wrapper"
          flexDirection="column"
          backgroundColor="#FFFFFF"
          padding="2rem"
          borderRadius="20px"
        >
          <Flex
            className="Form-Blocks"
            flexDirection="column"
            alignItems="flex-start"
            mb="4rem"
          >
            <Flex
              className="Form-Title"
              flexDirection="row"
              alignItems="center"
              mb="15px"
            >
              <Text
                fontSize="xs"
                fontFamily="Poppins"
                fontWeight="500"
                color="#6598FF"
                mr="10px"
              >
                Step 1 of 4
              </Text>
              <Text fontSize="lg" fontFamily="Poppins" fontWeight="500">
                {t("report-form.set-address")}
              </Text>
            </Flex>
            <Flex
              className="Form-Content"
              w="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {coordinates ? (
                <Alert status="success" mb="15px">
                  <AlertIcon />
                  {t("report-form.location-set")}
                </Alert>
              ) : (
                <Flex
                  display={useMyLocationEnable ? "block" : "none"}
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  h="100%"
                  backgroundColor="#464646"
                  borderRadius="5px"
                  color="white"
                  padding="1.0rem"
                  onClick={() => popupLocation()}
                >
                  {!locationLoading ? (
                    <Flex
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        h="15px"
                        w="15px"
                        mr="0.9rem"
                        src={BDGraphics.LocationIcon}
                        alt="Location Icon"
                      />
                      {t("report-form.use-location-button")}
                    </Flex>
                  ) : (
                    <Spinner />
                  )}
                </Flex>
              )}

              <Text
                display={
                  useMyLocationEnable && searchLocationEnable ? "block" : "none"
                }
                marginY="10px"
                fontFamily="Poppins"
                fontSize="13px"
                color="#5F5F5F"
              >
                {" "}
                {t("or")}{" "}
              </Text>

              <Box
                display={searchLocationEnable ? "block" : "none"}
                w="100%"
                ref={ref}
              >
                <Input
                  style={{ width: "100%" }}
                  padding="1.5rem"
                  value={value}
                  onChange={handleInput}
                  disabled={!ready}
                  placeholder={t("report-form.where-are-you")}
                />
                {status === "OK" && (
                  <Box
                    backgroundColor="#FFFFFF"
                    w="100%"
                    padding="1rem"
                    border="1px solid #F5F5F5"
                    mt="15px"
                    borderRadius="8px"
                    boxShadow="0px 16px 40px rgba(212, 212, 212, 0.25);"
                  >
                    {renderSuggestions()}
                  </Box>
                )}
              </Box>
            </Flex>
          </Flex>

          <Flex
            className="Form-Blocks"
            flexDirection="column"
            alignItems="flex-start"
            mb="3rem"
          >
            <Flex
              className="Form-Title"
              flexDirection="row"
              alignItems="center"
              mb="15px"
            >
              <Text
                fontSize="xs"
                fontFamily="Poppins"
                fontWeight="500"
                color="#6598FF"
                mr="10px"
              >
                Step 2 of 4
              </Text>
              <Text fontSize="lg" fontFamily="Poppins" fontWeight="500">
                {t("report-form.remarks")}
              </Text>
            </Flex>
            <Flex
              className="Form-Content"
              w="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Textarea
                placeholder={t("report-form.what-did-you-see")}
                onChange={handleRemark}
              />
            </Flex>
          </Flex>

          <Flex
            className="Form-Blocks"
            flexDirection="column"
            alignItems="flex-start"
            mb="3rem"
          >
            <Flex
              className="Form-Title"
              flexDirection="row"
              alignItems="center"
              mb="15px"
            >
              <Text
                fontSize="xs"
                fontFamily="Poppins"
                fontWeight="500"
                color="#6598FF"
                mr="10px"
              >
                Step 3 of 4
              </Text>
              <Text fontSize="lg" fontFamily="Poppins" fontWeight="500">
                What type of aid do you require?
              </Text>
            </Flex>
            <Flex className="Form-Content" flexDirection="column">
              <Wrap {...group}>
                {["General", "Food", "Baby Items", "Flood Shelter"].map(
                  (value) => {
                    const radio = getRadioProps({ value });
                    return (
                      <RadioCard key={value} {...radio}>
                        {`${getIcon(value)} ${" "} ${value}`}
                      </RadioCard>
                    );
                  }
                )}
              </Wrap>
            </Flex>
          </Flex>

          <Flex
            className="Form-Blocks"
            flexDirection="column"
            alignItems="flex-start"
            mb="3rem"
          >
            <Flex
              className="Form-Title"
              flexDirection="row"
              alignItems="center"
              mb="15px"
            >
              <Text
                fontSize="xs"
                fontFamily="Poppins"
                fontWeight="500"
                color="#6598FF"
                mr="10px"
              >
                Step 4 of 4
              </Text>
              <Text fontSize="lg" fontFamily="Poppins" fontWeight="500">
                {t("report-form.enter-your-phone-number")}
              </Text>
            </Flex>
            <Flex
              className="Form-Content"
              w="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <InputGroup>
                <InputLeftAddon children="+60" />
                <Input
                  isInvalid={phoneNumberError ? true : false}
                  focusBorderColor={phoneNumberError ? "red.300" : ""}
                  type="tel"
                  placeholder={t("report-form.enter-phone-number")}
                  onChange={handlePhoneNumber}
                />
              </InputGroup>
            </Flex>
          </Flex>

          <Box textAlign="start" mb="1rem">
            <Text fontWeight="medium" mb="20px">
              {t("report-form.human-review-disclaimer")}
            </Text>

            <Text fontWeight="light" mb="20px">
              <Text mb="10px" fontWeight="medium">
                {t("report-form.terms-title")}
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  {t("report-form.term-1")}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  {t("report-form.term-2")}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  {t("report-form.term-3")}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.500" />
                  {t("report-form.term-4")}
                </ListItem>
                <ListItem>
                  <Box marginBottom="1rem">
                    {t("report-form.term-5")}{" "}
                    <Link href="/privacy-policy" target="_blank" color="blue">
                      {t("report-form.privacy-policy")}
                    </Link>
                    .
                  </Box>
                </ListItem>
              </List>
            </Text>
          </Box>

          <Center
            backgroundColor="#fa6255"
            borderRadius="8px"
            py="1rem"
            mb="100px"
            onClick={() => {
              reportFlag();
            }}
          >
            {submitLoading ? (
              <Spinner />
            ) : (
              <Text color="white" fontFamily="Montserrat" fontWeight="800">
                {t("report-form.submit-button")}
              </Text>
            )}
          </Center>
        </Flex>
      </Flex>
      <NavigationFooter activeTab={2} />
    </>
  );
};

export default ReportForm;
