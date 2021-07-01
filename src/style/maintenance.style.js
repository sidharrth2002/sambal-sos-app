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
`

export const MaintenanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const MaintenenceSplashImg = styled.img`

`;

export const MaintenenceFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`;

export const MaintenanceFormBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding: 10px 10px;
    background: #EDF7FF;
    border: 1px solid #1982E3;
    box-sizing: border-box;
    border-radius: 5px;
`