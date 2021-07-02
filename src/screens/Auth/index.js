import React from 'react';

import * as BDGraphics from '../../assets/';
import { Image, Flex, Text, Button, Heading, Box } from '@chakra-ui/react';
import firebase from "firebase/app";
import "firebase/firestore";
import '@firebase/auth';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LOGIN } from '../../features/counter/authSlice';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const provider = new firebase.auth.GoogleAuthProvider();

require('dotenv').config()

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
            const token = credential.accessToken;
            const user = result.user;
            dispatch(
                LOGIN(user)
            );
            history.push('/home');
    
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
        });
    }

    const handleGoogleLogin = async googleData => {
        console.log(googleData)
        if(googleData){
            
            await axios.post(`http://localhost:5000/api/auth/google`, {
                token: googleData.tokenId
            })
            .then((res) => {
                if(res.status === 201){
                    dispatch(
                        LOGIN(res.data)
                    )
                }else{
                }
            })
            .catch((err) => {
                /* console.log(err) */
            })
        }else{
            console.log('error')
        }
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

                <GoogleLogin
                    clientId={ process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID }
                    render={renderProps => (
                        <Button backgroundColor="#B2C8F5" padding="28px 25px" onClick={ () => { renderProps.onClick()} } disabled={renderProps.disabled}>
                            <Flex borderRadius="8px" fontFamily="Poppins" width="100%" flexDirection="row" justifyContent="center" alignItems="center" position="relative">
                                <Image alt="Google Login Button Svg" src={BDGraphics.GoogleLoginIcon} height="18px" width="18px" mr="20px" />
                                <Text fontWeight="light">Login with Google (with nodejs)</Text>
                            </Flex>
                        </Button>
                    )}
                    autoLoad={false}
                    buttonText="Log in with Google"
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                    cookiePolicy={'single_host_origin'}
                />

                <Button backgroundColor="#B2C8F5" padding="28px 25px" onClick={authHandler}>
                    <Flex borderRadius="8px" fontFamily="Poppins" width="100%" flexDirection="row" justifyContent="center" alignItems="center" position="relative">
                        <Image alt="Google Login Button Svg" src={BDGraphics.GoogleLoginIcon} height="18px" width="18px" mr="20px" />
                        <Text fontWeight="light">Login with Google (with firebase)</Text>
                    </Flex>
                </Button>
            </Flex>
        </Flex>
    );
}

export default Auth;