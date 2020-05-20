import React, { Component } from 'react';
import CardList from '../components/CardList';
import { animals } from '../animals';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './app.css';


//in this app file, we have two states: animals, searchfields.
class App extends Component {
    constructor() {
        super()
        this.state = {
            animals: animals,
            searchfield: ''
        }
        //constructor
    }


    componentDidMount() {
        fetch('http://acnhapi.com/villagers')
        .then(response => response.json())
        // .then(users => this.setState({ animals: users}) );
        console.log(animals);
        
        // this.setState({ animals: animals });
        //componentDidMount
    }



    //We pass the onSearchChange to the searchbox
    //Everytime the searchbox has a onchange thing, it goes back to the app
    //then use the onSearchChange function with the event and updates the state of the searchfield of whatever we type
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        
    }
    render() {
        const {animals, searchfield} = this.state;
        const filteredAnimals = animals.filter(animal => {
            return animal.name['name-en'].toLowerCase().includes(searchfield.toLowerCase());
        })

        return (
            <div className="tc">
                <h1 className="f1">Animal Crossing: New Horizon</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList animals={filteredAnimals}/>
                </Scroll>
            </div>
        );
    }
}


export default App;