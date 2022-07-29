import React, { memo } from 'react'

export const Button = memo(({numero,incrementar}) => {

    console.log('Me volvi a renderizar :c')

  return (
    <button
        className='btn btn-primary mr-3'
        onClick={()=> increment(numero)}
    >
    </button>
  )
})
