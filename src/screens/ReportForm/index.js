import React, { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';

import { Image, Flex, Text, Button, Box, Textarea } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../features/counter/authSlice';

import * as BDGraphics from '../../assets/';

const ReportForm = () => {
    const [coords, setCoords] = useState(null);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    useEffect(() => {
        console.log('Inside use effect');
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
    getLocation();
    }, [])

    return (
        <>
            <Box>
                { coords ? JSON.stringify(coords) : "" }
            </Box>
            <Flex w="100%" h="100%" backgroundColor="#F5F5F5" flexDirection="column" >
                <Box className="navbar" backgroundColor="#FFFFFF" px="2.0rem" py="1.0rem" >
                    <Flex flexDirection="row" justifyContent="space-between" alignItems="center" >
                        <Box className="back-button" >
                            <Image src={ BDGraphics.BackButtonIcon } alt="back button" />
                        </Box>
                        <Box className="screen-title" >
                            <Text>Report A Flag</Text>
                        </Box>
                        <Box>
                            <Image src={ BDGraphics.InfoIcon } alt="back button" />
                        </Box>
                    </Flex>
                </Box>

                <br></br><br></br>

                <Flex className="Flag-Form-Wrapper" flexDirection="column" backgroundColor="#FFFFFF" padding="2rem" borderRadius="20px" >
                    <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="5rem" >
                        <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                            <Text fontSize="sm" mr="10px" >Step 1 of 3</Text>
                            <Text fontSize="lg" >Upload an image of the flag</Text>
                        </Flex>
                        <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >

{/* width: 100%;
    padding: 40px 40px;
    border-radius: 8px;
    border: 1px dashed ${Colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */}

                            <Box w="100%" padding="40px 40px" borderRadius="8px">
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                            </Box>
                        </Flex>
                    </Flex>

                    <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="5rem" >
                        <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                            <Text fontSize="sm" mr="10px" >Step 2 of 3</Text>
                            <Text fontSize="lg" >Set the address</Text>
                        </Flex>
                        <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >
                            <Flex flexDirection="row" justifyContent="center" alignItems="center" w="100%" h="100%" backgroundColor="#464646" borderRadius="5px" color="white" padding="1.0rem" >
                                Use My Location
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex className="Form-Blocks" flexDirection="column" alignItems="flex-start" mb="5rem" >
                        <Flex className="Form-Title" flexDirection="row" alignItems="center" mb="15px" >
                            <Text fontSize="sm" marginRight="10px" >Step 3 of 3</Text>
                            <Text fontSize="lg" >Remarks</Text>
                            <Text fontSize="md" > (Optional) </Text>
                        </Flex>
                        <Flex className="Form-Content" w="100%" flexDirection="column" justifyContent="center" alignItems="center" >
                            <Textarea placeholder="Eg: What did you see?" />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default ReportForm;