import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Filters from "./components/Filters";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [year, setYear] = useState();
  const [launchSuccess, setLaunchSuccess] = useState();
  const [landSuccess, setLandSuccess] = useState();

  async function fetchData() {
    let URL = "https://api.spacexdata.com/v3/launches?limit=100";

    if (launchSuccess && year && landSuccess) {
      URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}&launch_success=${launchSuccess}&land_success=${landSuccess}`;
    } else if (launchSuccess && year) {
      URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}&launch_success=${launchSuccess}`;
    } else if (launchSuccess && landSuccess) {
      URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchSuccess}&land_success=${landSuccess}`;
    } else if (landSuccess && year) {
      URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}&land_success=${landSuccess}`;
    } else if (year) {
      URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}`;
    } else if (landSuccess) {
      URL = `https://api.spacexdata.com/v3/launches?limit=100&land_success=${landSuccess}`;
    } else if (launchSuccess) {
      URL = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchSuccess}`;
    }

    setLoading(true);
    const res = await axios.get(URL);
    setData(res.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [year, launchSuccess, landSuccess]);

  return (
    <>
      <div className="god-container">
        <div className="heading">
          <h1>SpaceX Launch Programs</h1>
        </div>
        <div className="container">
          <Filters
            year={year}
            setYear={setYear}
            launchSuccess={launchSuccess}
            setLaunchSuccess={setLaunchSuccess}
            landSuccess={landSuccess}
            setLandSuccess={setLandSuccess}
          />
          <div className="programs-god-container">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data?.map((val) => (
                  <div className="program-card">
                    <div className="program">
                      <img
                        src={val?.links?.mission_patch_small}
                        className="program-img"
                      />
                      <div className="left">
                        <h4 className="program-name">
                          {val.mission_name}#{val.flight_number}
                        </h4>
                        <h6 className="mission-id">
                          Mission Ids:{" "}
                          <span className="sub-prop">
                            {val?.mission_id?.map((v) => (
                              <span>{v}</span>
                            ))}
                          </span>
                        </h6>
                        <h6 className="sub-prop-title">
                          Launch Year:{" "}
                          <span className="sub-prop">{val?.launch_year}</span>
                        </h6>
                        <h6 className="sub-prop-title">
                          Successful Launch:{" "}
                          <span className="sub-prop">
                            {val?.launch_success === false ? "False" : "True"}
                          </span>
                        </h6>
                        <h6 className="sub-prop-title">
                          Successful Landing:{" "}
                          <span className="sub-prop">
                            {val?.launch_success === true ? "True" : "False"}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <footer className="footer">
          <strong>Developed by:</strong> Preet Patel
        </footer>
      </div>
    </>
  );
}

export default App;
