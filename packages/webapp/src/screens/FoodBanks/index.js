import React, { useState } from "react";
import {
  Box,
  Input,
  VStack,
  Text,
  Divider,
  Center,
  Image,
  Button,
} from "@chakra-ui/react";
import foodbanks from "./foodbanks.json";
import NavigationFooter from "../../components/NavigationFooter";

import * as BDGraphics from "../../assets";
import { useTranslation } from "react-i18next";

const FoodBanks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();
  return (
    <Box>
      <Box padding="19px" maxWidth="500px" width="100%" margin="0 auto">
        <Input
          variant="filled"
          placeholder="Search for Food Banks"
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <Box marginTop="2rem">
          <VStack spacing="10" mb="150px">
            {foodbanks.resources
              .filter((bank) => {
                if (bank.name && bank.location.address) {
                  return true;
                } else {
                  return false;
                }
              })
              .filter((bank) => {
                return (
                  bank?.name.toLowerCase().includes(searchQuery) ||
                  bank?.location?.address.toLowerCase().includes(searchQuery)
                );
              })
              .map((foodbank, index) => {
                return (
                  <Box
                    key={index}
                    padding="1rem"
                    borderRadius="8px"
                    boxShadow="0px 16px 40px rgba(209, 209, 209, 0.25)"
                    maxWidth="500px"
                    width="90%"
                    textAlign="left"
                  >
                    <Text fontFamily="Montserrat" fontWeight="600">
                      {foodbank?.name}
                    </Text>
                    <Divider marginY="10px" />
                    {<Text>{foodbank?.location?.address}</Text>}
                    {foodbank?.location?.operatingTime && (
                      <Text>
                        Operating Hours: {foodbank?.location?.operatingTime}
                      </Text>
                    )}
                    <Center>
                      <Button
                        width="100%"
                        colorScheme="teal"
                        marginTop="1rem"
                        onClick={() => window.open(foodbank?.offer?.postUrl)}
                      >
                        Go To Website
                      </Button>
                    </Center>

                    {/* <Link
                      marginTop="5px"
                      href={foodbank?.offer?.postUrl}
                      target="_blank"
                    >
                      {foodbank?.offer?.postUrl}
                    </Link> */}
                    {foodbank?.location?.latitude &&
                      foodbank?.location?.longitude && (
                        <Button
                          width="100%"
                          borderRadius="8px"
                          py="0.6rem"
                          mt="1rem"
                          onClick={() => {
                            window.open(
                              `https://www.google.com.my/maps?daddr=${foodbank.location.latitude},${foodbank.location.longitude}`
                            );
                          }}
                        >
                          {t("foodbanks.open-in-google-maps")}
                          <Image
                            src={BDGraphics.GoogleMapsIcon}
                            ml="10px"
                            height="15px"
                          />
                        </Button>
                      )}
                  </Box>
                );
              })}
          </VStack>
        </Box>
      </Box>
      <NavigationFooter activeTab={1} />
    </Box>
  );
};

export default FoodBanks;
