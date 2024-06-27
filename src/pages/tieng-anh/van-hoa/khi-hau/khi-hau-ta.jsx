import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';


const KHIHAUTA= () => {
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
            text: 'the rainy season',
            image: 'https://buhkhkt.github.io/CHINH/m%C3%B9a%20m%C6%B0a.jpg'
        },
        {
            text: 'the dry season',
            image: 'https://buhkhkt.github.io/CHINH/m%C3%B9a%20kh%C3%B4.jpg'
        },
        {
            text: 'the production',
            image: 'https://buhkhkt.github.io/CHINH/m%C6%B0a%20%E1%BA%A3nh%20h%C6%B0%E1%BB%9Fng%20s%E1%BA%A3n%20xu%E1%BA%A5t.jpg'
        },
        {
            text: 'lives',
            image: 'https://buhkhkt.github.io/CHINH/nh%C3%A0%20t%E1%BB%91c%20n%E1%BB%91c.jpg'
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
    
   return (
    <>
        <div className="container pb-20">
        <div className="mb-4">
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Climatic Features</h1>
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

            <div className="flex flex-col gap-4 bg-white rounded-xl overflow-hidden shadow p-4">
                <p className="text-justify break-words whitespace-pre-wrap">
                    Trà Vinh province is situated in a tropical monsoon climate zone, characterized by hot and humid weather. The climate is divided into two distinct seasons: {highlightText(`the rainy season`)}, {highlightText(`the dry season`)}. The average annual temperature in Trà Vinh province ranges from 25 to 27 degrees Celsius. The province experiences low and unpredictable rainfall, with an average annual humidity level fluctuating between 83 and 85%. The driest months are typically February and March. Trà Vinh is affected by the fringes of tropical storms or tropical low-pressure systems, which significantly impact {highlightText(`the production`)} and {highlightText(`lives`)} of the coastal population.
                    
                </p>
                

                
            </div>         
        </div>

        

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default KHIHAUTA;