import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function HomepageFooter() {
  return (
    <Box textAlign={"center"} padding={"2rem"}>
      <Text>
        All Rights Reserved | Built with{" "}
        <FontAwesomeIcon icon={faHeart} color="red" /> by the Sambal SOS team.
      </Text>
    </Box>
  );
}
