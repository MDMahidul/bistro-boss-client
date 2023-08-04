import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='font-main_font text-center md:w-4/12 mx-auto my-10 pt-10'>
            <p className='text-xl text-yellow-500 mb-4'>{subHeading}</p>
            <h3 className='text-4xl text-gray-900 border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;