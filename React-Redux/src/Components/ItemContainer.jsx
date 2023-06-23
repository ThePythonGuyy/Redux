import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { buyCake } from "../redux/export";
import { buyIceCream } from "../redux/export";

const ItemContainer = (props) => {
  return (
    <div>
      <Div>
        <h1>Number of Item- {props.item}</h1>
        <button onClick={() => props.buyItem(3)}>Buy Cake</button>
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

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const buyItem = ownProps.cake
    ? (n=1) => dispatch(buyCake(n))
    : (n=1) => dispatch(buyIceCream(n));

  return {
    buyItem,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
