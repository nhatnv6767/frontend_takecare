import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {createNewUser} from "../../services/userService";


class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        };
    }

    async componentDidMount() {

    }

    toggle = () => {
        this.props.toggleFromParent();
    };

    handleOnChangeInput = (event, id) => {
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });

    };

    handleAddNewUser = () => {
        console.log("Something test add new user", this.state);

    };


    render() {
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
                            <input
                                type="text"
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                                value={this.state.email}
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                                value={this.state.password}
                            />
                        </div>

                        <div className="input-container">
                            <label>First Name</label>
                            <input
                                type="text"
                                onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                value={this.state.firstName}
                            />
                        </div>

                        <div className="input-container">
                            <label>Last Name</label>
                            <input
                                type="text"
                                onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                value={this.state.lastName}
                            />
                        </div>

                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input
                                type="text"
                                onChange={(event) => this.handleOnChangeInput(event, "address")}
                                value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        color="primary"
                        onClick={() => this.handleAddNewUser()}
                        className="px-3"
                    >
                        Add new
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
