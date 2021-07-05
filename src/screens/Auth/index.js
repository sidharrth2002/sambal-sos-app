import React from 'react';

import * as BDGraphics from '../../assets/';
import { Image, Flex, Text, Button, Heading, Box, VStack, Center } from '@chakra-ui/react';
import {
    useToast
} from "@chakra-ui/react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LOGIN } from '../../features/counter/authSlice';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

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
        <Flex flexDirection="column" justifyContent="center" alignItems="center" minHeight="80vh" width="100%" padding="1rem" >
            <img src={BDGraphics.SambalSosLogo} style={{ maxWidth: '150px', width: '80%', height: '80%', marginBottom: '2rem' }} alt="Logo" />
            <VStack marginBottom="2rem" spacing={5} width="100%">
                <Heading fontFamily="Montserrat" as="h1" fontWeight="5fr00">Sambal SOS</Heading>
                <Heading fontFamily="Montserrat" as="h3" fontSize="xl" fontWeight="300">Crowdsourcing aid data across the nation</Heading>
                <br></br>
                <Box width="600px" maxWidth="80%">
                    <Text fontFamily="Montserrat" as="h3" fontSize="15px">
                        If you're looking for the Bendera Putih app, this is the <b>rebranded</b> and <b>upgraded</b> version for a better user experience.
                    </Text>
                </Box>
            </VStack>
            <Flex maxWidth="600px" flexDirection="column" justifyContent="center" alignItems="center" width="300px" maxWidth="90%" margin="0 auto">

                <GoogleLogin
                    clientId={ process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID }
                    render={renderProps => (
                        <Button backgroundColor="#ff8c82" color="white" padding="28px 25px" mt="35px" onClick={ () => { renderProps.onClick()} } disabled={renderProps.disabled}>
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
        <Center position="fixed" bottom="0" padding="1rem">
            <Text fontFamily="Poppins" fontSize="0.8rem" as="i">
                Built by For the Malaysians.
                <br />
                For Malaysians. By Malaysians.
            </Text>
        </Center>
        </VStack>
    );
}

export default Auth;