import React from "react";
import "./ResumePage.css";

export const ResumePage = () => {
  return (
    <div className="ResumePage">
      <div className="resume-name-div container-fluid mt-3">
        <h1>Aung Kaung Khant</h1>
      </div>
      <hr />
      <div className="resume-body-wrapper container-fluid">
        <div className="row">
          <div className="resume-body-main col-9">
            <div className="profile-section">
              <h2>Profile</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                consequat hendrerit nibh ut mattis. Proin maximus hendrerit
                aliquet. Quisque aliquam erat ut iaculis faucibus. Donec
                placerat nisi in interdum efficitur. Proin eget sem a leo mollis
                facilisis quis auctor justo. Fusce bibendum semper mi, eu
                interdum odio egestas at. Aenean condimentum nisl lacus, vitae
                porta leo sodales vitae. Cras vitae luctus est, in suscipit
                erat. Donec ac dignissim diam. Suspendisse potenti. Maecenas
                elementum purus ac enim sagittis, in pretium velit suscipit.
              </p>
            </div>
            <br />
            <div className="workhistory-section">
              <h2>Work History</h2>
              <div className="work-details-segment">
                <h3>Founder/Co-Founder, Myan Digital, Yangon</h3>
                <h4 className="timespan-text">August 2020 - Present</h4>
                <ul>
                  <li>
                    Founded through start-up acceleration by winning the Doh
                    Phandee Back To Business challenge
                  </li>
                  <li>
                    An organization with visions for fully digitized shops and
                    businesses in Myanmar
                  </li>
                  <li>
                    Played versatile roles in a team of 4 founders and surpassed
                    the start-up sustainability milestones set by the
                    accelerators
                  </li>
                </ul>
              </div>
              <div className="work-details-segment">
                <h3>WordPress Web Editor, AniDL, Online with Indian Team</h3>
                <h4 className="timespan-text">May 2017 - June 2018</h4>
                <ul>
                  <li>
                    Learnt Wordpress template editing for the video-downloading
                    website
                  </li>
                  <li>
                    Remote working experience with foreigners speaking English
                  </li>
                  <li>
                    Gained knowledge on video encoding, URL shortening, domain,
                    hosting and web ads
                  </li>
                </ul>
              </div>
              <div className="work-details-segment">
                <h3>
                  Asst. Tutor/Teacher, Tr. Daw Nwe Ni Private Tuition, Yangon
                </h3>
                <h4 className="timespan-text">May 2017 - Sept 2017</h4>
                <ul>
                  <li>
                    Joined as a part-timer and alumni after the matriculation
                    exam
                  </li>
                  <li>
                    A good experience of teaching students of different learning
                    capabilities and interests
                  </li>
                  <li>First earned income in life</li>
                </ul>
              </div>
            </div>
            <br></br>
            <div className="education-section">
              <h2>Education</h2>
              <div className="education-details-segment">
                <h3>
                  JavaScript & ReactJS, Turing Programming Language Center,
                  Yangon
                </h3>
                <h4 className="timespan-text">Feb 2020 - Feb 2021</h4>
              </div>

              <div className="education-details-segment">
                <h3>
                  B.E (C.E.I.T) Foundations, Yangon Technological University
                </h3>
                <h4 className="timespan-text">December 2017 - May 2018</h4>
                <p>
                  *Dropped out after the foundation year to pursue career and
                  passion.
                </p>
              </div>

              <div className="education-details-segment">
                <h3>High School, B.E.H.S No.1 Dagon Township, Yangon</h3>
                <h4 className="timespan-text">June 2010 - March 2017</h4>
              </div>

              <div className="education-details-segment">
                <h3>Primary School, B.E.P.S No.10 Dagon Township, Yangon</h3>
                <h4 className="timespan-text">June 2005 - Feb 2010</h4>
              </div>
            </div>
          </div>

          <div className="resume-body-side col-3">
            <div className="contact-section">
              <h2>Contact</h2>
              <p>
                <a href="#">dragon.takao21@gmail.com</a>
              </p>
              <p>+95 9 95 550 1280</p>
            </div>
            <div className="skills-section">
              <h2>Skills</h2>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>Critical Thinking</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div className="languages-section">
              <h2>Languages</h2>
              <ul>
                <li>Burmese</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
