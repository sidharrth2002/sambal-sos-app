import React, { Component, useEffect, useState } from 'react'
import EXIF from 'exif-js'
import * as fs from 'fs';

export default function CameraComponent() {
    const [image, setImage] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        console.log();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input accept="image/*" name="image" id="icon-button-file" type="file" capture="environment" onChange={e => setImage(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
      )
}
