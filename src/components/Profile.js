import React from 'react'
var dateFormat = require('dateformat')

const Profile = props =>{
    const userType = props.currentUser.user_type
    const rate = props.currentUser.rate
    const studentReservations = props.currentUser.reservations
    const instructorSessions = props.currentUser.sessions
    const currentUser = props.currentUser.name
    console.log("type", userType);
    console.log("profile", props.currentUser.name);
    return(
      <div className="ui grid">
        <div className="eight wide column">
          <h1> Welcome {userType} </h1>
          <img className='center' src={props.currentUser.picture} />
          <h2>Name: {props.currentUser.name}</h2>
          {
            rate ? <h2>Rate: ${props.currentUser.rate}/hr</h2> : null

          }
          <h2>Location: {props.currentUser.location}</h2>
          <h2>Rating: {props.currentUser.rating}</h2>
        </div>
        {
          currentUser !== undefined ?
          <div className="eight wide column">
            {userType === "student" ?
              <div>
              <div><h1> Reservations {studentReservations.map(res => <li>Instructor ID: {res.sessions[0].instructor_id} <br /> Start Time: {dateFormat(res.sessions[0].start_time,"dddd, mmmm dS, yyyy, h:MM:ss TT")} <br /> End Time:{dateFormat(res.sessions[0].end_time,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</li>)} </h1> <br /></div>

              <div><h1>Instructors</h1></div>
              </div>
                :
              <h1> Sessions </h1>
            }

          </div> : null
        }

      </div>
    )
}

export default Profile