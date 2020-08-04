import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Booking.css';
import axios from 'axios';

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tee_times: [],
            what_day: '',
            what_time: '',
            number_of_golfers: 1
        }
    }

    handleDaySelect = (value) => {
        this.setState({what_day: value})
    }

    handleTimeSelect = (value) => {
        this.setState({what_time: value})
    }

    handleNumberSelect = (value) => {
        this.setState({number_of_golfers: value})
    }
    
    getMemberTeeTimes = () => {
        axios.get(`/api/tee_times/${this.props.members.member_id}`)
        .then((res) => this.setState({tee_times: res.data}))
        .catch(err => console.log(err));
    }

    createTeeTime = () => {
        axios.post('/api/tee_time', {id: this.props.members.member_id, what_day: this.state.what_day, what_time: this.state.what_time, number_of_golfers: this.state.number_of_golfers})
        .then(() => {
            this.getMemberTeeTimes();
            this.setState({
                what_day: '',
                what_time: '',
                number_of_golfers: 1
            });
        })
        .catch(err => console.log(err))
    }

    deleteTeeTime = (id) => {
        axios.delete(`/api/tee_time/${id}`)
        .then(() => {
            this.getMemberTeeTimes();
        })
        .catch(err => console.log(err))
    }
    
    render() {
        console.log(this.props)
        const mappedTeeTimes = this.state.tee_times.map((tee_time, i) => (
            <div>
                <h4 key={i}>{tee_time.what_day}</h4>
                <h4 key={i}>{tee_time.what_time}</h4>
                <h4 key={i}>{tee_time.number_of_golfers}</h4>
                <button onClick={() => this.deleteTeeTime(tee_time.tee_time_id)}>Delete</button>
            </div>
        ))

        return(
            <div>
                <h2 className="book">Book Here:</h2>
                <div className="tee_time_cats">
                    <div className="selectors">
                            <select className="options" value={this.state.what_day} onChange={(event) => this.handleDaySelect(event.target.value)}>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                        <select className="options2" value={this.state.what_time} onChange={(event) => this.handleTimeSelect(event.target.value)}>
                            <option>8:00 AM</option>
                            <option>8:30 AM</option>
                            <option>9:00 AM</option>
                            <option>9:30 AM</option>
                            <option>10:00 AM</option>
                            <option>10:30 AM</option>
                            <option>11:00 AM</option>
                            <option>11:30 AM</option>
                            <option>12:00 PM</option>
                            <option>12:30 PM</option>
                            <option>1:00 PM</option>
                            <option>1:30 PM</option>
                            <option>2:00 PM</option>
                            <option>2:30 PM</option>
                            <option>3:00 PM</option>
                            <option>3:30 PM</option>
                            <option>4:00 PM</option>
                        </select>
                        <select className="options3" value={this.state.number_of_golfers} onChange={(event) => this.handleNumberSelect(event.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <button className="book-button" onClick={this.createTeeTime}>Book Tee-Time</button>
                    </div>
                </div>
                <h2 className="manage">Manage Tee-Times:</h2>
                <div>
                    {mappedTeeTimes}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Booking);