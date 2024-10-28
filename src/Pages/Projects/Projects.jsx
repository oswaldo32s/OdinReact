import { useParams } from "react-router-dom";
import Games from "./Games/Games";

function Projects() {
  const {projectId} = useParams()
  return (
    <>
    {projectId == 1 ? (
      <Games/>
    ) : (
      <h2>404 : No project Found</h2>
    )}
    </>
  )
}

export default Projects