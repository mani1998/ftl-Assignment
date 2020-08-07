import React from 'react';
import {Button} from 'react-bootstrap';
import VModal from './Modal';
function Persons({data}){
      const [modalShow, setModalShow] = React.useState(false);
return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {data.real_name!==""?data.real_name:"unknown user"}
      </Button>
      <br/>
      <br/>
      <VModal 
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />      
    </>
  );   
}

export default Persons;