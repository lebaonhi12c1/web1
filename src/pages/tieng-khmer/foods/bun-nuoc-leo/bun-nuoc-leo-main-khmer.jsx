import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'ដូង',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'គល់ស្លឹកគ្រៃវៃស្ពៀត',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20%C4%91%E1%BA%ADp%20d%E1%BA%ADp.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'នំបញ្ចុកស្រស់',
        value: 'គ្រាន់តែញ៉ាំគ្រប់គ្រាន់',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'ប្រហុក',
        value: '៤០០g',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg'
    },
    {
        text: 'ផ្សិតចំបើង',
        value: '៣០០g',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BA%A5m%20r%C6%A1m.jpg'
    },
    {
        text: 'អំពិខ្ជាយ',
        value: '៥០g',
        image: 'https://buhkhkt.github.io/CHINH/Ng%C3%A3i%20B%C3%BAn.jpg'
    },
    {
        text: 'ស្លឹកគ្រៃ គាល់គ្រៃចិញ្ច្រាំ ម្ទេស',
        value: 'គ្រាន់តែញ៉ាំគ្រប់គ្រាន់',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20c%C3%A2y%20s%E1%BA%A3%20b%C4%83m%20%E1%BB%9Bt.jpg'
    },
    {
        text: 'ឈាមជ្រូក',
        value: '៥០០g',
        image: 'https://buhkhkt.github.io/CHINH/huy%E1%BA%BFt%20heo.jpg'
    },
    {
        text: 'ត្រីផ្ទក់',
        value: '១ក្បាល',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'បន្លែបផ្សំ',
        value: 'ស្រយ៉ោងចេក សណ្តែកបណ្តុះ ម្ទេស...',
        image: 'https://buhkhkt.github.io/CHINH/rau.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'ស្ករ អំបិល មីចិញ...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'ទឹកសម្លនំបញ្ចុកសាប', image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20chay.jpg' },
    
]

const thuongthucthanhpham = [
    {
        text: 'ស្រយោងចេក',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'ផ្កាប្រលិត',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%B4ng%20s%C3%BAng.jpg'
    },
    {
        text: 'ឆ្នាំងទឹកសម្ល',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BB%93i%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o.jpg'
    },
    {
        text: 'សាច់ជ្រូកអាំង',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20heo%20quay.jpg'
    },
    {
        text: 'ឈាម',
        image: 'https://buhkhkt.github.io/CHINH/huy%E1%BA%BFt%20%C4%83n%20k%C3%A8m.jpg'
    },
    {
        text: 'ងនំបញ្ចុកជាដើម។',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20gi%C3%B2.jpg'
    },
    {
        text: 'បន្លែត្រចៀកកាំ',
        image: 'https://buhkhkt.github.io/CHINH/rau%20gh%C3%A9m.jpg'
    },
    {
        text: 'ឆ្ងាញ់ដែលមិនអាចទ្រាំបាន។',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91i%E1%BB%81u%20%C4%83n%20v%E1%BB%9Bi%20b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o.jpg'
    }
]

