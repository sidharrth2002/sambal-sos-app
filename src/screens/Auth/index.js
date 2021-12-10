/* eslint-disable no-unused-vars */
import React from "react";

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
      <Container maxw="container.sm">
        <Flex
          justifyContent="center"
          alignItems="center"
          minH="90vh"
          flexDirection="column"
        >
          <Image
            src={BDGraphics.SambalSosLogo}
            alt="Sambal Sos Logo"
            style={{ width: "300px" }}
          />
          <Heading fontSize="4rem">Sambal SOS</Heading>
          <Text fontSize="1.5rem">
            Crowdsourcing aid data across the nation
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
              render={(renderProps) => (
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
                    <Text fontWeight="light">{t("auth.facebook-button")}</Text>
                  </Flex>
                </Button>
              )}
            />
          </VStack>
        </Flex>

        <Flex
          minHeight="100vh"
          justifyContent="center"
          alignItems="center"
          padding="2rem"
          flexDirection="column"
        >
          <Heading size="2xl" marginBottom="2rem">
            Sambal SOS in the news
          </Heading>

          <SimpleGrid columns={2} spacing={5}>
            <Box background="#f1f2f4" rounded="1rem" padding="2rem">
              <VStack spacing={5}>
                <VStack spacing={3}>
                  <Heading size="md">The Star</Heading>
                  <Text>
                    #BenderaPutih: Malaysian uni students create app to locate
                    food banks, white flags in four days
                  </Text>
                </VStack>
                <Image
                  src={BDGraphics.MalayMailSambalSOS}
                  rounded="1rem"
                  maxWidth="200px"
                />
              </VStack>
            </Box>
            <Box background="#f1f2f4" rounded="1rem" padding="2rem">
              <VStack spacing={5}>
                <VStack spacing={3}>
                  <Heading size="md">Malaysiakini</Heading>
                  <Text>
                    Three youths create app to help people find those in need
                  </Text>
                </VStack>
                <Image
                  src={
                    "https://icf.newscdn.net/publisher-c1a3f893382d2b2f8a9aa22a654d9c97/2020/05/233861c905ad09cca65feac6c45f4095.jpg=s800"
                  }
                  rounded="1rem"
                  maxWidth="200px"
                />
              </VStack>
            </Box>
          </SimpleGrid>
        </Flex>

        <Flex
          minHeight="100vh"
          justifyContent="center"
          alignItems="center"
          padding="2rem"
          flexDirection="column"
        >
          <Heading size="2xl" marginBottom="2rem">
            What are people saying?
          </Heading>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Auth;
