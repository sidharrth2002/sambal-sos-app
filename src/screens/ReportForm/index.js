import React, { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import NavigationFooter from '../../components/NavigationFooter';
import { Image, Flex, Text, Progress, Box, Textarea, Center, Spinner } from '@chakra-ui/react';
import {
    Alert,
    AlertIcon,
    useToast
} from "@chakra-ui/react"
import axios from 'axios';
import * as BDGraphics from '../../assets/';
import firebase from "firebase/app";
import "firebase/firestore";

require('dotenv').config()

const ReportForm = () => {
    const currentUser = firebase.auth().currentUser;
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const toast = useToast()

    /* States */
    const [remark, setRemark] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [locationLoading, setLocationLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false)

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
        }
        handlePermission();
    }

    const handleRemark = (e) => {
        setRemark(e.target.value)
    }

    const handleImageUpload = async() => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('upload_preset', 'fcx6d1d2');
        let result = await axios.post('https://api.Cloudinary.com/v1_1/benderaputihapp/image/upload', formData)
        let secure_url = result.data.secure_url
        return secure_url;
    }

    const reportFlag = async() => {
        if(acceptedFiles && remark && coordinates){
            setSubmitLoading(true)
            let image_url = await handleImageUpload();
            firebase
                .firestore()
                .collection("flags")
                .add({
                    coordinates: new firebase.firestore.GeoPoint(coordinates.latitude, coordinates.longitude),
                    description: `${remark}`,
                    image: `${image_url}`,
                    userId: currentUser.uid
                })
                .then(() => {
                    toast({
                        title: "Saved !",
                        description: "This flag is being reported",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                    setSubmitLoading(false)
                })
                .catch(err => {
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

    return (
        <>
            <Flex w="100%" h="100%" backgroundColor="#F5F5F5" flexDirection="column" >
                <Box className="navbar" backgroundColor="#FFFFFF" px="2.0rem" py="1.0rem" >
                    <Flex position="relative" flexDirection="row" justifyContent="center" alignItems="center" >
                        <Box className="back-button" position="absolute" left="5px" >
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
                    <Progress w="100%" borderRadius="50px" value={20} size="md" colorScheme="linkedin" />
                </Center>
                    <Flex className="Flag-Form-Wrapper" flexDirection="column" backgroundColor="#FFFFFF" padding="2rem" borderRadius="20px" >
                        <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="4rem" >
                            <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                                <Text fontSize="xs" fontFamily="Poppins" fontWeight="500" color="#6598FF" mr="10px" >Step 1 of 3</Text>
                                <Text fontSize="lg" fontFamily="Poppins" fontWeight="500" >Upload an image</Text>
                            </Flex>
                            <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >
                                <Center w="100%" padding="40px 40px" borderRadius="8px" border="1px solid #B2C8F5"  >
                                    <Center flexDirection="column" {...getRootProps({className: 'dropzone'})}>
                                        <Image mb="20px" src={BDGraphics.ImageIcon} alt="Image" />
                                        <input {...getInputProps()} required />
                                        <Text color="#A7A7A7" fontSize="md"  >Add an Image containing the White Flag</Text>
                                    </Center>
                                </Center>
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
                                    <Alert status="success">
                                        <AlertIcon />
                                        Location has been set! 😄
                                    </Alert>
                                    :
                                    <Flex flexDirection="row" justifyContent="center" alignItems="center" w="100%" h="100%" backgroundColor="#464646" borderRadius="5px" color="white" padding="1.0rem" onClick={() => popupLocation()}>
                                        {
                                            !locationLoading ?
                                            <>
                                                <Image h="15px" w="15px" mr="0.9rem" src={ BDGraphics.LocationIcon } alt="Location Icon" />
                                                Use My Location
                                            </>
                                            :
                                            <Spinner />
                                        }
                                    </Flex>
                                }
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

                        <Center backgroundColor="#B2C8F5" borderRadius="8px" py="1rem" mb="100px" onClick={ () => {reportFlag()} } >
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