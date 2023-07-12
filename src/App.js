import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    --point--font: "Sansita", sans-serif;
    --base--font: "Do Hyeon", sans-serif;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
}
export default App;
