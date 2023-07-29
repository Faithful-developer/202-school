import './assets/stylesheet.scss'
import {Route, Routes, Navigate} from "react-router-dom";
import HomePage from "./Routes/Home";
import ErrorPage from "./Routes/Error";
import AboutPage from "./Routes/About";
import ContactPage from "./Routes/Contact";
import {Helmet} from "react-helmet";

const App = () => {
    return (
        <div className="App">
            <Helmet>
                <link rel="apple-touch-icon" href="./assets/images/Uzbekistan.png"/>
                <link rel="icon" href="./assets/images/Uzbekistan.png"/>
            </Helmet>
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
