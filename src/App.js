import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './pages/details/Details';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import WhyUs from './pages/WhyUs';
import Coaches from './pages/Coaches';
import Contact from './pages/Contact';
import Services from './pages/details/services/Services';
import Gallery from './pages/details/Gallery';
import Reviews from './pages/details/Reviews';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/why-us",
          element: <WhyUs />
        },
        {
          path: "/coaches",
          element: <Coaches />
        },
        {
          path: "/reviews",
          element: <Reviews />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/details",
          element: <Details />,
          children: [
            {
              path: "services",
              element: <Services/>
            },
            {
              path: "gallery",
              element: <Gallery/>,
            },
            {
              path: "reviews",
              element: <Reviews/>,
            }
          ]
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
