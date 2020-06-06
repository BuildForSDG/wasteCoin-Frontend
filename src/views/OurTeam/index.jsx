import React, { useState } from "react";
import "./App.css";
import MohammedYayandi from "../../images/yayandi.jpg";
import MohammedZubairu from "../../images/Zubairu.jpg";

function OurTeam(props) {
  const [selectTeam, setSelectTeam] = useState("aminu");

  const changeProfile = (teamName) => {
    return setSelectTeam(teamName);
  };

  return (
    <div className="landing_page">
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12 pull-right">
              <div className="team-section-text">
                <h2 className="section-title">Team</h2>
                <div className="section-count">
                  <span>105</span>
                </div>
                <div className="section-text">

                  <p>
                    SDG Innovation Team 105 is a team of dynamic Developers and Data Scientists who are passionate
                    about solving day-to-day challenges using cutting-edge Technologies. One of which is the Wastecoin Project
                    which was developed to reward proper and efficient disposal of non-bioodegradable waste (NBW)
                    right from the source to the recyler. it is an app that leverage on a decentralized coin mining system where every waste miner
                    is rewarded accordingly.
                        </p>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-sm-12">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="team-list">
                    <ul>
                      <li className={`${selectTeam === "aminu" ? "active" : ""} wow zoomIn`} data-wow-duration="1s" data-wow-delay=".1s" onClick={() => changeProfile("aminu")}>
                        <a href="#team-1" data-team="team-1" name="aminu">
                          <figure><img src="http://www.webcoderskull.com/img/team4.png" alt="Aminu Israel"></img></figure>
                        </a>
                      </li>

                      <li className={`${selectTeam === "tope" ? "active" : ""} wow zoomIn`} data-wow-duration="1s" data-wow-delay=".3s"  onClick={() => changeProfile("tope")}>
                        <a href="#team-1" data-team="team-1">
                          <figure><img src="http://www.webcoderskull.com/img/team2.png" alt="Olarewaju Temitope"></img></figure>
                        </a>
                      </li>

                      <li className={`${selectTeam === "chidozie" ? "active" : ""} wow zoomIn`} data-wow-duration="1s" data-wow-delay=".5s"  onClick={() => changeProfile("chidozie")}>
                        <a href="#team-1" data-team="team-1">
                          <figure><img src="http://www.webcoderskull.com/img/team3.png" alt="Chidozie Managwu"></img></figure>
                        </a>
                      </li>

                      <li className={`${selectTeam === "bayero" ? "active" : ""} wow zoomIn`} data-wow-duration="1s" data-wow-delay=".7s"  onClick={() => changeProfile("bayero")}>
                        <a href="#team-1" data-team="team-1">
                          <figure><img src={MohammedYayandi} alt="Mohhammed Bayero"></img></figure>
                        </a>
                      </li>

                      <li className={`${selectTeam === "zubairu" ? "active" : ""} wow zoomIn`} data-wow-duration="1s" data-wow-delay=".9s" onClick={() => changeProfile("zubairu")}>
                        <a href="#team-1" data-team="team-1">
                          <figure><img src={MohammedZubairu} alt="Mohammed Zubairu"  ></img></figure>
                        </a>
                      </li>

                      <li className={`${selectTeam === "daniel" ? "active" : ""} wow zoomIn`} data-wow-duration="1s" data-wow-delay="1.1s"  onClick={() => changeProfile("daniel")}>
                        <a href="#team-1" data-team="team-1">
                          <figure><img src="http://www.webcoderskull.com/img/team2.png" alt="Olagunju Daniel"></img></figure>
                        </a>
                      </li>

                      <li className={`${selectTeam === "kamau" ? "active" : ""} wow zoomIn`} data-wow-duration="1s" data-wow-delay="1.3s"  onClick={() => changeProfile("kamau")}>
                        <a href="#team-1" data-team="team-1">
                          <figure><img src="http://www.webcoderskull.com/img/team3.png" alt="Stephen Kamau"></img></figure>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9 col-sm-8">
                  <div id="team-1" className={`team-single ${selectTeam === "aminu" ? "active" : ""}`}>
                    <div className="team-img">
                      <img src="http://www.webcoderskull.com/img/team4.png" alt=""></img>
                      <div className="team-social">
                        <ul>
                          <li><a href="http://www.github.com/AminuIsrael/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                          <li><a href="##"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="##"><i className="fa fa-whatsapp"></i></a></li>
                          <li><a href="##"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info text-center">
                      <h4>Aminu Israel</h4>
                      <p>Developer</p>
                    </div>
                  </div>

                  <div id="team-2" className={`team-single ${selectTeam === "tope" ? "active" : ""}`}>
                    <div className="team-img">
                      <img src="http://www.webcoderskull.com/img/team2.png" alt=""></img>
                      <div className="team-social">
                        <ul>
                          <li><a href="http://www.github.com/albert85/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                          <li><a href="##"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="##"><i className="fa fa-whatsapp"></i></a></li>
                          <li><a href="##"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info text-center">
                      <h4>Olarewaju Temitope</h4>
                      <p>Developer</p>
                    </div>
                  </div>
                  <div id="team-3" className={`team-single ${selectTeam === "chidozie" ? "active" : ""}`}>
                    <div className="team-img">
                      <img src="http://www.webcoderskull.com/img/team3.png" alt=""></img>
                      <div className="team-social">
                        <ul>
                          <li><a href="http://www.github.com/chidoziemanagwu/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                          <li><a href="##"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="##"><i className="fa fa-whatsapp"></i></a></li>
                          <li><a href="##"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info text-center">
                      <h4>Chidozie Managwu</h4>
                      <p>Developer</p>
                    </div>
                  </div>
                  <div id="team-4" className={`team-single ${selectTeam === "bayero" ? "active" : ""}`}>
                    <div className="team-img">
                      <img src={MohammedYayandi} alt=""></img>
                      <div className="team-social">
                        <ul>
                          <li><a href="http://www.github.com/byruzyayandy1/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                          <li><a href="##"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="##"><i className="fa fa-whatsapp"></i></a></li>
                          <li><a href="##"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info text-center">
                      <h4>Mohammed Bayero</h4>
                      <p>Data Scientist</p>
                    </div>
                  </div>

                  <div id="team-5" className={`team-single ${selectTeam === "zubairu" ? "active" : ""}`}>
                    <div className="team-img">
                      <img src={MohammedZubairu} alt=""></img>
                      <div className="team-social">
                        <ul>
                          <li><a href="http://www.github.com/moxeey/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                          <li><a href="##"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="##"><i className="fa fa-whatsapp"></i></a></li>
                          <li><a href="##"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info text-center">
                      <h4>Mohammed Zubairu</h4>
                      <p>Mobile Developer</p>
                    </div>
                  </div>

                  <div id="team-6" className={`team-single ${selectTeam === "daniel" ? "active" : ""}`}>
                    <div className="team-img">
                      <img src="http://www.webcoderskull.com/img/team2.png" alt=""></img>
                      <div className="team-social">
                        <ul>
                          <li><a href="http://www.github.com/todak2000/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                          <li><a href="##"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="##"><i className="fa fa-whatsapp"></i></a></li>
                          <li><a href="http://www.linkedin.com/in/daniel-olagunju-79b7b9b5/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info text-center">
                      <h4>Olagunju Daniel</h4>
                      <p>Technical Team Lead</p>
                    </div>
                  </div>

                  <div id="team-7" className={`team-single ${selectTeam === "kamau" ? "active" : ""}`}>
                    <div className="team-img">
                      <img src="http://www.webcoderskull.com/img/team3.png" alt=""></img>
                      <div className="team-social">
                        <ul>
                          <li><a href="http://www.github.com/stephen-kamau/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                          <li><a href="##"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="##"><i className="fa fa-whatsapp"></i></a></li>
                          <li><a href="##" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-info text-center">
                      <h4>Stephen Kamau</h4>
                      <p>Mentor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default OurTeam;

