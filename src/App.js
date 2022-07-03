import React from 'react';
import NotifyContent, { notify } from './notify';

function App() {

    function handleDanger() {
        notify.show({
            title: "Um erro ocorreu",
            text:
                "A criação do projeto 'Newsspass' não funcionou como esperado. O seguinte erro foi retornado pelo servidor: You have reached the limit of your current plan (Zenkit Projects). Please upgrade to continue.",
            type: "danger",
            schema: "dark"
        });
    }
    return (
        <>
            <NotifyContent />
            <div className="App">
                <button onClick={handleDanger}>Danger</button>
            </div>
        </>

    );
}

export default App;
