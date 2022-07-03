import './App.css';

import NotifyContent, { notify } from '../../bin/notify';


function App() {

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
    return (
        <>
            <NotifyContent />
            <div className="App">
                <button className='buttonClick' onClick={handleModalDark}>Click me to Dark</button>
                <button className='buttonClick' onClick={handleModalLight}>Click me to Ligth</button>
            </div>

        </>

    );
}

export default App;
