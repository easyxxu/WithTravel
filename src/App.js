import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
      <Header />
    </div>
  );
}
export default App;
