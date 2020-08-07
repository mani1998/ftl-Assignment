import React from 'react';
import {ListGroup} from 'react-bootstrap';
export default function SearchResults({data,day,month,year,option}){
    var active=data.activity_periods;
    var start_date;
    var end_date;
    var result=[];
    var months=["Jan","Feb","Mar","April",'May','June','July','Aug','Sep','Oct','Nov','Dec'];
    month=months[month];
    return (
        <>
            {option?
            (<h4>Today's Active Sessions</h4>): 
            (<h4>Active Sessions on {day+"-"+month+"-"+year}</h4>)
            }
            {
                active.forEach(element=>{
                start_date=element.start_time.split(" ");
                end_date=element.end_time.split(" ");
                if(month.toString()===start_date[0] && day.toString()===start_date[1] && year.toString()===start_date[2]){
                    result.push([start_date[4],end_date[3]]);
                }
            })}
            {
                result.length===0?(<p>There are no active sessions</p>):(
                <p>there {result.length<=1? 'is one' : 'are mutliple' } active session{result.length>1?'s':''}</p>
                )
            }
            {
            <ListGroup>
                {
                    result.map((ele)=>(<ListGroup.Item>from {result[0][0]} to {result[0][1]}</ListGroup.Item>))
                }
            </ListGroup>
            }
        </>
    )
}
