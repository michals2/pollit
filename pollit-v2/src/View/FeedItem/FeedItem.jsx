// React imports
import PropTypes from "prop-types";
import React from "react";

// View imports
import FeedItemChart from "View/FeedItemChart/FeedItemChart";

const FeedItem = ({ text, score, itemID }) =>
  <div>
    <FeedItemChart score={score} />
    <span>{text}</span>;
  </div>;

FeedItem.propTypes = {
  feedItems: PropTypes.array
};

export default FeedItem;
