import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'ជុំវិញផ្ទះ',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20xung%20quanh%20nh%C3%A0.webp'
    },
    {
        text: 'រូបរាង',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20h%C3%ACnh%20th%C3%B9.webp'
    },
    {
        text: 'ដើម',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A2y%20qu%C3%A1ch.jpg'
    },
    {
        text: 'សម្បកខាងក្រៅ',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20gi%C3%A0.jpg'
    },
    {
        text: 'ខ្វិតខ្ចី',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20non.jpg'
    },
]

const nguyenlieu1 = [
    {
        text: 'ផ្លែខ្វិត',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A1i%20qu%C3%A1ch.jpg'
    },
    {
        text: 'ស្ករ',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'ទឹកកក',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C3%A1%20nhuy%E1%BB%85n.jpg'
    },
]

const nguyenlieu2 = [
    {
        text: 'ផ្លែ',
        value:'ខ្វិត៦',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A1i%20qu%C3%A1ch.jpg'
    },
    {
        text: 'ស្រាអង្ករ',
        value:'៤ លីត្រ',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20g%E1%BA%A1o.jpg'
    },
]


const thuongthucthanhpham = [
    {
        text: 'សាឡាត់',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'ស្ពៃចិន',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BA%A3i%20th%E1%BA%A3o.jpg'
    },
    {
        text: 'ផ្កាប្រលិត',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%B4ng%20s%C3%BAng.jpg'
    },
    {
        text: 'ស្ពឺជូរ',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1t%20kh%E1%BA%BF%20chua.webp'
    },
    {
        text: 'ចេកខ្ចី',
        image: 'https://buhkhkt.github.io/CHINH/chu%E1%BB%91i%20ch%C3%A1t.jpg'
    },
    {
        text: 'ទឹកត្រីហឹរ',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BB%A7%20m%E1%BA%AFm.jpg'
    },
    {
        text: 'ទឹកក្រឡុ',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20d%E1%BA%A7m.jpg'
    },
    {
        text: 'ស្រាខ្វិត',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20qu%C3%A1ch.jpg'
    },
]

