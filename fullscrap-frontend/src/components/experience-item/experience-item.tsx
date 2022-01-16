import "./experience-item.scss";

export interface IExperienceItem {
  companyUrl: string;
  companyImageUrl: string;
  company: string;
  designation: string;
  time?: string;
}

const ExperienceItem = ({
  companyUrl,
  companyImageUrl,
  company,
  designation,
  time,
}: IExperienceItem) => {
  const onClick = () => {
    window.location.href = `https://www.linkedin.com${companyUrl}`;
  };

  return (
    <li className="experience-item" onClick={onClick}>
      <img src={companyImageUrl} alt={`${company}`} />
      <div>
        <h5>{company}</h5>
        <p>{designation}</p>
        <p>{time || ""} </p>
      </div>
    </li>
  );
};

export default ExperienceItem;
