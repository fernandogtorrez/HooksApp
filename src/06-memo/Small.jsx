import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('<Small/>')

  return (
    <>
        <small> {value} </small>
    </>
  )
})
