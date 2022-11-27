import React from 'react';

const SpinerLoader = ({ colorclass, isSmall, inline }) => {
    return (
        <span
            className={`text-center ${!inline ? 'd-block' : 'mx-2'} ${colorclass} `}
        >
            <div
                className={`spinner-border ${isSmall ? 'spinner-border-sm' : ''}`}
                role='status'
            >
            </div>
        </span>
    );
}

export default SpinerLoader;
