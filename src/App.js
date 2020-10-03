import React from 'react';
import Layout from './pages/Layout';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Layout title="Fast Food Omakase" />
      </div>
    )
  }
}