const TRAIQUACHMAINKM = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1,...nguyenlieu2, ...thuongthucthanhpham];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">ផ្លែខ្វិត</h1>
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
                    src="https://www.youtube.com/embed/kQiwTBks26Q?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                    title="Thuyết trình về món Bánh canh Bến Có"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                ></iframe>
                   
                </div>
            </div>

            

            <FoodContent 
                title="រូបថត 3D" 
            >
                <div className="flex flex-col gap-3">

                    <p>                   
                    នៅក្នុងរូបថត យើងអាចឃើញពាក់កណ្តាលនៃផ្លែឈើដែលមានស្បែកក្រាស់ មានពណ៌ពីរផ្សេងគ្នា ដោយសារតែផ្លែឈើនៅក្នុងរូបថតមិនទាន់ទុំនៅឡើយ។ ផ្នែកម្ខាងនៃផ្លែមានពណ៌ប្រផេះ និងស ជាផ្នែកដែលមិនទុំ មានគ្រាប់តូចៗ។ សាច់ខាងក្នុងរបស់ផ្លែមានពណ៌ស ស្រួយ និងមានរសជាតិជូរ។ ខ្វិតពាក់កណ្តាលដែលនៅសល់មានពណ៌ត្នោតខ្មៅ ជាផ្នែកទុំ សាច់ខាងក្នុងមានគ្រាប់ច្រើន និងសរសៃរឹង។ ពេលញ៉ាំវាមានរសជាតិផ្អែមបន្តិច និងក្លិនឈ្ងុយ។
                    </p>

                    <div>
                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"title="trái quách" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/bef92e4318e7449cab88c1df175774ce/embed">
                        
                         </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="ការណែនាំទូទៅ"
                           
            >
                <p>
                ខ្វិត ជារុក្ខជាតិរើសមួយ ធ្វើដំណើរពីខាងជើងទៅខាងត្បូង ប៉ុន្តែឃើញតែផ្លែ quach លេចឡើងនៅតំបន់ដីសណ្តទន្លេមេគង្គ។ នេះគឺជាប្រភេទដើមឈើពិសេស មិនមែនជារឿងធម្មតាទេ ហើយដុះនៅកន្លែងមួយចំនួន។ ដើមខ្វិត ត្រូវបានគេដាំនៅ Cau Ke, Tra Vinh ច្រើនតែលាយជាមួយនឹងដើមឈើហូបផ្លែផ្សេងទៀត។ ជាពិសេស ប្រជាពលរដ្ឋខ្មែរចូលចិត្តដាំដើមខ្វិត{highlightText('ជុំវិញផ្ទះ')} ដើម្បីបង្កើតជាម្លប់ និងមានឱកាសទទួលទានផ្លែឈើឆ្ងាញ់ៗ។
                </p>
                <p>
                ផ្លែខ្វិតដែលត្រូវបានគេស្គាល់ថាជាផ្លែGao មិនមាន{highlightText('រូបរាង')}ទាក់ទាញនោះទេ។ ប៉ុន្តែវាជារសជាតិពិសេសរបស់វាដែលធ្វើឱ្យមនុស្សចាប់អារម្មណ៍មិនអាចឈប់បាន។ ដើមខ្វិតជាកម្មសិទ្ធិរបស់គ្រួសារ Can Thang ហើយចូលចិត្តបរិស្ថានដែលមិនលិចទឹក។ {highlightText('ដើម')} នេះមានកម្ពស់ប្រហែល ៧-១០ម៉ែត្រ ហើយក្រោយដាំបានប្រមាណ៤ឆ្នាំ វាចាប់ផ្ដើមទទួលផ្លែ ហើយរយៈពេលដាំកាន់តែយូរ ផ្លែកាន់តែច្រើន។ សរសៃពួរមានរាងមូល តូចជាងទំហំបាល់ផ្លាស្ទិច មានសំបកពណ៌សប្រផេះ និងស្បែកគ្រើម។ រដូវទុំជាធម្មតាធ្លាក់នៅខែធ្នូ និងខែមករា។ នៅពេលដែលផ្លែទុំ សាច់ផ្លែនឹងខ្មៅ ហើយនឹងមានគ្រាប់តូចៗជាច្រើនដូចជាចុងចង្កឹះ ដែលនឹងជ្រុះនៅពេលយប់។ ទោះធ្លាក់ពីទីខ្ពស់ក៏មិនងាយបាក់ដែរ ព្រោះសំបកនៅរឹងខ្លាំង។ ដូច្នេះការប្រមូលផល ខ្វិតមិនពិបាកដូចផ្លែឈើដទៃទៀតទេ។ ប្រជាជនត្រាវិញតែងតែរង់ចាំផ្លែទុំមុននឹងច្រូតកាត់ ព្រោះបើរើសឆាប់ពេក ហើយត្រាំក្នុងទឹកខ្មេះទើបទុំ នោះផ្លែនឹងមិនឆ្ងាញ់ដូចពេលទុំលើដើមឡើយ។
                </p>
                <p>
                នៅពេលដែលផ្លែឈើឈានដល់កម្រិតទុំដែលចង់បាន មនុស្សជាធម្មតាមិនបរិភោគភ្លាមៗនោះទេ ប៉ុន្តែត្រូវទុកផ្លែឱ្យទុំឱ្យបានហ្មត់ចត់ ដើម្បីអោយ{highlightText('សម្បកខាងក្រៅ')}មានផ្សិតពណ៌ស និងទន់បន្តិច បន្ទាប់មកទទួលទានវា។ អ្នកអាចញ៉ាំផ្លែឈើភ្លាមៗ ប៉ុន្តែរសជាតិនៅពេលនេះមិនល្អបំផុតនោះទេ។ {highlightText('ខ្វិតខ្ចី')}មានរសជាតិជូរ និងស្រួយ។ ផ្លែដែលទុកឱ្យទុំយូរ សាច់នឹងកាន់តែខ្មៅ ហើយក្លិនក្រអូបកាន់តែលេចធ្លោ។
                </p>
                <p>
                ក្រៅពីជាផ្លែឈើដ៏មានឱជារសឆ្ងាញ់ពិសា ក្នុងឱសថបុរាណ ផ្លែត្របែកក៏ល្បីខាងផ្នែកវេជ្ជសាស្ត្រជាច្រើនដូចជា ត្រជាក់ ព្យាបាលការទល់លាមក រាគ រលាកទងសួត ពង្រឹងសរសៃពួរ និងឆ្អឹង បំប៉នក្រលៀន និងឥទ្ធិពលផ្សេងៗជាច្រើនទៀត។ ដូច្នេះចានឆ្ងាញ់ពី quach - ផ្លែឈើសាមញ្ញតែងតែមានប្រជាប្រិយភាពនៅក្នុងជីវិតរបស់អ្នកថែសួន។ ជាធម្មតា មានវិធីបីយ៉ាងក្នុងការរៀបចំផ្លែឈើក្រៀម៖ ញ៉ាំវាជាមួយទឹកត្រី ជ្រលក់វាចូលទៅក្នុងទឹកក្រឡុក ឬត្រាំវាក្នុងស្រា។
                </p>
            </FoodContent>    


            <FoodContent title="មុខម្ហូបពេញនិយមមួយចំនួន">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">ខ្វិតលាយទឹកកក:</h4>

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
                                        <span>ជំហានទី 1: ញែកសាច់ខ្វិត</span>
                                        <p>យើងបំបែកសំបកសាកូហ្វហ្គាស ហើយប្រើស្លាបព្រាដើម្បីកោសសាច់សាកូហ្វហ្គាសចូលក្នុងកែវ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ដំណើរការធ្វើ</span>
                                        <p>យើងបន្ថែមស្ករ ២ ស្លាបព្រា។ ប្រសិនបើអ្នកចង់បាន អ្នកអាចបន្ថែមទឹកបន្តិច ដើម្បីងាយស្រួលលាយ។ យើងបញ្ចោញស្ករចូលទៅក្នុងនិងខ្វិត។ បន្ទាប់មកយើងគ្រាន់តែបន្ថែមទឹកកកហើយយើងអាចរញ៉ាំវា។</p>
                                    </div>

                                    
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/d2rjqf4SwYE?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    
                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel: GẤU KUTE TV</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">ស្រាខ្វិត:</h4>

                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu2.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>យើងសម្អាតសំបករបស់ខ្វិត។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ត្រាំក្នុងស្រា</span>
                                        <p>យើងបានកំទេចខ្វិត ហើយដាក់វានៅក្នុងពាង។ ដាក់ស្រាអង្ករ៤លីត្រចូលក្នុងពាង ហើយទុកចោលរយៈពេល១ខែ ដើម្បីឱ្យស្រាត្រជាក់មានក្លិនក្រអូប។</p>
                                    </div>

                                    
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/-S18Itlnahc?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: HUU QUOC MON NGON DE LAM</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    ខ្វិតគឺជាម្ហូបចម្រុះដែលមានវិធីជាច្រើនដើម្បីរីករាយជាមួយវាដើម្បីនាំយករសជាតិផ្សេងៗគ្នា។ ពេលក្រឡុកបន្លែឆៅ ({highlightText('សាឡាត់')}{' '}
                        {highlightText('ស្ពៃចិន')} {highlightText('ផ្កាប្រលិត')})  ជាមួយចំណិត{highlightText('ស្ពឺជូរ')} ឬ{highlightText('ចេកខ្ចី')} ចូលទៅក្នុង{highlightText('ទឹកត្រីហឹរ')} និងផ្អែម ទឹកត្រី បាសសមុទ្រ ប្រជាជនត្រាវិញតែងតែក្រឡុកវាជាមួយពោះវៀនជាការបំពេញ។ ភាពរីករាយតាមបែប rustic បែបភាគខាងត្បូងគឺមានភាពទាក់ទាញខ្លាំង ព្រោះវានាំមកនូវបទពិសោធន៍រសជាតិដ៏អស្ចារ្យដល់អតិថិជន។ អង្ករក្រាស់ៗមួយដុំៗ លាយជាមួយនឹងទឹកជ្រលក់ដ៏សំបូរបែប ចំណិតផ្លែឈើជូរៗ បន្លែឆៅត្រជាក់ៗ និងស្រួយៗ ហើយក្លិនឈ្ងុយឈ្ងប់ចូលមាត់បន្តិចម្តងៗ។ ដូច្នេះអាហារគឺស្រាលជាងមុន និងមិនសូវធុញទ្រាន់។
                    </p>

                    <p>
                    ម្ហូបដ៏ពេញនិយមជាពិសេសនៅរដូវក្តៅគឺ{highlightText('ទឹកក្រឡុ')}ក។ ខ្វិតត្រូវបានត្រាំជាមួយនឹងទឹក ទឹកកកកោរសក់ ស្ករ និងទឹកដោះគោ ដើម្បីបង្កើតជាទឹកក្រឡុកស្រស់ដែលពេញនិយមពីមនុស្សជាច្រើន។ យកដុំខ្វិត ចូលក្នុងមាត់ អ្នកញ៉ាំអាហារគួរទំពារយឺតៗ ដើម្បីមានអារម្មណ៍ថាមានក្លិនឈ្ងុយ ខ្លាញ់ ជូរ ផ្អែម នៃគ្រាប់ ផ្លែខ្វិត ហើយមានអារម្មណ៍ថាក្លិនក្រអូបឈ្ងុយឈ្ងប់ពេញច្រមុះ។ ទាំងអស់លាយឡំជាមួយនឹងភាពផ្អែមនៃជាតិស្ករ ទឹកដោះគោ និងទឹកកកកោរពុកមាត់ត្រជាក់បន្តិចម្តងៗនៅក្នុងមាត់របស់អ្នក ដាស់អារម្មណ៍រសជាតិរបស់អ្នក និងនាំមកនូវអារម្មណ៍ស្រស់ស្រាយ និងរីករាយដល់អ្នក។ ជាមួយនឹងកែវទឹកក្រឡុកមួយកែវ រសៀលរដូវក្តៅហាក់ដូចជាត្រូវបានរំសាយចេញ។
                    </p>

                    <p>
                    {highlightText('ស្រាខ្វិត')} ក៏ជាមុខម្ហូបពិសេសដ៏មានមោទនភាពរបស់ប្រជាជនត្រាវិញដែរ។ ក្នុងឱកាសទទួលភ្ញៀវកិត្តិយស ម្ចាស់ផ្ទះតែងយកស្រាមកធ្វើជាមធ្យោបាយដើម្បីបង្ហាញពីភាពរាក់ទាក់ និងក្តីស្រលាញ់របស់គាត់។
                    </p>

                </div>
            </FoodContent>



            <FoodContent title="រក្សា">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                
                </div>

                <div>
                    <p>
                    ផ្លែទុំនីមួយៗអាចទុកចោលនៅសីតុណ្ហភាពបន្ទប់រយៈពេល ២-៣ ថ្ងៃ ដើម្បីឈានដល់កម្រិតទុំជាក់លាក់ ហើយអាចរក្សាទុកបានរយៈពេល 1 សប្តាហ៍។
                    </p>
                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ៣០០០០ ដុង - ៤០០០០ ដុង/គីឡូក្រាម។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default TRAIQUACHMAINKM
