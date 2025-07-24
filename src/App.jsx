import {useState} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Home from './components/home/Home.jsx'
import About from "./components/about/About.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Layout from "./components/layout/Layout.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {

    const router = createBrowserRouter(
        [{ path:"", element: <Layout/> , children:
                [
                    {path: "", element: <Home/>},
                    {path: "about", element: <About/>},
                    {path: "portfolio", element: <Portfolio/>},
                    {path: "contact", element: <Contact/>}
                ]
        }]
    )

    return (
        <div className="overflow-hidden">
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
