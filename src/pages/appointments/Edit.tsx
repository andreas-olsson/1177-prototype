import { useLocation } from "react-router-dom";

function Edit() {
  const location = useLocation();

  return (
    <>
      <div className="ids">
        <h1>Redigera bokning</h1>
      </div>
    </>
  );
}

export default Edit;
