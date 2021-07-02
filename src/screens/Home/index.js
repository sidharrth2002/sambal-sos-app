import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import NavigationFooter from '../../components/NavigationFooter';
import { ReactBingmaps } from 'react-bingmaps';

const Home = () => {
    const [flags, setFlags] = useState([]);

    // useEffect(() => {
    //     firebase
    //     .firestore()
    //     .collection('flags')
    //     .get()4›3
    //     .then(snapshot => {
    //         snapshot.forEach(doc => {
    //             console.log(doc);
    //             setFlags([...flags, doc.data()])
    //         })
    //     })
    // }, []);

    const clickHandler = () => {

    }
    var infoboxTemplate = <div style={{ background: 'white', padding: '1rem' }}>Component</div>

    return (
        <div>
            <ReactBingmaps bingmapKey={process.env.REACT_APP_BINGMAP_KEY} pushPins={[
                {
                    "location":[13.0827, 80.2707], "option":{ color: 'red' }, "addHandler": {"type" : "click" }
                },
            ]}
            infoboxesWithPushPins={[
                {
                    "location":[13.0827, 80.2707],
                    "infoboxOption": {
                        htmlContent: infoboxTemplate
                    },
                    "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
                    // "infoboxOption": { title: 'Infobox Title', description: 'Infobox' },
                    "pushPinOption":{ title: 'Pushpin Title', description: 'Pushpin' },
                    "infoboxAddHandler": {"type" : "click" },
                    "pushPinAddHandler": {"type" : "click" }
                  }
            ]}/>
            <NavigationFooter activeTab={0} />
        </div>
    );
};

export default Home;