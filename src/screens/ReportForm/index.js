import React, { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';

import { Image, Flex, Text, Progress, Box, Textarea, Center } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../features/counter/authSlice';

import * as BDGraphics from '../../assets/';

const ReportForm = () => {
    const [coords, setCoords] = useState(null);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    useEffect(() => {
        console.log('Inside use effect');
        function handlePermission() {
            navigator.permissions.query({name:'geolocation'}).then(function(result) {
                if (result.state == 'granted') {
                } else if (result.state == 'prompt') {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else if (result.state == 'denied') {
                }
                result.onchange = function() {
                    console.log(result.state);
                }
            });
        }

        function getLocation() {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("Geo Location not supported by browser");
            }
        }
          //function that retrieves the position
        function showPosition(position) {
        var location = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        }
        setCoords(location);
        console.log(location)
    }
          //request for location
    handlePermission();
    }, [])

    return (
        <>
            <Box>
                { coords ? JSON.stringify(coords) : "" }
            </Box>
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
                                    <input {...getInputProps()} />
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
                            <Flex flexDirection="row" justifyContent="center" alignItems="center" w="100%" h="100%" backgroundColor="#464646" borderRadius="5px" color="white" padding="1.0rem" >
                                <Image h="15px" w="15px" mr="0.9rem" src={ BDGraphics.LocationIcon } alt="Location Icon" />
                                Use My Location
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="3rem" >
                        <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                            <Text fontSize="xs" fontFamily="Poppins" fontWeight="500" color="#6598FF" mr="10px" >Step 3 of 3</Text>
                            <Text fontSize="lg" fontFamily="Poppins" fontWeight="500" >Remarks</Text>
                            <Text fontSize="md" fontFamily="Poppins" fontWeight="500" > (Optional) </Text>
                        </Flex>
                        <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >
                            <Textarea placeholder="Eg: What did you see?" />
                        </Flex>
                    </Flex>

                    <Center backgroundColor="#B2C8F5" borderRadius="8px" py="1rem" >
                        <Text color="white" fontFamily="Montserrat" fontWeight="800" >Submit</Text>
                    </Center>

                </Flex>
            </Flex>
        </>
    );
};

export default ReportForm;