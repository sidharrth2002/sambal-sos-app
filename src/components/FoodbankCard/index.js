import React from "react";
import {
  Button,
  Heading,
  Flex,
  VStack,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const FoodbankCard = (props) => {
  return (
    <VStack
      backgroundColor="white"
      textAlign="center"
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
        padding="1rem"
        w="100%"
      >
        <Heading> Food Bank Details </Heading>
        <CloseButton
          onClick={() => {
            props.setModalVisible(false);
            props.setFoodbankModalVisible(false);
          }}
        />
      </Flex>
      <VStack padding="0.5rem">
        <Heading as="h5" fontSize="md">
          {props?.name}
        </Heading>
        {props?.location?.address && (
          <Text>Address: {props?.location?.address}</Text>
        )}
        {props?.location?.operatingTime && (
          <Text>Operating Hours: {props?.location?.operatingTime}</Text>
        )}
        {props?.offer?.mustContactFirst && (
          <Text>
            Do you need to contact them first?:{" "}
            {props?.offer?.mustContactFirst ? "Yes" : "No"}
          </Text>
        )}
        {props?.contact?.phone?.length > 0 && (
          <Text>
            Phone:
            {props?.contact?.phone[0]}
          </Text>
        )}
        {props?.offer?.launchDate && (
          <Text>Launch Date: {props?.offer?.launchDate}</Text>
        )}
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
                `https://www.google.com.my/maps?daddr=${props?.location?.latitude},${props?.location?.longitude}`
              );
            }}
          >
            Go to location
          </Button>
          {/* {selectedFoodbank?.offer?.postUrl && (
          <Button
            onClick={() => {
              window.open(selectedFoodbank?.website);
            }}
          >
            Go to the website
          </Button>
        )} */}
        </VStack>
      </VStack>
    </VStack>
  );
};

FoodbankCard.propTypes = {
  setModalVisible: PropTypes.func,
  setFoodbankModalVisible: PropTypes.func,
  name: PropTypes.string,
  location: PropTypes.object,
  contact: PropTypes.object,
  offer: PropTypes.object,
};

export default FoodbankCard;
