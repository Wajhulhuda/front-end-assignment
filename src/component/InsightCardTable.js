import React from "react";

const InsightCardTable = ({ tableData }) => {
  let [driver1, driver2] = tableData.insight_data[0].stats.topDrivers;

  return (
    <div>
      <div className="col-lg-12">
        <div className="row">
          <div className="px-4 my-5 d-flex">
            <p className="description">
              <span className="border border-secondary rounded-pill px-1 text-secondary">
                {tableData.insight_data[0].content.slice(
                  0,
                  tableData.insight_data[0].measure.length
                )}
              </span>
              {tableData.insight_data[0].content.slice(
                tableData.insight_data[0].measure.length
              )}
            </p>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td scope="col">Top Driver</td>
            <td scope="col">Change</td>
            <td scope="col">Absolute Change</td>
            <td scope="col">Effective Change</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">order_store_id={driver1[1].toFixed(3)}</th>
            <td>{driver1[2].change}</td>
            <td className="text-danger">-{driver1[2].absoluteChange}%</td>
            <td className="text-success">+{driver1[2].effectiveChange}%</td>
          </tr>
          <tr>
            <th scope="row">order_store_id={driver2[1].toFixed(3)}</th>
            <td>{driver2[2].change}</td>
            <td className="text-danger">-{driver2[2].absoluteChange}%</td>
            <td className="text-success">+{driver2[2].effectiveChange}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InsightCardTable;
