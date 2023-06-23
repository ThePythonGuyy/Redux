
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { buyCake } from "../redux/export";
import { buyIceCream } from "../redux/export";

const HookCakeContainer2 = () => {
    const [cake, setCake] = useState(1)
    const [icecream, setIcecream] = useState(1)

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
      <Div>
        <h1>Number of Cakes - {numOfCakes}</h1>
        <div>
            <input type="text" value={cake} onChange={e => setCake(e.target.value)}/>
            <button onClick={() => dispatch(buyCake(cake))}>Buy Cake</button>
        </div>
        
      </Div>
      <Div>
        <h1>Number of iceCreams - {numOfIceCream}</h1>
        <div>
        <input type="text" value={icecream} onChange={e => setIcecream(e.target.value)}/>
        <button onClick={() => dispatch(buyIceCream(icecream))}>Buy IceCream</button>
        </div>
        
      </Div>
    </div>
  );
};

const Div = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    margin-top: 10px;
    & > *{
        display: inline-block;
        margin-right: 7px;
    }
  }
`;

export default HookCakeContainer2;
