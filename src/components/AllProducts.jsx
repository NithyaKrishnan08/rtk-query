import { useGetAllProductQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();
  console.log(data);

  if (isError) {
    return <h1>Oh..No.. we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.products.map((p) => (
        <div key={p.id}>
          <h1 key={p.id}>{p.title}</h1>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;