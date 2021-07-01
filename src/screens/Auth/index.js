import React from 'react';

import * as BDGraphics from '../../assets/';
import { Image, Flex, Text, Button } from '@chakra-ui/react';
import firebase from "firebase/app";
import "firebase/firestore";
import '@firebase/auth';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../features/counter/authSlice';

const provider = new firebase.auth.GoogleAuthProvider();

const Auth = () => {
    const dispatch = useDispatch();
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

    return (
        <Flex justifyContent="center" alignItems="center" minHeight="80vh" width="100%" padding="1rem" >
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