import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const ModalsLogin2 = () =>{
  const [muncul, setMuncul] = useState(false)
  const handleClose = () => setMuncul(false);
  const modal = () => {
    const handleOpen = () => setMuncul(true);
    const handleClose = () => setMuncul(false);
  }
  return(
    <div>
      <button onClick={modal}>Pencet ini gan</button>
      {muncul && <ModalFunction />}
    </div>
  )

function ModalFunction () {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return(
     <Modal
        muncul={muncul}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
  )
}
}

export default ModalsLogin2;