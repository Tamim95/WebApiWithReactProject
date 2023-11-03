import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import  FetchEmployee  from "./components/FetchEmployee";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
   },
    {
        path: '/fetch-employees',
       element: <FetchEmployee />

    }
];

export default AppRoutes;
