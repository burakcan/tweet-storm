import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style.scss';

export default class Tweet extends Component {
  componentDidMount() {
    window.twttr.widgets.createTweet(this.props.data.id_str, this.refs.card, {
      conversation: 'none',
      cards: 'hidden',
      width: 350,
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const className = cx(styles.Tweet, {
      hasSubs: this.props.data.responses && this.props.data.responses.length > 1,
    });

    return (
      <div className={ className }>
        <div
          ref="card"
          className="Card"
          style={{
            animationDelay: `${Math.random() * (1000 - 300) + 500}ms`,
          }}
        />
      </div>
    );
  }
}

Tweet.propTypes = {
  data: PropTypes.object.isRequired,
};
