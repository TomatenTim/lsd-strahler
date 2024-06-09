'use client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';

export default function StartButton() {

  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClickStart = () => {
    if(localStorage.getItem('disableEpilepsyWarning') == '1') {
      startLSD();
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    setOpen(false);
    localStorage.setItem('disableEpilepsyWarning', '1')
    startLSD();
  };

  const startLSD = () => {
    router.push('/lsd');
  };

  return (
    <Fragment>      
      <Button variant="outlined" onClick={handleClickStart}>
        Start
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          WARNING
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This website may potentially trigger seizures for people with photosensitive epilepsy. 
            Visitor discretion is advised.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Go Back</Button>
          <Button onClick={handleContinue}>Continue</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
