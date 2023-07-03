
import "./Singh.css"
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player'



function Singh() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className='a1'>
      
      <Modal open={open} onClose={onCloseModal} center>
      <ReactPlayer url='https://youtu.be/6Lw64F4ZWvU' controls={true} playing={true}/>
      
      </Modal>
        <div className='a2'>
            "Here is a special gift"
        </div>
        <div className="a3" onClick={onOpenModal}>

          <img src="https://media4.giphy.com/media/dWxR1mSrJ4MXl8D6Rq/giphy.gif" alt="alt" />
        </div>
    </div>
  )
}

export default Singh
