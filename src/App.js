import React, { Component } from "react";
import CardList from "./CardList"
import { robots } from './robots'
import SearchBox from "./SearchBox"

// const state = {
//     robots: robots,
//     searchfield: ""
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    //     // console.log(event.target.value);
    //     const filteredRobots = this.state.robots.filter(robot =>{
    //     return robot.name.toLowerCase().includes(this.state.searchfield);
    // })
    // console.log(filteredRobots);
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>Kitty Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
        }
    
}








export default App;