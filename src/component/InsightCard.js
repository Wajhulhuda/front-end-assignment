import { useEffect, useState } from "react";
import Change from "./Change";
import InsightCardHeading from "./InsightCardHeading";
import InsightCardTable from "./InsightCardTable";
import InsightLineGraph from "./InsightLineGraph";

const InsightCard = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://geeksterfsra-production.up.railway.app/data")
      .then((res) => res.json())
      .then((result) => {
        console.log();
        setLoading(false);
        setContent(result.data[0]);
      });
  }, []);

  return (
    <>
      {loading && <h1 className="text-center pt-3">Loading...</h1>}
      {!loading && console.log(content)}
      {!loading && (
        <div className="col-lg-12 px-4">
          <InsightCardHeading headData={content} />
          <div className="row">
            <div className="col-lg-8 px-5">
              <InsightCardTable tableData={content} />
            </div>
            <div className="col-lg-4 px-5">
              <InsightLineGraph graphData={content} />
              <Change changeData={content} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default InsightCard;
