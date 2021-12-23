/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Badge,
  HStack,
  VStack,
  Text,
  Button,
  Wrap,
  Image,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { getIcon } from "../../functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

import * as BDGraphics from "../../assets/";

const FlagInlineCard = (props) => {
  const { t } = useTranslation();

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" shadow={"lg"}>
      <VStack p="6" spacing={5} alignItems="start">
        <Box
          width={"100%"}
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {getIcon(props.type.toUpperCase())}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            textTransform="uppercase"
            ml="2"
          >
            {t(`report-form.types-of-aid.${props.type.toLowerCase()}`)}
          </Box>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            textTransform="uppercase"
            ml="2"
          >
            {`${props.distance} km`}
          </Box>
        </Box>
        <Box>{props.description}</Box>
        <Grid
          templateRows={"repeat(2, 1fr)"}
          templateColumns={"repeat(2, 1fr)"}
          gap={5}
          alignItems="center"
        >
          <GridItem colSpan={1}>
            <Button
              minWidth="100%"
              backgroundColor="teal"
              onClick={() => {
                window.open(
                  `https://api.whatsapp.com/send?phone=${props.phonenumber}`
                );
              }}
            >
              <HStack spacing={2} alignItems="center" padding={"10px"}>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
                <Text fontWeight={"semibold"} color="white">
                  WhatsApp
                </Text>
              </HStack>
            </Button>
          </GridItem>
          <GridItem colSpan={1}>
            <Button
              minWidth="100%"
              onClick={() => {
                window.open(`tel:${props.phonenumber.replace(/\s/g, "")}`);
              }}
            >
              <HStack spacing={2} alignItems="center" padding={"10px"}>
                <Image src={BDGraphics.PhoneIcon} alt="" height="15px" />
                <Text fontWeight={"semibold"}>Call</Text>
              </HStack>
            </Button>
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              width="100%"
              onClick={() => {
                window.open(
                  `https://www.google.com.my/maps?daddr=${props.latitude},${props.longitude}`
                );
              }}
            >
              <HStack spacing={2} alignItems="center" padding={"10px"}>
                <Image src={BDGraphics.PinIcon} alt="" height="15px" />
                <Text>Navigate</Text>
              </HStack>
            </Button>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

FlagInlineCard.propTypes = {
  description: PropTypes.string,
  phonenumber: PropTypes.string,
  type: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  distance: PropTypes.number,
};

export default FlagInlineCard;
