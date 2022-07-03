import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import {
    ContainerToast,
    ContentToast,
    ButtonToast,
    Title,
    SectionToast,
    Text,
    FooterToast
} from "./styled";
function Toast({ title, text, type, schema, onProcessName, onProcess, onClose }) {

    return (
        <ContainerToast>
            <ContentToast schema={schema}>
                <SectionToast schema={schema}>
                    <Title schema={schema}>{title}</Title>

                    <Text schema={schema}>{text}</Text>
                </SectionToast>

                <FooterToast>
                    <ButtonToast schema={schema} onClick={onClose}>Cancelar</ButtonToast>

                    {(onProcess !== undefined) && (
                        <>
                            <ButtonToast type={type} bottom onClick={onProcess} >{onProcessName}</ButtonToast>
                        </>
                    )}
                </FooterToast>
            </ContentToast>
        </ContainerToast>
    );
}

export default Toast;
