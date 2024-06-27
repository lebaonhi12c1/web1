import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'សមុទ្រនៅ Ba Dong',
        image: 'https://buhkhkt.github.io/CHINH/v%C3%B9ng%20ba%20%C4%91%E1%BB%99ng.jpg'
    },
    {
        text: 'សមុទ្រ Ba Dong',
        image: 'https://buhkhkt.github.io/CHINH/bi%E1%BB%83n%20ba%20%C4%91%E1%BB%99ng.jpg'
    },
    {
        text: 'ត្រីដំឡូង',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20d%E1%BB%93i%20d%C3%A0o.jpg'
    },
]

const nguyenlieu1 = [
    {
        text: 'ត្រីនិងដំឡូង',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai.jpg'
    },
    {
        text: 'អង្ករ',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg'
    },
    {
        text: 'ខ្ទឹមបារាំង ម្ទេស ផ្សិត ខ្ទឹមស',
        image: 'https://buhkhkt.github.io/CHINH/NLP%20c%C3%A1%20khoai.jpg'
    },
    {
        text: 'ម្សៅគ្រឿងទេស',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C3%AAm.jpg'
    },
]

const nguyenlieu2 = [
    {
        text: 'ត្រីដំឡូង',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai.jpg'
    },
    {
        text: 'បន្លែអម្បោះ ប៉េងប៉ោះ',
        image: 'https://buhkhkt.github.io/CHINH/rau%20c%E1%BA%A7n,%20c%C3%A0%20chua.jpg'
    },
    {
        text: 'ខ្ទឹមសន្លឹក ខ្ទឹមស ម្ទេស',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%A0nh%20t%E1%BB%8Fi%20%E1%BB%9Bt.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
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

const CAKHOAIMAINKM = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1, ...nguyenlieu2, ...cachlambientau, ...thuongthucthanhpham];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">ត្រីដំឡូង</h1>
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
                    src="https://www.youtube.com/embed/OO51I48r7_g?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
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
                ត្រីដំឡូង ដែលជាប្រភេទត្រី{highlightText('សមុទ្រនៅ Ba Dong')} ខេត្ត Tra Vinh មិនត្រឹមតែជាមុខម្ហូបដ៏ពេញនិយមប៉ុណ្ណោះទេ ថែមទាំងជាបទពិសោធន៍ដ៏រំភើបសម្រាប់អ្នកដែលចូលចិត្តរសជាតិធម្មជាតិនៃសមុទ្រផងដែរ។ នៅពេលអ្នកដើរលើ{highlightText('សមុទ្រ Ba Dong')} អ្នកនឹងជាប់នៅក្នុងភាពស្រស់ស្អាតនៃធម្មជាតិ ជាមួយនឹងខ្សាច់ពណ៌ស និងរលកសមុទ្រពណ៌ខៀវ។ នេះគឺជាកន្លែងដែល{highlightText('ត្រីដំឡូង')}ក្លាយជាផ្នែកមួយនៃប្រព័ន្ធអេកូឡូស៊ីនៃសមុទ្រនេះ ដែលមានប្រភពអាហារដ៏បរិបូរណ៍ ដែលជួយឱ្យពួកវាធំធាត់ មានសាច់ឆ្ងាញ់ និងសារធាតុចិញ្ចឹមជាច្រើន។ ប្រជាជននៅ Ba Dong បានបង្កើតអាហារពិសេសពីត្រីដំឡូងផ្អែម ពីត្រីដំឡូងផ្អែមឆ្អិន រហូតដល់បបរត្រីដំឡូងផ្អែម។
                </p>
                <p>
                មុខម្ហូបនីមួយៗបង្កើតបាននូវរសជាតិប្លែកជាមួយនឹងការរួមបញ្ចូលគ្នាដ៏ប៉ិនប្រសប់នៃគ្រឿងផ្សំស្រស់ៗ និងគ្រឿងទេសធម្មជាតិ។ រសជាតិធម្មជាតិ ផ្អែម និងសម្បូរបែបនៃត្រីសមុទ្រនេះនឹងធ្វើឱ្យអ្នក «ងក់ក្បាលដោយសរសើរពីភាពឆ្ងាញ់របស់វា»។ ហើយអ្វីដែលអស្ចារ្យនោះគឺអ្នកមិនចាំបាច់ធ្វើជាចុងភៅល្អដើម្បីរីករាយនឹងមុខម្ហូបទាំងនេះទេ ភោជនីយដ្ឋានធ្វើម្ហូបនៅ Ba Dong និង Tra Vinh ចាប់ពីភោជនីយដ្ឋានធំរហូតដល់ភោជនីយដ្ឋានតូចៗដ៏ស្រស់ស្អាតបានត្រៀមខ្លួនរួចរាល់ហើយដើម្បីបម្រើអ្នកជាមួយនឹងត្រីដ៏គួរឱ្យទាក់ទាញ។ និងចានដំឡូង។ ត្រៀមខ្លួនដើម្បីស្វែងយល់ពីវិធីផ្សេងៗក្នុងការរៀបចំត្រីឌំឡូងនិងរីករាយជាមួយរសជាតិសមុទ្រតែមួយគត់ដែលត្រីនេះនាំមក។
                </p>
               
            </FoodContent>    


            <FoodContent title="មុខម្ហូបពេញនិយម">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">បបរត្រីដំឡូង៖</h4>

                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu1.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>កាត់ក្បាលត្រី  រួចលាងទឹកចេញ។ យើងលាងឱសថដូចជា ខ្ទឹមបារាំង ម្ទេស និងផ្សិតចំបើង ហើយកាត់វាជាបំណែកតូចៗ។ យើងចៀនខ្ទឹមសរហូតដល់ក្រអូប។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ចម្អិនបបរ</span>
                                        <p>ដាក់ឆ្នាំងទឹកចូលឆ្នាំង រួចដាក់បាយចូលឆ្នាំង។ នៅពេលដែលបបរចាប់ផ្តើមឆ្អិន បន្ថែមផ្សិតចំបើង និងបន្ថែមម្សៅគ្រឿងទេស ១ស្លាបព្រាបាយ។ បន្ទាប់យើងបន្ថែមត្រីនិងដំឡូង។ នៅចុងបញ្ចប់ ពេលបបរជិតឆ្អិន យើងបន្ថែមឱសថ និងខ្ទឹមបំពង ហើយយើងចម្អិនត្រី និងបបរដំឡូងរួចរាល់ហើយ!</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/dgZazR2Cqpw?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Anh Em Lang Thang</small>
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold">នងត្រីដំឡូងជ្វា</h4>
                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu2.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>កាត់ប៉េងប៉ោះ ខ្ទឹមបារាំងបៃតង និង celery ចូលទៅក្នុងដើម និងស្លឹក។ កាត់ក្បាលត្រីដំឡូងចេញ រួចលាងទឹកចេញ។ យើងលាងបន្លែនិងផ្លែឈើទាំងអស់។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ដំណើរការ</span>
                                        <p>យើងដាក់ប្រេងឆាបន្តិចក្នុងឆ្នាំង ហើយចាក់ឫសខ្ទឹមបារាំងរហូតដល់ក្រអូប។ ពេលយើងឃើញគល់ខ្ទឹមពណ៌មាស យើងបន្ថែមទឹកចូលឆ្នាំង។ បន្ទាប់មកយើងដាក់ប៉េងប៉ោះ រួមនឹងខ្ទឹមស និងម្ទេសចូលឆ្នាំងដើម្បីឱ្យទឹកមានជាតិជូរ និងហឹរ។ បន្ទាប់មកយើងយកត្រីដំឡូងមកចិញ្ច្រាំជាមួយស្ករស ១ ស្លាបព្រាបាយ អំបិល ១ ស្លាបព្រាបាយ ម្សៅស៊ុបពែរ ១ ស្លាបព្រាបាយ។ ដោយសារតែត្រីចម្អិនលឿនណាស់ អ្នកត្រូវរង់ចាំប្រហែល 5-10 នាទី មុនពេលត្រីឆ្អិន អ្នកអាចយកត្រីមកដាក់លើចាន។ បន្ទាប់មកទៀតយើងបន្ថែមដើមខ្ទឹម និងស្លឹកជីអង្កាមជាមុនសិន។ បន្ទាប់ពីប្រហែល 1-2 នាទីយើងអាចបន្ថែមស្លឹកខ្ទឹមនិងស្លឹកអម្បោះ ។ ជាចុងក្រោយ អ្នកអាចទុកត្រី និងបន្ទះសៀគ្វីដាច់ដោយឡែកពីគ្នានៅលើចាន ឬបន្ថែមវាទៅក្នុងឆ្នាំងក្តៅក៏បាន ទាំងពីរមុខក៏ឆ្ងាញ់។</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/qTRNVH8WWak?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        
                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel: GAU KUTE TV</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            <FoodContent title="វិធីធ្វើទឹកជ្រលក់">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">ទឹកត្រី៖ </h4>
                        <div className="grid grid-cols-2 gap-2">
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%201.webp" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%202.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%203.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%204.jpg" className="w-full h-full object-cover"/>

                        </div>

                        <p>
                        ទឹកត្រីសុទ្ធ។ ជាធម្មតាវានឹងមានមួយចាននៃក្រូចឆ្មា និងម្ទេស ហើយអ្នកអាចបន្ថែមក្រូចឆ្មា និងម្ទេសអាស្រ័យលើរសជាតិរបស់មនុស្សម្នាក់ៗ។
                        </p>
                    </div>

                    
            </FoodContent>


            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    សមុទ្រតែងតែមានជាកំណប់គ្មានទីបញ្ចប់នៃរសជាតិធម្មជាតិ និងប្រភពអាហារដ៏សម្បូរបែប។ នៅឆ្នេរ Ba Dong ខេត្ត Tra Vinh ត្រីដំឡូងជ្គឺជាផ្នែកដ៏មានតម្លៃនៃមុខម្ហូបសមុទ្រប្លែកៗ។ ត្រីប្រភេទនេះដែលមានសាច់ឆ្ងាញ់ ខ្លាញ់ និងទន់ បានក្លាយជាការបំផុសគំនិតសម្រាប់មុខម្ហូបដ៏ទាក់ទាញជាច្រើន ដែលក្នុងនោះបបរត្រី និងត្រីដំឡូងជ្វា គឺជាមុខម្ហូបដែលលេចធ្លោជាងគេ។ ពេលដែលអ្នកខាំចូលទៅក្នុងសាច់ត្រីទន់ៗ និងដំឡូងបារាំង វាហាក់ដូចជារលាយក្នុងមាត់។
                    </p>

                    <p>
                    ត្រីដំឡូងមិនត្រឹមតែជាអាហារប៉ុណ្ណោះទេ ប៉ុន្តែក៏ជាបទពិសោធន៍នៃរសជាតិស្រស់នៃសមុទ្រផងដែរ។ ត្រៀមខ្លួនដើម្បីជ្រមុជខ្លួនអ្នកនៅក្នុងរសជាតិតែមួយគត់នៃបំណែកនីមួយៗនៃត្រីនិងដំឡូង។
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ២០០០០០ ដុង-២៥០០០០ ដុង/kg</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CAKHOAIMAINKM
