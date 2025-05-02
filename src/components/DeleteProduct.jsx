import { useDeleteProductMutation } from "../app/service/dummyData";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, {data, error, isLoading}] = useDeleteProductMutation();
  console.log(data);

  if (error) {
    return <h1>Oh..No.. we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.error("Error updating product: ", err)
    }
  }

  return (
    <div>
      <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
      <div>
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
      </div>
    </div>
  );
};

export default DeleteProduct;