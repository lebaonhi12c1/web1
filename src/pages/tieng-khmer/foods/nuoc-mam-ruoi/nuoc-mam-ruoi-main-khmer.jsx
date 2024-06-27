import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import clsx from "clsx";
import { Tooltip } from 'react-tooltip';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'con Ruoi',
        image: 'https://buhkhkt.github.io/CHINH/con%20r%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'ទឹកឃ្មុំ',
        image: 'https://buhkhkt.github.io/CHINH/m%C3%A0u%20m%E1%BA%ADt%20%C3%B4ng.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'Ruoi',
        image: 'https://buhkhkt.github.io/CHINH/con%20r%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'អំបិល',
        image: 'https://buhkhkt.github.io/CHINH/mu%E1%BB%91i.jpg'
    },
    
]

const cachlambientau = [
    { text: 'sườn non', image: 'https://buhkhkt.github.io/CHINH/s%C6%B0%E1%BB%9Dn%20non.jpg' },
    { text: 'mực ống', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20%E1%BB%91ng.jpg' },
    { text: 'tôm tít', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20t%C3%ADt.webp' }
]

const thuongthucthanhpham = [
    {
        text: 'trụng sơ',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20tr%E1%BB%A5ng%20n%C6%B0%E1%BB%9Bc%20s%C3%B4i.webp'
    },
    {
        text: 'rau muống chẻ',
        image: 'https://buhkhkt.github.io/CHINH/rau%20mu%E1%BB%91ng%20ch%E1%BA%BB.png'
    },
    {
        text: 'bắp chuối xắt',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'xà lách xoăn',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'giá đỗ',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'húng thơm',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%BAng%20th%C6%A1m.jpg'
    }
]

const NUOCMAMRUOIMAINKM = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu, ...cachlambientau, ...thuongthucthanhpham];

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
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">Mam Ruoi</h1>
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
                <div className="h-3"></div>
                <div className="rounded-2xl shadow overflow-hidden">
                <iframe
                    className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                    src="https://www.youtube.com/embed/fOIHPtyi9mc?list=PLO4xYQBA1oxUu9nptCBVmbDewjbLIGB95"
                    title="Thuyết trình về món Bánh canh Bến Có"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                ></iframe>
                </div>
            </div>

            

            
 
            <FoodContent 
                title="ការណែនាំទូទៅ"
                           
            >
                <p>
                Tra Vinh ជាតំបន់ភាគខាងត្បូងនៃប្រទេសវៀតណាម ជាយូរយារណាស់មកហើយ ល្បីល្បាញដោយសារអាហារឆ្ងាញ់ៗ និងប្លែកៗជាច្រើន។ យ៉ាងណាមិញ ប្រសិនបើអ្នកធ្លាប់បានបោះជើងនៅទីនេះ អ្នកប្រាកដជាបានលឺអំពីទឹកត្រីមួយប្រភេទពិសេសនៃតំបន់នេះកឺRuoi ។
                </p>
                <p>
                ទីរួមខេត្ត Duyen Hai ខេត្ត Tra Vinh មានភាពល្បីល្បាញដោយសារប្រភេទសត្វក្នុងទឹកពិសេសមួយប្រភេទគឺ {highlightText('con Ruoi')} ជាច្រើនជំនាន់មកហើយ ប្រជាជននៅទីនេះបានទាញយកអត្ថប្រយោជន៍ពីប្រភេទសត្វក្នុងទឹកនេះ ដើម្បីបង្កើតជាទឹកត្រីមួយប្រភេទ។ មានរឿងអាស្រូវដ៏គួរឱ្យចាប់អារម្មណ៍មួយអំពីប្រភពដើមរបស់វា ដែលយោងទៅតាមពេលដែលស្តេចង្វៀនអាញ់កំពុងធ្វើដំណើរទៅកាន់ប្រទេសនេះ អ្នកមានម្នាក់បានផ្តល់ទឹកត្រីឱ្យគាត់។ បន្ទាប់ពីឡើងសោយរាជ្យហើយ រៀងរាល់ឆ្នាំ ស្ដេចកៃឡុងបានបញ្ជូនទូកទៅខាងត្បូង ដើម្បីទិញទឹកត្រីមកពិសា តាមទំនៀមទម្លាប់របស់ព្រះរាជា ទ្រង់ត្រូវបានហៅថា {renderTooltipText('ស្ដេចកន។', 'vua-ngu-thien')} នោះហើយជាមូលហេតុដែលទឹកត្រីដង្កូវត្រូវបានគេហៅថា "ទឹកត្រីរាជ" ហើយក្លាយជាផលិតផលមានតម្លៃពិសេស។
                </p>
                <p>
                Ruoiវគឺជាប្រភេទសត្វស្លកដី ដែលរស់នៅក្រោមដីក្នុងតំបន់ទឹកប្រៃ និងព្រៃកោងកាង ទស្សនាទន្លេ ព្រែក និងដីភក់តាមឆ្នេរសមុទ្រ។ លក្ខណៈពិសេសរបស់ Ruoi គឺវាលេចឡើងតែក្នុងអំឡុងខែតុលា និងខែវិច្ឆិកា នៃប្រតិទិនចន្ទគតិ ដែលបណ្តាលឱ្យដំណើរការផលិតទឹកត្រីធ្វើឡើងក្នុងមួយឆ្នាំម្តង។ Mam Ruoi សុទ្ធមានជាតិ{renderTooltipText('ប្រូតេអ៊ីនខ្ពស់', 'do-dam-cao')} ដែលបង្កើតរសជាតិឆ្ងាញ់ និងប្រៃជាងទឹកត្រីធម្មតា។ ដំណើរការនៃការធ្វើទឹកត្រីក៏សាមញ្ញដែរ ដោយ  មួយគូលាយជាមួយអំបិលក្នុងសមាមាត្រថេរ បន្ទាប់មកភ្ញាស់នៅខាងក្រៅ។ នេះធ្វើឱ្យទឹកត្រី Ruoi កាន់តែថ្លា និងមានពណ៌លឿងដូច{highlightText('ទឹកឃ្មុំ')} ដែលនាំមកជាមួយនូវក្លិនឈ្ងុយឆ្ងាញ់ពិសេស។ ផលិតផលទឹកត្រីនីមួយៗ គឺជានិមិត្តសញ្ញានៃការខិតខំប្រឹងប្រែង និងញើសរបស់អ្នកផលិតទឹកត្រី។ សូមអរគុណចំពោះការគាំទ្ររបស់សមាគមផ្សព្វផ្សាយកសិកម្មខេត្ត ពេលនេះ Mam Ruoi ត្រូវបានដាក់ជាដប ត្រងតាមរយៈម៉ាស៊ីនក្រៀវកាំរស្មី UV និងបិទផ្លាកយីហោ។ នេះជួយកែលម្អគុណភាពនៃទឹកត្រី និងរក្សាវាឱ្យនៅស្រស់។
                </p>
                <p>
                ថ្វីត្បិតតែ Mam Ruoi ផលិតបានម្តងក្នុងមួយឆ្នាំក៏ដោយ ក៏ប្រជាជននៅទីនេះពេញចិត្តនឹងវាខ្លាំងណាស់ ហើយគ្រាន់តែផ្តល់ជូនភ្ញៀវនៅពេលដែលពួកគេមានភ្ញៀវកិត្តិយសប៉ុណ្ណោះ។ ជារៀងរាល់ឆ្នាំ ផលិតផល Mam Ruoi ត្រូវបានរក្សា និងនាំយកទៅគ្រប់ទិសទីក្នុងប្រទេស ដើម្បីជានិមិត្តរូបនៃមោទនភាពរបស់ខេត្ត Tra Vinh។
                </p>
            </FoodContent>    


            <FoodContent title="វិធីធ្វើ Mam Ruoi">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">គ្រឿងផ្សំ៖</h4>

                                <div>
                                   

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className="text-xl font-semibold">ជំហាន៖</h4>

                                <div className="flex flex-col gap-3 mt-6">
                                    

                                    <div>
                                        
                                        <p>យើងបន្តបង្កាត់ទឹកត្រី។ យើងដាក់ដង្កូវ និងអំបិលចូលក្នុងពាងក្នុងសមាមាត្រ ៧:៣ (ឧទាហរណ៍ Ruoi ៧០គីឡូក្រាមនឹងប្រើអំបិល 30 គីឡូក្រាម) ។ បន្ទាប់មកយើងកូរឱ្យសព្វរហូតដល់អំបិលរលាយស្មើគ្នា។ យើងរង់ចាំមួយភ្លែតឲ្យទឹកស្រកដល់កំពូល រួចយកពពុះចេញ រួចបិទគម្របឲ្យជិត រួចដាក់ទឹកត្រីចូលរយៈពេល ១០ ខែ។ បន្ទាប់ពីប្រហែល ១០ ខែយើងនឹងច្រោះទឹកត្រីដើម្បីដាក់ចូលក្នុងដប។ សព្វថ្ងៃមានបច្ចេកវិទ្យាទំនើបក្នុងការក្រៀវដោយប្រើកាំរស្មី UV ដូច្នេះការចម្រោះទឹកត្រីក៏កាន់តែទំនើប និងមានសុវត្ថិភាពផងដែរ។</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/aKI7Hglk1YU?list=PLO4xYQBA1oxUu9nptCBVmbDewjbLIGB95"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel: TRA VINH TV</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    ការទទួលទាន Mam Ruoi មិនត្រឹមតែជាការទទួលទានប៉ុណ្ណោះទេ ថែមទាំងជាការរីករាយ និងលើកតម្កើងទឹកដីត្រាវិញ និងប្រជាជននៅទីនេះផងដែរ។ នោះហើយជារបៀបដែលអ្នកទទួលបានទំនាក់ទំនងជាមួយប្រវត្តិសាស្ត្រនិងវប្បធម៌នៃសមុទ្រនេះនិងរបៀបដែលអ្នកបង្ហាញពីការដឹងគុណនិងការគោរពចំពោះការងាររបស់អ្នកដែលធ្វើទឹកត្រី។ ជាដំបូង នៅពេលដែលអ្នកយកសាច់ត្រី ឬអយស្ទ័រត្រជាក់ និងស្រស់មួយដុំដាក់លើក្រដាសអង្ករស្តើងៗ នោះអ្នកនឹងមានអារម្មណ៍ថាមានក្លិនឈ្ងុយ និងប្រៃនៃទឹកត្រី។ នេះជាក្លិនសមុទ្រ ក្លិនព្រះអាទិត្យ ក្លិនខ្សាច់ស និងរលកសមុទ្រ។ ទឹកត្រីមួយតំណក់មានខ្យល់ដង្ហើមសមុទ្រ ហើយនៅពេលអ្នករីករាយនឹងវា អ្នកពិតជាបានជ្រមុជខ្លួនអ្នកនៅក្នុងបទពិសោធន៍សមុទ្រដ៏ពិសេសនេះ។
                    </p>

                    <p>
                    ប្រសិនបើអ្នកមានឱកាសរីករាយនឹង Mam Ruoi ត្រាវិញ រីករាយគ្រប់ដំណក់ និងរាល់ខាំ។ ទទួលបានរសជាតិនៃសមុទ្រ និងចែករំលែកមោទនភាពនៃផលិតផលដែលមានតែមួយគត់សម្រាប់ទឹកដីនេះ។
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ៥០០០០ ដុង - ១០០០០០ ដុង/៥០០ml អាស្រ័យលើគុណភាពទឹកត្រី តម្លៃទឹកត្រីប្រែប្រួល។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            

            
        <Tooltip
            anchorSelect=".vua-ngu-thien"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    អាហារលំដាប់ខ្ពស់គឺសម្រាប់តែស្តេចប៉ុណ្ណោះ។
                </div>
            }
        />
        <Tooltip
            anchorSelect=".do-dam-cao"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    សំដៅទៅលើបរិមាណប្រូតេអ៊ីនដែលមាននៅក្នុងផលិតផល។
                </div>
            }
        />
            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default NUOCMAMRUOIMAINKM
