import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Blog.module.scss';

class Blog extends Component {
  render() {
    return (
      <div className={`appPaddingWrapper`}>
        <div className={`${style.pageContent} appContentWidth`}>
          <span className={style.title}>
            <FormattedMessage
              id="components.blog.title"
              defaultMessage="Blog"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Blog;
