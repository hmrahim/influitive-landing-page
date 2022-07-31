import React from 'react';
import SetupCard from './SetupCard';

const InstentSetup = () => {
    return (
        <div className='flex flex-col  w-ful px-4 md:px-0 lg:px-0 md:w-5/6 lg:w-5/6 mx-auto gap-24 my-40'>
            <div className='w-full md:w-4/6 lg:w-4/6 mx-auto'>
                <h4 className='text-primary text-center text-xl font-semibold '>Instant Setup</h4>
                <h1 className='text-4xl text-accent text-center font-bold mt-flex flex-col md:flex-row lg:flex-row w-ful md:w-11/12 lg:w-11/12 mx-auto gap-24 mt-3'>Simple & Effortless Process</h1>
                <p className='text-center text-neutral mt-3'>nthusiastically administrate robust initiatives quickly unleash collaborative with client-focused paradigms. Re-engineer granular innovation rather than best-of-breed processes.</p>
            </div>

            <div className=''>
                <SetupCard/>
                
            </div>
            
        </div>
    );
};

export default InstentSetup;