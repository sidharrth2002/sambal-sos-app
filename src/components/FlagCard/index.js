import React from "react";
import PropTypes from "prop-types";
import {
  VStack,
  Flex,
  Text,
  Heading,
  CloseButton,
  Center,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
import * as BDGraphics from "../../assets";
import Moment from "react-moment";

const FlagCard = (props) => {
  const {
    setModalVisible,
    setFoodbankModalVisible,
    phonenumber,
    createdAt,
    description,
    latitude,
    longitude,
  } = props;

  return (
    <VStack
      backgroundColor="white"
      width="80%"
      maxWidth={"500px"}
      rounded="lg"
      padding="1rem"
      spacing={5}
      shadow="lg"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        rounded="lg"
        textAlign={"center"}
      >
        {/* Dirty way of spacing, don't do this */}
        <Text> </Text>
        <Heading> SOS Details </Heading>
        <CloseButton
          onClick={() => {
            setModalVisible(false);
            setFoodbankModalVisible(false);
          }}
        />
      </Flex>
      <Center
        flexDirection="row"
        // justifyContent="flex-start"
        // alignContent="flex-start"
        // padding="1rem"
      >
        <HStack h="100%">
          <Center
            flexDirection="column"
            justifyContent="flex-start"
            h="100%"
            py="0.5rem"
            mr="1.5rem"
          >
            <Button
              colorScheme="teal"
              borderRadius="8px"
              w="100%"
              mb="5px"
              py="0.5rem"
              // px="0.5rem"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              marginBottom="1rem"
              onClick={() => {
                window.open(
                  `https://www.google.com.my/maps?daddr=${latitude},${longitude}`
                );
              }}
            >
              <Image
                src={BDGraphics.PinIcon}
                color="white"
                alt=""
                height="15px"
                mr="10px"
              />
              <Text>Go to location</Text>
            </Button>
            {phonenumber ? (
              <Button
                borderRadius="8px"
                w="100%"
                py="0.5rem"
                px="0.5rem"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                marginBottom="1rem"
                onClick={() => {
                  window.open(`tel:${phonenumber}`);
                }}
              >
                <Image
                  src={BDGraphics.PhoneIcon}
                  alt=""
                  height="15px"
                  mr="15px"
                />
                <Text>Call Phone</Text>
              </Button>
            ) : (
              <></>
            )}
            {createdAt ? (
              <Flex
                borderRadius="8px"
                w="100%"
                px="0.2rem"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                marginBottom="0.5rem"
              >
                <Image
                  src={BDGraphics.ClockIcon}
                  alt=""
                  height="12px"
                  mr="5px"
                />
                <Text fontSize="1rem" color="#2F2F2F">
                  <Moment format="YYYY/MM/DD HH:MM" local>
                    {createdAt}
                  </Moment>
                </Text>
              </Flex>
            ) : (
              <></>
            )}
            <Text textAlign="start" px="0.5rem" maxW="100%">
              {description}
            </Text>
          </Center>
        </HStack>
      </Center>
    </VStack>
  );
};

FlagCard.propTypes = {
  setModalVisible: PropTypes.func,
  setFoodbankModalVisible: PropTypes.func,
  phonenumber: PropTypes.string,
  createdAt: PropTypes.string,
  description: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default FlagCard;
