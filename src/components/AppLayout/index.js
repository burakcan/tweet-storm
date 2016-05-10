import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function AppLayout(props) {
  return (
    <ReactCSSTransitionGroup
      component="div"
      transitionName="page"
      transitionEnterTimeout={ 1000 }
      transitionLeaveTimeout={ 1000 }
    >
      {React.cloneElement(props.children, {
        key: props.pathName,
      })}
    </ReactCSSTransitionGroup>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
  pathName: PropTypes.string.isRequired,
};
