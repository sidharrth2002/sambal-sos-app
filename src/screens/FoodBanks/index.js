import React, { useState } from 'react';
import { Box, Input, VStack, Text, Link, Alert, Divider, Center, Image } from '@chakra-ui/react';
import { foodbanks } from './foodbanks'
import NavigationFooter from '../../components/NavigationFooter';
import InfiniteScroll from 'react-infinite-scroll-component'

import * as BDGraphics from '../../assets'
import { useTranslation } from 'react-i18next';

const FoodBanks = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [foodBankList, setFoodBankList] = useState(foodbanks.slice(0, 5))
    const [paginateCount, setPaginateCount] = useState(5)
    const [hasMoreFB, setHasMoreFB] = useState(true)
    const loadMoreFB = () => {
            if (foodBankList.length === foodbanks.length) {
                setHasMoreFB(false)
                return
            }

            setTimeout(() => {
                setPaginateCount(paginateCount + 5)
                setFoodBankList([...foodBankList, ...foodbanks.slice(paginateCount, paginateCount+5)])
            }, 2000)
        }
    const { t } = useTranslation();
    return (
        <Box>
        <Box padding="19px" maxWidth="500px" width="100%" margin="0 auto">
            <Input variant="filled" placeholder="Search for Food Banks" onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
            <Box marginTop="2rem">
            <Alert status="success" fontSize="13px" width="90%" maxWidth="500px" margin="20px auto" borderRadius="10px">
                {t("foodbanks.page-update-notice")}
            </Alert>
            <Alert status="warning" width="90%" maxWidth="500px" margin="20px auto" borderRadius="10px" flexDirection="column">
                <Box fontSize="13px" >
                    {t("foodbanks.add-foodbank-form")}
                </Box>
                <Center fontSize="11px" backgroundColor="#B2C8F5" borderRadius="8px" py="0.5rem" px="1rem" mt="20px" cursor="pointer" fontSize="13px" width="100%" onClick={() => { window.open(`https://docs.google.com/forms/d/e/1FAIpQLSftvjrOg72Vu2_z1qc1Hf1LsQrNGuvx2qSts_76lZ2dul5yHQ/viewform?usp=sf_link`) }}>
                    {t("foodbanks.go-to-form")}
                </Center>
            </Alert>
                <VStack spacing="10" mb="150px" >
                    
                        <InfiniteScroll
                            dataLength={foodBankList.length}
                            next={loadMoreFB}
                            hasMore={hasMoreFB}
                            loader={
                                <img src="/loader.gif" alt="loading spinner" style={{margin: "auto"}}/>
                            }
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }>
                        {
                        foodBankList.filter(bank => {
                            return bank.name.toLowerCase().includes(searchQuery) || bank.address[0].fullAddress.toLowerCase().includes(searchQuery)
                        })
                        .map((foodbank, index) => {
                            return (
                                <Box key={index} padding="1rem" borderRadius="8px" boxShadow="0px 16px 40px rgba(209, 209, 209, 0.25)" maxWidth="500px" width="90%" textAlign="center">
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
                                    <Link marginTop="5px" href={foodbank.website} target="_blank">{foodbank.website}</Link>

                                    <Center backgroundColor="#B2C8F5" borderRadius="8px" py="0.6rem" mt="20px" cursor="pointer" fontSize="13px" onClick={() => { window.open(`https://www.google.com.my/maps?daddr=${foodbank.address[0].coordinates.latitude},${foodbank.address[0].coordinates.longitude}`) }} >
                                        {t("foodbanks.open-in-google-maps")}
                                        <Image src={ BDGraphics.GoogleMapsIcon } ml="10px" height="15px" />
                                    </Center>

                                </Box>
                            )
                        })
                    }

                        </InfiniteScroll>
    
                </VStack>
            </Box>
        </Box>
        <NavigationFooter activeTab={1} />
        </Box>
    );
};

export default FoodBanks;