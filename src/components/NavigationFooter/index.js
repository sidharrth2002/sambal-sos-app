import React from 'react';
import { Grid, Center, Icon, VStack, Text } from "@chakra-ui/react"
import { AddIcon, WarningIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavigationFooter = (props) => {
    const { activeTab } = props;
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <Grid templateColumns={`repeat(${isAuthenticated ? 4 : 3}, 1fr)`} gap={6} position="fixed" bottom="0" backgroundColor="white" width="100%" shadow="lg" padding="1rem">
            <Center w="100%" h="30" padding="5px 0" onClick={() => history.push('/home')}>
                <VStack>
                    <SearchIcon />
                    <Text>Find Flags</Text>
                </VStack>
            </Center>
            <Center w="100%" h="30" padding="5px 0" onClick={() => history.push('/foodbanks')}>
                <VStack>
                    <SunIcon />
                    <Text>Food Banks</Text>
                </VStack>
            </Center>
            <Center w="100%" h="30" padding="5px 0" onClick={() => history.push('/report-flag')}>
                <VStack>
                    <AddIcon />
                    <Text>Report a Flag</Text>
                </VStack>
            </Center>
            {
                isAuthenticated &&
                <Center w="100%" h="30" padding="5px 0" onClick={() => history.push('/logout')}>
                    <VStack>
                        <WarningIcon />
                        <Text>Logout</Text>
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