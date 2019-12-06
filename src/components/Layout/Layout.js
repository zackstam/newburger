import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/NavigationItems/SideDrawer/SideDrawer';

 
class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () => {
        this.setState({
            showSideDrawer: true
        })
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    drawerToggleClicked = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    render() { 
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.drawerToggleClicked}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}></SideDrawer>
                <main className={styles.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}
 
 
export default Layout;