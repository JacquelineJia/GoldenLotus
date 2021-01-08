import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from "react-router-dom";

import style from './HeaderImage.module.scss';

class HeaderImage extends React.Component {
  isOpen = path => this.props.location.pathname === path;

  render() {
    return (
      <div className={style.container}>
        <div className={style.pageImage} />
        <div className={`${style.text} ${style.tmp}`}>
          Website under contruction
        </div>
        <div className={`${style.text} ${style.title}`}>
          {"Explore and heal your soul path".toUpperCase()}
        </div>
        <div className={style.text}>
          Akashic Consulting and Brennan Healing Science
        </div>
      </div>
    );
  }
}

export default withRouter(HeaderImage);
