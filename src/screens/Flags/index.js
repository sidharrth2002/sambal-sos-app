import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";

const Flags = () => {
    const [flags, setFlags] = useState([]);

    // useEffect(() => {
    //     firebase
    //     .firestore()
    //     .collection('flags')
    //     .get()
    //     .then(snapshot => {
    //         snapshot.forEach(doc => {
    //             console.log(doc);
    //             setFlags([...flags, doc.data()])
    //         })
    //     })
    // }, []);

    return (
        <div>
            { JSON.stringify(flags) }
        </div>
    )
};

export default Flags;