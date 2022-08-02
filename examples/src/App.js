import axios from 'axios';
import './App.css';

import NotifyContent, { notify } from '../../bin/notify';
import { useRef, useState } from 'react';


function App() {

    const [image, setImage] = useState("");
    const [raca, setRaca] = useState("");
    const [description, setDescription] = useState("");
    const userGit = useRef("")

    function handleModalDark() {
        notify.show({
            title: "Carregue um cachorrinho",
            text:
                "Funcionalidade externa. Usando a API thedogapi vamos carregar uma imagem de um cachorro para você :D",
            type: "success",
            schema: "dark",
            onProcess: () => {
                axios.get("https://api.thedogapi.com/v1/images/search")
                    .then(response => {
                        setImage(response.data[0].url)
                        if (response.data[0].breeds[0] !== undefined) {
                            setRaca(response.data[0].breeds[0].name)
                            setDescription(response.data[0].breeds[0].description)
                        } else {
                            setRaca("");
                        }
                        notify.hide();
                    })
                    .catch(err => {
                        notify.hide();

                        notify.show({
                            title: "Um erro ocorreu",
                            text:
                                "Não foi possível carregar um dog",
                            type: "danger",
                            schema: "dark",
                        });
                    })
            },
            onProcessName: "Quero ver um dog"
        });
    }

    function handleModalInput() {
        notify.show({
            title: "Usuário do github",
            text:
                "Pegar imagem de perfil do github",
            type: "success",
            schema: "dark",
            inputToast: [
                {
                    type: "text",
                    placeholder: "username",
                    state: userGit,
                },

            ],
            onProcess: () => {
                fetch(`https://api.github.com/users/${userGit.current}`)
                    .then(responseJson => responseJson.json())
                    .then(response => {
                        setImage(response.avatar_url)
                        setRaca(response.name)
                        console.log(response.avatar_url)
                        notify.hide();
                        notify.show({
                            title: response.name,
                            imgSrc: response.avatar_url,
                            schema: "dark"
                        })
                    })
            },
            onProcessName: "Buscar",
            cancelButtonTitle: "Fechar",
        });
    }
    function handleModalLight() {
        notify.show({
            title: "Carregue um gatinho",
            text:
                "Funcionalidade externa. Usando a API thecatapi vamos carregar uma imagem de um gatinho para você :D",
            type: "success",
            schema: "light",
            onProcess: () => {
                axios.get("https://api.thecatapi.com/v1/images/search")
                    .then(response => {
                        setImage(response.data[0].url)

                        notify.hide();
                    })
                    .catch(err => {
                        console.log(err);
                        notify.hide();

                        notify.show({
                            title: "Um erro ocorreu",
                            text:
                                "Não foi possível carregar um gato",
                            type: "danger",
                            schema: "dark",
                        });
                    })
            },
            onProcessName: "Quero ver um gato"
        });
    }
    return (
        <>
            <NotifyContent />
            <div className="App">
                <img src={image} alt="" style={{ border: "none", outline: "none", borderRadius: 8 }} />
                <h4>{raca}</h4>
                <p>{description}</p>
                <div className="buttonsList">
                    <button className='buttonClick' onClick={handleModalDark}>Click me to Dark</button>
                    <button className='buttonClick' onClick={handleModalLight}>Click me to Ligth</button>
                    <button className='buttonClick' onClick={handleModalInput}>Click me to for load input</button>
                </div>
            </div>

        </>

    );
}

export default App;
