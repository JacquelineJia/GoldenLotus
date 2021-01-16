import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from "react-router-dom";

import style from './NavigationBar.module.scss';

class NavigationBar extends React.Component {
  isOpen = path => this.props.location.pathname === path;

  render() {
    return (
      <div className={`${style.navBar} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <div className={style.header}>
            <div className={style.name}>
              <Link to="/">
                <FormattedMessage
                  id="components.navigationBar.menu.title"
                  defaultMessage="Golden Lotus Healing and Guidance"
                />
              </Link>
            </div>
            <div className={style.menu}>
              {/*<span
                className={
                  this.isOpen('/learnMore') ? style.pageOpen : null
                }
              >
                <Link to="/learn-more">
                  <FormattedMessage
                    id="components.navigationBar.menu.learnMore"
                    defaultMessage="Learn More"
                  />
                </Link>
              </span>*/}
              <span
                className={
                  this.isOpen('/courses') ? style.pageOpen : null
                }
              >
                <Link to="/courses">
                  <FormattedMessage
                    id="components.navigationBar.menu.courses"
                    defaultMessage="Courses"
                  />
                </Link>
              </span>
              {/*<span
                className={
                  this.isOpen('/blog') ? style.pageOpen : null
                }
              >
                <Link to="/blog">
                  <FormattedMessage
                    id="components.navigationBar.menu.blog"
                    defaultMessage="Blog"
                  />
                </Link>
              </span>*/}
            </div>
          </div>
          {/*<button
              className={style.languageButton}
              onClick={() => this.props.onChangeLanguage()}
            >
              <FormattedMessage
                id="languageChange"
                defaultMessage="English/中文"
              />
            </button>*/}
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
