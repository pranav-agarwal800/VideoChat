import React, {Component} from 'react'

class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false,
        }
    }

    handleClick() {
        // this.setState
    }

    render(){
        let c = this.state.count;

        return(
            <div>
                <h1>This button has been clicked {c} times</h1>
                <button onClick>Click me</button>
            </div>
        );
    }
}

export default Application;