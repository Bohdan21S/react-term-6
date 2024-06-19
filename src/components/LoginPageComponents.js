import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 90%;
  max-width: 1000px;
  aspect-ratio: 8/5;
  @media (max-width: 650px) {
    width: 60%;
    aspect-ratio: 4/5;
  }
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.4s ease-in-out;
  left: 0;
  width: 61.5%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signingIn !== true
      ? `
  transform: translateX(83%);
  color: #000;  
  opacity: 1;
  z-index: 5;
  `
      : null};
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.4s ease-in-out;
  left: 0;
  width: 61%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  opacity: ${(props) => (props.signingIn !== true ? 0 : 1)};
  z-index: 2;
  ${(props) =>
    props.signingIn !== true ? `transform: translateX(64%);` : null};
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  align-items: flex-left;
  justify-content: center;
  flex-direction: column;
  padding: 0 0;
  width: 60%;
  height: 100%;
  text-align: left;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0 0 20px 0;
`;

export const Input = styled.input`
  border-radius: 6px;
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 30px 0 0 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 6px;
  border: 0;
  background-color: rgba(81, 78, 131, 0.75);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 5px 0 0 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 61%;
  width: 39%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.4s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signingIn !== true ? `transform: translateX(-157%);` : null};
  @media (max-width: 650px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  background: -webkit-linear-gradient(to left, rgba(7, 26, 65), rgba(11, 13, 21));
  background: linear-gradient(to left, rgba(7, 26, 65), rgba(11, 13, 21));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.4s ease-in-out;
  ${(props) =>
    props.signingIn !== true ? `transform: translateX(50%);` : null}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.4s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) =>
    props.signingIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
