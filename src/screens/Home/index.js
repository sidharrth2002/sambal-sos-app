import React, { useEffect, useState } from 'react';
import { Center, Spinner, Image, Flex } from '@chakra-ui/react';
import firebase from "firebase/app";
import "firebase/firestore";
import NavigationFooter from '../../components/NavigationFooter';
import { ReactBingmaps } from 'react-bingmaps';
import * as BDGraphics from '../../assets/';

const Home = () => {
    const [flags, setFlags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase
        .firestore()
        .collection('flags')
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let flag = doc.data();
                console.log(typeof flag)
                let newInfoBoxObj = {
                    "location":[flag.coordinates._lat, flag.coordinates._long],
                    "infoboxOption": {
                        htmlContent: InfoBoxTemplate(flag.coordinates._lat, flag.coordinates._long, flag.image)
                    },
                    "addHandler":"mousedown",
                    "pushPinOption":{  },
                    "infoboxAddHandler": {"type" : "click"},
                    "pushPinAddHandler": {"type" : "click"}
                }
                /* setFlags([...flags, newInfoBoxObj]) */
                setFlags((oldFlags) => [
                    ...oldFlags,
                    newInfoBoxObj
                ]);
            })
            setLoading(false)
        })
    }, []);

    useEffect(() => {
        console.log(flags)
    }, [flags])

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
                loading ? 
                    <Center>
                        <Spinner />
                    </Center>
                :
                    <ReactBingmaps 
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
                    />
            }
            <Flex position="fixed" bottom="125px" width="100%" flexDirection="row" alignItems="center" justifyContent="space-around" backgroundColor="white" padding="20px 20px" >
                <Flex backgroundColor="#E63946" borderRadius="8px" padding="15px 25px" color="white" fontFamily="Montserrat" fontWeight="600" >
                    Ask for help
                </Flex>
                <Flex alignItems="center" boxShadow="0px 8px 20px rgba(147, 147, 147, 0.25)" backgroundColor="white" borderRadius="10px" padding="15px 25px" color="black" fontFamily="Montserrat" fontWeight="500" >
                    <Image mr="3px" src={ BDGraphics.FlagIcon } height="15px" />
                    Report a Flag
                </Flex>
            </Flex>
            <NavigationFooter activeTab={0} />
        </div>
    );
};

export default Home;