// import PropTypes from "prop-types";
import React from "react";

const FeedItem = ({ score }) => {
  const chartSideLength = 60;
  const centerRadius = 2;
  const usableChartLength = chartSideLength - centerRadius * 2;
  const cx = centerRadius + score[0] * usableChartLength;
  const cy = centerRadius + score[1] * usableChartLength;

  return (
    <svg
      width={chartSideLength}
      height={chartSideLength}
      style={{ border: "1px solid black" }}
    >
      <circle cx={`${cx}`} cy={`${cy}`} r={`${centerRadius}`} strokeWidth="1" />
    </svg>
  );
};

// FeedItem.propTypes = {
// text: PropTypes.text
// };

export default FeedItem;
