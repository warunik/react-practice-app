// src/components/ManageCard.tsx

import React from 'react';

interface ManageCardProps {
    title: string;
    backgroundColor: string;
}

const ManageCard: React.FC<ManageCardProps> = ({ title, backgroundColor }) => {
    return (
        <div className={`${backgroundColor} text-white p-6 rounded-lg shadow-lg flex items-center space-x-4`}>
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            </div>
            <div className="flex-1">
                <div className="text-lg font-medium">
                    {title}
                </div>
            </div>
            <div>
                <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 17l5-5-5-5v10z"/>
                </svg>
            </div>
        </div>
    );
};

export default ManageCard;
