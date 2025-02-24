import { useParams } from "react-router";

export default function MovieGenrePage() {
  const params = useParams();
  const categoryId = params.categoryId;


  if (!categoryId) {
    return <h1>Loading...</h1>;
  }

  // Small regexpression to check if the categoryId is a valid number
  if (!/^\d+$/.test(categoryId)) {
    return <h1>Invalid Category ID</h1>;
  }

  return (
    <>
      <h1>Movies in genre {categoryId}</h1>
    </>
  );
}