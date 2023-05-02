import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/counter.css';
import CasillaCounter from '../component/CasillaCounter.jsx';

const getTiempoArray = (arrayConteoActual, digitosMaximos) => {
    let arrayMostrar = Array(digitosMaximos);
    
    for(let i = digitosMaximos-1, j=arrayConteoActual.length-1;     i>=0;   i--, j--) {
        arrayMostrar[i] = arrayConteoActual[j] == undefined ? '0' : arrayConteoActual[j];
    }

    return arrayMostrar;
};

const Counter = ({conteoActual, digitosMax}) => {
    const tiempoArray = getTiempoArray(conteoActual.split(''), digitosMax);

    return(
        <div className="counter-container">
            <CasillaCounter text={<i className="bi bi-clock"></i>} />
            {
                tiempoArray.map((numero, index)=> {
                    return(
                        <CasillaCounter text={numero} key={index} />
                    );
                })
            }
        </div>
    );
};
export default Counter;