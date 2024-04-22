import { useLocation } from "react-router-dom";

function Create() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <h1>Boka ny tid</h1>
      </div>
    </>
  );
}

export default Create;
