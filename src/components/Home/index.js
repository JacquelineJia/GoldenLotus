import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={`${style.pageContent} appContentWidth`}>
        <span className={style.aboutUsTitle}>
          <FormattedMessage
            id="components.home.title.aboutUs"
            defaultMessage="WELCOME!"
          />
        </span>
        <span className={style.aboutUsContent}>
          <FormattedMessage
            id="components.home.content.aboutUs"
            defaultMessage=""
            values={{
              br: <span><br /><br /></span>,
            }}
          />
        </span>
      </div>
    );
  }
}

export default Home;
