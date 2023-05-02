import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/casillaCounter.css'

const CasillaCounter = ({text}) => {
    return(
        <div className="casilla">
            <p className="casilla-p">{text}</p>
        </div>
    );
};
export default CasillaCounter;