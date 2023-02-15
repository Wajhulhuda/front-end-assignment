import React from "react";

const Change = ({ changeData }) => {
  let { startTime, endTime } = changeData.insight_data[0];
  let { currentValue, previousValue } = changeData.insight_data[0].stats;
  function formatDate(times) {
    let t = new Date(times);
    let ti = String(t).slice(4, 15);
    return ti;
  }
  console.log();
  return (
    <div className="col-lg-12 pt-5">
      <div className="row">
        <div className="col-lg-7">
          <p>Change</p>
          <p className="period">
            {formatDate(startTime)} to {formatDate(endTime)}
          </p>
        </div>
        <div className="col-lg-5">
          <p>
            {previousValue}K &nbsp;to &nbsp;{currentValue}K
          </p>
          <p className="border text-success border-success d-inline px-3 rounded-pill">
            {((currentValue / previousValue) * 100).toFixed(0)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Change;
