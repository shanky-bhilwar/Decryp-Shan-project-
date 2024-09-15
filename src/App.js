import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
//Just replace the 'antd/dist/antd.css' with 'antd/dist/reset.css' -->
import { Exchanges, Homepage, Newss, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">               {/* seperate page for specific cryptocurrencies initialized here  */}
              <CryptoDetails />
            </Route>
            <Route exact path="/newss">
              <Newss />
            </Route>
          </Switch>
        </div>
      </Layout>

      {/* this is the footer code  */}
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
          <Link to="/">
              Decrypt-Shan
          </Link> <br />
          | Stay ahead in crypto, Stay ahead in life |
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          {/* <Link to="/exchanges">Exchanges</Link> */}
          <Link to="/cryptocurrencies">cryptocurrencies</Link>
          <Link to="/newss">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
