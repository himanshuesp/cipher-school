// Prospective Component as prop
import React from 'react';

const SuerChargeBackground = WrapperComponent => {
    const color =['red', 'blue', 'green','pink', 'cyan', 'yellow', 'purple', 'lime'];
    const randomColor = color[Math.floor(Math.random() * 8)];

    // red-text - materialize

    const className = randomColor

    return (props) => {
        return(
           <div className={className}>
                <WrapperComponent {...props} />
           </div> 
        )
    }
}

export default SuerChargeBackground;