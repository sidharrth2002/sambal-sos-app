import React from 'react';

import * as BDGraphics from '../../assets/';
import { Image, Flex, Text, Button, Heading, Box } from '@chakra-ui/react';
import firebase from "firebase/app";
import "firebase/firestore";
import '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LOGIN } from '../../features/counter/authSlice';
import { useHistory } from 'react-router-dom';

const provider = new firebase.auth.GoogleAuthProvider();

const Auth = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const authHandler = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            dispatch(
                LOGIN(user)
            );
            history.push('/home');
            
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
    }

    if(isAuthenticated) {
        return <Redirect to="/home" />
    }

    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" minHeight="80vh" width="100%" padding="1rem" >
            <Image src={BDGraphics.Logo} maxWidth="150px" width="80%" marginBottom="2rem" />
            <Box marginBottom="4rem">
                <Heading fontFamily="Montserrat" as="h1" fontWeight="5fr00" marginBottom="1rem">The Bendera Putih App</Heading>
                <Heading fontFamily="Montserrat" as="h3" fontSize="2xl" fontWeight="300">Now In Beta!</Heading>
            </Box>
            <Flex maxWidth="600px" flexDirection="column" justifyContent="center" alignItems="center" width="300px" maxWidth="90%" margin="0 auto">
                <Button backgroundColor="#B2C8F5" padding="28px 25px" onClick={authHandler}>
                    <Flex borderRadius="8px" fontFamily="Poppins" width="100%" flexDirection="row" justifyContent="center" alignItems="center" position="relative">
                        <Image alt="Google Login Button Svg" src={BDGraphics.GoogleLoginIcon} height="18px" width="18px" mr="20px" />
                        <Text fontWeight="light">Login with Google</Text>
                    </Flex>
                </Button>
            </Flex>
        </Flex>
    );
}

export default Auth;