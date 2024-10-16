import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import CadastrarUsuario from './routes/CadastrarUsuario.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx'
import Login from './routes/Login.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/cadastro', element:<CadastrarUsuario/>},
      {path:'/contato', element:<Contato/>},
      {path:'/login', element:<Login/>},
      {path:'/produtos', element:<Produtos/>},
      {path:'/sobre', element:<Sobre/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
