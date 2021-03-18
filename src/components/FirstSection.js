import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import photo from "../img/india-train.jpg";

const FirstSection = () => {
  return (
    <div className="section">
      <img src={photo} alt="" />
      <h1>WELCOME TO MY PAGE</h1>
      <FontAwesomeIcon className="arrow--down" icon={faAngleDown} />
    </div>
  );
};

export default FirstSection;
