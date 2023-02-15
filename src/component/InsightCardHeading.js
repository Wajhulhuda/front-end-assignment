import React from "react";

const InsightCardHeading = ({ headData }) => {
  let severity = headData.insight_data[0].score;
  const checkSeverity = (severity) => {
    let sever = "";
    if (severity <= 100 && severity >= 71) {
      sever = "High";
    } else if (severity >= 51 && severity <= 70) {
      sever = "Medium";
    } else {
      sever = "Low";
    }
    return sever;
  };
  return (
    <div className="col-lg-12 mx-auto d-flex justify-content-between pt-3">
      <div className="d-flex">
        <img
          src={headData.insight_data[0].source.logo}
          alt="logo"
          width="30px"
          height="30px"
        />
        <p className="ps-3 text-primary">{headData.insight_data[0].header}</p>
      </div>
      <div className="right">
        <p className="border border-warning text-warning rounded-pill px-3 py-1 round-4">
          {checkSeverity(severity)}
        </p>
      </div>
    </div>
  );
};

export default InsightCardHeading;
