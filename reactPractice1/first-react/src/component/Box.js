import React from 'react';

const Box = (props) => {
    console.log('props', props);
    return (
        <div className='box'>
            Box{props.number}
            <p>{props.model}</p>
        </div>
    );
};

export default Box;

// rafce
