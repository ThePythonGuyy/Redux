import React from 'react'
import styled from 'styled-components'

const CakeCotainer = () => {
  return (
    <Div>
        <h1>Number of Cakes</h1>
        <button>Buy Cake</button>
    </Div>
  )
}


export default CakeCotainer

const Div = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`