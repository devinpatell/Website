import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link className="header-link" to="/">Devin Patel</Link>} waterfall hideTop>
            <Navigation>
                <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/">Home</Link>
                <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/resume">Resume</Link>
                <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/projects">Projects</Link>
                <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Devin Patel">
            <Navigation>
              <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/">Home</Link>
              <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/resume">Resume</Link>
              <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/projects">Projects</Link>
              <Link style={{fontSize: '15px', 'font-weight': 'bold'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
