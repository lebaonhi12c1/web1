import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';


const LICHSUTA= () => {
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">History Of Formation</h1>
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
                    Through the ups and downs shaped by geological processes and the ebb and flow of the sea, the region known as 'Trà Vang,' the precursor to Trà Vinh province, has a long history of formation. During that period, Trà Vinh was still a wild and desolate land, covered in dense forests, swamps, and a network of meandering rivers and creeks, with a sparse population. From 1732 to 1900, the land of Trà Vinh was under the rule of the Nguyễn lords and later the Nguyễn dynasty. During this time, the region experienced various historical transformations while retaining the distinctive cultural traits of the ethnic groups living within its borders. On December 20, 1899, the Governor-General of French Indochina, Doumer, signed a decree changing the name of the subregion to a province. From there, {renderTooltipText('"Nam Kỳ lục tỉnh"', 'Nam-Ky-luc-tinh')} was divided into 10 new provinces, and the former Vĩnh Long province was split into three new provinces: Vĩnh Long, Bến Tre, and Trà Vinh. The official name of Trà Vinh Province was used from 1900 until 1951. From 1951 to 1976, Trà Vinh and Vĩnh Long were merged and underwent several name changes, such as Vĩnh Trà, Vĩnh Bình, and Cửu Long. On May 5, 1992, a decision was made to separate Cửu Long province into two provinces, Trà Vinh and Vĩnh Long. Trà Vinh province officially began its operations and development, continuing to the present day.

                    
                </p>
                
            </div>         
        </div>

        <Tooltip
            anchorSelect=".Nam-Ky-luc-tinh"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Nam Kỳ Lục tỉnh (or 'Lục tỉnh') was the name of the region in southern Vietnam during the early Nguyễn dynasty.
                </div>
            }
        />          


        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default LICHSUTA;