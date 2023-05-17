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
              <div className="slogan">TELL ME</div>
              <div className="slogan">HOW YOU</div>
              <div className="slogan">REALLY FEEL</div>
            </div>

            <div className="description">
              Taking care of our mental health is just as
            </div>
            <div className="description">
              important as taking care of our physical health
            </div>
            <div className="description">
              Here you can find resources, tips and support to
            </div>
            <div className="description">
              help you improve your mental health and wellbeing.
            </div>
          </div>
          <div className="middle-right">
            <img className="circle" src="/images/circle-abstract.png" alt="circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
