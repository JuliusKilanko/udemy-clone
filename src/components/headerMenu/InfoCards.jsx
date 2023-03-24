import React from 'react'

function InfoCards(props) {
  return (
    <div>
        <h2>{props.infos}</h2>
        <button onClick={props.linkto}>{props.btn}</button>
    </div>
  )
}

export default InfoCards