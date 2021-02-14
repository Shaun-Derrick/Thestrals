import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


const ViewFuze = () => {
  //destrcturing of id by hook useParams
  const {_id} = useParams();
  const [fuze,setFuze] = useState({
    "startDate": "",
    "endDate": "",
    "startTime": "",
    "endTime": "",
    "Title": "",
    "description": "",
    "venue": "",
    "tags": "",
    "organizer": "",
    "whereIFoundThisEvent2": ""
  });

  useEffect(() => {
    
    loadFuze();
    
  }, []);

  const loadFuze = async () => {
    const result = await axios.get(`/Fuzes/${_id}`);
    setFuze(result.data);
  };





  return(
      <div style={{ color: "red"}}>
        
       
        <Link to="/update">Back to Update</Link>
        <h1> Fuze Id: {_id}</h1>
        <ul>
            <li> startDate: {fuze.startDate} </li>
            <li> endDate: {fuze.endDate} </li>
            <li> startTime: {fuze.startTime} </li>
            <li> endTime: {fuze.endTime} </li>
            <li> Title: {fuze.Title} </li>
            <li> description: {fuze.description} </li>
            <li> venue: {fuze.venue} </li>
            <li> tags: {fuze.tags} </li>
            <li> organizer: {fuze.organizer} </li>
            <li> whereIFoundThisEvent2: {fuze.whereIFoundThisEvent2} </li>
        </ul>
      
       </div>
      
  )
}

export default ViewFuze;