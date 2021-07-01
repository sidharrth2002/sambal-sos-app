import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/firestore";
import axios from "axios";
import qs from 'qs';
import { lottieDefault, BlackLoader } from '../../constants/index'
import Lottie from 'react-lottie'
import * as Global from '../../style/global.style';
import * as MT from '../../style/maintenance.style';
import * as BDGraphics from '../../assets/';

const Pageclip = require('pageclip');
let pageclip = new Pageclip("api_IyH7kWlJA14Tm4Sw6JYAlOXfnwYvZLDZ");

const Maintenance = () => {
    const [active, setActive] = useState("none");
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        setLoading(true)       
        firebase
            .firestore()
            .collection('notifier')
            .add({
                name: data.name,
                email: data.email
            })
            .then(() => {
                // open notification here
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }; 

    return (
        <Global.Wrapper>
            <Global.Body center={true}>
                <MT.MaintenanceWrapper>
                    <div>
                    <MT.MaintenencePrimaryFont>
                        The Bendera Putih App
                    </MT.MaintenencePrimaryFont>

                    <MT.MaintenanceSecondaryFont>
                        We're under construction. Stay Tuned for Beta!
                    </MT.MaintenanceSecondaryFont>

                    <MT.MaintenenceSplashImg src={ BDGraphics.MaintenanceSVG } alt="" />

                    <MT.MaintenanceSecondaryFont gradient={true}>
                        Fill up this form to be the earliest to use our app when it launches.
                    </MT.MaintenanceSecondaryFont>

                    <MT.MaintenenceFormWrapper onSubmit={onSubmit} className="pageclip-form">
                        <MT.MaintenanceFormBlock onClick={ () => {setActive('user')}} active={ active === 'user' ? 'true' : 'false' } >
                            <MT.MaintenceFormIcon src={ active === 'user' ? BDGraphics.UserActiveIcon : BDGraphics.UserIcon  } alt="User Icon" />
                            <MT.MaintenenceInputField name="name" defaultValue="eg:john" {...register("name")} />
                        </MT.MaintenanceFormBlock>
                    
                        <MT.MaintenanceFormBlock onClick={ () => {setActive('email')}} active={ active === "email" ? 'true' : 'false' } >
                            <MT.MaintenceFormIcon src={ active === 'email' ? BDGraphics.EmailActiveIcon : BDGraphics.EmailIcon } alt="Email Icon" />
                            <MT.MaintenenceInputField name="email" defaultChecked="eg: john@gmail.com" {...register("email", { required: true })} />
                        </MT.MaintenanceFormBlock>

                        {errors.email && <span>This field is required</span>}
                        
                        <MT.MaintenenceSubmitButton className="pageclip-form__submit" name="submit" type="submit" placeholder="Submit" />
                    </MT.MaintenenceFormWrapper>
                    </div>
                </MT.MaintenanceWrapper>
            </Global.Body>
        </Global.Wrapper>
    )
}

export default Maintenance;
