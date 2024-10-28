import Root from "./Root"
import Home from './Pages/Home/Home'
import Projects from "./Pages/Projects/Projects"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Error from "./components/Error/Error"
import ProjectsCard from "./Pages/Projects/ProjectsCard/ProjectsCard"

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error/>,
      },
      {
        path: 'projects',
        element: <ProjectsCard color='light'/>,
        errorElement: <Error/>
      },
      {
        path: 'projects/:projectId',
        element: <Projects/>,
        errorElement: <Error/>
      },
      {
        path: 'about',
        element: <About/>,
        errorElement: <Error/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
        errorElement: <Error/>,
      }
    ]
  },

]

export default routes