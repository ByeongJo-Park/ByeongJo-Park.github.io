import Profile from "./components/Profile"
import Carousel from "./components/Carousel"
import Skills from "./components/Skills"
// import Project1 from "./components/Project1"
// import Project2 from "./components/Project2"
// import Project3 from "./components/Project3"
import ProjectSummary from "./components/ProjectSummary"

function App() {
  return (
    <div>
      <Carousel>
        <Profile />
        <Skills />
        <ProjectSummary goToSlide={() => {}} />
        {/* <Project1 />
        <Project2 />
        <Project3 /> */}
      </Carousel>
    </div>
  )
}

export default App
