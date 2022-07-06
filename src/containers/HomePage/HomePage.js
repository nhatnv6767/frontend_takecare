import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import HomeHeader from "./HomeHeader";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {

    }


    render() {
        return (
            <div>
                <HomeHeader/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
