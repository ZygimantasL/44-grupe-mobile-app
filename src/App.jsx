import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from  './App.module.css';
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { NoPage } from "./pages/404/404";
import { Service1 } from "./pages/features/feature1";
import { Service2 } from "./pages/features/feature2";
import { Service3 } from "./pages/features/feature3";
import { Register } from "./pages/register/register";
import { TOS } from "./pages/register/Tos";

// import { Services } from "./pages/Services";

// import { Layout } from "./layout/Layout";
// import { Layout2 } from "./layout/Layout2";

function App() {

    return(
        <div className={style.app}>
        <BrowserRouter>
        <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/service1' element={<Service1 />} />
        <Route index path='/service2' element={<Service2 />} />
        <Route index path='/service3' element={<Service3 />} />
        <Route index path='/Register' element={<Register />} />
        <Route index path='/Tos' element={<TOS />} />
        <Route index path='/Login' element={<Login />} />
        <Route index path='*' element={<NoPage />} />        
        </Routes>
        </BrowserRouter>    
        </div>
    )
    
}
export default App;