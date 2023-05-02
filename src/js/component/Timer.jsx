import React from 'react';

const Timer = (props) => {
    return (
        <button onClick={props.onClick} 
                role={props.motivo}
                className={`bg-dark boton ${props.motivo}`}
        >
                    <i className={props.icono}></i>
        </button>
    );
};
export default Timer;