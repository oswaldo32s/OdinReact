import Root from "./Root"
import Home from './Pages/Home/Home'

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]

export default routes