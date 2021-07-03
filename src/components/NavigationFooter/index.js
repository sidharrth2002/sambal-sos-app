import React from 'react';
import { Grid, Center, Icon, VStack, Text } from "@chakra-ui/react"
import { AddIcon, WarningIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../features/counter/authSlice';
import firebase from "firebase/app";
import "firebase/firestore";
import '@firebase/auth';

const NavigationFooter = (props) => {
    const { activeTab } = props;
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <Grid templateColumns={`repeat(${isAuthenticated ? 4 : 3}, 1fr)`} gap={6} position="fixed" bottom="0" backgroundColor="white" width="100%" height="125px" shadow="lg" padding="1rem" zIndex="1001" >
            <Center w="100%" padding="5px 0" onClick={() => history.push('/home')}>
                <VStack>
                    <SearchIcon />
                    <Text fontWeight={activeTab === 0 ? "bold" : "normal"} fontSize="0.8rem" >Find Flags</Text>
                </VStack>
            </Center>
            <Center w="100%" padding="5px 0" onClick={() => history.push('/food-banks')}>
                <VStack>
                    <SunIcon />
                    <Text fontWeight={activeTab === 1 ? "bold" : "normal"} fontSize="0.8rem" >Food Banks</Text>
                </VStack>
            </Center>
            <Center w="100%" padding="5px 0" onClick={() => history.push('/report-flag')}>
                <VStack>
                    <AddIcon />
                    <Text fontWeight={activeTab === 2 ? "bold" : "normal"}fontSize="0.8rem" >Report a Flag</Text>
                </VStack>
            </Center>
            {
                isAuthenticated &&
                <Center w="100%" padding="5px 0" onClick={() => {
                    dispatch(LOGOUT());
                    history.push('/login')
                }}>
                    <VStack>
                        <WarningIcon />
                        <Text fontSize="0.8rem" >Logout</Text>
                    </VStack>
                </Center>
            }
        </Grid>
    );
};

NavigationFooter.propTypes = {
    activeTab: PropTypes.number
}

export default NavigationFooter;