import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Booking.css';
import axios from 'axios';
import UpdateTeeTime from '../UpdateTeeTime/UpdateTeeTime';

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tee_times: [],
            what_day: 'Sunday',
            what_time: '8:00 AM',
            number_of_golfers: 1,
            editView: false
        }
    }

    componentDidMount = () => {
        this.getMemberTeeTimes()
    }

    handleDaySelect = (value) => {
        this.setState({what_day: value})
    }

    handleTimeSelect = (value) => {
        this.setState({what_time: value})
    }

    handleNumberSelect = (value) => {
        this.setState({number_of_golfers: +value})
    }

    handleEditView = () => {
        this.setState({editView: !this.state.editView})
    }
    
    getMemberTeeTimes = () => {
        axios.get(`/api/tee_times/${this.props.member.member_id}`)
        .then((res) => this.setState({tee_times: res.data}))
        .catch(err => console.log(err));
    }

    createTeeTime = () => {
        console.log(this.props.member)
        axios.post('/api/tee_time', {member_id: this.props.member.member_id, what_day: this.state.what_day, what_time: this.state.what_time, number_of_golfers: this.state.number_of_golfers})
        .then(res => {
            this.getMemberTeeTimes();
            this.setState({
                what_day: 'Sunday',
                what_time: '8:00 AM',
                number_of_golfers: 1
            });
        })
        .catch(err => console.log(err))
    }
    
    render() {
        console.log(this.props)
        const mappedTeeTimes = this.state.tee_times.map((tee_time, i) => {
           console.log(tee_time)
            return(
            <UpdateTeeTime
                key={i}
                tee_time={tee_time}
                getMemberTeeTimes={this.getMemberTeeTimes}
            />
        )})

        return(
            <div className="booking">
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
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Booking);