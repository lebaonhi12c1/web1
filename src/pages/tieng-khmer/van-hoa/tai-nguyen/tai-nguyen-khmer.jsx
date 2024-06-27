import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const TAINGUYENKM = () => {
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
            text: 'រសំណង់',
            image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%8F%20c%C3%A1t.jpg'
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">ប្រភេទនៃធនធាន</h1>
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
                ខេត្ត Vinh Tra មានផ្ទៃដីព្រៃប្រមាណ ៩.៥៣៩ ហិកតា។ អត្រាគ្របដណ្តប់ព្រៃឈើឈានដល់ ៤.១% ។ ខេត្ត​នេះ​មាន​ដី​ចំនួន ៥ ក្រុម និង​ដី ១៨ ប្រភេទ។ ក្នុងចំណោមពួកគេ ក្រុមដីប្រៃមានផ្ទៃដីធំជាងគេ។ ប្រភេទរ៉ែសំខាន់ៗគឺ ទឹករ៉ែ និងសារធាតុរ៉ែដែលប្រើជាសម្ភា{highlightText(`រសំណង់`)}{' '}ទូទៅ៖ ខ្សាច់ទន្លេ ខ្សាច់ឆ្នេរ ខ្សាច់ផ្នោ ដីឥដ្ឋ។ល។ Vinh Tra មាន{renderTooltipText('តំបន់នេសាទ', 'ngu-truong')} ដែលមានកន្លែងនេសាទជាច្រើនមាន បង្គាធម្មជាតិ និងមឹក សមុទ្រមានសក្តានុពលកេងប្រវ័ញ្ចធំ ដោយអាហារសមុទ្រជាច្រើនប្រភេទមានតម្លៃសេដ្ឋកិច្ចខ្ពស់។
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/ng%C6%B0%20tr%C6%B0%E1%BB%9Dng.jpg" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/nu%C3%B4i%20t%C3%B4m.jpg" className="w-full h-full object-cover"/>
                </div>
            </div>         
        </div>

        <Tooltip
            anchorSelect=".ngu-truong"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    តំបន់សមុទ្រដែលមានធនធានជលផលប្រមូលផ្តុំត្រូវបានកំណត់សម្រាប់នាវានេសាទដើម្បីធ្វើអាជីវកម្ម។
                </div>
            }
        />

        

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default TAINGUYENKM;