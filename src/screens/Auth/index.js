import React from 'react';

import * as BDGraphics from '../../assets/';
import { Image, Flex, Text, Button, Heading, Box, VStack, Center, Link } from '@chakra-ui/react';
import {
    useToast
} from "@chakra-ui/react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LOGIN } from '../../features/counter/authSlice';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import LoginMapAsset from '../../assets/png/login-map.png'

require('dotenv').config()

const Auth = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleGoogleLogin = async googleData => {
        if(googleData){

            await axios.post(`${process.env.REACT_APP_API_URL}auth/google`, {
                token: googleData.tokenId
            })
            .then((res) => {
                if(res.status === 201){
                    dispatch(
                        LOGIN(res.data)
                    );
                    history.push('/home');
                }else{
                }
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: "Failed to Load",
                    description: "Something went wrong on our side!",
                    status: "error",
                    duration: 10000000000000,
                    isClosable: false,
                    position: 'top'
                })
            })
        }else{
            console.log('error')
        }
    }

    if(isAuthenticated) {
        return <Redirect to="/home" />
    }

    return (
        <VStack>
        <Flex flexDirection="column" justifyContent="space-between" alignItems="center" minHeight="90vh" width="100%" padding="0.5rem" >
            <Flex flexDirection="row" justifyContent="center" alignItems="center" w="100%" >
                <img src={BDGraphics.SambalSosLogo} style={{ width: '75px', height: '75px' }} alt="Logo" />
                <Heading fontFamily="Montserrat" as="h1" fontWeight="5fr00" fontSize="25px">Sambal SOS</Heading>
            </Flex>
            <VStack marginBottom="0.5rem" spacing={5} width="100%" >
                <img mb="100px" mt="50px" src={LoginMapAsset} alt="Map" />

                <Flex w="100%" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" padding="1rem" >
                    <Heading fontFamily="Montserrat" as="h3" fontSize="xl" fontWeight="600" textAlign="start" >Crowdsourcing aid data across the nation</Heading>
                    <br></br>
                    <Box width="600px" maxWidth="80%">
                        <Text fontFamily="Montserrat" as="h3" fontSize="15px" textAlign="start">
                            If you're looking for the Bendera Putih app, this is the <b>rebranded</b> and <b>upgraded</b> version for a better user experience.
                        </Text>
                    </Box>
                </Flex>
            </VStack>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%" padding="1rem" margin="0 auto">
                <Box marginBottom="1rem">
                    <Text fontFamily="Montserrat">By logging in, you agree to our <Link href="/privacy-policy" target="_blank" color="blue">privacy policy</Link>. We only use this authentication to get your email and protect the app from unauthorised input.</Text>
                </Box>
                <GoogleLogin
                    clientId={ process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID }
                    render={renderProps => (
                        <Button backgroundColor="#ff8c82" color="white" w="100%" padding="28px 25px" mt="0px" onClick={ () => { renderProps.onClick()} } disabled={renderProps.disabled}>
                            <Flex borderRadius="8px" fontFamily="Poppins" width="100%" flexDirection="row" justifyContent="center" alignItems="center" position="relative">
                                <Image alt="Google Login Button Svg" src={BDGraphics.GoogleLoginIcon} height="18px" width="18px" mr="20px" />
                                <Text fontWeight="light" color="black" >Login with Google</Text>
                            </Flex>
                        </Button>
                    )}
                    autoLoad={false}
                    buttonText="Log in with Google"
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                    cookiePolicy={'single_host_origin'}
                />
            </Flex>
        </Flex>
        <Center bottom="0" padding="1rem">
            <Text fontFamily="Poppins" fontSize="0.7rem" as="i">
                Built by For the Malaysians.
                <br />
                For Malaysians. By Malaysians.
            </Text>
        </Center>
        </VStack>
    );
}

export default Auth;