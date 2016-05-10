import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TreePage from 'components/TreePage';
import { getTree } from 'selectors/tree';

/* eslint-disable react/prefer-stateless-function */
class TreeContainer extends Component {
  render() {
    return (
      <TreePage tree={ this.props.tree } />
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

TreeContainer.propTypes = {
  tree: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    tree: getTree(state),
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
