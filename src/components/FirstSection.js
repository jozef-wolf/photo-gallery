import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import photo from "../img/india-train.jpg";

const FirstSection = () => {
  return (
    <div className="section">
      <img src={photo} alt="" />
      <FontAwesomeIcon className="arrow--down" icon={faAngleDown} />
    </div>
  );
};

export default FirstSection;
