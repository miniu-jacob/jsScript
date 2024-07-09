import React from 'react';
// import images from '../images';
import rockImage from '../images/rock.png';
import paperImage from '../images/paper.png';
import scissorsImage from '../images/scissors.png';

const images = {
    rock: rockImage,
    paper: paperImage,
    scissors: scissorsImage,
};

const Box = (props) => {
    console.log('props', props);
    return (
        <div className='box'>
            <h1>{props.player}</h1>
            <img
                className='action-image'
                src={props.action && props.action.img}
                alt=''
            />
            <h2>WIN!</h2>
        </div>
    );
};

export default Box;
