import "./App.css";
import styled from "styled-components";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Shop from "./components/Shop";
import Error404 from "./components/Error404";
import Car from "./components/Car";
function App() {
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
          <Route path="/shop" component={Shop} />
          <Route component={Error404} />
        </Switch>
      </main>
      <aside>
        <Car />
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
