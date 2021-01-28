import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
const Products = ({ products, addProductToCar }) => {
  return (
    <div>
      <h3>Products</h3>
      <ContainerProduct>
        {products.map((product, index) => {
          return (
            <Product key={index}>
              <p>{product.name}</p>
              <Button onClick={() => addProductToCar(product.id, product.name)}>
                Add to car
              </Button>
            </Product>
          );
        })}
      </ContainerProduct>
    </div>
  );
};
const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 0;
`;

const Product = styled.div`
  padding: 20px;
  border: 1px solid #ebeef3;
  border-radius: 5px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  border: none;
  background: #1c85e8;
  color: #fff;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  border-radius: 3px;
  transition: 0.3s ease all;

  &:hover {
    background: #1c6ab9;
  }
`;
// Conectar/importar el estado global mediante 'connect' para obtener unicamente
// la propiedad 'products' del global state (la unica propiedad a usar por ahora)
// Función que recibe como parametro el state global, y retorna los elementos
// que se vayan a usar en este modulo (LOS NECESARIOS), Global State es un objecto
// Con varias clave-valor
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

// dispatch es un valor que se ejecuta para poder enviar la acción (en este caso de agregar producto al carro)
const mapDispatchToProps = (dispatch) => {
  return {
    // Retorna un objecto con todas las funciones del reducer.
    // Esta función recibe dos parametros (id y nombre del producto), ademas, ejecuta el type
    // de tipo "ADD_PRODUCT_TO_CAR" y envia el id y nombre del producto clickeado.
    addProductToCar: (idProduct, nameProduct) => {
      dispatch({
        type: "ADD_PRODUCT_TO_CAR",
        idProduct: idProduct,
        nameProduct: nameProduct,
      });
    },
  };
};
// (mapStateToProps) Mapear el estado global (dataInit) y pasarlo a las propiedades de 'Products',
// este modulo/modulo
// (mapDispatchToProps) Inyecta una función del REDUCER a nuestro componente
export default connect(mapStateToProps, mapDispatchToProps)(Products);
