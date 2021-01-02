import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CHARACTERS } from "../constants/query";

interface ICharacter {
  node: { id: number; name: { full: string } };
}

export const Characters: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { loading, error, data } = useQuery(CHARACTERS, {
    variables: { page: page, perPage: 10 },
  });

  if (loading) return <p>Loading</p>;
  if (error)
    return (
      <>
        {console.error.bind(error)}
        <p>Error :(</p>
      </>
    );

  const { edges, pageInfo } = data.Media.characters;

  const prevButton = (
    <button
      onClick={() => {
        setPage(page - 1);
      }}
    >
      Prev
    </button>
  );
  const nextButton = (
    <button
      onClick={() => {
        setPage(page + 1);
      }}
    >
      Next
    </button>
  );

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Characters</h1>
      <p>Page: {page}</p>
      {page === 1 ? null : prevButton}
      {page === pageInfo.lastPage ? null : nextButton}
      {edges.map((character: ICharacter) => (
        <div key={character.node.id}>
          <br />
          <Link to={`/character/${character.node.id}`}>
            {character.node.name.full}
          </Link>
        </div>
      ))}
    </>
  );
};
