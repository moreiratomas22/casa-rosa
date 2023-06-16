import "./App.css";
import { Footer, Header, Main , Menu, Productos, Nosotros} from "./componentesContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/nosotros",
      element: <div>Nosotros</div>,
    },
    {
      path: "/productos",
      element: <div>Productos</div>,
    },
    {
      path: "/menu",
      element: <Menu />
    }

  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
