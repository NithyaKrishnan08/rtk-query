import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, {data, error, isLoading}] = useUpdateProductMutation();
  console.log(data);

  if (error) {
    return <h1>Oh..No.. we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Eyeshadow Palette with Mirror Sponge",
      };
      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.error("Error updating product: ", err)
    }
  }

  return (
    <div>
      <h1>{data?.title}</h1>
      <div>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
      </div>
    </div>
  );
};

export default UpdateProduct;