import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/index.jsx';
import Profile from './components/Profile/index.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Router extends React.Component { 
    render() {
        let { chats } = this.props;

        let routesArray = Object.keys(chats).map(key => (
            <Route path = { `/chat/${ key }/` } render = { () => <Layout chatId = { key } /> } key = { key } exact/>
        ));        

        return(
            <Switch>
                <Route path = '/' component = { Layout } exact/>
                { routesArray }                                                
                <Route path = '/profile/' component = { () => <Profile /> } exact/>                    
            </Switch>
        )
    }
 }

 const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

 const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Router);