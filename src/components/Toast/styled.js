import styled, { css } from "styled-components";

export const ContainerToast = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentToast = styled.div`
  ${(props) =>
        props.schema === "dark" &&
        `
      background-color: #1b1b1b;
      border: 1px solid #282828;
      color: white;
    `}

  ${(props) =>
        props.schema === "light" &&
        `
      background-color: #ecf0f1;
      border: 1px solid #bdc3c7;
      color: #2c3e50;
    `}


  max-width: 420px;
  border-radius: 20px;
`;

export const ButtonToast = styled.button`
  border: 0;
  width: 100%;
  background-color: transparent;
  padding: 15px 0;
  font-size: 14px;
  color: #007aff;
  cursor:pointer;

  ${(props) =>
        props.schema === "light" &&
        `
      border-top: 1px solid #bdc3c7;
    `}

  ${(props) =>
        props.schema === "dark" &&
        `
    border-top: 1px solid #282828;
  `}

  ${(props) =>
        props.bottom &&
        css`
      font-weight: bold;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `}

  ${(props) =>
        props.type === "danger" &&
        css`
      font-weight: bold;
      color: #c0392b;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `}
  &:hover {

    ${(props) =>
        props.schema === "light" &&
        `
        background-color:#bdc3c7aa;
    `}

  ${(props) =>
        props.schema === "dark" &&
        `
      background-color: #2c3e50aa;
  `}
  }
`;

export const Title = styled.h1`
  font-size: 15px;
  text-align:center;


  ${(props) =>
        props.schema === "light" &&
        `
      color: #222;
    `}}

  ${(props) =>
        props.schema === "dark" &&
        `
    color: #eee;
  `}


`;
export const SectionToast = styled.section`
  padding: 10px 20px;
`;
export const Text = styled.p`
  font-size: 14px;
  color: #999;
`;
export const FooterToast = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