const BUNNUOCLEOMAINKM = () => {
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
    
    return (
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">ទឹកសម្លនំបញ្ចុក</h1>
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
                    src="https://www.youtube.com/embed/JEc3lb2ODV4?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75" 
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
                    ទឹកសម្លនំបញ្ចុកក្នុងរូបថតមានទឹកសម្លឆ្ងាញ់នឹងក្លិនឆ្ងុយនៃប្រហុក។ នំបញ្ចុកក្នុងចាន គឺស្រស់ ស្តើង ទន់ ឆ្ងាញ់។ ក្នុងចាននំបញ្ចុកក៏រួមបញ្ចូលនូវមុខម្ហូបផ្សេងទៀតដូចជា សាច់ជ្រូកអាំង នំបញ្ចុក ឈាម... ដែលនាំមកនូវភាពឆ្ងាញ់ និងគ្រឿងផ្សំជាច្រើនមុខដល់មុខម្ហូប។ ឬបន្លែដែលមានដូចជាសណ្ដែកបណ្ដុះ ស្រយោងចេក ... ដែលបានលាងសម្អាត។                                       
                    </p>

                    <div>
                        <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600" title="bún nước lèo" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/caa156d2f40a44618cefaa977181d750/embed"> </iframe>

                       
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="ការណែនាំទូទៅ"
                           
            >
                <p>
                មុខម្ហូបទឹកសម្លនំបញ្ចុកឆ្ងាញ់ និងពិសេសគឺតែងតែជាជម្រើសដំបនៃអ្នកចូលចិត្តអាហារ។ នេះជាមុខម្ហូបពិសេសរបស់ខ្មែរ គឺទឹកសម្លនំបញ្ចុក ត្រូវបានបញ្ចូលទៅក្នុងការងារសិល្បៈលំដាប់កំពូល ដែលមានប្រជាប្រិយភាពយ៉ាងទូលំទូលាយនៅក្នុងស្រុកជាច្រើន។ យ៉ាងណាមិញ ទឹកសម្លនំបញ្ចុកគឺសម្បូរបែប និងប្លែក ដែលធ្វើឲ្យវាមិនអាចបំភ្លេចបាន។ អាថ៌កំបាំងនៃភាពជោគជ័យនៃមុខម្ហូបនេះចាប់ផ្តើមដោយការជ្រើសរើសប្រហុក ដែលជាទឹកជ្រលក់ឆ្ងាញ់ដែលផលិតចេញពីត្រីជាច្រើនប្រភេទ។ ប្ គឺជាព្រលឹងនៃគុយទាវ មានរសជាតិប្លែក ហើយរលាយភ្លាមៗនៅពេលវាប៉ះនឹងទឹកពុះ។ អ្នកផលិតទឹកត្រីត្រូវតែអនុវត្តតាមស្តង់ដារតឹងរ៉ឹង ហើយជារឿយៗប្រើផើងដីឥដ្ឋដើម្បីចម្អិនទឹកត្រីរក្សារសជាតិពិសេសរបស់វា។ មនុស្សជាច្រើនក៏បានបន្ថែមទឹកសម្លជា១ទឹក{highlightText('ដូង')} និង{highlightText('គល់ស្លឹកគ្រៃវៃស្ពៀត')} ដើម្បីបង្កើតក្លិនក្រអូប។
                </p>
                <p>
                ស៊ុបគុយទាវមិនត្រឹមតែជាមុខម្ហូបដ៏សំបូរបែបប៉ុណ្ណោះទេ ថែមទាំងជានិមិត្តរូបនៃការធ្វើម្ហូបប្រកបដោយមោទនភាពដោយប្រជាជនខេត្តត្រាវិញផងដែរ។ មិនត្រឹមតែទាក់ទាញភ្ញៀវទេសចរណ៍ក្នុងស្រុកប៉ុណ្ណោះទេ មុខម្ហូបគុយទាវ បានក្លាយជានិមិត្តរូបនៃត្រាវិញ ដែលភ្ញៀវទេសចរគ្រប់ទិសទីស្គាល់ និងត្រូវតែសាកម្តង។ ការរុករកដីមាត់ទន្លេនៅពេលព្រឹកព្រលឹម និងរីករាយជាមួយស៊ុបគុយទាវមួយចាន គឺជាបទពិសោធន៍ដែលមិនអាចបំភ្លេចបាន ដោយនាំមនុស្សគ្រប់កម្រិតនៃការធ្វើដំណើររសជាតិ។
                </p>
            </FoodContent>    


            <FoodContent title="របៀបធ្វើស៊ុបគុយទាវ">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">វិធីប្រពៃណី៖</h4>

                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>វាយគាល់គ្រៃឱ្យស្ពៀតដើម្បីបង្កើតក្លិនក្រអូប។ ខ្ជាយចែកជា ២ ផ្នែក មួយផ្នែក យកសំបកចេញ រួចចិតជាមួយម្ទេស រួចដាក់ស្លឹកគ្រៃ មួយផ្នែកទៀត ដុតរហូតដល់មានក្លិនឈ្ងុយ។ យកផ្សិតចំបើង ៣០០ ក្រាមលាងសម្អាតវាម្តងទៀត។ បន្ទាប់មកកាត់ផ្សិតចំបើងជាបំណែកតូចៗ។ ឈាមជ្រូក៥០០gត្រូវលាងជម្រះ កាត់ជាចំនិតតូច ហើយស្ងោរ។ យកបន្លែដែលអមមកទាំងអស់លាងទឹកដាក់ឆ្នាំងចូលច្របល់ចូលគ្នាឲ្យសព្វ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ស្ងោរឈាម</span>
                                        <p>យើងដាក់ឆ្នាំងដាំទឹកហើយស្ងោរឈាមដើម្បីកុំឲ្យក្លិនត្រី។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: ចម្អិននំបញ្ចុក</span>
                                        <p>ដាក់ប្រហុក៤០០gចូលឆ្នាំងហើយចម្អិនរហូតដល់ប្រហុកឆ្អិនហើយរលាយ។ ពេលប្រហុកមានក្លិនឈ្ងុយ ហើយសាច់រលាយ យើងបិទចង្ក្រាន។ ដាំទឹក ៤លីត្រ ដាក់ទឹកដាំពុះចូលឆ្នាំង។ ពេលទឹកពុះ ដាក់ត្រីផ្ទក់ គល់ស្លឹកគ្រៃ ច្របល់ចូលគ្នា ហើយដាក់មើមខ្ជាយដុតដែលបានបុកចូលឆ្នាំង។ ដាំឱ្យពុះបន្តិច ត្រីក្នុងឆ្នាំងឆ្អិន យើងយកត្រីទាំងអស់ចេញ រួចបន្ថែមផ្សិតចំបើងចូល។  ចាក់ទឹកត្រីឆ្អិនចូលក្នុងឆ្នាំង។ បន្ថែម ១,៥ ស្លាបព្រានៃ មីចិញ ។ បន្ទាប់ពីយកត្រីចេញ យើងនឹងញែកសាច់ចេញ ហើយចាំថាមិនទុកឆ្អឹងណាមួយឡើយ។ យើងដាក់ឈាមឆ្អិននិងត្រីដែលបំបែកឆ្អឹងចូលទៅក្នុងឆ្នាំទឹកសម្ល។ដូច្នេះយើងគ្រាន់តែរង់ចាំទឹកពុះប្រហែល៥នាទីទៀត ទើបអាចញ៉ាំបាន។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/gHYUe3uSHIU?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: ALO TRA VINH</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">របៀបធ្វើបំរែបំរួល៖</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                ទឹកសម្លនំបញ្ចុក Tra Vinh ជាម្ហូបនិមិត្តរូបនៃភាគខាងត្បូងវៀតណាម។ ចានទឹកសម្លនំបញ្ចុកក្រអូប និងទឹកសម្លជូរផ្អែមបង្កើតរសជាតិដែលមិនអាចទ្រាំបាន។ ប៉ុន្តែមិនត្រឹមតែបុណ្ណោះទេ។ ក្នុងទឹកដីច្នៃប្រឌិតរបស់ប្រជាជន Tra Vinh គេតែងតែត្រៀមខ្លួនជាស្រេចក្នុងការច្នៃប្រឌិត និងកែលម្អ។ ទឹកសម្លនំបញ្ចុក Tra Vinh បានឆ្លងកាត់ការបំប្លែងប្រកបដោយភាពច្នៃប្រឌិត ប្រែក្លាយទៅជាកំណែជាច្រើនរាប់មិនអស់ ដើម្បីបំពេញតាមចំណូលចិត្ត និងតម្រូវការរបស់អ្នកទទួលទាននី    មួយៗ។ {highlightText('ទឹកសម្លនំបញ្ចុកសាប')} នាំ អ្នកចូលទៅក្នុងចានអាហារសាបដ៏ឈ្ងុយឆ្ងាញ់ ជាមួយនឹងសម្លដ៏ឈ្ងុយឆ្ងាញ់ និងឆ្ងាញ់ពីបន្លែ និងផ្សិត។ ទឹកសម្លនំបញ្ចុក ក្រៅពីទឹកសម្លប្រពៃណី ទឹកសម្លជាមួយទឹកប្រហុកបន្ថែមរសជាតិប្រៃដ៏សម្បូរបែបដល់ម្ហូប ដោយផ្សំជាមួយនិងគ្រឿងសមុទ្រ។ ទឹកសម្លនំបញ្ចុក ជាមួយសាឡាដត្រី និងសាច់អាំង ដែលជាការបង្កើតដ៏ពិសេសមួយ ដាស់រសជាតិជាមួយការលាយបញ្ចូលគ្នានៃត្រីឆៅ និងសាច់អាំងក្រអូប។ ទឹកសម្លនំបញ្ចុក ត្រីរៀល រសជាតិពិសេសនៃត្រីដែលអាចបត់បែនបានត្រូវបានដាក់បញ្ចូលទៅក្នុងចានទឹកសម្លនំបញ្ចុក ដែលនាំមកនូវអារម្មណ៍ថ្មី។ ជាចុងក្រោយ ទឹកសម្លនំបញ្ចុក ពិសេសរបស់ភោជនីយដ្ឋាន និងអាហារដ្ឋានគឺជាការច្នៃប្រឌិតដ៏ឆ្ងាញ់របស់មេចុងភៅ ដើម្បីធានាថាទឹកសម្លនំបញ្ចុកក្នុងចាននីមួយៗគឺជាស្នាដៃសិល្បៈតែមួយគត់។ ទឹកសម្លនំបញ្ចុក Tra Vinh មិនត្រឹមតែជាមុខម្ហូបប៉ុណ្ណោះទេ វាក៏ជានិមិត្តរូបនៃភាពចម្រុះ ការច្នៃប្រឌិត និងការរួមផ្សំនៃរសជាតិផ្សេងៗគ្នាជាច្រើន។នៅពេលអ្នកទៅដល់ Tra Vinh អ្នកនឹងមិនត្រឹមតែរីករាយជាមួយអាហារឆ្ងាញ់ៗប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងធ្វើដំណើរដើម្បីស្វែងយល់ពីភាពសម្បូរបែប និងប្លែកនៃមុខម្ហូបក្នុងតំបន់នេះ។
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="វិធីធ្វើទឹកជ្រលក់">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">ទឹកខ្មេះម្ទេស៖</h4>
                    
                        <p>
                        ដាំទឹកឱ្យពុះ ដាក់អំបិល កន្លះស្លាបព្រាបាយ រួចដាក់ម្ទេស ដាំឱ្យពុះប្រហែល ២នាទី។ បន្ថែមស្ករ ១ ស្លាប និង ១ ស្លាបព្រាមីចិញ ហើយ100ml ទឹកខ្មេះ ហើយកូររហូតដល់រំលាយ។ បន្ទាប់ពីពុះម្ទេសដាក់ក្នុងម៉ាស៊ីនក្រឡុកជាមួយខ្ទឹមស។ លាយវាឱ្យល្អិត រួចបន្ថែមវាជាមួយល្បាយទឹកខ្មេះដែលអ្នកទើបតែលាយ ហើយយើងមានល្បាយទឹកខ្មេះម្ទេសស្រស់ ដើម្បីឱ្យម្ហូបកាន់តែឈ្ងុយឆ្ងាញ់ និងមានរសជាតិឆ្ងាញ់។
                        </p>
                    </div>
                    <div>
                    <iframe
                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                        src="https://www.youtube.com/embed/8GXyXcaLBz0?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                        title="Thuyết trình về món Bánh canh Bến Có"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                    ></iframe>
                        
                            <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: Song Khoe</small>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">អំបិលម្ទេស៖</h4>
                        <div>
                            <p>
                            យើងដាក់អំបិលចូលក្នុងខ្ទះ។ ខណៈពេលដែលដុតនិងដំ។ ពេលអំបិលម៉ត់ហើយស្ងួតល្អ បន្ថែមម្ទេសចូលលីង រួចកូរឱ្យសព្វ ដើម្បីឱ្យម្ទេសជ្រាបចូលអំបិលបានស្មើៗគ្នា កុំភ្លេចកូរឱ្យសព្វ ព្រោះបើមិនកូរអំបិលទេ វានឹងឆេះ។ បន្ទាប់ពីអំបិលលាយចូលគ្នារួចបន្ថែមមីចិញម៉ត់។ បន្ទាប់ពីប្រហែល ៣ដល់៥នាទី ល្បាយអំបិលនឹងមានក្លិនឈ្ងុយ បន្ទាប់មកបិទចង្ក្រាន ហើយដាក់ក្នុងប្រអបទុកជាការស្រេច។
                            </p>
                        </div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/ZOV_oGM-MU8?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: Anh Lee BTR</small>
                        </div>
            </FoodContent>


            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    យកចានជ្រើសទងនំបញ្ចុកមកដាក់ពេញចាន។ បន្ថែមបន្លែឆៅ {highlightText('ស្រយោងចេក')}ត្រកួនស្រស់ និង{highlightText('ផ្កាប្រលិត')} លាយបញ្ចូលគ្នាដើម្បីបង្កើតរូបភាពធម្មជាតិដ៏ស្រស់ស្អាត។ ពេលដែលអ្នកដួសចេញពី{highlightText('ឆ្នាំងទឹកសម្ល')}ក្តៅៗ ទឹកសម្ល បានលុកលុយចូលទីធ្លា ហើយបង្កើតបានជាក្លិនក្រអូបពិសេស ដែលធ្វើឲ្យឆ្នាំងទឹកសម្ល កាន់តែមានភាពទាក់ទាញជាងពេលណាទាំងអស់។ អ្នកហូបចុកមានសេរីភាពក្នុងការកំណត់រសជាតិរបស់ពួកគេ។ អ្នកអាចបន្ថែមទឹកខ្មេះម្ទេសដើម្បីធ្វើឱ្យម្ហូបកាន់តែមានជាតិជូរ និងហឹរ និងកាន់តែឆ្ងាញ់។
                    </p>

                    <p>
                    អ្នកក៏នឹងមិនអាចខកខាននូវមុខម្ហូបដ៏ឆ្ងាញ់ដូចជា {highlightText('សាច់ជ្រូកអាំង')} និង{highlightText('ឈាម')} និ{highlightText('ងនំបញ្ចុកជាដើម។')} សាច់ជ្រូកអាំងមានរសជាតិឆ្ងាញ់ ហើយយកឈាមចេញ ហើយជ្រលក់ក្នុងទឹកខ្មេះម្ទេស បង្កើតបានជារសជាតិគួរឲ្យចាប់អារម្មណ៍បំផុត។ នៅ Tra Vinh អ្នកធ្វើទឹកសម្លនំបញ្ចុក តែមានភាពប្រណិតនៅពេលកែច្នៃ {highlightText('បន្លែត្រចៀកកាំ')}ត្រចៀកកាំ  និងស្រយោងចេក ត្រូវបានគេកិនឱ្យម៉ត់ បង្កើតបានជាល្បាយពិសេស។ ក្នុងរដូវដាំស្វាយចន្ទី ប្រជាជនថែមទាំងកាប់គ្រាប់ស្វាយចន្ទីពីរបីគ្រាប់ ដើម្បីដាក់លើបន្លែ បង្កើតបានជារសជាតិ{highlightText('ឆ្ងាញ់ដែលមិនអាចទ្រាំបាន។')} ទឹកសម្លនំបញ្ចុក Tra Vinh មិនត្រឹមតែជាមុខម្ហូបពេញនិយមធម្មតាប៉ុណ្ណោះទេ ថែមទាំងជាស្នាដៃសិល្បៈធ្វើម្ហូបដ៏សម្បូរបែប និងប្លែកពីគេផងដែរ។
                    </p>

                    <p>
                    នៅពេលដែលអ្នកមានឱកាសបានទៅលេងទីនេះ ទុកកង្វល់ទាំងអស់របស់អ្នក ហើយឈប់នៅភោជនីយដ្ឋានមួយកន្លែងតាមដងផ្លូវ ហូបនំបញ្ចុកទឹកសម្លមួយចាន ហើយរីករាយ អ្នកនឹងយល់ថាមុខម្ហូបនេះមិនត្រឹមតែជាអាហារប៉ុណ្ណោះទេ ប៉ុន្តែក៏ជាផ្នែកមួយដែលមិនអាចខ្វះបាននៅក្នុង ដំណើរស្វែងរកទឹកដីដ៏គួរឱ្យចាប់អារម្មណ៍នេះ។ កុំអោយឱកាសនេះកន្លងផុតទៅ ដើម្បីទទួលបានរសជាតិឮ នំបញ្ចុកទឹកសម្លដែលជាមុខម្ហូបពិសេស និងពិសេសរបស់ត្រាវិញ។
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ១២០០០ ដុង - ២០០០០ ដុង។</p>
                <p>ប៉ុន្តែតម្លៃអាចនឹងកើនឡើងប្រសិនបើអ្នកញ៉ាំគ្រឿងចំហៀងបន្ថែមទៀតដូចជា សាច់ជ្រូកអាំង ឈាម...</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

           


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BUNNUOCLEOMAINKM
