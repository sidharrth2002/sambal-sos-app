import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Trans } from "react-i18next";

export default function HomepageFooter() {
  return (
    <Box textAlign={"center"} padding={"2rem"}>
      <Text>
        <Trans
          i18nKey={"auth.copyright"}
          components={{ heart: <FontAwesomeIcon icon={faHeart} color="red" /> }}
        />
      </Text>
    </Box>
  );
}
