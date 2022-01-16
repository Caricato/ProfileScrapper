import "./education-item.scss";

export interface IEducationItem {
  universityUrl: string;
  universityImgUrl: string;
  universityName: string;
  degree: string;
  major: string;
  time: string;
}

const EducationItem = ({
  universityUrl,
  universityImgUrl,
  universityName,
  major,
  degree,
  time,
}: IEducationItem) => {
  const onClick = () => {
    window.location.href = `https://www.linkedin.com${universityUrl}`;
  };

  return (
    <li className="education-item" onClick={onClick}>
      <img src={universityImgUrl} alt={`${universityName}`} />
      <div>
        <h5>{universityName}</h5>
        <p>
          {major} - {degree}
        </p>
        <p>{time}</p>
      </div>
    </li>
  );
};

export default EducationItem;
