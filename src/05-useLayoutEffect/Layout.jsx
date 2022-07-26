import React from 'react'
import { Blockquote } from './Blockquote'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

export const Layout = () => {

    const { counter,increment } = useCounter(1)

    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]

  return (
    <>
        <h3>The Breaking Bad API</h3>
        <hr />

        {
            isLoading ? 
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
                :(
                    <Blockquote author={author} quote={quote}/>
                )
                
        }

        <button 
            className='btn btn-primary'
            onClick={() => increment()}
            disabled={isLoading}
        >
            Next quote
        </button>

    </>
  )
}
