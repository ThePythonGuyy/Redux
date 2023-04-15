import React from 'react'
import styled from 'styled-components'
import { buyCake  } from '../redux/export'
import { connect } from 'react-redux'

const CakeCotainer = (props) => {
  return (
    <Div>
        <h1>Number of Cakes - {props.numOfCakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </Div>
  )
}



const Div = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


const mapStateToProps = state => {
  return{
    numOfCakes: state.numOfCakes
  }
}

const mapDipatctToProps = dispatch => {
  return{
    buyCake: () => dispatch(buyCake())
  }
}


export default connect(mapStateToProps, mapDipatctToProps)(CakeCotainer)