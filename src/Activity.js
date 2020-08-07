import React from 'react';
import {ListGroup} from 'react-bootstrap';
function Activity({time}){
    var day=time.start_time.split(" ");
    var eday=time.end_time.split(" ");
    return (
    <ListGroup.Item>On {day[0]+" "+day[1]+" "+day[2]} from {day[4]} to {eday[3]}</ListGroup.Item>
    )
}

export default Activity;