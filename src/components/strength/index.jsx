import { skills } from "../../public/data";
import Strength from "./Strength";
import "./Strength.css";

const Scene3 = () => {
  return (
    <>
    <div className="section-0-frame grid-paper">
        <div className="description">
            <h2 className="title shadow">
                Strength.
                <div className="pin"></div>
            </h2>
        </div>
    </div>
    <div className="strength-wrapper">
        <ul>
            <Strength skills={skills}/>
        </ul>
    </div>
    </>
  );
};

export default Scene3;
