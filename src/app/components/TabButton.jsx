import React from 'react';


const variants = {
        default: {
            width: 0,
            
        },
        active: {
            width: 'calc(100% - 0.75rem)',
        },
};
const TabButton = ({ active, selectTab, children }) => {
    // Define button classes dynamically based on the active state
    const buttonClasses = active
        ? 'text-black'
        : 'text-[#ADB7BE] ';

    return (
        <button
            type="button"
            onClick={selectTab}
            className="px-3 py-2 focus:outline-none"
        >
            <p
                className={`mr-3 font-semibold transition-colors duration-300 ease-in-out ${buttonClasses}`}
            >
                {children}
            </p>
            <motion.div
                animate={active ? 'active' : 'default'}
                variants={variants}
                className="h-1 bg-primary-500 mt-2 mr-3"
            >

            </motion.div>
        </button>
    );
};

export default TabButton;
