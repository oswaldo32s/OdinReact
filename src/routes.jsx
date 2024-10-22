import Root from "./Root"
import Home from './Pages/Home/Home'
import Projects from "./Pages/Projects/Projects"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  },

]

export default routes