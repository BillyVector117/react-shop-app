import "./App.css";
import styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Shop from "./components/Shop";
import Error404 from "./components/Error404";
import Car from "./components/Car";
import { useState } from "react";
function App() {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];
  const [car, setCar] = useState([
    /*  { id: 1, amount: 2, name: "product 1" },
    { id: 4, amount: 1, name: "product 2" },
    { id: 5, amount: 5, name: "product 3" }, */
  ]);
  const addProductToCar = (idProduct, nameProduct) => {
    // Solo si el state 'car' esta vacio (primera vez), modificalo agregandole los datos del producto
    if (car.length === 0) {
      setCar([{ id: idProduct, name: nameProduct, amount: 1 }]);
    } else {
      // Si el state NO ESTA VACIO, remplaza el array agregando lo nuevo
      // Tenemos que revisar que car no tenga el producto a agregar
      // Si ya lo tiene entonces se debera actualizar el valor.
      // Si no tiene el producto entonces se agrega

      // Para editar el array se clona
      const newCar = [...car];
      // Comprobar si car ya tiene el ID del producto a agregar (el producto)
      const alreadyInCar =
        newCar.filter((carProduct) => {
          // Si el id de algun producto del array clonado es igual al id del producto clickeado, devuelvelo
          return carProduct.id === idProduct; // Retorna los elementos que su ID sean igual al ID de la función (clickear add to car)
        }).length > 0; // Devuelve true/false dependiendo su ya tiene el ID del producto

      // Si el producto ya existe, entonces se actualizara
      if (alreadyInCar) {
        // Tenemos que encontrar la POSICIÓN del elemento a actualizar, en base a esa posición se actualiza
        newCar.forEach((productCar, index) => {
          // ACTUALIZAR EL PRODUCTO SI YA EXISTE
          if (productCar.id === idProduct) {
            const amount = newCar[index].amount; // Obtener la cantidad de ese producto

            newCar[index] = {
              id: idProduct,
              name: nameProduct,
              amount: amount + 1,
            };
          }
        });
      } else {
        // Si no existe, agregamos el producto al array clonado (solo con cantidad 1)
        newCar.push({
          id: idProduct,
          name: nameProduct,
          amount: 1,
        });
      }
      // Actualizar car dependiendo si se actualizara el elemento o se agregara al array
      setCar(newCar);
    }
  };
  return (
    <Container>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/blog" component={Blog} />
          <Route path="/shop">
            <Shop products={products} addProductToCar={addProductToCar} />
          </Route>
          <Route component={Error404} />
        </Switch>
      </main>
      <aside>
        <Car car={car} />
      </aside>
    </Container>
  );
}
const Container = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;
export default App;
