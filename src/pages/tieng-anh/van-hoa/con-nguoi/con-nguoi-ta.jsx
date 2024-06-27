import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const CONNGUOITA = () => {
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Human Characteristics</h1>
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
                    Trà Vinh is a coastal province located in the Mekong Delta region of Vietnam. With a population of over one million people, Trà Vinh is home to various ethnic groups: {highlightText('Kinh')}, {highlightText('Khmer')}, {highlightText('Hoa')}, {highlightText('Chăm')} ,... Each ethnic group has its own distinctive cultural characteristics. People in Trà Vinh are known for being gentle, sincere, and hospitable. They live close to nature and are harmonious with others. In their communication, people in Trà Vinh often use the local language, which carries a strong Southern accent. Some notable local terms include: {renderTooltipText('"lội bộ"', 'loi-bo')}, {renderTooltipText('"mèn đéc ơi"', 'men-dec-oi')}, {renderTooltipText('"chà bá"', 'cha-ba')}, {renderTooltipText('"chưa chín hung"', 'chua-chin-hung')}, {renderTooltipText('"rề rề"', 're-re')} ,... They are also very open and friendly, always willing to help others. During festivals and special occasions, the people of Trà Vinh often organize folk festivals that showcase the rich cultural heritage of their ethnic groups. On these festive occasions, they host feasts to display their hospitality and generosity. They are always united and support one another in life, readily sharing difficulties and hardships. The people of Trà Vinh are truly admirable, contributing to the creation of a peaceful and beautiful Trà Vinh. If you have the opportunity to visit Trà Vinh, you will experience a diverse and rich cultural heritage and be welcomed by the warm and hospitable people.

                    
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/ng%C6%B0%E1%BB%9Di%20gi%E1%BA%A3n%20d%E1%BB%8B%201.jpg" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/ng%C6%B0%E1%BB%9Di%20gi%E1%BA%A3n%20d%E1%BB%8B%202.jpg" className="w-full h-full object-cover"/>
                </div>
            </div>         
        </div>

        
        <Tooltip
            anchorSelect=".loi-bo"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The commonly used term is 'đi bộ', which means walking on foot.
                </div>
            }
        />          

        
        <Tooltip
            anchorSelect=".men-dec-oi"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The commonly used term is "trời đất ơi", which means "oh my goodness".
                </div>
            }
        />          

        <Tooltip
            anchorSelect=".cha-ba"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The commonly used term is "rất lớn", which means "very big".
                </div>
            }
        />          

        
        <Tooltip
            anchorSelect=".chua-chin-hung"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The commonly used term is "chưa chín tới", which means "not ripe yet".
                </div>
            }
        />          

         
        <Tooltip
            anchorSelect=".re-re"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The commonly used term is "chậm chạp", which means "slowly".
                </div>
            }
        />          

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default CONNGUOITA;