import React from 'react';
import ReactDOM from "react-dom/client";
import ReactDom from 'react-dom'
import Toast from "./components/Toast";
import Container from "./components/Container";

const idDefault = "modal-toast";
let root;
function renderToast({ title, text, type, schema, onProcess, onProcessName }) {

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
                onClose={() => {
                    root.unmount()
                }}
            />
        </>
    );
}

function show({ title, text, type, schema, onProcess, onProcessName }) {
    if (!document.getElementById(idDefault).hasChildNodes()) {
        renderToast({ title, text, type, schema, onProcess, onProcessName });

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
