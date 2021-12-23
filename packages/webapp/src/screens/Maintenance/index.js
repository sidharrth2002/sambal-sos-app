import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Global from "../../style/global.style";
import * as MT from "../../style/maintenance.style";
import * as BDGraphics from "../../assets/";

const Maintenance = () => {
  const [active, setActive] = useState("none");
  const [sent, setSent] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Global.Wrapper>
      <Global.Body center={true}>
        {sent ? (
          <MT.MaintenenceNotificationWrapper type="submitted">
            Submitted
          </MT.MaintenenceNotificationWrapper>
        ) : null}

        <MT.MaintenanceWrapper>
          <div>
            <MT.MaintenencePrimaryFont>
              The Bendera Putih App
            </MT.MaintenencePrimaryFont>

            {/* <img src={ BDGraphics.WhiteFlagIcon } alt="Bendera-Putih" height="125px" width="100px" /> */}

            <MT.MaintenanceSecondaryFont>
              We are under construction. Stay Tuned for Beta!
            </MT.MaintenanceSecondaryFont>

            <MT.MaintenenceSplashImg src={BDGraphics.WhiteFlagIcon} alt="" />

            <MT.MaintenanceSecondaryFont gradient={true}>
              Fill up this form to be the earliest to use the app when it
              launches.
            </MT.MaintenanceSecondaryFont>

            <MT.MaintenenceFormWrapper
              action="https://send.pageclip.co/dlzPBOnEYM63SqvOKNptD5u93dv7O1W0"
              className="pageclip-form"
              method="POST"
            >
              <MT.MaintenanceFormBlock
                onClick={() => {
                  setActive("user");
                }}
                active={active === "user" ? "true" : "false"}
              >
                <MT.MaintenceFormIcon
                  src={
                    active === "user"
                      ? BDGraphics.UserActiveIcon
                      : BDGraphics.UserIcon
                  }
                  alt="User Icon"
                />
                <MT.MaintenenceInputField
                  name="name"
                  placeholder="eg:John"
                  {...register("name")}
                  required
                />
              </MT.MaintenanceFormBlock>

              <MT.MaintenanceFormBlock
                onClick={() => {
                  setActive("email");
                }}
                active={active === "email" ? "true" : "false"}
              >
                <MT.MaintenceFormIcon
                  src={
                    active === "email"
                      ? BDGraphics.EmailActiveIcon
                      : BDGraphics.EmailIcon
                  }
                  alt="Email Icon"
                />
                <MT.MaintenenceInputField
                  name="email"
                  placeholder="eg:email"
                  {...register("email", { required: true })}
                  required
                />
              </MT.MaintenanceFormBlock>

              {errors.email && <span>This field is required</span>}

              <MT.MaintenenceSubmitButton
                className="pageclip-form__submit"
                name="submit"
                type="submit"
                placeholder="Submit"
                onClick={() => {
                  setSent(true);
                }}
              />
            </MT.MaintenenceFormWrapper>
          </div>
        </MT.MaintenanceWrapper>
      </Global.Body>
    </Global.Wrapper>
  );
};

export default Maintenance;
