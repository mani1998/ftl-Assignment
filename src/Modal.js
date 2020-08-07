import React, { useState } from 'react';
import {Modal,Button,Badge} from 'react-bootstrap';
import Search from './Search'
import SearchResults from './SearchResults'
function VModal(props) {
  const [visible,setValue]=useState(true);
  var date=new Date();
  const changeState=()=>{
    setValue(false);
  }
  const handleClose=()=>{
    props.onHide();
    setValue(true);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.data.real_name!==""?props.data.real_name:"unknown user"}
          <h5><Badge pill variant="secondary">{props.data.tz!==""?props.data.tz:'not specified'}</Badge></h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {visible?(<h5>Total active sessions <Badge variant="secondary">{props.data.activity_periods.length}</Badge></h5>):(<p> </p>)}
        Search for active sessions on a particular day<Search changeState={changeState} value={visible} user_data={props.data}/>
            {
              visible?(<SearchResults 
              data={props.data}
              day={date.getDate()}
              month={date.getMonth()}
              year={date.getUTCFullYear()}
              option={true}
              />
              ):(<p> </p>)
         }
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VModal;
