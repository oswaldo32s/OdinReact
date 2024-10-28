import Root from "./Root"
import Home from './Pages/Home/Home'
import Projects from "./Pages/Projects/Projects"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import ProjectsCard from "./Pages/Projects/ProjectsCard/ProjectsCard"
import Error from "./components/Error/Error"

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
        element: <Projects/>,
        errorElement: <Error/>,
        children: [
          {
            index: true,
            element: <ProjectsCard color={'light'}/>
          }
        ]
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