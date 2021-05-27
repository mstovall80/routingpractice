import React from 'react';
import { Link } from '@reach/router';


const Home = (props) => {
    return (
        <>
        <h1>Welcome</h1>
        <div>
            <Link to="/Four">Go to Four</Link>
        </div>
        </>
    );
}
export default Home;

