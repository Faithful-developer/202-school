import './assets/stylesheet.scss'
import {Route, Routes, Navigate} from "react-router-dom";
import HomePage from "./Routes/Home";
import ErrorPage from "./Routes/Error";
import AboutPage from "./Routes/About";
import ContactPage from "./Routes/Contact";

const App = () => {
    return (
        <div className="App">
           <Routes>
               <Route path='/' element={<HomePage/>} />
               <Route path='/home' element={ <Navigate to='/'/> }/>
               <Route path='/about' element={<AboutPage/>} />
               <Route path='/contact' element={<ContactPage/>} />
               <Route path='*' element={<ErrorPage/>} />
           </Routes>
        </div>
    );
}

export default App;
