import React, { useState } from 'react';
import './App.css';
import fetch from 'isomorphic-unfetch';

const port = 5000;
const hostname = window.location.protocol + '//' + window.location.hostname;
const baseUrl = hostname + ':' + port + '/contact' ;
console.log(baseUrl);

function App() {
  const [status, setStatus] = useState('Submit');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message, subject, phone } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch('https://oluyinka-back-end.herokuapp.com/contact' || 'baseUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    setResult(result.status);
    // alert(result.status);
    name.value = '';
    email.value = '';
    subject.value = '';
    phone.value = '';
    message.value = '';
  };

  return (
    <div className='App'>
      <div className='header_wapper wow fadeInUp' id='header'>
        <div className='header'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-2'>
                <div className='logo toparrow'>
                  <a href='#tophome'> Oluyinka </a>
                </div>
              </div>
              <div className='col-md-10'>
                <div className='right_header'>
                  <nav id='cssmenu'>
                    <div id='head-mobile'>Menu</div>
                    <div className='button'></div>
                    <ul>
                      <li>
                        <a
                          className='toparrow'
                          data-hover='Home'
                          href='#tophome'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className='toparrow'
                          data-hover='About'
                          href='#about'
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          className='toparrow'
                          data-hover='Skills'
                          href='#skills'
                        >
                          Skills
                        </a>
                      </li>
                      <li>
                        <a
                          className='toparrow'
                          data-hover='education'
                          href='#education'
                        >
                          Education
                        </a>
                      </li>
                      <li>
                        <a
                          className='toparrow'
                          data-hover='xperience'
                          href='#xperience'
                        >
                          Xperience
                        </a>
                      </li>
                      <li>
                        <a
                          className='toparrow'
                          data-hover='Portfolio'
                          href='#portfolio'
                        >
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          className='toparrow'
                          data-hover='Contact'
                          href='#contact'
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='db_home_slider wow fadeIn'>
        <figcaption>
          <div
            className='tg-bannercontent wow zoomIn'
            data-tilt=''
            style={{
              willChange: 'transform',
              transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)',
            }}
          >
            <div className='db_banner_contant'>
              <div className='db_face_images'>
                <div className='circle-ripple'></div>
                <img
                  src='assets/images/yinka.jpeg'
                  alt=''
                  className='img-fluid'
                />
              </div>
              <div className='db_banner_text'>
                <h1>Yinka</h1>
                <h1>Abubakar</h1>
                <h2>Full-Stack Developer & Mentor</h2>
              </div>
              <ul className='social'>
                <li>
                  <a
                    href='https://web.facebook.com/Proverbman'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/Bright1st'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://join.skype.com/invite/jeuhYtJhzHsT'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-skype'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/oluyinka-abubakar-b31782124/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/lexico4real'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fa fa-github'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </figcaption>
      </section>
      <section id='about' className='db_section_top db_about_section'>
        <div className='db_section_top_gap'>
          <div className='container'>
            <div className='db_section_title wow fadeInUp'>
              <img
                className='img-fluid db_section_img'
                src='assets/images/about.png'
                alt=''
              />
              <h2>About me</h2>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='db_about_text_wapper db_common_text wow fadeInUp'>
                  <strong>Hello! I’m Oluyinka.</strong> I am a Software
                  Developer with over five years of experience leading both
                  front-end and back-end development and performing quality
                  assurance. Led different teams of developers/programmers
                  across technology, education, health, business and design
                  departments achieving amazing levels of success.
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='db_small_title wow fadeInUp'>
                  Personal Details
                </div>
                <ul className='db_common_text db_personal_details'>
                  <li className='wow fadeInUp'>
                    <strong>Phone</strong>+234 802 099 6658
                  </li>
                  <li className='wow fadeInUp'>
                    <strong>Email</strong>lexico4real@gmail.com
                  </li>
                  <li className='wow fadeInUp'>
                    <strong>website</strong>tinyurl.com/22f6t48u
                  </li>
                  <li className='wow fadeInUp'>
                    <strong>ADDRESS</strong>Lagos, NG
                  </li>
                  <li className='wow fadeInUp'>
                    <strong>Job Status</strong>
                    <span>FULL-STACK DEVELOPER</span>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <div className='db_small_title wow fadeInUp'>My Interests</div>
                <div className='db_my_interests db_common_text'>
                  <ul>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-gamepad'></i>
                        <span>Games</span>
                      </p>
                    </li>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-headphones'></i>
                        <span>Music</span>
                      </p>
                    </li>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-plane'></i>
                        <span>Travel</span>
                      </p>
                    </li>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-apple'></i>
                        <span>Mac OS</span>
                      </p>
                    </li>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-video-camera'></i>
                        <span>Cinema</span>
                      </p>
                    </li>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-coffee'></i>
                        <span>Coffee</span>
                      </p>
                    </li>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-truck'></i>
                        <span>Cars</span>
                      </p>
                    </li>
                    <li className='wow fadeInUp'>
                      <p>
                        <i className='fa fa-money'></i>
                        <span>Money</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='db_download_cv_button wow fadeInUp'>
              <a
                href='https://drive.google.com/file/d/1Q9pAtg78KE-nBJjO3WiNGF39lRMnSA_y/view?usp=sharing'
                className='btn01'
                target='_blank'
                rel='noreferrer'
                download
              >
                Downlaod CV <i className='fa fa-download'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='skills' className='db_section_top db_skills_section'>
        <div className='db_section_top_gap section_bg'>
          <div className='container'>
            <div className='db_section_title wow fadeInUp'>
              <img
                className='img-fluid db_section_img'
                src='assets/images/skills.png'
                alt=''
              />
              <h2>Skills</h2>
            </div>
            <div className='row justify-content-around'>
              <div className='col-lg-5 col-md-6'>
                <div className='db_small_title wow fadeInUp'>
                  Main Technical Skills
                </div>
                <div className='db_each-skills db_common_text'>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>JavaScript</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>HTML & CSS</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>99%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>ReactJS</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>NodeJS</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>NestJS</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '95%' }}>
                          <div className='percentagem-num'>95%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Java</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>SQL</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '98%' }}>
                          <div className='percentagem-num'>98%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-md-6'>
                <div className='db_small_title wow fadeInUp'>
                  Professional Skills
                </div>
                <div className='db_each-skills db_common_text'>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Communication</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Front-End Development</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '80%' }}>
                          <div className='percentagem-num'>80%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Back-End Development</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '95%' }}>
                          <div className='percentagem-num'>95%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Teamwork</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Creativity</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '90%' }}>
                          <div className='percentagem-num'>99%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Dedication</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '95%' }}>
                          <div className='percentagem-num'>95%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='candidatos wow fadeInUp'>
                    <div className='parcial'>
                      <div className='info'>
                        <div className='nome'>Project Management</div>
                      </div>
                      <div className='progressBar'>
                        <div className='percentagem' style={{ width: '94%' }}>
                          <div className='percentagem-num'>94%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='education' className='db_section_top db_resume_section'>
        <div className='db_section_top_gap'>
          <div className='container'>
            <div className='db_section_title wow fadeInUp'>
              <img
                className='img-fluid db_section_img'
                src='assets/images/resume.png'
                alt=''
              />
              <h2>Education</h2>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='db_education_details db_common_text'>
                  <div className='db_education_item dark_box_bg wow fadeInUp'>
                    <h4>
                      Computer Science From
                      <a href='www.yabatech.edu.ng'>
                        Yaba College of Technology
                      </a>
                      <sub>(HND)</sub>
                    </h4>
                    <div className='db_year'>2016-2018</div>
                    <p>
                      Higher National Diploma with Upper Credit (3.09 out of
                      4.00).
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='db_experience_details db_common_text'>
                  <div className='db_experience_item dark_box_bg wow fadeInUp'>
                    <h4>
                      Computer Science From
                      <a href='www.yabatech.edu.ng'>
                        Yaba College of Technology
                      </a>
                      <sub>(ND)</sub>
                    </h4>
                    <div className='db_year'>2012-2015</div>
                    <p>
                      Ordinary Natinal Diploma with Distinction (3.62 out of
                      4.00)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='xperience' className='db_section_top db_resume_section'>
        <div className='db_section_top_gap'>
          <div className='container'>
            <div className='db_section_title wow fadeInUp'>
              <img
                className='img-fluid db_section_img'
                src='assets/images/experience.png'
                alt=''
              />
              <h2>My Experience</h2>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='db_education_details db_common_text'>
                  <div className='db_education_item dark_box_bg wow fadeInUp'>
                    <h4>
                      Software Developer <a href='/'>Fidelity Bank Plc</a>
                    </h4>
                    <div className='db_year'>10/2021 till date</div>
                    <p>
                      -Researching, designing, implementing, and managing
                      software programs -Testing and evaluating new programs
                      -Identifying areas for modification in existing programs
                      and subsequently developing these modifications -Writing
                      and implementing efficient code -Determining operational
                      practicality -Developing quality assurance procedures
                      -Deploying software tools, processes, and metrics ...
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='db_experience_details db_common_text'>
                  <div className='db_experience_item dark_box_bg wow fadeInUp'>
                    <h4>
                      SD Mentor <a href='/'>Lighthouse Labs</a>
                    </h4>
                    <div className='db_year'>11/2021 till date</div>
                    <p>
                      - Prepare and deliver lectures, tutorials and workshops
                      for students. - Contribute to the teaching team and
                      partake in all formal daily functions and meetings. -
                      Deliver live coding sessions. - Support and mentor
                      (including pairing) students. - Perform code reviews. -
                      Perform technical check-ins with students. - Solicit and
                      respond to feedback from students and other mentors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='db_education_details db_common_text'>
                  <div className='db_education_item dark_box_bg wow fadeInUp'>
                    <h4>
                      Full-Stack Developer <a href='/'>Octosoft Tech.</a>
                    </h4>
                    <div className='db_year'>04/2021 - 10/2021</div>
                    <p>
                      -Participating in the design and creation of scalable
                      software. -Writing clean, functional code on the front-
                      and back-end. -Testing and fixing bugs or other coding
                      issues. -Developing APIs for web and mobile applications
                      using NestJS and Strapi. -Developing web applications and
                      mobile applications front end using ReactJS and NestJS.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='db_experience_details db_common_text'>
                  <div className='db_experience_item dark_box_bg wow fadeInUp'>
                    <h4>
                      SD Mentor <a href='/'>Aptech</a>
                    </h4>
                    <div className='db_year'>01/2019 - 10/2021</div>
                    <p>
                      -Gave trainings on web applications, desktop applications
                      and mobile applications developments. -Gave trainings on
                      advanced database administration using Oracle Server.
                      -Lead students to develop projects an desktop
                      applications, web applications and mobile apps. -Guided
                      students on the use and principles of UI/UX design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='db_education_details db_common_text'>
                  <div className='db_education_item dark_box_bg wow fadeInUp'>
                    <h4>
                      Softwate Engineer <a href='/'>Golden Crest Tech.</a>
                    </h4>
                    <div className='db_year'>01/2021 - 01/2019</div>
                    <p>
                      Designed and developed reports in SQL Server Reporting
                      Services. Contributed ideas and suggestions in team
                      meetings with Contents Managers, Software Developers and
                      Web Developers and delivered updates on deadlines, designs
                      and enhancements. Contributed to development codebase used
                      in automated deployment of software on multiple virtual
                      machines.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='db_experience_details db_common_text'>
                  <div className='db_experience_item dark_box_bg wow fadeInUp'>
                    <h4>
                      Full-Stack Developer <a href='/'>CityLink Tech.</a>
                    </h4>
                    <div className='db_year'>09/2019 - 01/2018</div>
                    <p>
                      -Worked effectively with cross-functional design teams to
                      create software solutions that elevated client-side
                      experience and significantly improved overall
                      functionality and performance. -Investigated new and
                      emerging software applications within Financial
                      Institutions, Stock Broken Firm and Educational Settings
                      to design, select, implement and use administrative
                      information systems effectively...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='portfolio' className='db_section_top db_portfolio_section'>
        <div className='db_section_top_gap section_bg'>
          <div className='container'>
            <div className='db_section_title wow fadeInUp'>
              <img
                className='img-fluid db_section_img'
                src='assets/images/work.png'
                alt=''
              />
              <h2>Recent Portfolio</h2>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='db_portfolio_menu wow fadeInUp'>
                  {/* <ul
                    className='nav nav-pills mb-3'
                    id='pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item'>
                      <a
                        className='btn01 active'
                        id='showall-tab'
                        data-toggle='pill'
                        href='#showall'
                        role='tab'
                        aria-controls='showall'
                        aria-selected='true'
                      >
                        All Categories
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='btn01'
                        id='Cars-tab'
                        data-toggle='pill'
                        href='#Cars'
                        role='tab'
                        aria-controls='Cars'
                        aria-selected='false'
                      >
                        UI/UX Design
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='btn01'
                        id='City-tab'
                        data-toggle='pill'
                        href='#City'
                        role='tab'
                        aria-controls='City'
                        aria-selected='false'
                      >
                        Web Application
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='btn01'
                        id='Forest-tab'
                        data-toggle='pill'
                        href='#Forest'
                        role='tab'
                        aria-controls='Forest'
                        aria-selected='false'
                      >
                        Others
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='tab-content' id='pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='showall'
                    role='tabpanel'
                    aria-labelledby='showall-tab'
                  >
                    <div className='row justify-content-md-center'>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <a href='/'>
                            <img
                              className='card-img'
                              src='assets/images/pc1.jpg'
                              alt=''
                            />
                          </a>
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://wtlte.csb.app/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/pc2.jpg'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click here!</span>
                            <a
                              href='https://xrl70.csb.app/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/pc3.jpg'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.afya.care'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/pc4.jpg'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.octosoft.ai'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/pc5.jpg'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://xbfbz.csb.app/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/pc6.jpg'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://3t099.csb.app/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <a href='/'>
                            <img
                              className='card-img'
                              src='assets/images/g4.png'
                              alt=''
                            />
                          </a>
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://mystifying-hopper-888887.netlify.app/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <a href='/'>
                            <img
                              className='card-img'
                              src='assets/images/g2.png'
                              alt=''
                            />
                          </a>
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://bastionhmo.com/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <a href='/'>
                            <img
                              className='card-img'
                              src='assets/images/g1.png'
                              alt=''
                            />
                          </a>
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.teachmetutorsng.com'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <a href='/'>
                            <img
                              className='card-img'
                              src='assets/images/g7.png'
                              alt=''
                            />
                          </a>
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.themenubyaj.com'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <a href='/'>
                            <img
                              className='card-img'
                              src='assets/images/g6.png'
                              alt=''
                            />
                          </a>
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.afya.care'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <a href='/'>
                            <img
                              className='card-img'
                              src='assets/images/g5.png'
                              alt=''
                            />
                          </a>
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://sct4d.csb.app/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='Cars'
                    role='tabpanel'
                    aria-labelledby='Cars-tab'
                  >
                    <div className='row justify-content-md-center'>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g1.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g4.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g6.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='City'
                    role='tabpanel'
                    aria-labelledby='City-tab'
                  >
                    <div className='row justify-content-md-center'>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g1.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g2.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g6.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='Forest'
                    role='tabpanel'
                    aria-labelledby='Forest-tab'
                  >
                    <div className='row justify-content-md-center'>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g2.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g4.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-6'>
                        <div className='Portfolio'>
                          <img
                            className='card-img'
                            src='assets/images/g5.png'
                            alt=''
                          />
                          <figcaption className='fig-caption'>
                            <i className='fa fa-search'></i>
                            <h5 className='title'>Wanna feel it?</h5>
                            <span className='sub-title'>Just click it!</span>
                            <a
                              href='https://www.livescore.com/en/'
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <span />
                            </a>
                          </figcaption>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='db_section_top'>
        <div className='db_section_top_gap contact_section_wapper'>
          <div className='container'>
            <div className='db_section_title wow fadeInUp'>
              <img
                className='img-fluid db_section_img'
                src='assets/images/contact.png'
                alt=''
              />
              <h2>Contact Me</h2>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='contact_info_section wow fadeInUp'>
                  <form
                    className='contant_form'
                    onSubmit={handleSubmit}
                    netlify-honeypot='bot-field'
                    data-netlify='true'
                  >
                    <div className='contant_form_row'>
                      <input
                        name='name'
                        type='text'
                        placeholder='Your Name'
                        className='input-group'
                        required
                      />
                    </div>
                    <div className='contant_form_row'>
                      <input
                        name='phone'
                        type='text'
                        placeholder='Phone Number'
                        className='input-group'
                      />
                    </div>
                    <div className='contant_form_row'>
                      <input
                        name='email'
                        type='email'
                        required
                        placeholder='Email Address'
                        className='input-group'
                      />
                    </div>
                    <div className='contant_form_row'>
                      <input
                        name='subject'
                        type='text'
                        placeholder='Subject'
                        className='input-group'
                        required
                      />
                    </div>
                    <div className='contant_form_row'>
                      <textarea
                        name='message'
                        placeholder='Message'
                        className='textarea-group'
                        required
                      ></textarea>
                    </div>
                    {result === 'SUCCESS' && (
                      <div className='alert alert-success'>
                        <strong>Received!</strong> I will get back to you soon.
                      </div>
                    )}
                    <button className='btn01' type='submit'>
                      {status} <i className='fa fa-paper-plane'></i>
                    </button>
                  </form>
                  <br />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='google_map_wapper wow fadeInUp'>
                  <div className='google_map_box'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15856.810550871178!2d3.3846708999999997!3d6.49600975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1643074702766!5m2!1sen!2sng'
                      width='100%'
                      height='100%'
                      style={{ border: '0' }}
                      title='map'
                    ></iframe>
                  </div>
                  <div className='google_info_box'>
                    <div className='google_info'>
                      <ul>
                        <li className='address_icon'>
                          <a
                            href='https://www.google.com/maps/place/32+Moleye+Street,+Alagomeji-Yaba+234-01,+Lagos/@6.5006936,3.3765149,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8c602dc9a333:0x985947fac6db3ca8!8m2!3d6.5006936!4d3.3787036'
                            target='_blank'
                            rel='noreferrer'
                            style={{ color: 'white' }}
                          >
                            100001, Lagos, Nigeria
                          </a>
                        </li>
                        <li className='call_icon'>
                          <a
                            href='tel:+2348020796658'
                            style={{ color: 'white' }}
                          >
                            {' '}
                            +234 802 079 6658
                          </a>
                        </li>
                        <li className='email_icon'>
                          <a
                            href='mailto:lexico4real@gmail.com'
                            style={{ color: 'white' }}
                          >
                            lexico4real@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='footer_wapper'>
          <a href='#0' className='cd-top'>
            UP
          </a>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='social db_common_text'>
                  <ul>
                    <li>
                      <a
                        href='https://web.facebook.com/Proverbman'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        <i className='fa fa-facebook'></i>{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://twitter.com/Bright1st'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        <i className='fa fa-twitter'></i>{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://join.skype.com/invite/jeuhYtJhzHsT'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        <i className='fa fa-skype'></i>{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/oluyinka-abubakar-b31782124/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        <i className='fa fa-linkedin'></i>{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/lexico4real'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        <i className='fa fa-github'></i>{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='Copyright db_common_text'>
                  © Copyright 2019 <strong>Oluyinka</strong>. All rights
                  reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
