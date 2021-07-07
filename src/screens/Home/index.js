import React, { useEffect, useState } from 'react';
import { Center, Spinner, Image, Flex, Text, Button, Heading, Box, HStack, Divider } from '@chakra-ui/react';
import {
    useToast
} from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavigationFooter from '../../components/NavigationFooter';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    useJsApiLoader
} from '@react-google-maps/api'
import * as BDGraphics from '../../assets/';
import { foodbanks } from '../FoodBanks/foodbanks.js'

import * as BDAPI from '../../api/index'
import axios from 'axios';

require('dotenv').config()

const Home = () => {
    const history = useHistory();
    const accessToken = useSelector(state => state.auth.accessToken);
    const toast = useToast();
    const [center, setCenter] = useState({ lat: 3.145081052343874, lng: 101.70524773008304 })
    const [flags, setFlags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [map, setMap] = useState(null);
    const [libraries] = useState(['places']);

    const mapContainerStyle = {
        width: '100vw',
        height: '100vh'
    }
    const options = {
        disableDefaultUI: true,
        zoomControl: true
    }
    const {isLoaded, loadError} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}flag/getall`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(async (res) => {
                let flags = res.data
                flags.forEach(async(flag) => {
                    let newInfoBoxObj = {
                        flag_id: flag.id,
                        lat: flag.coordinates.coordinates[0],
                        lng: flag.coordinates.coordinates[1],
                        image: flag.image ?? "",
                        description: flag.description ?? ""
                    }

                    setFlags((oldFlags) => [
                        ...oldFlags,
                        newInfoBoxObj
                    ]);
                })
                setLoading(false)
            })
            .catch((err) => {
                toast({
                    title: "Failed to Load",
                    description: "Something went wrong on our side!",
                    status: "error",
                    duration: 10000000000000,
                    isClosable: false,
                    position: 'top'
                })
            })
    }, []);

    const InfoBoxTemplate = (latitude, longitude, image) => {
        let googleMapUrl = `http://maps.google.com/?q=${latitude},${longitude}`;
        return(
            <div style={{ backgroundColor:"white", padding:'10px', borderRadius: '8px', fontSize:'15px' }} >
                <a target="_blank" href={googleMapUrl} >
                    <p>Go to google maps</p>
                </a>

                <img width="125px" src={image} alt="image url" />
            </div>
        )
    }

    const toastOpener = () => {
        toast({
            title: "This feature is coming soon",
            status: "warning",
            duration: 1500,
            isClosable: true,
            position: 'top'
        })
    }

    return (
        <div>
            {
                ( loading || !isLoaded ) ?
                    <Center h="80vh" flexDirection="column" justifyContent="center" alignItems="center" >
                        <Spinner />
                    </Center>
                :
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} onLoad={onLoad} onUnmount={onUnmount} options={options} onClick={() => { setModalVisible(false) }} >
                        { flags.map((flag, index) => {
                            return (

                                <Marker
                                    key={index}
                                    position={{ lat: flag.lat, lng:flag.lng }}
                                    icon={{
                                        url: '/siren.svg',
                                        scaledSize: new window.google.maps.Size(25, 25),
                                        origin: new window.google.maps.Point(0,0),
                                        anchor: new window.google.maps.Point(13, 13)
                                    }}
                                    onClick={() => {
                                        setSelectedMarker(flag);
                                        setModalVisible(true)
                                    }}
                                />
                            );
                        })
                    }

                        { foodbanks.map((foodbank, index) =>
                            (<Marker
                                key={index}
                                position={{ lat: foodbank.address[0].coordinates.latitude, lng:foodbank.address[0].coordinates.longitude }}
                                icon={{
                                    url: '/groceries.svg',
                                    scaledSize: new window.google.maps.Size(18, 18),
                                    origin: new window.google.maps.Point(0,0),
                                    anchor: new window.google.maps.Point(9, 9)
                                }}
                                onClick={() => { window.open(`https://www.google.com.my/maps?daddr=${foodbank.address[0].coordinates.latitude},${foodbank.address[0].coordinates.longitude}`) }}
                            />))}
                    </GoogleMap>
            }
            <Flex flexDirection="column" position="absolute" top="15px" right="15px" borderRadius="8px" py="0.1rem" px="0.8rem" backgroundColor="white" boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)" justifyContent="center" alignItems="center" >
                <Flex flexDirection="row" justifyContent="flex-start" alignItems="center" w="100%" py="0.2rem" >
                    <Image src={BDGraphics.FoodBankIcon} alt="Food Bank Indicator" height="20px" width="20px" mr="10px" />
                    <Text fontFamily="Poppins" fontSize="11px" >Food Banks</Text>
                </Flex>
                <Divider mt="5px" />
                <Flex flexDirection="row" justifyContent="flex-start" alignItems="center" w="100%" py="0.2rem" >
                    <Image src={BDGraphics.SirenIcon} alt="SOS Indicator" height="25px" width="25px" mr="10px" />
                    <Text fontFamily="Poppins" fontSize="11px" >SOS</Text>
                </Flex>
            </Flex>
            <Flex borderTopRadius="15px" position="fixed" bottom="100px" width="100%" flexDirection="row" alignItems="center" justifyContent="space-around" backgroundColor="white" padding="20px 20px" >
                <Flex w="48%" justifyContent="center" backgroundColor="#E63946" borderRadius="8px" padding="15px 25px" color="white" fontFamily="Montserrat" fontWeight="600" onClick={() => history.push('/report-flag')}>
                    Ask for help
                </Flex>
                <Flex w="48%" justifyContent="center" alignItems="center" boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)" backgroundColor="white" borderRadius="10px" padding="15px 25px" color="black" fontFamily="Montserrat" fontWeight="500" onClick={() => history.push('/report-flag')} >
                    <Image mr="5px" src={ BDGraphics.FlagIcon } height="11px" />
                    Report SOS
                </Flex>
            </Flex>

            <Flex className="more-details-modal" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" h="55%" mh="55%" w="100%" position="fixed" left="50%" transform="translate(-50%, -50%)" top={ modalVisible ? '60%' : '200%' } backgroundColor="white" borderRadius="8px" padding="0.8rem" overflowY="scroll" transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)" transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)" >
                {
                    selectedMarker ?
                        <>
                            <Flex flexDirection="row" justifyContent="flex-start" alignContent="center" padding="1rem" >
                                <Heading> SOS Details </Heading>
                            </Flex>
                            <Center flexDirection="row" justifyContent="flex-start" alignContent="flex-start" padding="1rem">
                                <HStack h="100%" >
                                    <Box maxWidth="50%" px="0.5rem" py="0.5rem">
                                        <Image borderRadius="8px" src={ selectedMarker?.image } width="100%" maxWidth="200px" marginRight="1rem" />
                                    </Box>
                                    <Center flexDirection="column" justifyContent="flex-start" maxWidth="50%" h="100%" py="0.5rem">
                                        <Flex backgroundColor="#ff8c82" borderRadius="8px" w="100%" py="0.5rem" px="0.5rem" flexDirection="row" justifyContent="center" alignItems="center" marginBottom="1rem" onClick={() => { window.open(`https://www.google.com.my/maps?daddr=${selectedMarker.lat},${selectedMarker.lng}`) }} >
                                            <Image src={ BDGraphics.PinIcon } alt="" height="15px" />
                                            <Text fontSize="13px" >Go to this location</Text>
                                        </Flex>
                                        <Text textAlign="start" fontSize="12px" px="0.5rem">{ selectedMarker?.description }</Text>
                                    </Center>
                                </HStack>
                            </Center>
                            <Flex className="button-groups" flexDirection="row" justifyContent="space-around" alignContent="center" padding="1rem" w="100%" >
                                <Box w="100%" mr="10px" onClick={ () => { toastOpener() } }>
                                    <Button fontFamily="Montserrat" fontWeight="600" w="100%" padding="1.5rem" backgroundColor="#5CFFC5" >Up-Vote <Image ml="5px" src={ BDGraphics.UpvoteIcon } height="15px"/> </Button>
                                </Box>
                                <Box w="100%" onClick={ () => { toastOpener() } } >
                                    <Button fontFamily="Montserrat" fontWeight="600" w="100%" padding="1.5rem" backgroundColor="#FFECA7" >Supported <Image ml="5px" src={ BDGraphics.SupportedIcon } height="15px"/> </Button>
                                </Box>
                            </Flex>
                        </>
                    :
                        <Text>No Selected Marker</Text>
                }

            </Flex>

            <NavigationFooter activeTab={0} />
        </div>
    );
};

export default React.memo(Home);