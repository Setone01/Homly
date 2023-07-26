import {
  //createBrowserRouter//,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./component/Layout";
import Landing from "./Pages/landingPage/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
