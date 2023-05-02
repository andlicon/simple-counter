//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from './component/Counter.jsx'
import Timer from './component/Timer.jsx';

const pausar = () => {
    clearInterval(temporizador)
}
const reanudar = () => {
    temporizador = setInterval(
        function () {
            cont++;
            ReactDOM.render(<App cont={cont.toString()} digitosMax={6} temporizador={temporizador} />, document.querySelector("#app"))
            if (cont == tiempoMaximo) {
                reiniciar();
                alert('*sonido de reloj*');
            }
        },
        1000
    );
}
const reiniciar = () => {
    cont = 0;
    pausar();
    ReactDOM.render(<App cont={cont.toString()} digitosMax={6} temporizador={temporizador} />, document.querySelector("#app"))
}

let temporizador;
let tiempoMaximo;
let cont = 0;

const App = (props) => {
    return (
        <>
            <div className="contenedor-botones">
                {/* opciones */}
                <Timer onClick={pausar}
                    motivo="pausar"
                    icono="bi bi-pause"
                />
                <Timer onClick={reanudar}
                    motivo="reanudar"
                    icono="bi bi-play"
                />
                <Timer onClick={reiniciar}
                    motivo="reiniciar"
                    icono="bi bi-arrow-clockwise"
                />
            </div>
            {/* contador */}
            <Counter
                conteoActual={props.cont.toString()}
                digitosMax={6}
            />
        </>
    );
};
ReactDOM.render(<App
    cont={cont}
    onLoad={reanudar()}
/>, document.querySelector("#app"));