import Slogan from "./Components/MainPage/Slogan";
import ProjectReel from "./Components/MainPage/ProjectReel";
import Footer from "./Components/MainPage/Footer";
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
