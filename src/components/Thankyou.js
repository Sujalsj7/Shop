import React from 'react'
import { Button } from 'react-bootstrap'

const Thankyou = () => {
  return (
    <div className='m-5 p-5'>
        <h1>

        Thankyou For Shopping !
        Your Order Has Been Placed.
        </h1>
        <Button href='/'>
            Continue Shopping
        </Button>
    </div>
  )
}

export default Thankyou