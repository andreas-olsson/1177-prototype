import { useLocation } from "react-router-dom";

function Inkorg() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <h1>Inkorg</h1>
      </div>
    </>
  );
}

export default Inkorg;
