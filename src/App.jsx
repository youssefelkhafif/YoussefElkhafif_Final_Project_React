import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./components/signup/signin"
import Signup from "./components/signup/signup"
import Forgotpasswor from "./components/signup/Forgotpasswor"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={< Signin />} />
        <Route path="/Singup" element={< Signup />} />
        <Route path="/Forgotpasswor" element={<Forgotpasswor />} />

      </Routes>

    </>
  )
}

export default App
