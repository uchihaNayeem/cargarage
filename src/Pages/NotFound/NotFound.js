import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1>Page not found</h1>
            <Link to='/'>
                <button>Go To Home?</button>
            </Link>
        </div>
    );
};

export default NotFound;