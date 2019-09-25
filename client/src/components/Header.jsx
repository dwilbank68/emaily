import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Payments from './Payments.jsx';
// const Header = (props) => {
const Header = ({auth}) => {


    const renderContent = () => {
        if (auth === null) return;
        if (auth === false) return (
            <li>
                <a href="/auth/google">Log In With Google</a>
            </li>
        );
        return [
            <li key="1"><Payments/></li>,
            <li key="2" style={{margin: '0 10px'}}>
                Credits: {auth.credits}
            </li>,
            <li key="3"><a href="/api/logout">Log Out</a></li>
        ];
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link   to={auth ? '/surveys' : '/'}
                        className="left brand-logo"
                        style={{paddingLeft:'15px'}}>
                    Logo                
                </Link>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = ({auth}, ownProps) => ({
    auth
});

export default connect(mapStateToProps)(Header);