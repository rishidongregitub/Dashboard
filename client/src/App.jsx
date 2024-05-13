import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:<div><LogIn/></div>
  },
  {
    path:'/register',
    element:<div><Register/></div>
  },
  {
    path:'/dashboard',
    element:<div><Dashboard/></div>
  },
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App