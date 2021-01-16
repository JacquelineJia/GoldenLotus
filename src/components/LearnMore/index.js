import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './LearnMore.module.scss';

class LearnMore extends Component {
  render() {
    return (
      <div className={`appPaddingWrapper`}>
        <div className={`${style.pageContent} appContentWidth`}>
          <span className={style.title}>
            <FormattedMessage
              id="components.learnMore.title"
              defaultMessage="Learn More"
            />
          </span>
          <span className={style.content}>
            <FormattedMessage
              id="components.programs.content"
              defaultMessage="We have adult and children programs. Contact us for schedules."
              values={{
                br: <span><br /><br /></span>,
              }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default LearnMore;
