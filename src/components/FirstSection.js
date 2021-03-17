import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FirstSection = () => {
  return (
    <div className="section">
      <FontAwesomeIcon className="arrow--down" icon={faAngleDown} />
    </div>
  );
};

export default FirstSection;
