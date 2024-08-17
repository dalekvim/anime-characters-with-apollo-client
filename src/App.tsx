import { Link, Route, Routes } from "react-router-dom";
import { Character } from "./pages/Character";
import { Characters } from "./pages/Characters";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/character/:id" element={<Character />} />
      <Route
        path="/"
        element={
          <>
            404 Page error not found.
            <br />
            <Link to="/">Go home.</Link>
          </>
        }
      />
    </Routes>
  );
};
