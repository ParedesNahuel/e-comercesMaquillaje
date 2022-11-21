import React from 'react'

function CategoriaBtn(props) {
  return (
    <div className='btn btn-primary rounded-pill m-1'>
        {props.title}
    </div>
  )
}

export default CategoriaBtn