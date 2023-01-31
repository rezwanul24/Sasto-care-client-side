import React from 'react';
import './Loader.css'


const Loader = () => {
    return (
        <div className='min-h-[60vh] flex justify-center items-center'>
            <div classname="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default Loader;