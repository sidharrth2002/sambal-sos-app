/* eslint-disable no-unused-vars */
import React from "react";
import "./Auth.css";

// eslint-disable-next-line no-unused-vars
import * as BDGraphics from "../../assets/";
import {
  Image,
  Flex,
  Text,
  Button,
  Heading,
  Box,
  HStack,
  VStack,
  SimpleGrid,
  Center,
  Link,
} from "@chakra-ui/react";
import {
  useToast,
  Container,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { LOGIN } from "../../features/counter/authSlice";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import LoginMapAsset from "../../assets/png/login-map.png";

import "@fontsource/black-han-sans";
import "@fontsource/archivo-black";
import SocialHandles from "../../components/SocialHandles";
import TweetsTiles from "../../components/TweetsTiles";
import HomepageFooter from "../../components/HomepageFooter";
import OpenSource from "../../components/OpenSource";

require("dotenv").config();

const theme = extendTheme({
  fonts: {
    heading: "Archivo Black",
    body: "Montserrat, sans-serif",
  },
});

const Auth = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleGoogleLogin = async (googleData) => {
    if (googleData) {
      await axios
        .post(`${process.env.REACT_APP_API_URL}auth/google`, {
          token: googleData.tokenId,
        })
        .then((res) => {
          if (res.status === 201) {
            dispatch(LOGIN(res.data));
            history.push("/home");
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Failed to Load",
            description: "Something went wrong on our side!",
            status: "error",
            duration: 10,
            isClosable: false,
            position: "top",
          });
        });
    } else {
      console.log("error");
    }
  };

  // eslint-disable-next-line no-unused-vars
  const responseFacebook = async (facebookData) => {
    if (facebookData) {
      axios
        .post(`${process.env.REACT_APP_API_URL}auth/facebook`, facebookData)
        .then((res) => {
          if (res.status === 201) {
            dispatch(LOGIN(res.data));
            history.push("/home");
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Failed to Load",
            description: "Something went wrong on our side!",
            status: "error",
            duration: 10,
            isClosable: false,
            position: "top",
          });
        });
    } else {
      toast({
        title: "Failed to Load",
        description: "Something went wrong on our side!",
        status: "error",
        duration: 10,
        isClosable: false,
        position: "top",
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor={"whitesmoke"}>
        <Container maxw="container.sm">
          <Flex
            justifyContent="center"
            alignItems="center"
            minH="100vh"
            flexDirection="column"
          >
            <Image
              src={BDGraphics.SambalSosLogo}
              alt="Sambal Sos Logo"
              style={{ width: "300px" }}
            />
            <Heading as="h1" size={"2xl"} fontWeight={100}>
              {t("auth.title")}
            </Heading>
            <Text fontSize={{ sm: "1rem", md: "1.5rem" }}>
              {t("auth.tagline")}
            </Text>
            <VStack spacing={5} marginTop={6}>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
                render={(renderProps) => (
                  <Button
                    backgroundColor="#FFFFFF"
                    boxShadow="lg"
                    w="100%"
                    padding="28px 25px"
                    mt="0px"
                    onClick={() => {
                      renderProps.onClick();
                    }}
                    disabled={renderProps.disabled}
                  >
                    <Flex
                      borderRadius="8px"
                      fontFamily="Poppins"
                      width="100%"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      position="relative"
                    >
                      <Image
                        alt="Google Login Button Svg"
                        src={BDGraphics.GoogleLoginIcon}
                        height="25px"
                        width="25px"
                        mr="20px"
                      />
                      <Text fontWeight="light" color="black">
                        {t("auth.google-button")}
                      </Text>
                    </Flex>
                  </Button>
                )}
                autoLoad={false}
                buttonText={t("auth.google-button")}
                onSuccess={handleGoogleLogin}
                onFailure={handleGoogleLogin}
                cookiePolicy={"single_host_origin"}
                uxMode="redirect"
              />
              <FacebookLogin
                size="medium"
                autoLoad={false}
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                fields="name,email"
                callback={responseFacebook}
                isMobile={true}
                redirectUri="https://www.sambalsos.com/"
                disableMobileRedirect={false}
                render={(renderProps) => {
                  return (
                    <Button
                      backgroundColor="#5476b9"
                      _hover={null}
                      color="white"
                      boxShadow="lg"
                      outline="#1877F2"
                      w="100%"
                      padding="28px 25px"
                      mt="0px"
                      onClick={() => {
                        renderProps.onClick();
                      }}
                      disabled={renderProps.disabled}
                    >
                      <Flex
                        borderRadius="8px"
                        fontFamily="Poppins"
                        width="100%"
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                      >
                        <Image
                          alt="Facebook Login Button Svg"
                          src={BDGraphics.FacebookIcon}
                          height="25px"
                          width="25px"
                          mr="20px"
                        />
                        <Text fontWeight="light">
                          {t("auth.facebook-button")}
                        </Text>
                      </Flex>
                    </Button>
                  );
                }}
              />
              <Box marginBottom="1rem" width={300}>
                <Text>
                  <Trans i18nKey="login-disclaimer">
                    {t("auth.login-disclaimer-1")}{" "}
                    <Link href="/privacy-policy" target="_blank" color="blue">
                      {t("auth.privacy-policy")}.
                    </Link>
                  </Trans>
                </Text>
              </Box>
            </VStack>
          </Flex>
        </Container>
      </Box>
      <SocialHandles />

      <TweetsTiles
        tweetsList={[
          "1411995238302818306",
          "1412007023319818241",
          "1412685947213254657",
          "1412677312097648643",
          // "1412927823883300867",
          // "1412343154544578569",
          // "1412663539903483909",
        ]}
      />
      <OpenSource />
      <HomepageFooter />
    </ChakraProvider>
  );
};

export default Auth;
