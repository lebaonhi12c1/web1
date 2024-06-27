import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

const ConNguoiKM = () => {
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
            text: 'កីញ',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-kinh.jpg'
        },
        {
            text: 'ខ្មែរ',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-khmer.jpg'
        },
        {
            text: 'ហ្វា',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-hoa.jpg'
        },
        {
            text: 'ចាម',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-ch%C4%83m.jpg'
        },
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">លក្ខណៈមនុស្ស</h1>
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
                Tra vinh ជាខេត្តជាប់មាត់សមុទ្រមួយក្នុងតំបន់វាលទំនាបទន្លេកឺវឡុង(Cuu long) ប្រទេសវៀតណាម។ Tra vinh មានប្រជាជនចំនួនជាង១លាននាក់ ទីនេះកន្លែងរស់នៅរបស់ច្រើនជនជាតិមាន ៖{highlightText('កីញ')} {highlightText('ខ្មែរ')} {highlightText('ហ្វា')} {highlightText('ចាម')}។ល។ ជនជាតិនីមួយៗមានលក្ខណៈពិសេសអំពីវប្បធម៌រៀងៗខ្លួន។ មនុស្ស ​Tra vinh ល្បី​ខាង​ស្លូតបូត ស្មោះត្រង់ និង​រាក់ទាក់។ ពួក​គេ​រស់​នៅ​ជិតស្និតនឹង​ធម្មជាតិ ដោយ​សុខដុម​ជាមួយ​មនុស្ស។ ក្នុង​ការ​ប្រាស្រ័យ​ទាក់ទង​គ្នា ប្រជាជន Tra vinh​ ​តែងតែ​ប្រើ​គ្រាមភាសា​ តាមលក្ខណៈរបស់តមបន់ណាមបូរ។ មានពាក្យមួយចំនួនដូចជា៖ {' '}
                {renderTooltipText('ឡោយបូរ', 'loi-bo')},{' '}
                {renderTooltipText('ម៉ែនដែតអើយ', 'men-dec-oi')},{' '}
                {renderTooltipText('ចា​បា', 'cha-ba')},{' '}
                {renderTooltipText('ចឿចិនហុង', 'chua-chin-hung')},{' '}
                {renderTooltipText('រ៉េ​រ៉េ', 're-re')},...
                ពួកគេក៏ឬីករាយ និងរួសរាយរាក់ទាក់ត្រៀមខ្លួនជួយអ្នកដទៃផងដែរ។ ក្នុងឱកាសពិធីបុណ្យ ប្រជាជន Tra Vinh តែងតែរៀបចំពិធីបុណ្យប្រពៃណី ដោយបង្កប់នូវអត្តសញ្ញាណវប្បធម៌របស់ជាតិ។ ប្រជាជន Tra Vinh តែងតែរៀបចំពិធីជប់លៀងអញ្ជើញភ្ញៀវ និងបង្ហាញពីបដិសណ្ឋារកិច្ចរបស់ពួកគេ។ ពួកគេតែងតែរួបរួម និងជួយគ្នាទៅវិញទៅមកក្នុងជីវិត។ មនុស្សតែងតែ​ ចែករំលែកការលំបាក និងទុក្ខលំបាកដល់គ្នាទៅវិញទៅមក។ ប្រជាជន Tra vinh ជាមនុស្សគួរឱ្យយើងគោរព ពួកគេបានរួមចំណែកបង្កើតទឹកដីត្រាវិញប្រកបដោយសន្តិភាព និងស្រស់ស្អាត។ ប្រសិនបើអ្នកមានឱកាសមក Tra vinh អ្នកនឹងទទួលបានបទពិសោធន៍វប្បធម៌ដ៏សម្បូរបែប ក៏ដូចជាបានស្វាគមន៍ដោយមនុស្សរួសរាយរាក់ទាក់។


                    
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
                    ដើរ។
                </div>
            }
        />

        <Tooltip
            anchorSelect=".men-dec-oi"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    អួ​ព្រះ​ជួយ។
                </div>
            }
        />


        <Tooltip
            anchorSelect=".cha-ba"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    ធំ​ណាស់។
                </div>
            }
        />

        <Tooltip
            anchorSelect=".chua-chin-hung"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    មិនទាន់ទុំ។
                </div>
            }
        />

        <Tooltip
            anchorSelect=".re-re"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    យឺត។
                </div>
            }
        />

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default ConNguoiKM;