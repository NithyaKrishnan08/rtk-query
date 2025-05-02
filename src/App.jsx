import AllProducts from "./components/AllProducts"
import SpecificProduct from "./components/SpecificProduct"
import AddNewProduct from "./components/AddNewProduct"
import UpdateProduct from "./components/UpdateProduct"
import DeleteProduct from "./components/DeleteProduct"

function App() {
  return (
    <>
      <h1>React Toolkit Query</h1>
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={10} /> */}
      <DeleteProduct productId={2} />
    </>
  )
}

export default App
