import './App.css';

import NotifyContent, { notify } from '../../bin/notify';


function App() {

    function handleModalDark() {
        notify.show({
            title: "Um erro ocorreu",
            text:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            type: "danger",
            schema: "dark"
        });
    }
    function handleModalLight() {
        notify.show({
            title: "Um erro ocorreu",
            text:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
