import React, { useEffect, useState } from 'react';
import { Center, Spinner, Image, Flex, Text, Button, Heading} from '@chakra-ui/react';
import {
    useToast
} from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import "firebase/firestore";
import NavigationFooter from '../../components/NavigationFooter';
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from '@react-google-maps/api'
import mapStyles from '../../utils/googleMapsStyle'
import * as BDGraphics from '../../assets/';

import * as BDAPI from '../../api/index'
import axios from 'axios';

require('dotenv').config()

const Home = () => {
    const history = useHistory();
    const accessToken = useSelector(state => state.auth.accessToken);
    const toast = useToast()

    const [center, setCenter] = useState()
    const [flags, setFlags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [getCurrentLocationLoading, setGetCurrentLocationLoading] = useState(true);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [modalVisible, setModalVisible] = useState(false)

    const mapContainerStyle = {
        width: '100vw',
        height: '100vh'
    }
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true
    }
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    })


    const popupLocation = () => {
        function handlePermission() {
            navigator.permissions.query({name:'geolocation'}).then(function(result) {
                if (result.state === 'granted' || result.state === 'prompt') {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    setCenter({ lat: 3.145081052343874, lng: 101.70524773008304 })
                    setGetCurrentLocationLoading(false);
                }
            });
        }
        // function that retrieves the position
        function showPosition(position) {
            setCenter({
                lng: position.coords.longitude,
                lat: position.coords.latitude
            });
            setGetCurrentLocationLoading(false);
        }
        handlePermission();
    }

    useEffect(() => {
        popupLocation();
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

    return (
        <div>
            {
                ( loading || getCurrentLocationLoading ) ? 
                    <Center h="80vh" flexDirection="column" justifyContent="center" alignItems="center" >
                        <Spinner />
                    </Center>
                :
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} options={options} onClick={() => { setModalVisible(false) }} >
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
                                <Heading> Flags </Heading>
                            </Flex>
                            <Flex flexDirection="row" justifyContent="flex-start" alignContent="center" padding="1rem" >
                                <Flex flexDirection="row" alignItems="center" ><Image src={ BDGraphics.PinIcon } alt="" height="25px" mr="10px" /><Text textAlign="start" >{ selectedMarker.address } </Text></Flex>
                            </Flex>
                            <Flex className="button-groups" flexDirection="row" justifyContent="space-around" alignContent="center" padding="1rem" w="100%" >
                                <Button fontFamily="Montserrat" fontWeight="600" w="100%" mr="10px" padding="1.5rem" backgroundColor="#5CFFC5" >Up-Vote <Image ml="5px" src={ BDGraphics.UpvoteIcon } height="15px" /> </Button>
                                <Button fontFamily="Montserrat" fontWeight="600" w="100%" padding="1.5rem" backgroundColor="#FFECA7" >Supported <Image ml="5px" src={ BDGraphics.SupportedIcon } height="15px" /> </Button>
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