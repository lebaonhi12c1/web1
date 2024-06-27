import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';


const DIALYTA= () => {
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
            text: 'relatively flat',
            image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BB%8Ba%20h%C3%ACnh%20b%E1%BA%B1ng%20ph%E1%BA%B3ng.jpg'
        },
        {
            text: 'fertile and alluvial',
            image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%A5t%20m%C3%A0u%20m%E1%BB%A1.jpg'
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Geography And Terrain</h1>
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
            {/*  */}
           
           
                <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/%C4%91%E1%BB%93ng%20b%E1%BA%B1ng%20scl.png" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/ban%20do%20tra%20vinh.jpg" className="w-full h-full object-cover"/>
                    
                </div>
                    
                
                
                
                <p className="text-justify break-words whitespace-pre-wrap">
                    Trà Vinh is one of the 12 provinces located in the Mekong Delta. It shares borders with Bến Tre, Sóc Trăng, and Vĩnh Long provinces, with the east being the East Sea. It has a coastline that stretches for 65 kilometers. The province of Trà Vinh covers a total natural area of 2,390.8 km2 and is divided into 9 administrative units, including Trà Vinh City, Duyên Hải Town, and 7 districts: Càng Long, Châu Thành, Cầu Kè, Tiểu Cần, Cầu Ngang, Trà Cú, and Duyên Hải.
                </p>
                <p className="text-justify break-words whitespace-pre-wrap">
                    The terrain of this province is {highlightText(`relatively flat`)} and lacks hills and mountains. Trà Vinh province is crisscrossed by a rich network of rivers and canals, including two major rivers, the Tiền River and the Hậu River, as well as numerous smaller canals and mangrove forests. The land in Trà Vinh is very {highlightText(`fertile and alluvial`)}, enriched by the silt from the two major rivers, creating favorable conditions for agriculture and farming. Additionally, Trà Vinh also boasts some beaches, islets, and sandbars that attract tourists.

                    
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%93n%20c%C3%B9%20lao.jpg" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/bi%E1%BB%83n%20ba%20%C4%91%E1%BB%99ng.jpg" className="w-full h-full object-cover"/>
                </div>
            </div>         
        </div>

        

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default DIALYTA;