import styled from "styled-components";
import { css } from "styled-components";

export const smoothTransition = css`
  transition: all 300ms cubic-bezier(0.74, -0.175, 0, 1.08) !important; /* custom */
  transition-timing-function: cubic-bezier(
    0.74,
    -0.175,
    0,
    1.08
  ) !important; /* custom */
`;

export const LoginWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GoogleLoginButton = styled.div`
  background-color: #b2c8f5;
  color: black;
  border-radius: 8px;
  font-family: "Poppins";
  font-size: 12px;
  padding: 18px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  position: relative;

  &:hover {
    background-color: #8eb6f5;
    color: black;
    /* color: white; */
  }

  ${smoothTransition};
`;
