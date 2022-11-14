import React, {Component} from 'react';
import App from "./App";
import PropTypes from "prop-types"
class Child extends Component {
    render() {
        return (
            <div>
                <h3>Child组件</h3>
                {console.log(this.props)}
                <p>补助发放:{this.props.x+1000}</p>
            </div>
        );
    }
}

export default Child;
Child.propTypes={
    x:PropTypes.number.isRequired
}