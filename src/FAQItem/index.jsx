import React, { useState } from 'react';

const FAQItem = () => {
    const data = {
        foods: [
            {
                id: 1,
                name: 'Bánh canh Bến Có',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '1',
                        relateQuestion: [
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Chả hoa',
                            'Cốm dẹp',
                            'Trái quách',
                        ],
                    },
                    signature: {
                        answer: '3,52',
                        relateQuestion: [
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '2,5',
                        relateQuestion: [
                            'Bánh rây',
                            'Cá khoai',
                            'Cháo ám',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    variant: {
                        name: 'Biến tấu',
                        answer: '6',
                        relateQuestion: ['Bánh rây', 'Bún suông', 'Bún nước lèo'],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '4',
                    relateQuestion: [
                        'Cá khoai',
                        'Cháo ám',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 2,
                name: 'Bánh rây',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '7,63,64',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Chả hoa',
                            'Cốm dẹp',
                            'Trái quách',
                        ],
                    },
                    signature: {
                        answer: '8',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '7,10,64',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Cá khoai',
                            'Cháo ám',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    traditional: {
                        name: 'Truyền thống',
                        answer: '8,63',
                        relateQuestion: ['Cá khoai', 'Mắm bò hóc', 'Cốm dẹp', 'Nước mắm rươi', 'Bún nước lèo'],
                    },
                    variant: {
                        name: 'Biến tấu',
                        answer: '9',
                        relateQuestion: ['Bánh canh Bến Có', 'Bún suông', 'Bún nước lèo'],
                    },
                },
            },
            {
                id: 3,
                name: 'Cá khoai',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '24',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Chả hoa',
                            'Cốm dẹp',
                            'Trái quách',
                        ],
                    },
                    signature: {
                        answer: '24,30',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '23,30',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cháo ám',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    traditional: {
                        name: 'Truyền thống',
                        answer: '22',
                        relateQuestion: ['Bánh rây', 'Mắm bò hóc', 'Cốm dẹp', 'Nước mắm rươi', 'Bún nước lèo'],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '23,25',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cháo ám',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            { 
                id: 4,
                name: 'Cháo ám',
                overall: {
                    name: 'Khái quát chung',
                    affective: {
                        answer: '28',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '28',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 5,
                name: 'Dừa sáp',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '34,40',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Mắm bò hóc',
                            'Chả hoa',
                            'Cốm dẹp',
                            'Trái quách',
                        ],
                    },
                    signature: {
                        answer: '35,40',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '36,37,38,39',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Cháo ám',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '36',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Cháo ám',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 6,
                name: 'Mắm bò hóc',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '43',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Chả hoa',
                            'Cốm dẹp',
                            'Trái quách',
                        ],
                    },
                    signature: {
                        answer: '42',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '43,44,45',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Cháo ám',
                            'Dừa sáp',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    traditional: {
                        name: 'Truyền thống',
                        answer: '41,42',
                        relateQuestion: ['Bánh rây', 'Cá khoai', 'Cốm dẹp', 'Nước mắm rươi', 'Bún nước lèo'],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '41,42,44',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Cháo ám',
                        'Dừa sáp',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 7,
                name: 'Chả hoa',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '26',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Cốm dẹp',
                            'Trái quách',
                        ],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '26,27',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Cháo ám',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 8,
                name: 'Bánh tét Trà Cuôn',
                overall: {
                    name: 'Khái quát chung',
                    signature: {
                        answer: '11,12',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '15',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Cháo ám',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '12,13,14',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Cháo ám',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Chù ụ',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 9,
                name: 'Bún suông',
                overall: {
                    name: 'Khái quát chung',
                    signature: {
                        answer: '20',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    variant: {
                        name: 'Biến tấu',
                        answer: '21',
                        relateQuestion: ['Bánh canh Bến Có', 'Bánh rây', 'Bún nước lèo'],
                    },
                },
            },
            {
                id: 10,
                name: 'Chù ụ',
                overall: {
                    name: 'Khái quát chung',
                    signature: {
                        answer: '29',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '31',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Cháo ám',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                        ],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '29,31',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Cháo ám',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Nước mắm rươi',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 11,
                name: 'Cốm dẹp',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '32',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Chả hoa',
                            'Trái quách',
                        ],
                    },
                    signature: {
                        answer: '33',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '32',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Cháo ám',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Nước mắm rươi',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    traditional: {
                        name: 'Truyền thống',
                        answer: '33',
                        relateQuestion: ['Bánh rây', 'Cá khoai', 'Mắm bò hóc', 'Nước mắm rươi', 'Bún nước lèo'],
                    },
                },
            },
            {
                id: 12,
                name: 'Nước mắm rươi',
                overall: {
                    name: 'Khái quát chung',
                    signature: {
                        answer: '48',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Bún nước lèo',
                            'Trái quách',
                        ],
                    },
                    affective: {
                        answer: '47',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Cháo ám',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Chù ụ',
                            'Cốm dẹp',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    traditional: {
                        name: 'Truyền thống',
                        answer: '45',
                        relateQuestion: ['Bánh rây', 'Cá khoai', 'Mắm bò hóc', 'Cốm dẹp', 'Bún nước lèo'],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '46,48',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Cháo ám',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Bún nước lèo',
                    ],
                },
            },
            {
                id: 13,
                name: 'Bún nước lèo',
                overall: {
                    name: 'Khái quát chung',
                    signature: {
                        answer: '16,50',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Trái quách',
                        ],
                    },
                },
                receipt: {
                    name: 'Cách làm',
                    traditional: {
                        name: 'Truyền thống',
                        answer: '18,50,65',
                        relateQuestion: ['Bánh rây', 'Cá khoai', 'Mắm bò hóc', 'Cốm dẹp', 'Nước mắm rươi'],
                    },
                    variant: {
                        name: 'Biến tấu',
                        answer: '21',
                        relateQuestion: ['Bánh canh Bến Có', 'Bánh rây', 'Bún suông'],
                    },
                },
                enjoy: {
                    name: 'Thưởng thức',
                    answer: '17,50,65',
                    relateQuestion: [
                        'Bánh canh Bến Có',
                        'Cá khoai',
                        'Cháo ám',
                        'Dừa sáp',
                        'Mắm bò hóc',
                        'Chả hoa',
                        'Bánh tét Trà Cuôn',
                        'Chù ụ',
                        'Nước mắm rươi',
                    ],
                },
            },
            {
                id: 14,
                name: 'Trái quách',
                overall: {
                    name: 'Khái quát chung',
                    history: {
                        answer: '49',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Chả hoa',
                            'Cốm dẹp',
                        ],
                    },
                    signature: {
                        answer: '49',
                        relateQuestion: [
                            'Bánh canh Bến Có',
                            'Bánh rây',
                            'Cá khoai',
                            'Dừa sáp',
                            'Mắm bò hóc',
                            'Bánh tét Trà Cuôn',
                            'Bún suông',
                            'Chù ụ',
                            'Cốm dẹp',
                            'Nước mắm rươi',
                            'Bún nước lèo',
                        ],
                    },
                },
            },
        ],
    };
    const [openQuestion, setOpenQuestion] = useState({
        value: '',
        open: false,
    });
    const [openOverall, setOpenOverall] = useState(false);
    const [openHistory, setHistory] = useState(false);
    const [openSignature, setSignature] = useState(false);
    const [openReceipt, setOpenReceipt] = useState(false);
    const [opentraditional, settraditional] = useState(false);
    return (
        <div>
            {data &&
                data.foods &&
                data.foods.map((food) => (
                    <div key={food.id}>
                        <h2
                            onClick={(e) => {
                                setOpenQuestion({
                                    value: `${food.id}. ${food.name}`,
                                    open: !openQuestion.open,
                                });
                            }}
                            className="text-xl mb-5 font-medium cursor-pointer hover:font-[orange]"
                        >
                            {food.id}. {food.name}
                        </h2>
                        {openQuestion.open && food?.overall && openQuestion.value === `${food.id}. ${food.name}` && (
                            <>
                                <div
                                    onClick={() => setOpenOverall(!openOverall)}
                                    className="mb-5 cursor-pointer text-medium font-medium"
                                >
                                    {food?.overall?.name}
                                </div>
                                {openOverall &&
                                    openQuestion.value === `${food.id}. ${food.name}` &&
                                    food?.overall?.history && (
                                        <>
                                            <div
                                                onClick={() => setHistory(!openHistory)}
                                                className="px-10 mb-5 cursor-pointer text-medium font-medium"
                                            >
                                                Lịch sử
                                            </div>
                                            {openHistory &&
                                                food?.overall?.history?.answer &&
                                                openQuestion.value === `${food.id}. ${food.name}` && (
                                                    <>
                                                        <div className="px-20 mb-5 cursor-pointer text-medium font-medium">
                                                            {food?.overall?.history?.answer}
                                                        </div>
                                                        {food?.overall?.history?.relateQuestion &&
                                                            food?.overall?.history?.relateQuestion.map((question) => (
                                                                <div
                                                                    key={question}
                                                                    className="px-25 mb-5 cursor-pointer text-medium font-medium"
                                                                >
                                                                    {question}
                                                                </div>
                                                            ))}
                                                    </>
                                                )}
                                        </>
                                    )}
                            </>
                        )}
                        {openQuestion.open && food?.receipt && openQuestion.value === `${food.id}. ${food.name}` && (
                            <>
                                <div onClick={() => {setOpenReceipt(!openReceipt)} } 
                                className="mb-5 cursor-pointer text-medium font-medium">{food?.receipt?.name}</div>
                                {openReceipt &&
                                    openQuestion.value === `${food.id}. ${food.name}` &&
                                    food?.receipt?.traditional &&(
                                        <>
                                            <div
                                                onClick={() => settraditional(!opentraditional)}
                                                className="px-10 mb-5 cursor-pointer text-medium font-medium"
                                            >
                                                Truyền thống
                                            </div>
                                            {opentraditional &&
                                                food?.receipt?.traditional?.answer &&
                                                openQuestion.value === `${food.id}. ${food.name}` && (
                                                    <>
                                                        <div className="px-20 mb-5 cursor-pointer text-medium font-medium">
                                                            {food?.receipt?.traditional?.answer}
                                                        </div>
                                                        {food?.receipt?.traditional?.relateQuestion &&
                                                            food?.receipt?.traditional?.relateQuestion.map((question) => (
                                                                <div
                                                                    key={question}
                                                                    className="px-25 mb-5 cursor-pointer text-medium font-medium"
                                                                >
                                                                    {question}
                                                                </div>
                                                            ))}
                                                    </>
                                                )}
                                        </>
                                    )

                                }
                            </>
                            
                        )}
                        {openQuestion.open && food?.enjoy && openQuestion.value === `${food.id}. ${food.name}` && (
                            <div className="mb-5 cursor-pointer text-medium font-medium">{food?.enjoy?.name}</div>
                        )}
                    </div>
                ))}
        </div>
    );
};
export default FAQItem;