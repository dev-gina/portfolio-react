import {createBrowserRouter} from 'react-router-dom'
import Layout from "../pages/layout/Layout"
import About from '../pages/about/About'
import NotFound from '../pages/NotFound'
// import Home from '../pages/home/Home'
import Portfolio from '../pages/portfolio/Projects';
import Study from '../pages/study/Study'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/study',
                element: <Study />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router