import React, {Component} from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tee_times: []
        }
    }

    
    getMemberTeeTimes = () => {
        axios.get(`/api/tee_times/${this.props.members.member_id}`)
        .then((res) => this.setState({tee_times: res.data}))
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.props)
        const mappedTeeTimes = this.state.tee_times.map((tee_times, i) => (
            <div>
                <p>
                    key={i}
                    getMemberTeeTimes={() => this.getMemberTeeTimes()}
                </p> 
            </div>
        ))
        return(
            <div className="home">
                <h1>Welcome</h1>
                <div>
                    {mappedTeeTimes}
                </div>
            </div>
        )
    }
}

export default Home;