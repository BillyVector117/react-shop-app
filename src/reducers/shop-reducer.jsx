// Constantes
const initData = {
  products: [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
  ],
  car: [],
};
// Acciones
/* {
  type: "ADD_PRODUCT_TO_CAR";
}
 */
// Reducer (SIEMPRE DEVUELVE EL ESTADO, modificado o no)
// se encarga de ADMINISTRAR el estado global de la aplicación
export default function shopReducer(state = initData, action) {
  switch (action.type) {
    // En caso de que el dispatch de alguna función dispare esta acción, ejecuta el caso...
    case "ADD_PRODUCT_TO_CAR":
      // 'action' contiene los datos del dispatch diparado por la función que lo ejecuto,
      // el type (ejecutado), y los datos extra enviados, en este caso idProduct y nameProduct
      // console.log("soy la accion", action);
      const { idProduct, nameProduct, type } = action;
      // Solo si el state 'car' esta vacio (primera vez), modificalo agregandole los datos del producto seleccionado (solo uno)
      if (state.car.length === 0) {
        console.log('"car" state modified :', state.car);
        console.log("with TYPE:", type);

        return {
          // Modifica el state de 'car' como si fuese el modificador de useState
          // copia el state vacio y remplaza agregando los datos de car (modificando solo ese array)
          ...state,
          car: [{ id: idProduct, name: nameProduct, amount: 1 }],
        };
      } else {
        // Si el state NO ESTA VACIO, remplaza el array agregando lo nuevo
        // Tenemos que revisar que car no tenga el producto a agregar
        // Si ya lo tiene entonces se debera actualizar el valor.
        // Si no tiene el producto entonces se agrega

        // Para EDITAR el array principal de car, se debe clonar
        const newCar = [...state.car];
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
        return {
          ...state,
          car: newCar,
        };
      }
    default:
      return state;
  }
}
// Acciones
