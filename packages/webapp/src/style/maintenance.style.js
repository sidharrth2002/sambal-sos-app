import styled from "styled-components";
import { css } from "styled-components";

export const Colors = {
  primary: "#a8c2f0",
  primaryWhite: "#FFFFFF",
  secondaryWhite: "#EEEEEE",
  tertiaryWhite: "#DADADA",
  primaryBlack: "#39393A",
  secondaryBlack: "#535353",
  tertiaryBlack: "#A6A6A6",
};

export const QuicksandFont = css`
  font-family: "Quicksand";
`;

export const PoppinsFont = css`
  font-family: "Poppins";
`;

export const PrimaryFontSize = css`
  font-size: 2.5rem;
`;

export const SecondaryFontSize = css`
  font-size: 1.25rem;
`;

export const TertiaryFontSize = css`
  font-size: 0.85rem;
`;

export const box_shadow = css`
  box-shadow: 0px 16px 40px rgba(133, 133, 133, 0.25);
`;

export const smoothTransition = css`
  transition: all 300ms cubic-bezier(0.74, -0.175, 0, 1.08) !important; /* custom */
  transition-timing-function: cubic-bezier(
    0.74,
    -0.175,
    0,
    1.08
  ) !important; /* custom */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  width: 100%;
  padding: 50px 50px;
  max-width: 1300px;

  ${(props) => {
    if (props.size === "larger") {
      return "max-width: 1550px !important";
    }
  }};

  ${(props) => {
    if (props.type === "row") {
      return "display: flex; justify-content: space-around;";
    }
  }};

  ${(props) => {
    if (props.center === true) {
      return "display: flex; justify-content: center !important; align-items:center !important;";
    }
  }}

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export const MaintenencePrimaryFont = styled.div`
  ${PoppinsFont};
  ${PrimaryFontSize};

  color: ${Colors.primaryBlack};
`;

export const MaintenanceSecondaryFont = styled.div`
  ${QuicksandFont};
  ${SecondaryFontSize};

  color: ${Colors.secondaryBlack};

  ${(props) => {
    if (props.gradient === true) {
      return "background: linear-gradient(90.65deg, #1273CC -8.61%, #C300F3 116.97%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;";
    }
  }}
`;

export const MaintenanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  max-width: 90%;

  padding: 2rem;
`;

export const MaintenenceSplashImg = styled.img`
  min-height: 350px;
  min-width: auto;
`;

export const MaintenenceFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  text-align: center;
  width: 100%;
`;

export const MaintenanceFormBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  padding: 10px 15px;
  background: ${Colors.primaryWhite};
  border: 1px solid ${Colors.tertiaryBlack};
  box-sizing: border-box;
  border-radius: 5px;

  ${(props) => {
    if (props.active === "true") {
      return "border: 1px solid #1982E3; background: #EDF7FF;";
    }
  }}

  ${smoothTransition};
`;

export const MaintenceFormIcon = styled.img`
  height: 15px;
  width: 15px;
`;

export const MaintenenceSubmitButton = styled.input`
  ${Colors.secondaryBlack};
  background: #1982e3;
  color: white;
  box-shadow: 0px 16px 40px rgba(157, 157, 157, 0.25);
  border-radius: 8px;
  outline: none;
  border: none;
  margin: 0 auto;
  padding: 15px 20px;
  cursor: pointer;
  margin-top: 50px;
  width: 100%;
`;

export const MaintenenceInputField = styled.input`
  ${QuicksandFont};
  outline: none;
  background: transparent;
  border: none;
  padding: 5px 20px;
  padding-left: 15px;

  width: 100%;
`;

export const MaintenenceNotificationWrapper = styled.div`
  /* ${box_shadow}; */
  border-radius: 8px;
  padding: 10px 40px;

  position: fixed;
  top: 20px;

  ${(props) => {
    if (props.type === "submitted") {
      return "background-color: #C6F6D5;";
    } else if (props.type === "failed") {
      return "";
    }
  }}

  ${smoothTransition};
`;
