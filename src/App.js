import classes from "./styles/app.module.css";
import { getClass } from "./utils/cssClasses";
import AppContainer from "./components/AppContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppContainer
        className={getClass([
          classes.frame,
          classes.container,
          classes.background,
        ])}
      />
    </BrowserRouter>
  );
}

export default App;
