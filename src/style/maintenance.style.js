import styled from 'styled-components';
import { globalStyled } from '../style';

export const MaintenencePrimaryFont = styled.div`
    ${globalStyled.PoppinsFont};
    ${globalStyled.PrimaryFontSize};

    color: ${globalStyled.Colors.primaryBlack};
`

export const MaintenanceSecondaryFont = styled.div`
    ${globalStyled.QuicksandFont};
    ${globalStyled.SecondaryFontSize};

    color: ${globalStyled.Colors.secondaryBlack};

    ${props => {
        if(props.gradient === true){
            return 'background: linear-gradient(90.65deg, #1273CC -8.61%, #C300F3 116.97%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;';
        }
    }}
`

export const MaintenanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 80vh;
    max-width: 90%;

    padding: 2rem;
`

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
    background: ${globalStyled.Colors.primaryWhite};
    border: 1px solid ${globalStyled.Colors.tertiaryBlack};
    box-sizing: border-box;
    border-radius: 5px;

    ${props => {
        if(props.active === 'true'){
            return 'border: 1px solid #1982E3; background: #EDF7FF;'
        }
    }}

    ${globalStyled.smoothTransition};
`

export const MaintenceFormIcon = styled.img`
    height: 15px;
    width: 15px;
`

export const MaintenenceSubmitButton = styled.input`
    ${globalStyled.Colors.secondaryBlack};
    background: #1982E3;
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
`

export const MaintenenceInputField = styled.input`
    ${globalStyled.QuicksandFont};
    outline: none;
    background: transparent;
    border: none;
    padding: 5px 20px;
    padding-left: 15px;

    width: 100%;
`

export const MaintenenceNotificationWrapper = styled.div`
    /* ${globalStyled.box_shadow}; */
    border-radius: 8px;
    padding: 10px 40px;

    position: fixed;
    top: 20px;

    ${props => {
        if(props.type === 'submitted'){
            return 'background-color: #C6F6D5;'
        }else if(props.type === 'failed'){
            return '';
        }
    }}

    ${globalStyled.smoothTransition};
`