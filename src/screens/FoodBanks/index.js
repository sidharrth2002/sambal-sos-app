import React, { useState } from 'react';
import { Box, Input, VStack, Text, Link, Alert } from '@chakra-ui/react';
import { foodbanks } from './foodbanks'
import NavigationFooter from '../../components/NavigationFooter';

const FoodBanks = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <Box>
        <Box padding="19px" maxWidth="500px" width="100%" margin="0 auto">
            <Input variant="filled" placeholder="Search for Food Banks" onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
            <Box marginTop="2rem">
            <Alert status="success" width="90%" maxWidth="500px" margin="20px auto" borderRadius="10px">
                This page will soon be updated through a crowdsourced Google Sheets file!
            </Alert>
                <VStack spacing="10">
                    {
                        foodbanks.filter(bank => {
                            return bank.name.toLowerCase().includes(searchQuery)
                        }).map(foodbank => {
                            return (
                                <Box padding="1rem" borderRadius="8px" boxShadow="0px 16px 40px rgba(209, 209, 209, 0.25)" maxWidth="500px" width="90%" textAlign="left">
                                    <Text>{foodbank.name}</Text>
                                    {
                                        foodbank.address.map(address => {
                                            return (
                                                <div>
                                                    <Text>{address.fullAddress}</Text>
                                                    <Text>Latitude: {address.coordinates.latitude}</Text>
                                                    <Text>Longitude: {address.coordinates.longitude}</Text>
                                                </div>
                                            )
                                        })
                                    }
                                    <Link>{foodbank.website}</Link>
                                </Box>
                            )
                        })
                    }
                </VStack>
            </Box>
        </Box>
        <NavigationFooter activeTab={1} />
        </Box>
    );
};

export default FoodBanks;