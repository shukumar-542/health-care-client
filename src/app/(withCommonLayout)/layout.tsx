import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const CommonLayout = ({children} : {children :  React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {
                children
            }
        </div>
    );
};

export default CommonLayout;