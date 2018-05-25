import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

var routesMenu = [
    {
        to: '/tasks',
        exact: true,
        name: 'Tasks'
    },
    {
        to: '/signin',
        exact: true,
        name: 'Signin'
    },
    {
        to: '/signup',
        exact: true,
        name: 'SignUp'
    }
];

const NavMenuLink = ({menu}) => (    
    <Route
        path={ menu.to }
        exact={ menu.exact }
        children={
            ({ match }) => {
                var classActive = match ? "active" : "";
                return (
                    <Link className={`list-group-item ${classActive}`} to={menu.to}>{menu.name}</Link>
            )}
        }
    />
);

class NavMenuLeft extends Component {

    render() {
        return (
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="list-group">{ this.getNavMenuLeft(routesMenu) }</div>
            </div>
        );
    }

    getNavMenuLeft(menus) {
        return menus.map((menu, index) => {
            return (<NavMenuLink key={ index } menu={ menu } />);
        })
    }
}

export default NavMenuLeft;