import ReactDOM from "react-dom";
import {
  ContainerToast,
  ContentToast,
  ButtonToast,
  Title,
  SectionToast,
  Text,
  FooterToast
} from "./styled";
const idDefault = "modal-toast";
function Toast({ title, text, type, schema }) {
  function handleClose() {
    let target = document.getElementById(idDefault);
    ReactDOM.unmountComponentAtNode(target);
  }
  return (
    <ContainerToast>
      <ContentToast schema={schema}>
        <SectionToast schema={schema}>
          <Title schema={schema}>{title}</Title>

          <Text schema={schema}>{text}</Text>
        </SectionToast>

        <FooterToast>
          <ButtonToast schema={schema} onClick={handleClose}>
            {" "}
            Cancelar{" "}
          </ButtonToast>
          <ButtonToast schema={schema} bottom type={type}>
            Tente novamente
          </ButtonToast>
        </FooterToast>
      </ContentToast>
    </ContainerToast>
  );
}

export default Toast;
