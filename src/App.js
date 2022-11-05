import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUsers from './Components/AddUsers';
import Home from './Components/Home';
import Update from './Components/Update';
import Users from './Components/Users';
import Main from './Layouts/Main';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/Home',
        element: <Home></Home>
      },
      {
        path: '/users',
        element: <Users></Users>
      },
      {
        path: '/form',
        element: <AddUsers></AddUsers>
      },
      {
        path:'/update/:id',
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
        element:<Update></Update>
      }
    ]
  }
])
function App() {
  return (
    <div className='w-5/6 mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
