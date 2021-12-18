import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialHandles() {
  return (
    <Box padding="3rem">
      <Container maxw="container.sm">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20} textAlign={"left"}>
          <VStack spacing={5}>
            <Heading as="h2" size={"xl"}>
              Join Our Communities
            </Heading>
            <Text>
              For <b>quick, realtime updates</b> and{" "}
              <b>thought-provoking conversations</b>, follow our social handles
              and join our Discord server, which is home to our entire
              community.
            </Text>
            <HStack spacing={10} justifyContent={"center"}>
              <Link href="https://www.facebook.com/sambalsosapp">
                <FontAwesomeIcon icon={faFacebook} color="blue" size="3x" />
              </Link>
              <Link href="https://www.instagram.com/sambal_sos/">
                <FontAwesomeIcon icon={faInstagram} color="red" size="3x" />
              </Link>
              <Link href="https://twitter.com/SambalSos">
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="dodgerblue"
                  size="3x"
                />
              </Link>
            </HStack>
          </VStack>
          <Box>
            <iframe
              src="https://discord.com/widget?id=859805317859377173&theme=dark"
              width="300"
              height="400"
              allowtransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
