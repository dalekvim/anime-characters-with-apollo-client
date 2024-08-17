import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { CHARACTER } from "src/constants/query";

export const Character: React.FC = () => {
  const params = useParams();

  const { loading, error, data } = useQuery(CHARACTER, {
    variables: { id: params.id },
  });

  if (loading) return <p>Loading</p>;
  if (error)
    return (
      <>
        {console.error.bind(error)}
        <p>Error :(</p>
      </>
    );

  const { image, name, description } = data.Character;

  return (
    <>
      <Link to="/characters">Go back.</Link>
      <br />
      <img src={image.large} alt={name.full} style={{ float: "left" }} />
      <h2>Name: {name.full}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </>
  );
};
