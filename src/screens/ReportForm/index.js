import React, { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import NavigationFooter from '../../components/NavigationFooter';
import { Image, Flex, Text, Progress, Box, Textarea, Center, Spinner, Input, Tag } from '@chakra-ui/react';
import {
    Alert,
    AlertIcon,
    useToast
} from "@chakra-ui/react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import axios from 'axios';
import * as BDGraphics from '../../assets/';
import firebase from "firebase/app";
import "firebase/firestore";
import { useSelector } from 'react-redux'
require('dotenv').config()

const ReportForm = () => {
    const accessToken = useSelector(state => state.auth.accessToken);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const toast = useToast()

    /* States */
    const [remark, setRemark] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [progressBarValue, setProgressBarValue] = useState(5)
    const [locationLoading, setLocationLoading] = useState(false);

    const [useMyLocationEnable, setUseMyLocationEnable] = useState(true);
    const [searchLocationEnable, setSearchLocationEnable] = useState(true);

    const [submitLoading, setSubmitLoading] = useState(false)

    useEffect(() => {
        let value = 5
        if(acceptedFiles.length > 0)
            value = value + 25
        if(coordinates)
            value = value + 25
        if(remark)
            value = value + 45

        setProgressBarValue(value)
    }, [acceptedFiles, remark, coordinates])

    const popupLocation = () => {
        setLocationLoading(true);
        function handlePermission() {
            navigator.permissions.query({name:'geolocation'}).then(function(result) {
                if (result.state === 'granted' || result.state === 'prompt') {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    toast({
                        title: "We need your location!",
                        description: "Please enable it and try again",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
                    setLocationLoading(false);
                }
            });
        }

        // function that retrieves the position
        function showPosition(position) {
            setCoordinates({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            });
            setLocationLoading(false);
            setUseMyLocationEnable(false);
            setSearchLocationEnable(false);
        }
        handlePermission();
    }

    const handleRemark = (e) => {
        setRemark(e.target.value)
    }

    const handleImageUpload = async() => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
        let result = await axios.post('https://api.Cloudinary.com/v1_1/benderaputihapp/image/upload', formData)
        let secure_url = result.data.secure_url
        return secure_url;
    }

    const reportFlag = async() => {
        if(acceptedFiles && remark && coordinates){
            setSubmitLoading(true)
            let image_url = await handleImageUpload();
            axios.post(`${process.env.REACT_APP_API_URL}flag/createflag`, {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                description: remark,
                image: image_url
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then((res) => {
                    toast({
                        title: "Saved !",
                        description: "This flag is being reported",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                    setSubmitLoading(false) 
                    setTimeout(() => {
                        window.location = '/home'
                    }, 1500);
                })
                .catch((err) => {
                    toast({
                        title: "Failed to save!",
                        description: "Something went wrong on our side!",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
                    setSubmitLoading(false)
                })
        }else{
            toast({
                title: "Please fill in all the fields!",
                status: "warning",
                duration: 9000,
                isClosable: true,
            })
        }
    }

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                setCoordinates({
                    longitude: lat,
                    latitude: lng
                });
                setUseMyLocationEnable(false);
            })
            .catch((error) => {
                console.log(error);
            });
        };
    
    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;
        
            return (
                <Flex key={id} onClick={handleSelect(suggestion)} flexDirection="row" justifyContent="flex-start" alignItems="flex-start" mb="10px" padding="0.5rem" borderBottom="1px solid #EAEAEA" transition="all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080)" transitionTimingFunction="cubic-bezier(0.740, -0.175, 0.000, 1.080)" >
                    <Text w="100%" flexDirection="row" alignItems="center" textAlign="start" > {main_text} {secondary_text} </Text>
                </Flex>
            );
        });

    return (
        <>
            <Flex w="100%" h="100%" backgroundColor="#F5F5F5" flexDirection="column" >
                <Box className="navbar" backgroundColor="#FFFFFF" px="2.0rem" py="1.0rem" >
                    <Flex position="relative" flexDirection="row" justifyContent="center" alignItems="center" >
                        <Box onClick={ () => {window.location = '/home'} } className="back-button" position="absolute" left="5px" >
                            <Image h="25px" src={ BDGraphics.BackButtonIcon } alt="back button" />
                        </Box>
                        <Box className="screen-title" >
                            <Text fontFamily="Poppins" fontWeight="600" >REPORT A FLAG</Text>
                        </Box>
                        <Box className="info-button" position="absolute" right="5px">
                            <Image h="18px" src={ BDGraphics.InfoIcon } alt="back button" />
                        </Box>
                    </Flex>
                </Box>

                <Center padding="2rem" flexDirection="row" >
                    <Progress w="100%" borderRadius="50px" value={progressBarValue} size="md" colorScheme="linkedin" />
                </Center>
                    <Flex className="Flag-Form-Wrapper" flexDirection="column" backgroundColor="#FFFFFF" padding="2rem" borderRadius="20px" >
                        <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="4rem" >
                            <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                                <Text fontSize="xs" fontFamily="Poppins" fontWeight="500" color="#6598FF" mr="10px" >Step 1 of 3</Text>
                                <Text fontSize="lg" fontFamily="Poppins" fontWeight="500" >Upload an image</Text>
                            </Flex>
                            <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >
                                    {
                                        acceptedFiles.length > 0 ? 
                                        <Alert status="success">
                                            <AlertIcon />
                                            Image Approved! 😄
                                        </Alert>
                                        : 
                                        <Center w="100%" padding="40px 40px" borderRadius="8px" border="1px solid #DEDEDE"  >
                                            <Center flexDirection="column" {...getRootProps({className: 'dropzone'})}>
                                                <Image mb="20px" src={BDGraphics.ImageIcon} alt="Image" />
                                                <input {...getInputProps()} required />
                                                <Text color="#A7A7A7" fontSize="md"  >Add an Image containing the White Flag</Text>
                                            </Center>
                                        </Center>
                                    }
                                
                            </Flex>
                        </Flex>

                        <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="4rem" >
                            <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                                <Text fontSize="xs" fontFamily="Poppins" fontWeight="500" color="#6598FF" mr="10px" >Step 2 of 3</Text>
                                <Text fontSize="lg" fontFamily="Poppins" fontWeight="500" >Set the address</Text>
                            </Flex>
                            <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >
                                {
                                    coordinates ?
                                    <Alert status="success" mb="15px">
                                        <AlertIcon />
                                        Location has been set! 😄
                                    </Alert>
                                    :
                                    <Flex display={useMyLocationEnable ? 'block' : 'none'} flexDirection="row" justifyContent="center" alignItems="center" w="100%" h="100%" backgroundColor="#464646" borderRadius="5px" color="white" padding="1.0rem" onClick={() => popupLocation()}>
                                        {
                                            !locationLoading ?
                                                <Flex flexDirection="row" justifyContent="center" alignItems="center" >
                                                    <Image h="15px" w="15px" mr="0.9rem" src={ BDGraphics.LocationIcon } alt="Location Icon" />
                                                    Use My Location
                                                </Flex>
                                            :
                                            <Spinner />
                                        }
                                    </Flex>

                                }

                                <Text display={(useMyLocationEnable && searchLocationEnable) ? 'block' : 'none'} marginY="10px" fontFamily="Poppins" fontSize="13px" color="#5F5F5F" > Or </Text>

                                <Box display={searchLocationEnable ? 'block' : 'none'} w="100%" ref={ref}>
                                    <Input
                                        style={{ width:'100%' }}
                                        padding="1.5rem"
                                        value={value}
                                        onChange={handleInput}
                                        disabled={!ready}
                                        placeholder="Where are you going?"
                                    />
                                    {status === "OK" && <Box backgroundColor="#FFFFFF" w="100%" padding="1rem" border="1px solid #F5F5F5" mt="15px" borderRadius="8px" boxShadow="0px 16px 40px rgba(212, 212, 212, 0.25);" >{renderSuggestions()}</Box>}
                                </Box>
                            </Flex>
                        </Flex>

                        <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="3rem" >
                            <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                                <Text fontSize="xs" fontFamily="Poppins" fontWeight="500" color="#6598FF" mr="10px" >Step 3 of 3</Text>
                                <Text fontSize="lg" fontFamily="Poppins" fontWeight="500" >Remarks</Text>
                            </Flex>
                            <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >
                                <Textarea placeholder="Eg: What did you see?" onChange={ handleRemark } />
                            </Flex>
                        </Flex>

                        <Center backgroundColor="#3265CA" borderRadius="8px" py="1rem" mb="100px" onClick={ () => {reportFlag()} } >
                            {
                                submitLoading ? 
                                <Spinner />
                                :
                                <Text color="white" fontFamily="Montserrat" fontWeight="800" >Submit</Text>
                            }
                        </Center>

                    </Flex>
            </Flex>
            <NavigationFooter activeTab={2} />
        </>
    );
};

export default ReportForm;