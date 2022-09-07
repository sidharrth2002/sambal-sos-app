import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function SocialHandles() {
  const { t } = useTranslation();

  return (
    <Box padding="3rem">
      <Container maxw="container.sm">
        <SimpleGrid columns={{ sm: 1, md: 1 }} spacing={20} textAlign={"left"}>
          <VStack spacing={5}>
            <Heading as="h2" size={"xl"}>
              {t("auth.join-our-communities")}
            </Heading>
            <Text>
              <Trans
                i18nKey={"auth.communities-description"}
                components={{ bold: <strong /> }}
              />
            </Text>{" "}
            <HStack spacing={10} justifyContent={"center"}>
              <Link href="https://www.facebook.com/sambalsosapp">
                <FontAwesomeIcon icon={faFacebook} color="blue" size="3x" />
              </Link>
              <Link
                href="https:/ / www.instagram.com / sambal_sos /
             "
              >
                <FontAwesomeIcon icon={faInstagram} color="red" size="3x" />
              </Link>
              <Link href="https:/ / twitter.com / SambalSos ">
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="dodgerblue"
                  size="3x"
                />
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
