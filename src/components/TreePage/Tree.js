import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from './style.scss';

function renderTree(data) {
  return data.map(tweet => (
    <div key={ tweet.id } className={ styles.Branch }>
      <Tweet data={ tweet } />
      <div className={ styles.Responses }>
        { tweet.responses && renderTree(tweet.responses) }
      </div>
    </div>
  ));
}

export default function TreeView(props) {
  return (
    <div className={ styles.TreeView }>
      { renderTree(props.data) }
    </div>
  );
}

TreeView.propTypes = {
  data: PropTypes.array.isRequired,
};
