import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import MainLayout from "./components/MainLayout"
import Login from "./pages/login/Login"
import SignIn from "./pages/signin/SignIn"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home /> } />
      <Route path="about" element={<About /> } />
      <Route path="login" element={<Login />} />
      <Route path="signIn" element={<SignIn />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
