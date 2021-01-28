import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Car = ({ car }) => {
  return (
    <div>
      <p>My car</p>
      {car.length > 0 ? (
        car.map((item, index) => {
          return (
            <Product key={index}>
              <ProductName>{item.name}</ProductName>
              Amount: {item.amount}
            </Product>
          );
        })
      ) : (
        <p>You have not selected products yet</p>
      )}
    </div>
  );
};
const Product = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebeef3;
  font-size: 14px;
`;
const ProductName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;
const mapStateToProps = (state) => {
  // DEVUELVE UN OBJECTO CON PROPIEDADES A INYECTAR A ESTE MODULO
  return {
    car: state.car,
  };
};
export default connect(mapStateToProps)(Car);
