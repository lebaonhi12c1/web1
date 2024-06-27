import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

const DIALYKM= () => {
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
            text: 'រាបស្មើ',
            image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BB%8Ba%20h%C3%ACnh%20b%E1%BA%B1ng%20ph%E1%BA%B3ng.jpg'
        },
        {
            text: 'មានជីជាតិ និងដីមានភក់ច្រើន',
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">ឋានរេខានិងភូមិសាស្រ្ត</h1>
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
                ត្រាវិញ ជាខេត្តមួយក្នុងចំណោមខេត្តទាំង១២ នៅតំបន់វាលទំនាបទន្លេកឺវឡុង ។ ត្រាវិញមានព្រំប្រទល់ជាប់ខេត្ត Ben Tre, Soc Trang និងខេត្ត Vinh Long ខាងកើតគឺសមុទ្រខាងកើត។ មានឆ្នេរសមុទ្រប្រវែង ៦៥ គីឡូម៉ែត្រ។ ខេត្តត្រាវិញមានផ្ទៃដីសរុបចំនួន ២.៣៩០.៨ គីឡូម៉ែត្រការេ មានអង្គភាពរដ្ឋបាល៩ជាប់ពាក់ព័ន្ធ    ​​​រួមមានៈ ក្រុងត្រាវិញ ទីរួមខេត្ត Duyen Hai និង ៧ ស្រុក៖ Cang Long, Chau Thanh, Cau Ke, Tieu Can, Cau Ngang, Tra Cu , ។
                </p>
                <p className="text-justify break-words whitespace-pre-wrap">
                ដី​ខេត្ត​នេះ​មាន​លក្ខណៈ {highlightText ('រាបស្មើ')}{' '}និង​គ្មាន​ភ្នំ
                ។ ខេត្តត្រាវិញត្រូវបានបែងចែកដោយបណ្តាញទន្លេ និងប្រឡាយដ៏សម្បូរបែប រួមទាំងទន្លេធំៗចំនួនពីរ គឺទន្លេ Tien និងទន្លេ Hau រួមជាមួយនឹងព្រែកតូចៗ និងព្រៃកោងកាងជាច្រើន។ ដីនៅត្រាវិញ
                    {highlightText(`មានជីជាតិ និងដីមានភក់ច្រើន`)}{' '}ស្រទាប់ដីល្បាប់ពីទន្លេធំពីរ បង្កើតលក្ខខណ្ឌល្អសម្រាប់ការដាំដុះ និងផលិតកសិកម្ម។ លើសពីនេះ ត្រាវិញក៏មានឆ្នេរ កោះ និងកោះមួយចំនួនទៀត ដែលជាតំបន់ទេសចរណ៍ទាក់ទាញភ្ញៀវទេសចរណ៍។
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

export default DIALYKM;