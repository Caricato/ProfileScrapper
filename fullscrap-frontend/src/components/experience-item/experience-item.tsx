import "./experience-item.scss";

export interface IExperienceItem {
  companyUrl: string;
  companyImgUrl: string;
  companyName: string;
  title: string;
  time: string;
}

const ExperienceItem = ({
  companyUrl,
  companyImgUrl,
  companyName,
  title,
  time,
}: IExperienceItem) => {
  const onClick = () => {
    window.location.href = `https://www.linkedin.com${companyUrl}`;
  };

  return (
    <li className="experience-item" onClick={onClick}>
      <img src={companyImgUrl} alt={`${companyName}`} />
      <div>
        <h5>{companyName}</h5>
        <p>{title}</p>
        <p>{time}</p>
      </div>
    </li>
  );
};

export default ExperienceItem;
