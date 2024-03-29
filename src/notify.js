import React from 'react';
import ReactDOM from "react-dom/client";
import ReactDom from 'react-dom'
import Toast from "./components/Toast";
import Container from "./components/Container";

const idDefault = "modal-toast";
let root;
function renderToast({ selectOptions, imgSrc, title, text, type, schema, onProcess, onProcessName, inputToast, cancelButtonTitle }) {

    root = ReactDOM.createRoot(document.getElementById(idDefault));
    root.render(
        <>
            <Toast
                text={text}
                type={type}
                title={title}
                schema={schema}
                onProcess={onProcess}
                onProcessName={onProcessName}
                inputToast={inputToast}
                cancelButtonTitle={cancelButtonTitle}
                imgSrc={imgSrc}
                selectOptions={selectOptions}
                onClose={() => {
                    root.unmount()
                }}
            />
        </>
    );
}

function show({ selectOptions, imgSrc, title, text, type, schema, onProcess, onProcessName, inputToast, cancelButtonTitle }) {
    if (!document.getElementById(idDefault).hasChildNodes()) {
        renderToast({ imgSrc, selectOptions, title, text, type, schema, onProcess, onProcessName, inputToast, cancelButtonTitle });

        return true;
    }

    return false;
}

function hide() {

    root.unmount();
    return true;
}

export let notify = {
    show,
    hide
};

export default Container;
