import React from 'react';
import './display.css';
import Loading from './Loading';

const Display = ({courseDetails,deleteCourse}) => {

    function onDelete(event){

        deleteCourse(event.target.id)
    }

    // const courseDetails = props.courseDetails;

    // Conditional Rendering    {condition ? () : ()}
    const courseList = courseDetails.length ? courseDetails.map( (element) => {
        // Object Destructuring
        // const title = element.title;
        // const id = element.id;

        const { title, details, instructor, id } = element;
        return (
            <div className='course-card' key={id}> 
                <h3>Course Name: {title} </h3>
                <p>Details: {details}</p>
                <p>Instructor:<i>{instructor}</i></p>
                <button id={id} onClick={onDelete}>Delete Me</button>
           </div>        
        )
    }) : ( <Loading />)

    return(
         <div className='course-display'>
            {courseList} 
        </div>     
    );
}

export default Display;