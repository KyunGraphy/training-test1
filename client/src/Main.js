import Slogan from "./Components/Main/Slogan";
import ProjectReel from "./Components/Main/ProjectReel";
import Footer from "./Components/Main/Footer";
import ScrollButton from "./Components/Tools/ScrollButton";

function Main({ prjAPI }) {
  return (
    <div className="Main">
      <Slogan />
      <ProjectReel prjAPI={prjAPI} />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Main;
