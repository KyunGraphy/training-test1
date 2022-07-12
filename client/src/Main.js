import Slogan from "./Components/Main/Slogan";
import ProjectReel from "./Components/Main/ProjectReel";
import Footer from "./Components/Main/Footer";

function Main({ prjAPI }) {
  return (
    <div className="Main">
      <Slogan />
      <ProjectReel prjAPI={prjAPI} />
      <Footer />
    </div>
  );
}

export default Main;
