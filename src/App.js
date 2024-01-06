import React, { Component } from "react";
import CardList from "./CardList"
import { robots } from './robots'
import SearchBox from "./SearchBox"
import Scroll from "./Scroll"

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({ robots: robots}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>Kitty Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                
                <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
            </div>
        );
        }
}

export default App;