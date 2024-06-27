import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const LICHSUKM= () => {
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">ប្រវត្តិនៃការកកើត</h1>
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
                ដោយការប្រទះនឹងការឡើងចុះ ពីព្រោះវាត្រូវបានប្រែប្រួល នៃភូគព្ភសាស្ត្រ និងពេលវេលានៃ "ការរុលទៅមុខ និងដកថយនៃសមុទ្រ" កន្លែងនេះគេហៅថា " Tra Vang " ខេត្ត Tra Vinh បានបង្កើតឡើងជាយូរមកហើយ។ នៅពេលនោះTra Vinh​​ ជាតំបន់ចោលទំនេរដោយមានព្រៃឈើគ្របដណ្ដប់លើដី វាលភក់ និងបណ្តាញទន្លេ និងព្រែកយ៉ាងច្រើន មានប្រជាជនរស់នៅតិច។ ពីឆ្នាំ ១៧៣២ ដល់ឆ្នាំ ១៩០០ ទឹកដី Tra Vinh ស្ថិតនៅក្រោមការគ្រប់គ្រងរបស់ស្តេច Nguyễn បន្ទាប់មករាជវង្ស Nguyễn ។ ក្នុងពេលនេះ ទឹកដី Tra Vinh មានការប្រែប្រួលប្រវត្តិសាស្ត្រច្រើន ប៉ុន្តែនៅរក្សាបាននូវប្បធម៌ប្រពៃណីរបស់ជនដែលរស់នៅក្នុងតំបន់នេះ។ នៅថ្ងៃទី ២០ ខែធ្នូ ឆ្នាំ ១៨៩៩ អគ្គទេសាភិបាលនៃឥណ្ឌូចិន ឌូមឺរ Doumer បានចុះហត្ថលេខាលើក្រឹត្យផ្លាស់ប្តូរឈ្មោះអនុតំបន់ទៅជាខេត្ត។ ពីពេលនេះ{renderTooltipText('៦ខេត្ត Nam Kỳ', 'Nam-Ky-luc-tinh')}{' '}បានបែងចែកទៅជាខេត្តថ្មីចំនួន ១០ ខេត្ត Vinh Long ចាស់ត្រូវបានបំបែកជាខេត្តថ្មីចំនួន ៣ គឺ Vinh Long, Ben Tre, Tra Vinh ។ នៅឆ្នាំ ១៩០០ ឈ្មោះខេត្តត្រាវិញត្រូវបានប្រើប្រាស់ជាផ្លូវការរហូតដល់ឆ្នាំ ១៩៥១។ ពីឆ្នាំ ១៩៥១ ដល់ឆ្នាំ ១៩៧៦ Tra Vinh និង Vinh Long ត្រូវបានបញ្ចូលគ្នាជាមួយគ្នា ហើយប្តូរឈ្មោះជាច្រើនដងដូចជា Vinh Tra, Vinh Binh, Cuu Long ។ នៅថ្ងៃទី ៥ ខែឧសភា ឆ្នាំ ១៩៩២ ការសម្រេចចិត្តមួយត្រូវបានធ្វើឡើងដើម្បីបំបែកខេត្ត Cuu Long ជាពីរខេត្តគឺ Tra Vinh និង Vinh Long ។ ខេត្តត្រាវិញបានចូលជាធរមាន និងអភិវឌ្ឍន៍រហូតមកដល់សព្វថ្ងៃនេះ។
                </p>
                
            </div>         
        </div>

        <Tooltip
            anchorSelect=".Nam-Ky-luc-tinh"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Nam Ky Luc Tinh (ឬ Luc Tinh) គឺជាឈ្មោះតំបន់ភាគខាងត្បូងនៅដើមរាជវង្សង្វៀន។
                </div>
            }
        />


        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default LICHSUKM;