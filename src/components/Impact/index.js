import React from "react";
import {
  Heading,
  Text,
  VStack,
  Container,
  Stack,
  Flex,
} from "@chakra-ui/react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Impact = () => {
  const { t } = useTranslation();

  return (
    <Flex
      padding="3rem"
      backgroundColor="white"
      minHeight={"40vh"}
      alignItems="center"
    >
      <Container maxw="container.sm" fontWeight={200}>
        <VStack spacing={5} alignItems={"center"}>
          <Heading as="h2" size={"xl"}>
            {t("auth.impact")}
          </Heading>
          <Stack
            spacing={10}
            direction={["column", "row"]}
            justifyContent={"center"}
          >
            <VStack spacing={1}>
              <Text fontSize="3rem" fontWeight={"bold"}>
                <CountUp start={0} end={28000} duration={5} delay={2} />
              </Text>
              <Text fontSize={["1rem", "1.5rem"]}>Users</Text>
            </VStack>
            <VStack spacing={1}>
              <Text fontSize="3rem" fontWeight={"bold"}>
                <CountUp start={0} end={1000} duration={5} delay={2} />
              </Text>
              <Text fontSize={["1rem", "1.5rem"]}>SOS Reports</Text>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Impact;
