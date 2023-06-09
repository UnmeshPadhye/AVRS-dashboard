import { useParams, Route, Routes } from "react-router-dom";
import RobotDetails from "./RobotDetails";


const RobotDetailsWrapper = ({ robots }) => {
    const { id } = useParams();
    console.log(id);
    const robot = robots.find((r) => r._id === String(id));


    return (
        <Routes>
            <Route path="/" element={<RobotDetails robot={robot} />} />
        </Routes>
    );
}

export default RobotDetailsWrapper;
