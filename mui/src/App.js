import Home from 'pages/Home/Home';
import Root from './pages/Root';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Create from 'pages/Create/Create';
import NotFound from 'pages/NotFound/NotFound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
      {/*  */}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} className="App"></RouterProvider>;
}
