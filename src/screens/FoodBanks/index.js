import React, { useState } from 'react';
import { Box, Input, VStack, Text, Link, Alert, Divider, Center, Image } from '@chakra-ui/react';
import { foodbanks } from './foodbanks'
import NavigationFooter from '../../components/NavigationFooter';

import * as BDGraphics from '../../assets'

const FoodBanks = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <Box>
        <Box padding="19px" maxWidth="500px" width="100%" margin="0 auto">
            <Input variant="filled" placeholder="Search for Food Banks" onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
            <Box marginTop="2rem">
            <Alert status="success" fontSize="13px" width="90%" maxWidth="500px" margin="20px auto" borderRadius="10px">
                This page will soon be updated through a crowdsourced Google Sheets file!
            </Alert>
            <Alert status="warning" width="90%" maxWidth="500px" margin="20px auto" borderRadius="10px" flexDirection="column">
                <Box fontSize="13px" >
                    For now, if you know a foodbank that you would like the team to add to the app, please fill in the form here.
                </Box>
                <Center fontSize="11px" backgroundColor="#B2C8F5" borderRadius="8px" py="0.5rem" px="1rem" mt="20px" cursor="pointer" fontSize="13px" width="100%" onClick={() => { window.open(`https://docs.google.com/forms/d/e/1FAIpQLSftvjrOg72Vu2_z1qc1Hf1LsQrNGuvx2qSts_76lZ2dul5yHQ/viewform?usp=sf_link`) }}>
                    Go to form
                </Center>
            </Alert>
                <VStack spacing="10" mb="150px" >
                    {
                        foodbanks.filter(bank => {
                            return bank.name.toLowerCase().includes(searchQuery) || bank.address[0].fullAddress.toLowerCase().includes(searchQuery)
                        })
                        .map((foodbank, index) => {
                            return (
                                <Box key={index} padding="1rem" borderRadius="8px" boxShadow="0px 16px 40px rgba(209, 209, 209, 0.25)" maxWidth="500px" width="90%" textAlign="left">
                                    <Text fontFamily="Montserrat" fontWeight="600" >{foodbank.name}</Text>
                                    <Divider marginY="10px" />
                                    {
                                        foodbank.address.map((address, addressIndex) => {
                                            return (
                                                <div key={addressIndex}>
                                                    <Text>{address.fullAddress}</Text>
                                                </div>
                                            )
                                        })
                                    }
                                    <Link marginTop="5px" >{foodbank.website}</Link>

                                    <Center backgroundColor="#B2C8F5" borderRadius="8px" py="0.6rem" mt="20px" cursor="pointer" fontSize="13px" onClick={() => { window.open(`https://www.google.com.my/maps?daddr=${foodbank.address[0].coordinates.latitude},${foodbank.address[0].coordinates.longitude}`) }} >
                                        Open in google maps
                                        <Image src={ BDGraphics.GoogleMapsIcon } ml="10px" height="15px" />
                                    </Center>

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