import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Tweet } from "react-twitter-widgets";
import { useTranslation } from "react-i18next";

export default function TweetsTiles(props) {
  const { t } = useTranslation();

  return (
    <Box backgroundColor={"moccasin"}>
      <Box minHeight="80vh" padding="3rem">
        <Heading as="h2" size="xl" marginBottom="2rem">
          {t("auth.what-are-people-saying")}
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
          {props.tweetsList.map((tweet, index) => (
            <Tweet key={index} tweetId={tweet} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

TweetsTiles.propTypes = {
  tweetsList: PropTypes.array,
};
