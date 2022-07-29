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
            title: "Titulo",
            text:"Mensagem de texto",
            type: "danger",
            type: "danger",
            schema: "dark"
        });
    }
    function handleModalLight() {
        notify.show({
            title: "Titulo",
            text:"Mensagem de texto",
            type: "danger",
            type: "danger",
            schema: "light"
        });
    }
```

Fechando um modal

```js
  notify.hide();
```

Criando uma interação fetch

```js


 function handleModalLight() {
        notify.show({
            title: "Titulo",
            text:"Mensagem de texto",
            type: "danger",
            schema: "light",
            onProcess: () => {
              console.log("Executando seu processo aqui")
            },
            onProcessName: "Nome a ser exibido no botão"
        });
    }

```


### Faça uma doação para ajudar meu projeto a seguir em frente
[Doar agora](https://www.paypal.com/donate/?hosted_button_id=MTKLARS6AASYN)
