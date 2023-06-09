import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { buyCake } from "../redux/export";
import { buyIceCream } from "../redux/export";

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
      <Div>
        <h1>Number of Cakes - {numOfCakes}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </Div>
      <Div>
        <h1>Number of iceCreams - {numOfIceCream}</h1>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
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
`;

export default HooksCakeContainer;
