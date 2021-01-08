import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import style from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <div className={`${style.footer} appPaddingWrapper`}>
        <div className={`${style.body} appContentWidth`}>
          <span className={style.title}>
            <FormattedMessage
              id="components.footer.title.contactUs"
              defaultMessage="CONTACT"
            />
          </span>
          <span>
            Want to learn more? Have any feedback or suggestions?
            Get in touch!
          </span>
          <span>
            christopherakashic@gmail.com
          </span>
          {/* <div className="divider" /> */}
          <span className={style.copyright}>
            <FormattedMessage
              id="components.footer.copyright"
              defaultMessage="© 2020 Golden Lotus Healing and Guidance"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
