import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

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
                :
                <blockquote className='blockquote text-end'>
                    <p className='mb-1'> {quote} </p>
                    <footer className='blockquote-footer mt-1'> {author} </footer>
                </blockquote>
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
