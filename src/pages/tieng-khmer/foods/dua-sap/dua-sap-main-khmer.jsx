import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'ខ្ទិះរាវ',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20s%E1%BB%87t.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'ដូងខ្ទិះ',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p.jpeg'
    },
    {
        text: 'ទឹកដោះគោខាប់',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BB%AFa%20%C4%91%E1%BA%B7c.jpg'
    },
    {
        text: 'ស្ករ',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'សណ្ដែកដីដុត',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'ទឹកកក',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C3%A1%20nhuy%E1%BB%85n.jpg'
    },
]





const thuongthucthanhpham = [
    {
        text: 'ការចងចាំ',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A8o%20c%C3%A2y%20d%E1%BB%ABa.jpg'
    },
    
]

const DUASAPMAINKM = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu, ...thuongthucthanhpham];

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
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">ដូងខ្ទិះ</h1>
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
                    src="https://www.youtube.com/embed/1ibZFxw9ZKw?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                    title="Thuyết trình về món Bánh canh Bến Có"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                ></iframe>
                </div>
            </div>

            

            
 
            <FoodContent 
                title="ការណែនាំទូទៅ៖"
                           
            >
                <p>
                ដូងខ្ទិះគឺជាផ្លែឈើតែមួយពិសេស។ ឈ្មោះនេះបានមកពីភាពអស្ចារ្យនៃសាច់ដូងដែលមានសភាពទន់ រលោង និងមានជាតិខាញ់។ ផ្លែឈើនេះត្រូវបានគេរកឃើញជាលើកដំបូងនៅប្រហែលទសវត្សរ៍ទី៤០ នៃសតវត្សទី២០ នៅខេត្តត្រាវិញ ដែលមានទីតាំងនៅភាគខាងលិចប្រទេសវៀតណាម ដែលជាទឹកដីដ៏ល្បីល្បាញសម្រាប់ភាពសម្បូរបែបនៃដូងដែលឆ្ងាញ់ ។ នៅត្រាវិញ អាកាសធាតុពិសេស និងលក្ខខណ្ឌដីបានបង្កើតឱ្យមានការប្រែប្រួលហ្សែនតែមួយគត់ដែលលេចឡើងនៅទីនេះ។ ដូងខ្ទិះមិនអាចដាំនៅកន្លែងណាផ្សេងបានទេ ដែលធ្វើឱ្យវាពិសេស និងកម្រ។
                </p>
                <p>
                តម្លៃរបស់វាលើសពីដូងធម្មតា។  អ្វីដែលពិសេសនោះគឺថានៅក្នុងដំណើរការនៃការបង្កាត់ពូជដូង      ត្រូវបានជ្រើសរើសសម្រាប់ការបង្កាត់ពូជព្រោះវាមានភាពកម្រ។ ដូងខ្ទិះថ្វីដ្បិតតែឆ្ងាញ់ក៏មិនអាចក្លាយជាពូជបានដែរ គេប្រើដើម្បីបង្កើតផលិតផលឆ្ងាញ់ផ្សេងទៀត។
                </p>
                <p>
                ប្រសិនបើអ្នកធ្លាប់ទទួលទានដូងខ្ទិះ អ្នកនឹងត្រូវបានជ្រមុជនៅក្នុងរសជាតិផ្អែម{highlightText('ខ្ទិះរាវ')}ពិសេស។ ទោះជាយ៉ាងណាក៏ដោយ ផ្លែឈើប្រភេទនេះច្រើនតែបង្កើតផលបានតិចតួចបំផុត គឺមានតែប្រហែល ២ ទៅ ៣ ផ្លែប៉ុណ្ណោះក្នុងមួយដើមដូង។ នេះធ្វើឱ្យពួកវាកម្រ និងមានតម្លៃថ្លៃ ប៉ុន្តែក៏បង្ហាញពីតម្លៃ និងភាពប្លែកនៃដូងក្រមួន ដែលជាកំណប់ទ្រព្យនៃទឹកដីត្រាវិញផងដែរ។
                </p>
            </FoodContent>    


            <FoodContent title="វិធីធ្វើមួយចំនួន">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">សូមរីករាយជាមួយការផ្សាយបន្តផ្ទាល់៖</h4>
                                <div>
                                    <p>
                                    មធ្យោបាយដ៏សាមញ្ញបំផុតដើម្បីទទួលបទពិសោធន៍យ៉ាងពេញលេញនូវរសជាតិនៃដូងក្រមួនគឺត្រូវប្រើវាដោយផ្ទាល់។ នៅពេលអ្នកញ៉ាំ អ្នកអាចដឹងយ៉ាងច្បាស់នូវរសជាតិផ្អែម ខ្លាញ់ និងក្លិនដូងដែលសាយភាយនៅក្នុងមាត់របស់អ្នក។ សាច់ដូងក្រាស់ និងស្អិតជាចំណុចពិសេសដែលអ្នកណាបានភ្លក់នឹងចងចាំជារៀងរហូត។
                                    </p>
                                </div>


                                <h4 className="text-xl font-semibold">ដូងខ្ទិះលាយជាមួយទឹកដោះគោនិងទឹកកក៖</h4>
                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំដូងខ្ទិះ</span>
                                        <p>បកដូងនិងពុះដូងជាពីរចំណែក។ បន្ទាប់មក យើង ចិតសាច់ដូងទាំងអស់ដាក់ក្នុងចាន។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ផ្សំគ្រឿង</span>
                                        <p>ដាក់ក្នុងចានមួយប្រហែល ១ ស្លាបព្រាស្ករ ទឹកដោះគោខាប់ រួចច្របល់ចូលគ្នាឱ្យសព្វ។ បន្ទាប់ពីលាយរួច យើងគ្រាន់តែដាក់ដូងដែលលាយចូលទៅក្នុងកែវមួយដែលមានទឹកកក និងសណ្ដែកដីពីរបីគ្រាប់ ហើយយើងអាចចូលចិត្តបាន។</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/rvXYtaJ6UO0?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel: LEO COOKING</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">ដូងខ្ទិះកិននិងទឹកកក៖</h4>
                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំដូងខ្ទិះ</span>
                                        <p>កាត់ដូងជាពាក់កណ្តាល។ បន្ទាប់មកយើងបំបែកសាច់ដូងទាំងអស់ចូល ក្នុងចាន។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: កិននិងទឹកកក</span>
                                        <p>ដាក់ដូងចូលក្នុងម៉ាស៊ីនលាយជាមួយទឹកដោះគោខាប់ និងស្ករស ៣ស្លាបព្រាបាយ។ បន្ទាប់មកយើងបិទគម្របហើយលាយរហូតដល់ខ្ទិះដូងរលោង។ បន្ទាប់មកបន្ថែមទឹកកកបុកចូលច្របល់ចូលគ្នា។ គ្រាន់តែបន្តការលាយនិងបន្ថែមទឹកកកកំទេចនៅពេលដែលផ្នែកមុនបានរលាយស្មើគ្នា។ នៅពេលដែលយើងឃើញថា smoothie របស់យើងក្រាស់ល្មម យើងឈប់។ ជាចុងក្រោយគ្រាន់តែចាក់ចូលទៅក្នុងកែវមួយ ហើយរីករាយ។</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/Ar0iKB_7o6E?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel៖ Toi la nguoi Ben Tre</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="រីករាយជាមួយផលិតផល">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    ដូងខ្ទិះ- ជានិមិត្តសញ្ញាធ្វើម្ហូបដ៏ពិសេសរបស់ត្រាវិញ។ ក្លិនដូងក្រអូបមិនដូចដូងប្រភេទផ្សេងទៀតទេ។ ដរាបណាកាំបិតចូលទៅក្នុងសំបកដូងដ៏ក្រាស់ ក្លិនឈ្ងុយ និងខ្លាញ់ក៏លេចចេញមកដោយធម្មជាតិ ដាស់អារម្មណ៍ទាំងអស់។ នៅពេលដែលយើងរីករាយជាមួយនឹងសាច់ដូងទន់រលោង ភាពផ្អែមឆ្ងាញ់ចាប់ផ្តើមទាក់ទាញនូវរសជាតិនីមួយៗ។ មិនមែនដូងគ្រប់ប្រភេទមានសមត្ថភាពនាំអារម្មណ៍ពិសេសបែបនេះទេ។ នេះគឺជាការរួមផ្សំដ៏អស្ចារ្យនៃរសជាតិ និងក្លិនធម្មជាតិ។
                    </p>

                    <p>
                    ដូងខ្ទិះត្រាវិញមិនត្រឹមតែជាអាហារទេ វាជាស្នាដៃសិល្បៈធម្មជាតិ។ ភាពកម្ររបស់វាធ្វើឱ្យបទពិសោធន៍រីករាយកាន់តែពិសេស។ នេះជាអាហារដែលមានតម្លៃខ្ពស់ និងប្លែកពីគេ ហើយវាបន្ថែមភាពសប្បាយរីករាយក្នុងការភ្លក់ក្រមួនដូង។ បន្ថែមពីលើការជំរុញអារម្មណ៍ ដូងក្រមួនក៏រំលេចនូវ{highlightText('ការចងចាំ')}ពីជនបទភាគខាងលិចនៃប្រទេសវៀតណាម ដែលដូងប្រភេទនេះត្រូវបានដាំដុះ និងប្រមូលផល។
                    </p>
                                            
                    <p>
                    ការរីករាយជាមួយដូងក្រមួនគឺជាវិធីមួយដើម្បីភ្ជាប់ជាមួយនឹងវប្បធម៌ និងភាពប្លែកនៃតំបន់នេះ ដែលជាអារម្មណ៍ដ៏អស្ចារ្យពិតប្រាកដ។ រីករាយជាមួយត្រាវិញ ក្រមួនដូងក៏ជាដំណើរកម្សាន្តដើម្បីទទួលយកភាពស្រស់ស្អាត និងភាពប្លែកនៃត្រាវិញ តាមរយៈបទពិសោធន៍ដែលនាំមកនូវអារម្មណ៍មិនអាចបំភ្លេចបាន។
                    </p>

                </div>
            </FoodContent>



            <FoodContent title="រក្សា">

                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                    ដោយប្រើដូងខ្ទិះ ទើបរើសពីដើម អ្នកអាចទុកវាបាន ១៥ ទៅ ២០ ថ្ងៃនៅសីតុណ្ហភាពបន្ទប់។ បើចង់ពន្យារពេលទុកដាក់ ក្រមួនដូងដាក់ក្នុងទូទឹកកក ហើយទុកប្រហែល ២៥ ទៅ ៣០ថ្ងៃ។ ជាមួយនឹងដូងដែលត្រាំរួច អ្នកអាចទុកដូងបានប្រហែល៣ថ្ងៃក្នុងទូទឹកកក ឬក្នុងទូទឹកកករយៈពេល១សប្តាហ៍។ ទោះជាយ៉ាងណាក៏ដោយ ដើម្បីរីករាយជាមួយនឹងរសជាតិស្រស់ និងជូរនៃផ្លែឈើដ៏កម្រនេះ អ្នកគួរតែប្រើវាក្នុងរយៈពេលប្រហែល ១០ ថ្ងៃ។ ការរក្សាទុកយូរពេកនឹងធ្វើឱ្យក្រមួនដូងបាត់បង់រសជាតិរបស់វា ហើយសាច់ដូងនឹងមិនមានភាពបត់បែនដូចពេលដែលបានរើសដំបូងឡើយ។
                    </p>

                    

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ១០០០០០ ដុង-៣០០០០០ ដុង/ផ្លែ</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default DUASAPMAINKM
