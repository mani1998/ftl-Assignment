import React, { useEffect,useState } from 'react';
import Persons from './Persons';
import {Jumbotron,Spinner} from 'react-bootstrap';
import fire from './fire';

function Activities(){
    const [data1,setData]=useState({});
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
        const data2=fire.database().ref('data');
        data2.on('value',(snap)=>{
          setData(snap.val().members);
          setFlag(true);
        })
      },[])
    return(
        <div className="act">
            <Jumbotron>
                <h2>Users Session Activities</h2>
                <p>Click on user name to check today's sessions and to search previous sessions. </p>
                <>
                    { 
                        flag?(
                        data1.map((person,id) =>(
                        <Persons data={person} key={id}/>
                        ))):(
                        <><Spinner animation="grow" /><h6>Loading</h6></>
                        )
                    }
                </>
            </Jumbotron>
        </div>
    )
}
export default Activities;