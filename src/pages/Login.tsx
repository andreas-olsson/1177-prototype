import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLocation, useNavigate } from "react-router-dom"; // Import the useLocation and useNavigate hooks
import {
  IDSCard,
  IDSLink,
  IDSCol,
  IDSRow,
  IDSContainer,
  IDSIconChevron,
  IDSIconExternal,
} from "@inera/ids-react";

function Login() {
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false);
  const navigate = useNavigate(); // Access the navigate function

  // Get the current location
  const location = useLocation();

  // Extract the location string from the query parameter
  const locationString =
    new URLSearchParams(location.search).get("location") || "";

  // Function to generate links with modified href
  const generateLink = () => {
    if (locationString) {
      return `/${locationString}`;
    } else {
      return "/";
    }
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setLoggedin(true); // Set loggedin to true
    navigate(generateLink()); // Navigate to the generated link
  };

  useEffect(() => {
    if (loggedin) {
      navigate(generateLink());
    }
  }, [loggedin, locationString, navigate]); // Run this effect whenever loggedin or locationString changes

  return (
    <>
      <div className="ids">
        <IDSContainer>
          <IDSRow>
            <IDSCol cols="12" m="4" s="12">
              <h1 className="ids-heading-1">Logga in</h1>
            </IDSCol>
          </IDSRow>
          <IDSRow className="ids-mt-6" gap="3rem">
            <IDSCol cols="5" m="12" s="12" className="ids-content">
              <h2 className="ids-heading-2">Välj hur du vill logga in</h2>
              <IDSCard fill={true} className="card">
                <ul className="blocklink">
                  <li>
                    <IDSLink onClick={handleLinkClick}>
                      <IDSIconChevron></IDSIconChevron>
                      <a href={generateLink()}>BankID</a>
                    </IDSLink>
                  </li>
                  <li>
                    <IDSLink onClick={handleLinkClick}>
                      <IDSIconChevron></IDSIconChevron>
                      <a href={generateLink()}>Freja +</a>
                    </IDSLink>
                  </li>
                </ul>
                <IDSLink onClick={handleLinkClick}>
                  <a>Mer information om e-legitimation</a>
                  <IDSIconExternal slot="append-icon"></IDSIconExternal>
                </IDSLink>
                <hr className="ids-mt-4 ids-mb-6" />
                <ul className="blocklink">
                  <li>
                    <IDSLink onClick={handleLinkClick}>
                      <IDSIconChevron></IDSIconChevron>
                      <a href={generateLink()}>Foreign eID</a>
                    </IDSLink>
                  </li>
                </ul>
                <p>No services at 1177 currently support Foreign eID.</p>
              </IDSCard>
            </IDSCol>
            <IDSCol cols="4" m="12" s="12" className="ids-content">
              <h2 className="ids-heading-2">Välj hur du vill logga in</h2>
              <p className="ids-preamble">
                Använd QR-kod vid inloggning med BankID på annan enhet
              </p>
              <p>
                På grund av säkerhetsskäl har du 5 minuter på dig att läsa av
                QR-koden.
              </p>
              <p>
                Var beredd att rikta kameran i din mobil mot QR-koden när du ska
                logga in med BankID på en annan enhet.
              </p>
              <p>
                <IDSLink onClick={handleLinkClick}>
                  <a>Här finns en guide till hur du loggar in på 1177.se</a>
                </IDSLink>
                . Det är viktigt att du loggar ut och stänger ned din webbläsare
                när du är klar i inloggat läge.{" "}
              </p>
            </IDSCol>
          </IDSRow>
        </IDSContainer>
      </div>
    </>
  );
}

export default Login;
