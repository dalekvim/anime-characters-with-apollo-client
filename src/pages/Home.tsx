import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        All the data comes from <a href="https://anilist.co/graphiql">here</a>.
      </p>
      Click {"-->"}
      <Link to="/characters">Characters</Link>
      {"<--"}
      <br />
      <p>
        This has a list of anime characters. You can click on them to see
        details.
      </p>
    </>
  );
};
