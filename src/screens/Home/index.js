import React, { useEffect, useState } from 'react';
import { Center, Spinner, Image, Flex, Text, Button, Heading, Box, HStack } from '@chakra-ui/react';
import {
    useToast
} from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "firebase/firestore";
import NavigationFooter from '../../components/NavigationFooter';
import {
    GoogleMap,
    useLoadScript,
    Marker,
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
    const [modalVisible, setModalVisible] = useState(false)

    const mapContainerStyle = {
        width: '100vw',
        height: '100vh'
    }
    const options = {
        disableDefaultUI: true,
        zoomControl: true
    }
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    })

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
                        address: await BDAPI.latlngToAddress(flag.coordinates.coordinates[0], flag.coordinates.coordinates[1]),
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
                console.log(err)
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
            isClosable: false,
            position: 'top'
        })
    }

    return (
        <div>
            {
                ( loading ) ?
                    <Center h="80vh" flexDirection="column" justifyContent="center" alignItems="center" >
                        <Spinner />
                    </Center>
                :
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options} onClick={() => { setModalVisible(false) }} >
                        { flags.map((flag) =>
                            (<Marker
                                key={flag.image}
                                position={{ lat: flag.lat, lng:flag.lng }}
                                icon={{
                                    url: '/white-flag.svg',
                                    scaledSize: new window.google.maps.Size(35, 35),
                                    origin: new window.google.maps.Point(0,0),
                                    anchor: new window.google.maps.Point(18, 18)
                                }}
                                onClick={() => {
                                    setSelectedMarker(flag);
                                    setModalVisible(true)
                                }}
                            />))}

                        { foodbanks.map((foodbank) =>
                            (<Marker
                                position={{ lat: foodbank.address[0].coordinates.latitude, lng:foodbank.address[0].coordinates.longitude }}
                                icon={{
                                    url: '/groceries.svg',
                                    scaledSize: new window.google.maps.Size(35, 35),
                                    origin: new window.google.maps.Point(0,0),
                                    anchor: new window.google.maps.Point(18, 18)
                                }}
                                onClick={() => { window.open(`https://www.google.com.my/maps?daddr=${foodbank.address[0].coordinates.latitude},${foodbank.address[0].coordinates.longitude}`) }}
                            />))}
                    </GoogleMap>
            }
            <Flex borderTopRadius="15px" position="fixed" bottom="125px" width="100%" flexDirection="row" alignItems="center" justifyContent="space-around" backgroundColor="white" padding="20px 20px" >
                <Flex w="48%" justifyContent="center" backgroundColor="#E63946" borderRadius="8px" padding="15px 25px" color="white" fontFamily="Montserrat" fontWeight="600" >
                    Ask for help
                </Flex>
                <Flex w="48%" justifyContent="center" alignItems="center" boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)" backgroundColor="white" borderRadius="10px" padding="15px 25px" color="black" fontFamily="Montserrat" fontWeight="500" onClick={() => history.push('/report-flag')} >
                    <Image mr="5px" src={ BDGraphics.FlagIcon } height="11px" />
                    Report Flag
                </Flex>
            </Flex>

            <Flex className="more-details-modal" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" h="55%" w="100%" position="fixed" left="50%" transform="translate(-50%, -50%)" top={ modalVisible ? '60%' : '200%' } backgroundColor="white" borderRadius="8px" padding="1.5rem" transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)" transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)" >
                {
                    selectedMarker ?
                        <>
                            <Flex flexDirection="row" justifyContent="flex-start" alignContent="center" padding="1rem" >
                                <Heading> Flag Details </Heading>
                            </Flex>
                            <Center flexDirection="row" justifyContent="flex-start" alignContent="center" padding="0.2rem">
                                <HStack>
                                    <Box maxWidth="50%">
                                        <Image src={ selectedMarker?.image } width="170px" maxWidth="100%" marginRight="1rem" />
                                    </Box>
                                    <Center flexDirection="column" maxWidth="50%">
                                        <Image src={ BDGraphics.PinIcon } alt="" height="25px" mr="10px" marginBottom="1rem"/>
                                        <Text fontSize="sm">{ selectedMarker?.description }</Text>
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

export default Home;