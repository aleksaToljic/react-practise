import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    position={index}
                    changed={(event) => this.props.changed(event, person.id)}
                    age={person.age}/>
            </ErrorBoundary>
        });

    }
}

export default Persons;