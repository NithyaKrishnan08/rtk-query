import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const {data, isError, isLoading} = useGetProductByIdQuery(3);
  console.log(data);

  if (isError) {
    return <h1>Oh..No.. we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h1 key={data.id}>{data.title}</h1>
          <p>{data.description}</p>
          <img src={data.images} />
        </div>
      ): (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SpecificProduct;