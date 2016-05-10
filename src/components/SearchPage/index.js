import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './style.scss';

export default class SearchPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    this.props.onSearch(this.refs.SearchInput.value);
  }

  render() {
    const { busy } = this.props;
    const className = cx(styles.Wrapper, { busy });

    return (
      <div className={ className }>
        <h1 className={ styles.Logo }>TweetStorm</h1>
        <form
          className={ styles.SearchForm }
          onSubmit={ this.onSearch }
        >
          <input
            type="url"
            disabled={ busy }
            className={ styles.SearchInput }
            placeholder="Paste a tweet url here and press enter"
            ref="SearchInput"
            required
          />
          <button type="submit" className={ styles.SubmitButton }>
            <svg
              className="icon-search"
              dangerouslySetInnerHTML={{
                __html: '<use xlink:href="#icon-search"></use>',
              }}
            />
          </button>
          <div className={ styles.InputBorder } />
        </form>
        <div className={ styles.DevelopedBy }>
          <svg
            className="icon-code"
            dangerouslySetInnerHTML={{
              __html: '<use xlink:href="#icon-code"></use>',
            }}
          />
          by <a href="https://twitter.com/neoberg" target="blank">Burak</a> with
          <svg
            className="icon-heart"
            dangerouslySetInnerHTML={{
              __html: '<use xlink:href="#icon-heart"></use>',
            }}
          />
          <div>
            Fork on
            <a href="https://github.com/burakcan/tweet-storm" target="blank">
              <svg
                className="icon-github-square"
                dangerouslySetInnerHTML={{
                  __html: '<use xlink:href="#icon-github-square"></use>',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  failed: PropTypes.bool.isRequired,
};
