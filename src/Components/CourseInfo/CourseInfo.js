import React from 'react';
import './CourseInfo.css';

const CourseInfo = () => {
    return(
        <div className="info-background">
            <h1 className="infoheader">Course Information:</h1>
            <h2 className="scorecard">Our Scorecard:</h2>
            <div className="sections">
                <img className="card" src="https://www.golfcrestaverde.com/wp-content/uploads/sites/2911/2014/10/Cresta-Verde-CA-3.182.jpg" />
                <section className="infosection">
                    <h4>Dining:</h4>
                    <p>Restaurant and bar on site that features local brews and regionally inspired cuisine with a focus on fresh, local ingredients. Members will receive 25% off - just show your membership card!</p>
                    <h4>Pro Shop:</h4>
                    <p>Located in our clubhouse, the pro shop offers apparel, clubs, golf balls and more! </p>
                    <h4>Driving Range:</h4>
                    <p>Members receive one small bucket per day on us. Show your membership card at the clubhouse to redeem.</p>
                </section>
            </div>
        </div>
    )
}

export default CourseInfo;