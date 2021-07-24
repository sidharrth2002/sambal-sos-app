import React, { useEffect, useState } from "react";
import {
  Center,
  Spinner,
  Image,
  Flex,
  Text,
  Button,
  Heading,
  Box,
  HStack,
  Divider,
  VStack,
  CloseButton,
  Checkbox,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationFooter from "../../components/NavigationFooter";
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from "@react-google-maps/api";
import Moment from "react-moment";
import mapStyles from "../../utils/googleMapsStyle";
import * as BDGraphics from "../../assets/";
import foodbanks from "../FoodBanks/foodbanks.json";

import axios from "axios";
import { useTranslation } from "react-i18next";

require("dotenv").config();

const Home = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const toast = useToast();
  const [center, setCenter] = useState({
    lat: 3.145081052343874,
    lng: 101.70524773008304,
  });
  const [zoomLevel, setZoomLevel] = useState(8);
  const [flags, setFlags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedFoodbank, setSelectedFoodbank] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [foodbankModalVisible, setFoodbankModalVisible] = useState(false);
  const [showFoodbanks, setShowFoodBanks] = useState(true);
  const [showSOS, setShowSOS] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  const [libraries] = useState(["places"]);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
    // grab current location and set center
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setCenter(pos);
        setZoomLevel(14);
      }
    );
  }, []);

  // eslint-disable-next-line no-unused-vars
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const focusMap = () => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setCenter(pos);
        setZoomLevel(12);
      }
    );
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}flag/getall`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(async (res) => {
        let flags = res.data;
        flags.forEach(async (flag) => {
          let newInfoBoxObj = {
            flag_id: flag.id,
            lat: flag.coordinates.coordinates[0],
            lng: flag.coordinates.coordinates[1],
            description: flag.description ?? "",
            phonenumber: flag.phonenumber ?? "",
            createdAt: flag.createdAt,
          };

          let imageURL;

          // we don't have enough money so we have to switch between buckets
          if (flag.image !== null) {
            imageURL =
              "https://minio-server.sambalsos.com:9000/reports/" +
              flag.image.split("/")[flag.image.split("/").length - 1];
          } else {
            imageURL = flag.minioimage;
          }

          newInfoBoxObj.image = imageURL;

          setFlags((oldFlags) => [...oldFlags, newInfoBoxObj]);
        });
        setLoading(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        toast({
          title: "Failed to Load",
          description: "Something went wrong on our side!",
          status: "error",
          duration: 10000000000000,
          isClosable: false,
          position: "top",
        });
      });
  }, []);

  return (
    <div>
      {loading || !isLoaded ? (
        <Center
          h="80vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />
        </Center>
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={zoomLevel}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
          onClick={() => {
            setModalVisible(false);
            setFoodbankModalVisible(false);
          }}
        >
          <MarkerClusterer maxZoom={12} ignoreHidden={true}>
            {(clusterer) => {
              const sosMarkers = flags.map((flag, index) => {
                return (
                  <Marker
                    visible={showSOS}
                    key={index}
                    clusterer={clusterer}
                    position={{
                      lat: parseFloat(flag.lat),
                      lng: parseFloat(flag.lng),
                    }}
                    icon={{
                      url: BDGraphics.SirenIconPNG,
                      scaledSize: new window.google.maps.Size(30, 30),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                    }}
                    options={{
                      optimized: true,
                    }}
                    onVisibleChanged={() => {
                      if (index + 1 === flags.length) {
                        clusterer.repaint();
                      }
                    }}
                    onClick={() => {
                      setSelectedMarker(flag);
                      setFoodbankModalVisible(false);
                      setModalVisible(true);
                    }}
                  />
                );
              });
              const foodbankMarkers = foodbanks.map((foodbank, index) => (
                <Marker
                  clusterer={clusterer}
                  visible={showFoodbanks}
                  key={index + flags.length + 1}
                  position={{
                    lat: parseFloat(foodbank.address[0].coordinates.latitude),
                    lng: parseFloat(foodbank.address[0].coordinates.longitude),
                  }}
                  icon={{
                    url: BDGraphics.FoodBankIconPNG,
                    scaledSize: new window.google.maps.Size(20, 20),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(10, 10),
                  }}
                  options={{
                    optimized: true,
                  }}
                  onVisibleChanged={() => {
                    if (index + 1 === foodbanks.length) {
                      clusterer.repaint();
                    }
                  }}
                  onClick={() => {
                    setSelectedFoodbank(foodbank);
                    setModalVisible(false);
                    setFoodbankModalVisible(true);
                  }}
                />
              ));

              return sosMarkers.concat(foodbankMarkers);
            }}
          </MarkerClusterer>
          <Marker position={{ lat: center.lat, lng: center.lng }} />
        </GoogleMap>
      )}
      <Flex
        flexDirection="column"
        position="absolute"
        top="15px"
        left="15px"
        borderRadius="50%"
        height="50px"
        width="50px"
        padding="10px"
        textAlign="center"
        backgroundColor="white"
        boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)"
        justifyContent="center"
        alignItems="center"
        onClick={focusMap}
      >
        <Image
          src={BDGraphics.CurrentLocationIcon}
          alt="Current Location"
          maxW="90%"
        />
      </Flex>
      <Flex
        flexDirection="column"
        position="absolute"
        top="15px"
        right="15px"
        borderRadius="8px"
        py="0.1rem"
        px="0.8rem"
        backgroundColor="white"
        boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)"
        justifyContent="center"
        alignItems="center"
      >
        <HStack
          justifyContent="flex-start"
          alignItems="center"
          w="100%"
          py="0.2rem"
        >
          <Checkbox
            isChecked={showFoodbanks}
            onChange={(e) => setShowFoodBanks(e.target.checked)}
          />
          <Image
            src={BDGraphics.FoodBankIcon}
            alt="Food Bank Indicator"
            height="20px"
            width="20px"
            mr="10px"
          />
          <Text fontFamily="Poppins" fontSize="11px">
            {t("home.food-banks")}
          </Text>
        </HStack>
        <Divider mt="5px" />
        <HStack
          justifyContent="flex-start"
          alignItems="center"
          w="100%"
          py="0.2rem"
        >
          <Checkbox
            isChecked={showSOS}
            onChange={(e) => setShowSOS(e.target.checked)}
          />
          <Image
            src={BDGraphics.SirenIcon}
            alt="SOS Indicator"
            height="25px"
            width="25px"
            mr="10px"
          />
          <Text fontFamily="Poppins" fontSize="11px">
            {t("home.sos")}
          </Text>
        </HStack>
      </Flex>
      <Flex
        borderTopRadius="15px"
        position="fixed"
        bottom="100px"
        width="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        backgroundColor="white"
        padding="20px 20px"
      >
        <Flex
          w="48%"
          justifyContent="center"
          backgroundColor="#E63946"
          borderRadius="8px"
          padding="15px 25px"
          color="white"
          fontFamily="Montserrat"
          fontWeight="600"
          onClick={() => history.push("/report-flag")}
        >
          {t("home.ask-for-help")}
        </Flex>
        <Flex
          w="48%"
          justifyContent="center"
          alignItems="center"
          boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)"
          backgroundColor="white"
          borderRadius="10px"
          padding="15px 25px"
          color="black"
          fontFamily="Montserrat"
          fontWeight="500"
          onClick={() => history.push("/report-flag")}
        >
          <Image mr="5px" src={BDGraphics.FlagIcon} height="11px" />
          {t("home.report-sos")}
        </Flex>
      </Flex>

      <Flex
        className="more-details-modal"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        h="55%"
        mh="55%"
        w="100%"
        position="fixed"
        left="50%"
        transform="translate(-50%, -50%)"
        top={modalVisible ? "60%" : "200%"}
        backgroundColor="white"
        borderRadius="8px"
        padding="0.8rem"
        overflowY="scroll"
        transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)"
        transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)"
      >
        {selectedMarker ? (
          <>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="1rem"
              w="100%"
            >
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
              justifyContent="flex-start"
              alignContent="flex-start"
              padding="1rem"
            >
              <HStack h="100%">
                <Box maxWidth="50%" px="0.5rem" py="0.5rem" h="100%">
                  <Image
                    borderRadius="8px"
                    src={selectedMarker?.image}
                    width="100%"
                    maxWidth="200px"
                    marginRight="1rem"
                  />
                </Box>
                <Center
                  flexDirection="column"
                  justifyContent="flex-start"
                  maxWidth="50%"
                  h="100%"
                  py="0.5rem"
                >
                  <Flex
                    backgroundColor="#ff8c82"
                    borderRadius="8px"
                    w="100%"
                    mb="5px"
                    py="0.5rem"
                    px="0.5rem"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    marginBottom="1rem"
                    onClick={() => {
                      window.open(
                        `https://www.google.com.my/maps?daddr=${selectedMarker.lat},${selectedMarker.lng}`
                      );
                    }}
                  >
                    <Image
                      src={BDGraphics.PinIcon}
                      alt=""
                      height="15px"
                      mr="10px"
                    />
                    <Text fontSize="13px">Go to location</Text>
                  </Flex>
                  {selectedMarker.phonenumber ? (
                    <Flex
                      backgroundColor="#EAEAEA"
                      borderRadius="8px"
                      w="100%"
                      py="0.5rem"
                      px="0.5rem"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      marginBottom="1rem"
                      onClick={() => {
                        window.open(`tel:${selectedMarker.phonenumber}`);
                      }}
                    >
                      <Image
                        src={BDGraphics.PhoneIcon}
                        alt=""
                        height="15px"
                        mr="15px"
                      />
                      <Text fontSize="13px">Call Phone</Text>
                    </Flex>
                  ) : (
                    <></>
                  )}
                  {selectedMarker.createdAt ? (
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
                      <Text fontSize="9px" color="#2F2F2F">
                        <Moment format="YYYY/MM/DD HH:MM" local>
                          {selectedMarker.createdAt}
                        </Moment>
                      </Text>
                    </Flex>
                  ) : (
                    <></>
                  )}
                  <Text
                    textAlign="start"
                    fontSize="12px"
                    px="0.5rem"
                    maxW="100%"
                  >
                    {selectedMarker?.description}
                  </Text>
                </Center>
              </HStack>
            </Center>
          </>
        ) : (
          <Text>No Selected Marker</Text>
        )}
      </Flex>

      <Flex
        className="foodbank-details-modal"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        h="55%"
        mh="55%"
        w="100%"
        position="fixed"
        left="50%"
        transform="translate(-50%, -50%)"
        top={foodbankModalVisible ? "60%" : "200%"}
        backgroundColor="white"
        borderRadius="8px"
        padding="0.8rem"
        overflowY="scroll"
        transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)"
        transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)"
      >
        {selectedFoodbank ? (
          <VStack textAlign="center" width="100%" spacing={5}>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding="1rem"
              w="100%"
            >
              <Heading> Food Banks Details </Heading>
              <CloseButton
                onClick={() => {
                  setModalVisible(false);
                  setFoodbankModalVisible(false);
                }}
              />
            </Flex>
            <VStack padding="0.5rem">
              <Heading as="h5" fontSize="md">
                {selectedFoodbank?.name}
              </Heading>
              <Text>{selectedFoodbank?.address[0]?.fullAddress}</Text>
              <VStack
                flexDirection="column"
                justifyContent="flex-start"
                maxWidth="70%"
                h="100%"
                py="0.5rem"
              >
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    window.open(
                      `https://www.google.com.my/maps?daddr=${selectedFoodbank?.address[0]?.coordinates?.latitude},${selectedFoodbank?.address[0]?.coordinates?.longitude}`
                    );
                  }}
                >
                  Go to location
                </Button>
                {selectedFoodbank?.website !== "" && (
                  <Button
                    onClick={() => {
                      window.open(selectedFoodbank?.website);
                    }}
                  >
                    Go to the website
                  </Button>
                )}
              </VStack>
            </VStack>
          </VStack>
        ) : (
          <Text>No Selected Marker</Text>
        )}
      </Flex>

      <NavigationFooter activeTab={0} />
    </div>
  );
};

export default React.memo(Home);
