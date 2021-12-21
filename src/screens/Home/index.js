/* eslint-disable no-unused-vars */
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
  Input,
  useDisclosure,
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
import FoodbankCard from "../../components/FoodbankCard";
import FlagCard from "../../components/FlagCard";
import Popup from "../../components/Popup";
import SideDrawer from "../../components/SideDrawer";
import { getDistance } from "geolib";

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
  // const [foodbanksLoading, setFoodbanksLoading] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedFoodbank, setSelectedFoodbank] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [foodbankModalVisible, setFoodbankModalVisible] = useState(false);
  const [showFoodbanks, setShowFoodBanks] = useState(true);
  const [showSOS, setShowSOS] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  const [libraries] = useState(["places"]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        setZoomLevel(15);
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
        map.panTo(new window.google.maps.LatLng(lat, lng));
        map.setZoom(15);
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
            type: flag.type,
            distance:
              getDistance(
                {
                  latitude: center.lat,
                  longitude: center.lng,
                },
                {
                  latitude: flag.coordinates.coordinates[0],
                  longitude: flag.coordinates.coordinates[1],
                }
              ) / 1000,
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
          <MarkerClusterer maxZoom={15} ignoreHidden={true} color="red">
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
              return sosMarkers;
            }}
          </MarkerClusterer>

          <MarkerClusterer
            maxZoom={15}
            ignoreHidden={true}
            defaultStyles={["default"]}
          >
            {(clusterer) => {
              const foodbankMarkers = foodbanks.resources.map(
                (foodbank, index) => {
                  if (
                    foodbank?.location?.latitude &&
                    foodbank?.location?.longitude
                  ) {
                    return (
                      <Marker
                        clusterer={clusterer}
                        visible={showFoodbanks}
                        key={index + flags.length + 1}
                        position={{
                          lat: parseFloat(foodbank.location.latitude),
                          lng: parseFloat(foodbank.location.longitude),
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
                    );
                  }
                }
              );
              return foodbankMarkers;
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
          onClick={onOpen}
        >
          <Image mr="5px" src={BDGraphics.FlagIcon} height="11px" />
          View SOS in List
        </Flex>
      </Flex>

      <Popup
        className="more-details-modal"
        visible={modalVisible}
        positionFromTop="75%"
      >
        {selectedMarker ? (
          <FlagCard
            setModalVisible={setModalVisible}
            setFoodbankModalVisible={setFoodbankModalVisible}
            phonenumber={selectedMarker?.phonenumber}
            createdAt={selectedMarker?.createdAt}
            description={selectedMarker?.description}
            latitude={selectedMarker?.lat}
            longitude={selectedMarker?.lng}
          />
        ) : (
          <Text>No Selected Marker</Text>
        )}
      </Popup>

      <Popup
        className="foodbank-details-modal"
        visible={foodbankModalVisible}
        positionFromTop="60%"
      >
        {selectedFoodbank ? (
          <FoodbankCard
            setModalVisible={setModalVisible}
            setFoodbankModalVisible={setFoodbankModalVisible}
            name={selectedFoodbank?.name}
            location={selectedFoodbank?.location}
            contact={selectedFoodbank?.contact}
            offer={selectedFoodbank?.offer}
          />
        ) : (
          <Text>No Selected Marker</Text>
        )}
      </Popup>

      <NavigationFooter activeTab={0} />
      <SideDrawer
        flags={flags}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        currentLocation={center}
      />
    </div>
  );
};

export default React.memo(Home);
