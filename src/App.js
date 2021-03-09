import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './components/Layout';
import messages from './assets/translations';
import './styles/App.scss';

function App() {
  const [locale, setLocale] = useState('se');
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;