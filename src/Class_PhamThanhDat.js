import React, { Component } from 'react';

class Class_PhamThanhDat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "Pham Thanh Dat",
            class: "K22CNT3"
        };
    }
   
    users = {
        name: "Pham Thanh Dat",
        age: 20
    }

    // xu ly sk
    handleChange = (event) => {
        this.setState({
            fullname: "Tran Anh Sang",
        });
    }

    render() {
        return (
            <div>
                <h2>Class Component Demo</h2>
                {this.users.name}-{this.users.age}
                <hr/>
                <h3>Info: {this.props.info}</h3>
                <h3>Time: {this.props.time}</h3>
                <hr/>
                <h3>State:
                    FullName: {this.state.fullname}
                    Class: {this.state.class}
                </h3>
                <button onClick={this.handleChange}>Change Name</button>
            </div>
        );
    }
}

export default Class_PhamThanhDat;