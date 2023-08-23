import Medical from "../components/medical";
import Generative from "../components/generative";
import Navbar from "../components/navbar";
import Chatting from "../components/chatting";
import Yoga from "../components/yoga";
import Footer from "../components/footer";
import "../App.css";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="carousel carousel-vertical w-screen">
        <div className="carousel-item w-screen">
          <Medical />
        </div>
        <div className="carousel-item w-screen">
          <Generative />
        </div>
        <div className="carousel-item w-screen">
          <Chatting />
        </div>
        <div className="carousel-item w-screen">
          <Yoga />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
