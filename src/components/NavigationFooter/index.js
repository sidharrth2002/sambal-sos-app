import React from 'react';
import { Grid, Center, Icon, VStack, Text, Image } from "@chakra-ui/react"
import { AddIcon, WarningIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../features/counter/authSlice';
import firebase from "firebase/app";
import "firebase/firestore";
import '@firebase/auth';

import * as BDGraphics from '../../assets';
import { useTranslation } from 'react-i18next';

const NavigationFooter = (props) => {
    const { activeTab } = props;
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const { t } = useTranslation();

    return (
        <Grid templateColumns={`repeat(${isAuthenticated ? 4 : 3}, 1fr)`} gap={6} position="fixed" bottom="0" backgroundColor="white" width="100%" height="100px" shadow="lg" padding="1rem" zIndex="1001" >
            <Center w="100%" padding="5px 0" onClick={() => history.push('/home')}>
                <VStack>
                    <SearchIcon height="25px" />
                    <Text fontSize="11px" fontWeight={activeTab === 0 ? "bold" : "normal"}>{t('navigation.find-sos')}</Text>
                </VStack>
            </Center>
            <Center w="100%" padding="5px 0" onClick={() => history.push('/food-banks')}>
                <VStack>
                    <Image src={BDGraphics.GroceriesOutlineIcon} height="25px" />
                    <Text fontSize="11px" fontWeight={activeTab === 1 ? "bold" : "normal"}>{t('navigation.food-banks')}</Text>
                </VStack>
            </Center>
            <Center w="100%" padding="5px 0" onClick={() => history.push('/report-flag')}>
                <VStack>
                    <AddIcon height="25px" />
                    <Text fontSize="11px" fontWeight={activeTab === 2 ? "bold" : "normal"}>{t('navigation.report-sos')}</Text>
                </VStack>
            </Center>
            {
                isAuthenticated &&
                <Center w="100%" padding="5px 0" onClick={() => {
                    dispatch(LOGOUT());
                    history.push('/login')
                }}>
                    <VStack>
                    <Image src={BDGraphics.LogoutIcon} height="20px" />
                        <Text fontSize="0.8rem">{t('navigation.log-out')}</Text>
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