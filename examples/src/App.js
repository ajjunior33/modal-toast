import axios from 'axios';
import './App.css';

import NotifyContent, { notify } from '../../bin/notify';
import { useState } from 'react';


function App() {

    const [image, setImage] = useState("");
    const [raca, setRaca] = useState("");
    const [description, setDescription] = useState("");

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

                        if (response.data[0].breeds[0] !== undefined) {
                            setDescription(response.data[0].breeds[0].description)
                            setRaca(response.data[0].breeds[0].name)
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
                </div>
            </div>

        </>

    );
}

export default App;
