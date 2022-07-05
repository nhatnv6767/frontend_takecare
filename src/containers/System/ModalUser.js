import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {

    }

    toggle = () => {
        this.props.toggleFromParent();
    };


    render() {
        console.log("Check child props", this.props);
        return (
            <Modal
                isOpen={this.props.isOpen}
                // -> Here
                toggle={() => this.toggle}
                className="modal-user-container"
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text"/>
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password"/>
                        </div>

                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text"/>
                        </div>

                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text"/>
                        </div>

                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input type="text"/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        color="primary"
                        onClick={() => this.toggle()}
                        className="px-3"
                    >
                        Save changes
                    </button>
                    <button
                        color="second"
                        onClick={() => this.toggle()}
                        className="px-3"
                    >
                        Cancel
                    </button>
                </ModalFooter>
            </Modal>
        );
    }

}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
