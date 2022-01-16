import Button from "../../components/button/button";
import "./results.scss";

export const Results = () => {
  const tabs = [
    {
      label: "Acerca",
      icon: "Icono",
    },
    {
      label: "Experiencia",
      icon: "Icono",
    },
    {
      label: "Educación",
      icon: "Icono",
    },
    {
      label: "Github",
      icon: "Icono",
    },
    {
      label: "Youtube",
      icon: "Icono",
    },
    {
      label: "Twitter",
      icon: "Icono",
    },
    {
      label: "Facebook",
      icon: "Icono",
    },
    {
      label: "Instagram",
      icon: "Icono",
    },
  ];

  return (
    <div className="results">
      <div className="results__container">
        <header>
          <div>
            <h1>FullScrap</h1>
            <p>
              Hecho con &lt;3 por <strong>FullStackOverflow</strong>
            </p>
          </div>
          <Button size="small">Nueva búsqueda</Button>
        </header>

        <main className="results__main">
          <div className="results__main__profile">
            <div>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGw1DJBPSdyxQ/profile-displayphoto-shrink_200_200/0/1595897395874?e=1648080000&v=beta&t=IvB6-REYryTGacEoSjrkIxrq65lANvVnRojFRURmZa4"
                alt="Profile"
              />
              <div>
                <p className="name">Rodrigo Fermin Dulanto Chicana</p>
                <p className="title">Gerente de TI - Microsoft India</p>
                <p className="phone">978 784 331</p>
                <p className="location">Lima, Perú</p>
                <a className="email" href="mailto:rodrigo.dulanto@pucp.edu.pe">
                  rodrigo.dulanto@pucp.edu.pe
                </a>
                <a
                  className="linkedin-url"
                  href="/www.linkedin.com/in/rodrigodulanto"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>
            <div className="tabs">
              <ul className="tabs__container"></ul>
            </div>
          </div>
          <div className="results__main__info">
            <div className="results__main__info__about">
              <div className="results__main__info__about__summary">
                Changing the world one line of code at a time 🚀. <br />
                <br />
                Since I was a kid I have always been passionate about
                technology, besides being quite curious. I remember seeing
                people close to me using applications that solved many of their
                needs, and constantly wondering about how they work, or how they
                are made. This served as a great motivation for me to choose
                Computer Engineering as a degree at college. <br />
                <br />
                For that reason, I have always been in love with what I was
                studying, but I still couldn't decide what I was going to do for
                a living. This changed when I did my first academic project in
                software development, as I had the oportunity to lead my team
                and participate in the development of a Learning Management
                System (LMS). It was then when I realized the potential we have
                as developers to materialize and turn ideas or initiatives into
                reality that allow us to make a big change in society. <br />
                <br />
                Currently I am a front-end developer with experience in complex
                projects both in the academic and work environment, where I can
                perform adequately thanks to my ability to analyze and solve
                problems, as well as my great orientation to detail. Also, I
                consider myself a highly curious person, which leads me to keep
                learning new technologies. <br />
                <br />I have experience working with React (Hooks), Redux, RxJS,
                HTML, Sass, TypeScript, Git, Scrum y Angular (to a lesser
                extent). In addition, I have knowledge of AWS infrastructure,
                TDD and Selenium. Moreover, I am learning Node.JS, MongoDB,
                Express.JS and GraphQL to complete the MERN stack and become a
                full-stack developer. <br />
                <br />I will gladly recieve your messages, comments or
                suggestions, so feel free to connect on LinkedIn or send me an
                email at rodrigo.dulanto@pucp.edu.pe.{" "}
              </div>
              <div className="results__main__info__about__skills">Skills</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Results;
