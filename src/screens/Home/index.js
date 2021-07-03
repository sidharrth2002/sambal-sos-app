import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Center, Spinner, Image, Flex, Text, Button, Heading, Box } from '@chakra-ui/react';
import firebase from "firebase/app";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import "firebase/firestore";
import NavigationFooter from '../../components/NavigationFooter';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'
import mapStyles from '../../utils/googleMapsStyle'
import { ReactBingmaps } from 'react-bingmaps';
import * as BDGraphics from '../../assets/';
import { flatMapDepth } from 'lodash';

import * as BDAPI from '../../api/index'
import axios from 'axios';

require('dotenv').config()

const Home = () => {
    const history = useHistory();
    const accessToken = useSelector(state => state.auth.accessToken);
    const [center, setCenter] = useState({ lat: 5.317300222083933, lng: 100.46853021610015 })
    const [flags, setFlags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [modalVisible, setModalVisible] = useState(false)

    const libraries = ["places"];
    const mapContainerStyle = {
        width: '100vw',
        height: '100vh'
    }
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true
    }
    const tryFlags = [
        {
            lat: 5.317300222083933, 
            lng: 100.46853021610015
        },
        {
            lat: 5.917300222083933, 
            lng: 101.46853021610015
        }
    ]
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    })

    useEffect(() => {
        // firebase
        // .firestore()
        // .collection('flags')
        // .get()
        // .then(snapshot => {
        //     snapshot.forEach(async(doc) => {
        //         let flag = doc.data();
        //         console.log(flag)
        //         /* for bing maps */
        //         /* let newInfoBoxObj = {
        //             "location":[flag.coordinates._lat, flag.coordinates._long],
        //             "infoboxOption": {
        //                 htmlContent: InfoBoxTemplate(flag.coordinates._lat, flag.coordinates._long, flag.image)
        //             },
        //             "addHandler":"mousedown",
        //             "pushPinOption":{  },
        //             "infoboxAddHandler": {"type" : "click"},
        //             "pushPinAddHandler": {"type" : "click"}
        //         } */

        //         /* for google maps */
        //         let newInfoBoxObj = {
        //             lat: flag.coordinates._lat,
        //             lng: flag.coordinates._long,
        //             address: await BDAPI.latlngToAddress(flag.coordinates._lat, flag.coordinates._long),
        //             image: flag.image
        //         }

        //         setFlags((oldFlags) => [
        //             ...oldFlags,
        //             newInfoBoxObj
        //         ]);
        //     })
        //     setLoading(false)
        // })
        axios.get(`http://localhost:5000/api/flag/getall`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(async (res) => {
                console.log(res.data)
                let flags = res.data
                flags.forEach(async(flag) => {
                    let newInfoBoxObj = {
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

                    setLoading(false)
                })
            })
            .catch((err) => {
                console.log(err)
            })

        
    }, []);

    useEffect(() => {
        console.log(flags)
    }, [flags])

    useEffect(() => {
        console.log(selectedMarker)
    }, [selectedMarker])

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
                            {/* <ReactBingmaps 
                        id="bingmaps" 
                        bingmapKey={process.env.REACT_APP_BINGMAP_KEY}
                        zoom={15} 
                        center={[5.319607673855811, 100.47342256534424]} 
                        pushPins={[
                            {
                                "location":[5.319607673855811, 100.47342256534424], "option":{ color: 'red' }, "addHandler": {"type" : "click" }
                            },
                        ]}
                    infoboxesWithPushPins={flags}                       
                    /> */}
            {
                loading ? 
                    <Center>
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
                            {/* <Flex flexDirection="row" justifyContent="flex-start" alignContent="center" padding="1rem" overflowX="scroll" w="100% !important" >
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" alignContent="center" mr="15px" >
                                    <Image src={ BDGraphics.RiceIcon } alt="Rice Icon" height="50px" />
                                    <Text>Count 2</Text>
                                </Flex>
                            </Flex> */}
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