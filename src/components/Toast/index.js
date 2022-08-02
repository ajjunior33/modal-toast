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
    ImageToast,
    InputControl,
    ContentCenter,
    SelectToast
} from "./styled";
function Toast({
    cancelButtonTitle = "Cancelar",
    imgSrc,
    title,
    text,
    type,
    schema,
    onProcessName,
    onProcess,
    onClose,
    inputToast,
    selectOptions
}) {
    return (
        <ContainerToast>
            <ContentToast schema={schema}>
                <SectionToast schema={schema}>
                    {imgSrc && (
                        <ContentCenter>
                            <ImageToast src={imgSrc} alt={title} />
                        </ContentCenter>
                    )}

                    <Title schema={schema}>{title}</Title>
                    <Text schema={schema}>{text}</Text>

                    <ContentCenter>
                        <SelectToast
                            onChange={event => selectOptions.onChange(event.target.value)}
                            value={selectOptions.isValue}
                            schema={schema}>
                            {selectOptions.options.map(select => (
                                <option>{select}</option>
                            ))}
                        </SelectToast>
                    </ContentCenter>
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
                    <ButtonToast schema={schema} onClick={onClose}>{cancelButtonTitle}</ButtonToast>
                </FooterToast>
            </ContentToast>
        </ContainerToast>
    );
}

export default Toast;
