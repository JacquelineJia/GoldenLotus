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
          <div>
            <div className={style.menu}>
              <div className={style.header}>
                <Link to="/">
                  <FormattedMessage
                    id="components.navigationBar.menu.title"
                    defaultMessage="Golden Lotus Healing and Guidance"
                  />
                </Link>
              </div>
              {/* <span
                className={
                  this.isOpen('/about') ? style.pageOpen : null
                }
              >
                <Link to="/about">
                  <FormattedMessage
                    id="components.navigationBar.menu.about"
                    defaultMessage="About"
                  />
                </Link>
              </span> */}
            </div>
            {/* <span>
              <FormattedMessage
                id="components.navigationBar.menu.programs"
                defaultMessage="Programs"
              />
            </span>
            <span>
              <FormattedMessage
                id="components.navigationBar.menu.contact"
                defaultMessage="Contact"
              />
            </span>
            <span>
              <FormattedMessage
                id="components.navigationBar.menu.gallery"
                defaultMessage="Gallery"
              />
            </span> */}
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
