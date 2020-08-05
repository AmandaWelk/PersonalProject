import React, {Component} from 'react';
import axios from 'axios';

class UpdateTeeTime extends Component {
    constructor() {
        super();

        this.state = {
            what_day: 'Sunday',
            what_time: '8:00 AM',
            number_of_golfers: 1,
            editView: false
        }
    }

    handleEditView = () => {
        this.setState({editView: !this.state.editView})
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

    editTeeTime = () => {
        const {what_day, what_time, number_of_golfers} = this.state;
        console.log(this.props)
        console.log(this.state)
        axios.put(`/api/tee_time/${this.props.tee_time.tee_time_id}`, {what_day, what_time, number_of_golfers})
        .then(res => {
            this.props.getMemberTeeTimes();
            this.handleEditView();
            this.setState({
                what_day: '',
                what_time: '',
                number_of_golfers: 1
            });
        })
        .catch(err => console.log(err));
    }

    deleteTeeTime = (id) => {
        axios.delete(`/api/tee_time/${id}`)
        .then(() => {
            this.props.getMemberTeeTimes();
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.props)

        return(
                <div className="teebox">
                <div className="tee-times">
                <p className="ptext">Day:</p>
                <h4>{this.props.tee_time.what_day}</h4>
                <p className="ptext2">Time:</p>
                <h4>{this.props.tee_time.what_time}</h4>
                <p className="ptext3">Golfers:</p>
                <h4>{this.props.tee_time.number_of_golfers}</h4>
                <div className="tbuttons">
                {!this.state.editView
                    ? <button className="tbutton" onClick={this.handleEditView}>Edit</button>
                    : (<div className="e-selectors">
                        <select onChange={(event) => this.handleDaySelect(event.target.value)} value={this.state.what_day}>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                        </select>
                        <select onChange={(event) => this.handleTimeSelect(event.target.value)} value={this.state.what_time}>
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
                        <select onChange={(event) => this.handleNumberSelect(event.target.value)} value={this.state.number_of_golfers}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <button onClick={this.editTeeTime}>Submit</button>
                    </div>)}
                    <button className="tbutton2" onClick={() => this.deleteTeeTime(this.props.tee_time.tee_time_id)}>Delete</button>
                </div>
            </div>
            </div>
        )
    }
}

export default UpdateTeeTime;