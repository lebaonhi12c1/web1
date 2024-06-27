import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

const KHIHAUKM= () => {
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
            text: 'រដូវភ្លឿង',
            image: 'https://buhkhkt.github.io/CHINH/m%C3%B9a%20m%C6%B0a.jpg'
        },
        {
            text: 'និងរដូវក្តៅ',
            image: 'https://buhkhkt.github.io/CHINH/m%C3%B9a%20kh%C3%B4.jpg'
        },
        {
            text: 'ផលិតកម្ម',
            image: 'https://buhkhkt.github.io/CHINH/m%C6%B0a%20%E1%BA%A3nh%20h%C6%B0%E1%BB%9Fng%20s%E1%BA%A3n%20xu%E1%BA%A5t.jpg'
        },
        {
            text: 'ការរស់នៅ',
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">លក្ខណៈអាកាសធាតុ</h1>
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
                ខេត្តត្រាវិញ ស្ថិតនៅក្នុងតំបន់អាកាសធាតុខ្យល់មូសុងត្រូពិចក្តៅ និងសើម។ អាកាសធាតុត្រូវបានបែងចែកជាពីររដូវផ្សេងគ្នាគឺ{highlightText(`រដូវភ្លឿង`)} {highlightText(`និងរដូវក្តៅ`)}។ សីតុណ្ហភាពជាមធ្យមនៃខេត្តត្រាវិញជារៀងរាល់ឆ្នាំគឺពី ២៥ ទៅ ២៧ អង្សាសេ។ ភ្លៀងធ្លាក់ក្នុងខេត្តជាមធ្យមមានកម្រិតទាបនិងមិនស្ថិតស្ថេរ។ សំណើមប្រចាំឆ្នាំជាមធ្យមមានចាប់ពី ៨៣ - ៨៥% ជាមួយនឹងខែស្ងួតបំផុតប្រមូលផ្តុំនៅក្នុងខែកុម្ភៈ និងមីនា។ ត្រាវិញត្រូវបានរងផលប៉ះពាល់ដោយខ្យល់ព្យុះ ឬទំនាបត្រូពិច ដែលជះឥទ្ធិពលយ៉ាងខ្លាំងដល់{highlightText(`ផលិតកម្ម`)} និង{highlightText(`ការរស់នៅ`)} របស់ប្រជាជននៅតាមឆ្នេរសមុទ្រ។
                </p>
                

                
            </div>         
        </div>

        

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default KHIHAUKM;