import React from 'react';
import './Course.css'
const Course = (props) => {
    const {course,name,price,picture} = props.course;

    return (
        <div className='course'>
            <div className='m-3 shadow'>
                <img src={picture} alt=""/>
                <div className="content">
                    <h6>{course}</h6>
                    <p><small>By: {name}</small></p>
                    <p className='text-danger'><strong>Price: {price}</strong></p>
                    <button onClick={() =>props.courseHandler(props.course)}>Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;