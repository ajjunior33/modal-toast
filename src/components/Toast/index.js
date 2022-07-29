import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import {
    ContainerToast,
    ContentToast,
    ButtonToast,
    Title,
    SectionToast,
    Text,
    FooterToast,
    InputControl
} from "./styled";
function Toast({ title, text, type, schema, onProcessName, onProcess, onClose, inputToast }) {

    return (
        <ContainerToast>
            <ContentToast schema={schema}>
                <SectionToast schema={schema}>
                    <Title schema={schema}>{title}</Title>

                    <Text schema={schema}>{text}</Text>
                </SectionToast>
                {inputToast && (
                    inputToast.map(item => (
                        <InputControl
                            type={item.type}
                            onChange={e => {
                                item.state.current = e.target.value
                            }}
                            placeholder={item.placeholder}
                            schema={schema}
                        />
                    ))
                )}
                <FooterToast>

                    {(onProcess !== undefined) && (
                        <>
                            <ButtonToast type={type} bottom onClick={onProcess} >{onProcessName}</ButtonToast>
                        </>
                    )}
                    <ButtonToast schema={schema} onClick={onClose}>Cancelar</ButtonToast>
                </FooterToast>
            </ContentToast>
        </ContainerToast>
    );
}

export default Toast;
