import React from 'react';
import { Link } from '@reach/router';


const Four = (props) => {
    return (
        <>
            <div style={{backgroundColor:props.color}}>
                {
                !isNaN(props.id) ?
                <h1 style={{color:props.color1}} >the number is: {props.id} </h1>:
                <h1 style={{color:props.color1}}>the word is:  {props.id}</h1>
                }
                <Link className="link" to="/Home">Go to Home</Link>
            </div>
        </>
    );
}
export default Four;

