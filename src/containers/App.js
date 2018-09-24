import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()')
    }

    componentDidMount() {
        console.log('[App.js] inside componentDidMount()')
    }

    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Stephanie', age: 26}
        ],
        otherValue: 'some other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        }
        // const person = Object.assign({}, this.state.persons[personIndex])
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        console.log('[App.js] Inside render()');
        let persons = null;


        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons} clicked={this.deletePersonHandler}
                             changed={this.nameChangedHandler}/>
                </div>
            );
        }

        return (
            <div className={classes.App}>
                <button onClick={() => {
                    this.setState({showPersons: true})
                }}>Show persons
                </button>
                <Cockpit appTitle={this.props.title} clicked={this.togglePersonsHandler}
                         showPersons={this.state.showPersons}
                         persons={this.state.persons}>
                </Cockpit>
                {persons}
            </div>
        );
    }
}

export default App;
