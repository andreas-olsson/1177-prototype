import { useLocation } from "react-router-dom";

function BokadeTider() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <h1>Bokade tider</h1>
      </div>
    </>
  );
}

export default BokadeTider;
