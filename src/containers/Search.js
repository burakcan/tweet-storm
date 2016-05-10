import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchPage from 'components/SearchPage';
import { requestSearch } from 'actions';
import { isBusy, isFailed, isSucceeded } from 'selectors/search';

/* eslint-disable react/prefer-stateless-function */
class SearchContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    this.props.search(value);
  }

  render() {
    return (
      <SearchPage
        busy={ this.props.busy }
        failed={ this.props.failed }
        onSearch={ this.onSearch }
      />
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

SearchContainer.propTypes = {
  search: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  failed: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    busy: isBusy(state),
    success: isSucceeded(state),
    failed: isFailed(state),
  };
}

const mapDispatchToProps = {
  search: requestSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
