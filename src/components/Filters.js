import React from "react";

const Filters = ({
  year,
  setYear,
  launchSuccess,
  setLaunchSuccess,
  landSuccess,
  setLandSuccess,
}) => {
  let years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022,
  ];

  console.log("filter component is running");
  return (
    <div className="filters-god-container">
      <div className="filter-heading">
        <strong>Filters</strong>
      </div>
      <div className="filter-container">
        <div className="filter-sub-container">
          <div className="filter-sub-heading">Launch Year</div>
          <div className="filter-container-buttons">
            {years.map((val) => (
              <button
                onClick={() => setYear(val)}
                className={`button${year === val ? " active" : ""}`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-sub-container">
          <div className="filter-sub-heading">Successful Launch</div>
          <div className="filter-container-buttons">
            <button
              onClick={() => setLaunchSuccess("true")}
              className={`button${launchSuccess === "true" ? " active" : ""}`}
            >
              True
            </button>
            <button
              onClick={() => setLaunchSuccess("false")}
              className={`button${launchSuccess === "false" ? " active" : ""}`}
            >
              False
            </button>
          </div>
        </div>

        <div className="filter-sub-container">
          <div className="filter-sub-heading">Successful Landing</div>
          <div className="filter-container-buttons">
            <button
              onClick={() => setLandSuccess("true")}
              className={`button${landSuccess === "true" ? " active" : ""}`}
            >
              True
            </button>
            <button
              onClick={() => setLandSuccess("false")}
              className={`button${landSuccess === "false" ? " active" : ""}`}
            >
              False
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
