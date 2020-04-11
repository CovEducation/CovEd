import React from 'react';
// import Button from '@material-ui/core/Button';
import Button from "react-bootstrap/Button";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const terms = `Please note that the service we provide is to pair potential mentors from higher education 
institutions with mentees in K-12 schools. While we are taking all possible steps to prioritize the safety and well-being of 
individuals who choose to use this service, we cannot guarantee that all mentors have been background checked due to the 
difficulties of obtaining background checks during the COVID-19 pandemic.
Also, while many of our mentors and organizers come from excellent academic institutions around the U.S, we do not make any 
guarantees as to the quality of our listed academic resources or the quality of mentorship/tutoring provided by our mentors. 
By using our service, you are agreeing to assume all risks connected with participation in the CovEd pairing program and to 
not make a claim against, sue or attach the property of CovEd, its directors and volunteers for any claim, judgement, loss, 
liability, costs and expenses, for any injury, however caused, even if by negligence, as a result of the student’s participation.`

export default function TermsDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = () => {
    setOpen(true);
    setScroll('body');
  };

  const handleSubmit = (event) => {
    setOpen(false);
    props.onSubmit(event);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen}> Submit </Button>
      <Dialog
        open={open}
        onClose={handleSubmit}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terms and Conditions</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {terms}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}