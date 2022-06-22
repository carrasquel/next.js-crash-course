
import { Fragment } from 'react';

import classes from './MeetupItem.module.css';

function MeetupDetails(props){
    return (
        <Fragment>
             <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
            </div>
            <div className={classes.content}>
                <h3>{props.description}</h3>
            </div>
        </Fragment>
    );    
}


export default MeetupDetails;