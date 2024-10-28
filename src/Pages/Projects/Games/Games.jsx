import { projectOverview } from "../ProjectsCard/projectsData"

function Games() {
  
  return(
    <>
      <h2>Odin&apos;s Project Games</h2>
      <section>
        {
          projectOverview.map(project => {
            return (
              <button key={project.projectId}></button>
            )
          })
        }
      </section>
    </>
  )
}

export default Games