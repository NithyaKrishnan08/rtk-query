import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, {data, error, isLoading}] = useAddNewProductMutation();
  console.log(data);

  if (error) {
    return <h1>Oh..No.. we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        title: "Amzing Tissue",
        category: "beauty",
        description: 'Best tissue which absorbs moisture and oil'
      };
      await addNewProduct(newProduct);
    } catch (err) {
      console.error("Error adding new product: ", err)
    }
  }

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <div>
        <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
      </div>
    </div>
  );
};

export default AddNewProduct;