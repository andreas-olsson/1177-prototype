import { useLocation } from "react-router-dom";

function Start() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <h1>Start</h1>
      </div>
    </>
  );
}

export default Start;
