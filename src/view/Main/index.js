import react from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const { selectedView } = useSelector((state) => state.leftNav || {});

    return (
      <div className="nine columns">
        <h1>{selectedView}</h1>
      </div>
    );
}

export default Main;