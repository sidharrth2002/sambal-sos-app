import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import * as Global from '../../style/global.style';
import * as MT from '../../style/maintenance.style';

const Maintenance = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Global.Wrapper>
            <Global.Body>
                <MT.MaintenencePrimaryFont>
                    The Bendera Putih App
                </MT.MaintenencePrimaryFont>

                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
                </form>
            </Global.Body>
        </Global.Wrapper>
    )
}

export default Maintenance;
