import FAQItem from '@/FAQItem';
import React from 'react';

const index = () => {
    return (
        <div className="container pt-[50px]">
            <h1 className="container-title text-2xl font-bold mb-20 text-center">Câu hỏi thường gặp</h1>
            <div className="container-content w-[50%] m-auto">
                <FAQItem></FAQItem>
            </div>
        </div>
    );
};

export default index;