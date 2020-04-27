import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
  
}));

export function CircleButton({onClick}) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });
    
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            onClick().then(()=> {
                setSuccess(true);
                setLoading(false);
                timer.current = setTimeout(() => {
                    setSuccess(false);
                }, 2000);
            })

        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                
                <Fab
                    aria-label="send"
                    color="primary"
                    className={buttonClassname}
                    onClick={handleButtonClick}
                >
                    {success? <CheckIcon /> : <SendIcon />}
                </Fab>
                {loading && <CircularProgress size={68} className={classes.fabProgress} />}
            </div>
        </div>
    );
}