# Modal Toast

Instalação do modal toast.

```bash
npm i modal-toast
```


Importação do pacote.

```js
import NotifyContent, { notify } from 'modal-toast';

```


Adicione o **NotifyContent** dentro do seu componente principal, exemplo:

```js
function App(){
  return(
    <>
      <NotifyContent />
      <div class="App>
        ...
      </div>
    </>
  )
}
```

Utilizando a chamada do modal:

```js

 function handleModalDark() {
        notify.show({
            title: "Um erro ocorreu",
            text:
                "A criação do projeto 'Newsspass' não funcionou como esperado. O seguinte erro foi retornado pelo servidor: You have reached the limit of your current plan (Zenkit Projects). Please upgrade to continue.",
            type: "danger",
            schema: "dark"
        });
    }
    function handleModalLight() {
        notify.show({
            title: "Um erro ocorreu",
            text:
                "A criação do projeto 'Newsspass' não funcionou como esperado. O seguinte erro foi retornado pelo servidor: You have reached the limit of your current plan (Zenkit Projects). Please upgrade to continue.",
            type: "danger",
            schema: "light"
        });
    }
```
