import React, {Component} from 'react';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/jebote';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <Aux>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input ref={(inp) => {
                    this.inputElement = inp
                }} type="text" onChange={props.changed} value={props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);