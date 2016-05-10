import React, { PropTypes } from 'react';
import styles from './style.scss';
import Tree from './Tree';
import { Link } from 'react-router';

export default function TreePage(props) {
  return (
    <div className={ styles.Wrapper }>
      <div className={ styles.ContentPane } />
      <Tree data={ props.tree } />
      <Link to="/" className={ styles.BackButton }>
        <svg
          className="icon-arrow-left"
          dangerouslySetInnerHTML={{
            __html: '<use xlink:href="#icon-arrow-left"></use>',
          }}
        />
      </Link>
    </div>
  );
}

TreePage.propTypes = {
  tree: PropTypes.array.isRequired,
};
