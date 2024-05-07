import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedin) {
      setLoggedin(false);
    }
    navigate("/");
  }, [loggedin, setLoggedin, navigate]);

  return <></>;
}

export default Logout;
