import ReactDOM from "react-dom";
import Toast from "./components/Toast";
import Container from "./components/Container";

const idDefault = "modal-toast";

function renderToast({ title, text, type, schema }) {
  let target = document.getElementById(idDefault);
  ReactDOM.render(
    <Toast text={text} type={type} title={title} schema={schema} />,
    target
  );
}

function show({ title, text, type, schema }) {
  if (!document.getElementById(idDefault).hasChildNodes()) {
    renderToast({ title, text, type, schema });

    return true;
  }

  return false;
}

function hide() {
  let target = document.getElementById(idDefault);
  ReactDOM.unmountComponentAtNode(target);
}

export let notify = {
  show,
  hide
};

export default Container;
