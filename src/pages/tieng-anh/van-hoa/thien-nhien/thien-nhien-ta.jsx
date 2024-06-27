import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const THIENNHIENTA = () => {
    const { data, isLoggedIn } = useAuth();
    const [mainBackground, setMainBackground] = useState('');
    const [borderBackground, setBorderBackground] = useState('');
    const role = data?.data?.role;
    useEffect(() => {
        if (data && role && isLoggedIn) {
            if (role === 'good') {
                setMainBackground('/main/top3.svg');
                setBorderBackground('/border/top3.svg');
            }
            if (role === 'best') {
                setMainBackground('/main/top1.png');
                setBorderBackground('/border/top1.svg');
            }
            if (role === 'top-good') {
                setMainBackground('/main/top2.svg');
                setBorderBackground('/border/top2.svg');
            }
        }
    }, [role, isLoggedIn]);
    const [openImage, setOpenImage] = useState(false);

    const sampleList = [
        {
            text: 'Kinh',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-kinh.jpg'
        },
        {
            text: 'Khmer',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-khmer.jpg'
        },
        {
            text: 'Hoa',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-hoa.jpg'
        },
        {
            text: 'Chăm',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-ch%C4%83m.jpg'
        }
    ];

    const showImageFromText = (text) => () => {
       const getImageIdx = sampleList.findIndex(x => x.text.toLowerCase() === text.toLowerCase());

       if (getImageIdx > -1) {
            setOpenImage(sampleList[getImageIdx].image);
       }
    }

    const highlightText = (text) => {
        return <strong className="inline relative text-[#be9f76] cursor-pointer" onClick={showImageFromText(text)}>{text}</strong>
    }
    


    const renderTooltipText = (text, id) => {
        return <a className={clsx('inline-block font-semibold text-[#be9f76] cursor-pointer', id)}>{text}</a>
    }

   return (
    <>
        <div className="container pb-20">
        <div className="mb-4">
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Nature Of Trà Vinh</h1>
                <div className="text-center">
                    {role && role !== 'normal' && (
                        <div className="right-main_icon flex justify-center gap-x-5">
                            <img className="w-10 h-10" src={mainBackground} alt="" />
                            <img className="w-10 h-10" src={mainBackground} alt="" />
                            <img className="w-10 h-10" src={mainBackground} alt="" />
                            <img className="w-10 h-10" src={mainBackground} alt="" />  
                        </div>
                    )}
                </div>
                </div>
            <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%95%20th%E1%BB%A5%20ao%20b%C3%A0%20om.webp" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/c%C3%A2y%20%C4%91%C6%B0%E1%BB%9Dng%20h%C3%A0ng%20me.jpg" className="w-full h-full object-cover"/>
                </div>
            <div className="flex flex-col gap-4 bg-white rounded-xl overflow-hidden shadow p-4">
                <p className="text-justify break-words whitespace-pre-wrap">
                    Trà Vinh is a shining gem amidst the Mekong Delta of Vietnam. Trà Vinh is renowned for its vast rice paddies, creating a lush and vibrant landscape during the harvesting season. Additionally, orchards with fruits like mangosteen, pomelo, pomegranate, and oranges offer majestic and picturesque scenes when they bloom in a profusion of flowers. The ancient trees, like legendary centenarians, stood for hundreds of years. Trà Vinh also boasts the presence of the open sea and a rich marine ecosystem. It's a place that attracts many tourists who come to enjoy the beautiful coastal scenery and engage in various water sports. When you step into Trà Vinh, you enter a world of wonder, where nature and humanity blend to create an irresistible allure.
                </p>

                
            </div>         
        </div>

        <Tooltip
            anchorSelect=".loi-bo"
            content="Đi bộ"
        />

        <Tooltip    
            anchorSelect=".men-dec-oi"
            content="Trời đất ơi"
        />

        <Tooltip    
            anchorSelect=".cha-ba"
            content="Rất lớn"
        />

        <Tooltip    
            anchorSelect=".chua-chin-hung"
            content="Chưa chín tới"
        />

        <Tooltip    
            anchorSelect=".re-re"
            content="Chậm chạp"
        />  

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default THIENNHIENTA;