import cn from '@/helper/cn';
import React, { useState } from 'react';

const HighlightText = ({ text, highlights }) => {
    const [isModal, setIsModal] = useState(false);
    const [valueModal, setValueModal] = useState(null);
    const handleHighlightClick = (highlight) => {
        if (highlight?.valueModal?.type === 'image') {
            setIsModal(true);
            setValueModal(highlight?.valueModal?.value);
        }
    };

    const getHighlightedText = (text, highlights) => {
        const values = highlights.map((h) => h.hightlight);
        const regex = new RegExp(`(${values.join('|')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) => {
            const highlight = highlights.find((h) => h.hightlight === part);
            return highlight ? (
                <span
                    key={index}
                    className={cn(
                        'inline relative highlighted-text text-amber-700 font-medium cursor-pointer',{
                        'group relative': highlight?.valueModal?.type == 'tooltip',
                    })}
                    onClick={() => handleHighlightClick(highlight)}
                >
                    {part}
                    {highlight?.valueModal?.type == 'tooltip' && (
                        <div className="absolute hidden group-hover:block text-white bg-black/90 bottom -top-10 left-1/2 -translate-x-[50%] p-1 rounded">
                            {highlight?.valueModal?.value}
                        </div>
                    )}
                </span>
            ) : (
                part
            );
        });
    };

    return (
        <>
            <div>{getHighlightedText(text, highlights)}</div>
            {isModal && (
                <div className="fixed inset-0 bg-black/40 z-20 flex items-center justify-center overflow-y-auto">
                    <button
                        className="absolute top-2 right-2 hover:bg-red-600 bg-red-500 p-2 rounded text-white"
                        onClick={() => setIsModal(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                        </svg>
                    </button>
                    <div className="grid grid-cols-2 gap-2 bg-white rounded p-4 md:w-[80%] max-h-[80%] overflow-y-auto">
                        {valueModal?.map((item, index) => (
                            <img key={index} src={item} alt={item} className="rounded" />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default HighlightText;
