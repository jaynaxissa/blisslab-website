import React from "react";
import Header from "../components/Header";
import "./home.css";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="home-container">
        <Header />
        <div className="middle">
          <div className="middle-left">
            <div className="mental-health">Mental Health</div>

            <div className="all-slogans">
              <div className="slogan">EMPOWER,</div>
              <div className="slogan">YOUR</div>
              <div className="slogan">INNER STRENGTH</div>
            </div>

            <div className="description">
              Discover a transformative journey where mental and physical
            </div>
            <div className="description">
              health intertwine, offering you an empowering sanctuary.
            </div>
            <div className="description">
              Immerse yourself in a wealth of resources, valuable tips, and{" "}
            </div>
            <div className="description">
              unwavering support, nurturing your mental wellbeing with care.{" "}
            </div>
          </div>
          <div className="middle-right">
            <img
              className="circle"
              src="/images/circle-abstract.png"
              alt="circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
