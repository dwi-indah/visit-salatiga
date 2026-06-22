import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import Attraction from './pages/Attraction';
import Event from './pages/Event';
import Accommodation from './pages/Accommodation';
import Itenary from './pages/Itenary';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Credit from './pages/Credit';


let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/attraction",
    element: <Attraction />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/accomodation",
    element: <Accommodation />,
  },
  {
    path: "/itenary",
    element: <Itenary />,
  },
  {
    path: "/term",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/credit",
    element: <Credit />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
