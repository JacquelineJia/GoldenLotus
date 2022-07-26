import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, withRouter } from "react-router-dom";

import style from './NavigationBar.module.scss';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className={`${style.navBar} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <div className={style.header}>
            <div className={style.name}>
              <span className={this.props.linkIndex === 1 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(1)}>
                  <FormattedMessage
                    id="components.navigationBar.menu.title"
                    defaultMessage="Golden Lotus Healing and Guidance"
                  />
                </a>
              </span>
            </div>
            <div className={style.menu}>
              {/*<span className={this.props.linkIndex === 4 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(4)}>
                  <FormattedMessage
                    id="components.navigationBar.menu.learnMore"
                    defaultMessage="Learn More"
                  />
                </a>
              </span>*/}
              <span className={this.props.linkIndex === 3 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(3)}>
                  <FormattedMessage
                    id="components.navigationBar.menu.courses"
                    defaultMessage="Courses"
                  />
                </a>
              </span>
              {/*<span className={this.props.linkIndex === 2 ? style.pageOpen : null}>
                <a onClick={() => this.props.handleClick(2)}>
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
