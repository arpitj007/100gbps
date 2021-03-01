import {React, Components} from 'react'

class Classroom extends Components {
    constructor(props) {
        super(props);
        this.state = {count: 0}

    }

    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count++
            }
        })
    }

    render() {
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}