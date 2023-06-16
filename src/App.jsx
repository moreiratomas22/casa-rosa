import "./App.css";
import { Footer, Header, Main, Menu, Productos, Nosotros } from "./componentesContainer";
import { BrowserRouter, createBrowserRouter, Outlet, Router, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "nosotros",
          element: <Nosotros />,
        },
        {
          path: "productos",
          element: <Productos />,
        },
        {
          path: "menu",
          element: <Menu />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
