import React from 'react'

const Box = (props) => {

  // const select = props.select;
  const action = props.action;
  // console.log('3. ### props.action 값: ', props.action)
  const imageUrl = action ? action.img : '';
  let result;
  let boxResult;

  // props.player.toLowerCase()가 computer 이고
  // 결과가 tie 가 아니고, 결과가 있다면
  // result 에 props.result 값을 체크해서 반전시킨다. 
  if (
    props.player.toLowerCase() === 'computer' &&
    props.result.toLowerCase() !== 'tie' &&
    props.result !== ''
  ) {
    result = props.result.toLowerCase() === 'win' ? 'LOSER!!' : 'WIN';
    boxResult = result.toLocaleLowerCase().replace(/[^[a-zA-Z]/g,'');
  } else {
    result = props.result;
    boxResult = result.toLocaleLowerCase().replace(/[^a-zA-Z]/g,'');
  }



  return (
    <div className={`box ${boxResult}`}>
        <div className='player-name'>
        <h2>{ props.player }</h2>
          </div>
      <img className='game-img' src={imageUrl} alt="" />
      {/* <img className='game-img' src={ props.action && props.action.img } alt="" /> */}
      <p>{ result }</p>
    </div>
  )
}

export default Box;
