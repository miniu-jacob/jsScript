import React from 'react'

const Box = (props) => {
  console.log('props', props)

  const item = props.choose || { image: '#' };

  return (
    <div className='box'>
      <div className='player-name'>
        <h2>{props.player}
          </h2>
        <img src={ item.image } className='game-img'  alt="" />
        </div>
      <p>{ props.result }</p>
      </div>
  )
}

export default Box;