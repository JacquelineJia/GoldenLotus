import React from 'react';
import { Helmet } from "react-helmet";
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import About from './components/About';
import Footer from './components/Footer';
import HeaderImage from './components/HeaderImage';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import logo from './logo.svg';
import messages from './translations/messages';
import './App.scss';

let locale = (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US';

if (locale.startsWith('zh')) locale = 'zh';
else locale = 'en';

class App extends React.Component {
  state = {
    i18nConfig: {
      key: locale,
      locale: locale,
      messages: messages[locale],
    }
  }

  onChangeLanguage = lang => {
    const { i18nConfig } = this.state;
    let language = lang;
    if (!language) {
      if (i18nConfig.locale === 'en') {
        language = 'zh';
      }
      else language = 'en';
    }
    i18nConfig.key = language;
    i18nConfig.locale = language;
    i18nConfig.messages = messages[language];
    this.setState({ i18nConfig });
  }

  render() {
    const { i18nConfig } = this.state;
    return (
      <IntlProvider {...i18nConfig}>
        <div className="app">
          <Helmet>
            <title>Oriental Dance Troupe of Ottawa</title>
            <meta name="keywords" content="Akashic Reading,Akashic Consulting,Brennan Healing Science,Spiritual Healing,Akashic Records"/>
            <meta name="description" content="Akashic Consulting and Brennan Healing Science"/>
            <meta name="subject" content="Golden Lotus Healing and Guidance"/>
            <meta name="copyright"content="Golden Lotus Healing and Guidance"/>
            <meta name="language" content="EN"/>
          </Helmet>
          <Router>
            <NavigationBar onChangeLanguage={this.onChangeLanguage} />
            <HeaderImage />
            <div className="appPaddingWrapper pageContent">
              <Switch>
                <Route exact path="/" component={About} />
                {/* <Route path="/about" component={About} /> */}
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
