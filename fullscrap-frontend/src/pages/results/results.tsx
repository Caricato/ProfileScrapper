import Button from "../../components/button/button";
import Tabs from "../../components/tabs/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./results.scss";
import {
  faBriefcase,
  faInfoCircle,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import TabPanel from "../../components/tab-panel/tab-panel";
import ExperienceItem from "../../components/experience-item/experience-item";
import SkillItem from "../../components/skill-item/skill-item";
import EducationItem from "../../components/education-item/education-item";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import ModalSearch from "../../components/modal-search/modal-search";

export const Results = () => {
  const [value, setValue] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const { url } = useParams();
  const [linkedinUrl, setLinkedinUrl] = useState("");

  useEffect(() => {
    console.log(atob(url || ""));
    setLinkedinUrl(atob(url || ""));
  }, [url]);

  const tabs = [
    {
      label: "Acerca",
      icon: <FontAwesomeIcon icon={faInfoCircle} size="1x" />,
      disabled: false,
    },
    {
      label: "Experiencia",
      icon: <FontAwesomeIcon icon={faBriefcase} size="1x" />,
      disabled: false,
    },
    {
      label: "Educación",
      icon: <FontAwesomeIcon icon={faUserGraduate} size="1x" />,
      disabled: false,
    },
    {
      label: "Github",
      icon: <FontAwesomeIcon icon={faGithub} size="1x" />,
      disabled: false,
    },
    {
      label: "Youtube",
      icon: <FontAwesomeIcon icon={faYoutube} size="1x" />,
      disabled: true,
    },
    {
      label: "Twitter",
      icon: <FontAwesomeIcon icon={faTwitter} size="1x" />,
      disabled: true,
    },
    {
      label: "Facebook",
      icon: <FontAwesomeIcon icon={faFacebook} size="1x" />,
      disabled: true,
    },
    {
      label: "Instagram",
      icon: <FontAwesomeIcon icon={faInstagram} size="1x" />,
      disabled: true,
    },
  ];

  const skills = [
    "Front-end developer",
    "React",
    "JavaScript",
    "Design Thinking",
    "Metodologías ágiles",
    "Scrum",
    "React",
    "Front-end developer",
    "React",
    "JavaScript",
    "JavaScript",
  ];

  const experiences = Array(5).fill({
    companyUrl: "/company/interbank/",
    companyImgUrl:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQFs1FkQjHXYyQ/company-logo_100_100/0/1579709685759?e=1650499200&v=beta&t=a5JS-db1Y5u0OwU-lqQlLuAlxFoPqmVnr_yti9jugAQ",
    companyName: "Interbank",
    title: "Practicante de Admisión de Riesgos Corporativos",
    time: "Ene 2020 - Mar 2020",
  });

  const education = Array(5).fill({
    universityUrl: "/school/15550/?legacySchoolId=15550",
    universityImgUrl:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHNxJdDKSu80g/company-logo_100_100/0/1626692502131?e=1650499200&v=beta&t=s3FCvMQFbx0jCPBNsqH5NX-9K--ULVY9Ce7dD65QNik",
    universityName: "Interbank",
    major: "Ingeniería Informática",
    degree: "Ingeniería",
    time: "Ene 2020 - Mar 2020",
  });

  const handleTabChange = (newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log("cambio", isModalActive);
  }, [isModalActive]);

  const onClickNewSearch = () => {
    console.log("click jaaa");
    setIsModalActive(!isModalActive);
  };

  return (
    <div className="results">
      <div className="results__container">
        <header>
          <div>
            <h1>FullScrap</h1>
            <p>
              Hecho con ❤️ por <strong>FullStackOverflow</strong>
            </p>
          </div>
          <Button size="small" onClick={onClickNewSearch}>
            Nueva búsqueda
          </Button>
        </header>

        <main className="results__main">
          <div className="results__main__left">
            <div className="results__main__profile">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGw1DJBPSdyxQ/profile-displayphoto-shrink_200_200/0/1595897395874?e=1648080000&v=beta&t=IvB6-REYryTGacEoSjrkIxrq65lANvVnRojFRURmZa4"
                alt="Profile"
              />
              <div className="results__main__profile__data">
                <p className="name">Rodrigo Fermin Dulanto Chicana</p>
                <p className="title">Gerente de TI - Microsoft India</p>
                <p className="phone">978 784 331</p>
                <p className="location">Lima, Perú</p>
                <a
                  className="email"
                  href="mailto:rodrigo.dulanto@pucp.edu.pe"
                  target="_blank"
                  rel="noreferrer"
                >
                  rodrigo.dulanto@pucp.edu.pe
                </a>
                <Link
                  target="_blank"
                  to={"//www.linkedin.com/in/rodrigodulanto"}
                  rel="noreferrer"
                >
                  Ver LinkedIn
                </Link>
              </div>
            </div>
            <div className="results__main__tabs">
              <Tabs tabs={tabs} value={value} onChange={handleTabChange}></Tabs>
            </div>
          </div>
          <div className="results__main__info">
            <TabPanel
              value={value}
              index={0}
              className="results__main__info__about"
            >
              <div className="results__main__info__about__summary">
                <h1>Sobre Rodrigo...</h1>
                <div className="results__main__info__about__summary__content">
                  Changing the world one line of code at a time 🚀. <br />
                  <br />
                  Since I was a kid I have always been passionate about
                  technology, besides being quite curious. I remember seeing
                  people close to me using applications that solved many of
                  their needs, and constantly wondering about how they work, or
                  how they are made. This served as a great motivation for me to
                  choose Computer Engineering as a degree at college. <br />
                  <br />
                  For that reason, I have always been in love with what I was
                  studying, but I still couldn't decide what I was going to do
                  for a living. This changed when I did my first academic
                  project in software development, as I had the oportunity to
                  lead my team and participate in the development of a Learning
                  Management System (LMS). It was then when I realized the
                  potential we have as developers to materialize and turn ideas
                  or initiatives into reality that allow us to make a big change
                  in society. <br />
                  <br />
                  Currently I am a front-end developer with experience in
                  complex projects both in the academic and work environment,
                  where I can perform adequately thanks to my ability to analyze
                  and solve problems, as well as my great orientation to detail.
                  Also, I consider myself a highly curious person, which leads
                  me to keep learning new technologies. <br />
                  <br />I have experience working with React (Hooks), Redux,
                  RxJS, HTML, Sass, TypeScript, Git, Scrum y Angular (to a
                  lesser extent). In addition, I have knowledge of AWS
                  infrastructure, TDD and Selenium. Moreover, I am learning
                  Node.JS, MongoDB, Express.JS and GraphQL to complete the MERN
                  stack and become a full-stack developer. <br />
                  <br />I will gladly recieve your messages, comments or
                  suggestions, so feel free to connect on LinkedIn or send me an
                  email at rodrigo.dulanto@pucp.edu.pe.{" "}
                </div>
              </div>
              <div className="results__main__info__about__skills">
                <h1>Sus habilidades</h1>
                <p>
                  Estas son las habilidades que <strong>Rodrigo</strong> muestra
                  en su perfil
                </p>
                <div className="results__main__info__about__skills__list">
                  {skills.map((item, index) => (
                    <SkillItem key={index} name={item} />
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel
              value={value}
              index={1}
              className="results__main__info__experience"
            >
              <h1>Experiencia</h1>
              <p>
                <strong>Rodrigo</strong> ha participado en lo siguiente:
              </p>
              <div className="results__main__info__experience__list">
                {experiences.map((item, index) => (
                  <ExperienceItem key={index} {...item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel
              value={value}
              index={2}
              className="results__main__info__education"
            >
              <h1>Educación</h1>
              <p>
                <strong>Rodrigo</strong> ha participado en lo siguiente:
              </p>
              <div className="results__main__info__education__list">
                {education.map((item, index) => (
                  <EducationItem key={index} {...item} />
                ))}
              </div>
            </TabPanel>

            <TabPanel
              value={value}
              index={3}
              className="results__main__info__github"
            >
              <h1>Github</h1>
              <p>
                Este es el perfil de GitHub de <strong>Rodrigo</strong>:
              </p>
              TODO
            </TabPanel>
          </div>
        </main>
      </div>
      {isModalActive && (
        <ModalSearch
          onClose={() => setIsModalActive(!isModalActive)}
          isOpen={isModalActive}
        />
      )}
    </div>
  );
};

export default Results;
