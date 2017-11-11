import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import * as feedActions from "Model/actions/feedActions";

class Feed extends React.Component {
  componentWillMount() {
    this.props.feedActions.fetchFeedItems();
  }

  renderData = () => {
    return (
      <div>
        {this.props.feedItems.map((e, i) =>
          <div key={i}>
            {e}
          </div>
        )}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.feedItems.length > 0
          ? this.renderData()
          : <div>No Data</div>}
      </div>
    );
  }
}

Feed.propTypes = {
  feedActions: PropTypes.object,
  feedItems: PropTypes.array
};

function mapStateToProps(state) {
  return {
    feedItems: state.feedItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    feedActions: bindActionCreators(feedActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
