import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import photo from "../img/india-train.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={photo} alt="" />
      <FontAwesomeIcon className="arrow--down" icon={faAngleDown} />
    </div>
  );
};

export default Home;
