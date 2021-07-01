import styled from 'styled-components';
import { css } from 'styled-components';

export const Colors = {
    'primary': '#a8c2f0',
    'primaryWhite': '#FFFFFF',
    'secondaryWhite': '#EEEEEE',
    'tertiaryWhite': '#DADADA',
    'primaryBlack': '#39393A',
    'secondaryBlack': '#535353',
    'tertiaryBlack': '#A6A6A6'
}

export const QuicksandFont = css`
    font-family: 'Quicksand';
`

export const PoppinsFont = css`
    font-family: 'Poppins';
`

export const PrimaryFontSize = css`
    font-size: 25px;
`;

export const SecondaryFontSize = css`
    font-size: 13px;
`;

export const TertiaryFontSize = css`
    font-size: 11px;
`;

export const box_shadow = css`
    box-shadow: 0px 16px 40px rgba(133, 133, 133, 0.25);
`;

export const smoothTransition = css`
    transition: all 300ms cubic-bezier(0.740, -0.175, 0.000, 1.080) !important; /* custom */
    transition-timing-function: cubic-bezier(0.740, -0.175, 0.000, 1.080) !important; /* custom */
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.div`
    width: 100%;
    padding: 50px 20px;
    max-width: 1300px;

    ${props => {
        if(props.size === 'larger'){
            return 'max-width: 1550px !important';
        }
    }};

    ${props => {
        if(props.type === 'row'){
            return 'display: flex; justify-content: space-around;';
        }
    }};

    @media (max-width: 1440px) {
        flex-direction: column;
    }
`;