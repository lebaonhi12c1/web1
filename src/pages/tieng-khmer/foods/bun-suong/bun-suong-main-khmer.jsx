import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';


/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'រាង',
        image: 'https://buhkhkt.github.io/CHINH/su%C3%B4ng%20%C4%91u%C3%B4ng%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'បង្គា',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA.jpg'
    },
    {
        text: 'សាច់ជ្រូក។',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20ba%20ch%E1%BB%89.jpg'
    },
    {
        text: 'ប៊ុន',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'ម្សៅដំឡូងឈើ',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'ប្រេងស្វាយចន្ទី',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BA%A7u%20%C4%91i%E1%BB%81u.jpg',
    },
    {
        text: 'tuong hat',
        image: 'https://buhkhkt.github.io/CHINH/t%C6%B0%C6%A1ng%20h%E1%BA%A1t.jpg'
    },
    {
        text: 'អំពិល',
        image: 'https://buhkhkt.github.io/CHINH/me%20chua.jpg'
    }, 
]

const nguyenlieu = [
    {
        text: 'បង្គាខ្លាខ្មៅ',
        value: '៥០០g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'បង្គាក្រៀម',
        value: '៣០g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20kh%C3%B4.jpg'
    },
    {
        text: 'ឆ្អឹងជំនីរសាច់ជ្រូក',
        value: '១kg',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20s%C6%B0%E1%BB%9Dn%20heo.jpg'
    },
    {
        text: 'វល្លិស្រស់',
        value: '៣kg',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'ស្ពៃមើម',
        value: '៣០០g',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%A7%20c%E1%BA%A3i%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'ស្ករក្រាំ',
        value: '25g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng%20ph%C3%A8n.jpg'
    },
    {
        text: 'ស៊ុតពណ៌ស',
        value: '១ពង',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%B2ng%20tr%E1%BA%AFng%20tr%E1%BB%A9ng%20g%C3%A0.png'
    },
    {
        text: 'គ្រឿងផ្សំបន្ថែម',
        value: 'តឿង ខ្ទឹមស ខ្ទឹមបារាំង ខ្ទឹមបារាំងពណ៌ស្វាយ ឱសថ ខ្ទឹមបារាំងបៃតង ស្លឹកខ្ទឹម; ក្រូចឆ្មា ម្ទេស សណ្តែកបណ្តុះ ឱសថអាស្រ័យតាមចំណូលចិត្ត',
        image: 'https://buhkhkt.github.io/CHINH/B%C3%9AN%20SU%C3%94NG%20NLP.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'អំបិល ស្ករ ប្រេងឆា ម្សៅស៊ុបមាន់ ទឹកត្រី...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'ឆ្អឹងជំនីរ', image: 'https://buhkhkt.github.io/CHINH/s%C6%B0%E1%BB%9Dn%20non.jpg' },
    { text: 'មឹក', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20%E1%BB%91ng.jpg' },
    { text: 'បង្គា', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20t%C3%ADt.webp' }
]

const thuongthucthanhpham = [
    {
        text: 'ស្រុះ',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20tr%E1%BB%A5ng%20n%C6%B0%E1%BB%9Bc%20s%C3%B4i.webp'
    },
    {
        text: 'ត្រកូនចិត',
        image: 'https://buhkhkt.github.io/CHINH/rau%20mu%E1%BB%91ng%20ch%E1%BA%BB.png'
    },
    {
        text: 'ស្រយ៉ោងចេក',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'ស្លឹកខ្ទឹម សាឡាត់',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'សណ្តែកបណ្តុះ',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'និហុងក្រអុប',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%BAng%20th%C6%A1m.jpg'
    }
]

const BUNSUONGMAINKM = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">ប៊ុន សួង</h1>
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
                    src="https://www.youtube.com/embed/YCTcxnP0Iw0?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
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
                    ចានប៊ុនសួងក្នុងរូបភាពមានទំពាំងបាយជូរលឿងស្រាល បញ្ចេញក្លិនឆ្អឹងជ្រូក និងគ្រឿងទេស។ ទំពាំងបាយជូរមានរសជាតិផ្អែមសម្បូរបែប។ ខ្សែស្រឡាយជាច្រើនអណ្តែតលើផ្ទៃនៃទំពាំងបាយជូរ។  សរសៃសូត្រមានរសជាតិផ្អែម   ទំពារ    បន្តិច។ នៅក្នុងចានក៏មានសាច់ជ្រូកស្តើងៗ និងស្បែកជ្រូកព្រមជាមួយឆ្អឹងជ្រូក។ សាច់គឺទន់ផ្អែមនិងមានរសជាតិខាញ់។ លើសពីនេះទៅទៀតចានក៏មានសណ្ដែកបណ្ដុះ និងស្លឹកខ្ទឹមបន្តិច។
                    </p>

                    <div>
                        <iframe 
                        className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"
                        
                        title="bún suông" 
                        allowfullscreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking 
                        execution-while-out-of-viewport 
                        execution-while-not-rendered 
                        web-share 
                        src="https://sketchfab.com/models/ed5c62ee4ac0416e956a01ccfe68d7a9/embed" 
                    />
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="ការណែនាំទូទៅ"
                           
            >
                <p>
                ក្នុងនាមជាទឹកដីដែលមានការជ្រៀតជ្រែកផ្នែកធ្វើម្ហូបរបស់ជនជាតិចំនួនបីគឺ គីញ ចិន និងខ្មែរ ការមកត្រាវិញដោយមិនរីករាយជាមួយជំនាញនៅទីនេះគឺជាការខ្ជះខ្ជាយនៃការធ្វើដំណើរ។ អញ្ចឹងតើអ្នកបានសាកល្បងគុយទាវហើយឬនៅ?   ប៊ុន សួងក៏ត្រូវបានគេស្គាល់តាមឈ្មោះដ៏ពេញនិយមមួយទៀតដែរគឺវល្លិវល្លិ។ ឈ្មោះដែលជាប់ទាក់ទងនឹងមុខម្ហូបនេះ មានតាំងពីយូរយារណាស់មកហើយ រហូតទាល់តែមនុស្សចាស់ជាងគេ មិនដឹងប្រភពដើមពិតនៃឈ្មោះនំបញ្ចុក។ គេគ្រាន់តែដឹងថានេះជាមុខម្ហូបប្រពៃណីដែលមានតាំងពីយូរយារណាស់មកហើយ និងបានបន្សល់ទុកពីជំនាន់មួយទៅជំនាន់មួយនៅស្រុកកំណើតរបស់ពួកគេ។  
                </p>
                <p>
                ទ្រឹស្ដីមួយដែលមនុស្សភាគច្រើនយល់ស្របគឺថាវាមានប្រភពចេញពីបង្គា - គ្រឿងផ្សំលេចធ្លោបំផុតដែលធ្វើឱ្យម្ហូបនេះ។ {highlightText('រាង')}បង្គាក្នុងចានវល្លិមានរាងរាងពងក្រពើពណ៌លឿងស្រាលមើលទៅស្រដៀងនឹងតម្បាញដូង។ប្រហែលនេះក៏ជាគំនិតបង្កើតឈ្មោះប៊ុនដួង ដែលក្រោយមកអានជាប៊ុនសួង។ ប៊ុន សួង មានគ្រឿងផ្សំសំខាន់ៗនៃ{highlightText('ប៊ុន')} {highlightText('បង្គា')} និង{highlightText('សាច់ជ្រូក។')} ដូចបានរៀបរាប់ខាងលើ ផ្នែកដ៏សំខាន់បំផុតក្នុងការធ្វើម្ហូបប្រហិតបង្គា ដូច្នេះតម្រូវការជាមុនសម្រាប់ប៊ុន សួង ដែលមានរសជាតិឈ្ងុយឆ្ងាញ់គឺត្រូវមានបំពងបង្កងដែលមានគុណភាព។ ដើម្បីធ្វើបង្គាក្រឡុកឱ្យមានរសជាតិឆ្ងាញ់ អ្នកត្រូវជ្រើសរើសបង្គាដែលស្រស់ៗ។ បង្គារួមជាមួយខ្ទឹមស និងខ្ទឹមសនឹងបង្កើតជាល្បាយរលោង។ បន្ទាប់ពីលាយជាមួយម្រេច អំបិល {highlightText('ម្សៅដំឡូងឈើ')}និង{highlightText('ប្រេងស្វាយចន្ទី')}ដើម្បីឱ្យមានពណ៌លឿងគួរឱ្យចាប់អារម្មណ៍ហើយ អ្នកផលិតត្រូវបន្តលាយបញ្ចូលគ្នាដើម្បីឱ្យមានភាពទំពានៃសាច់បន្ទះ ។ ទីបំផុត បង្គានឹងត្រូវបានរាងជាសរសៃរាងពងក្រពើ ដែលអាចដាក់ចូលក្នុងឆ្នាំងទឹកពុះ ឬចៀនជាមុនជាមួយប្រេងឆា។ ប៊ុន សួង ក៏មានលក្ខណៈខុសប្លែកពីវល្លិ និងផូដែរ។ មិនត្រឹមតែរំងាស់ឆ្អឹងប៉ុណ្ណោះទេ ប៊ុសួង ក៏មានរសជាតិ {highlightText('tuong hat')} និងជាតិជូរបន្តិចនៃ{highlightText('អំពិល')} បង្កើតជាពណ៌ត្នោតខុសពីទឹកសម្លធម្មតា។
                </p>
                <p>
                ប៊ុន សួង គឺជាមុខម្ហូបដ៏ឆ្ងាញ់ និងមានជីវជាតិ។ មុខម្ហូបនេះគឺជាមុខម្ហូបដ៏ឈ្ងុយឆ្ងាញ់របស់ Tra Vinh ហើយថែមទាំងមានរសជាតិនៃម្ហូបភាគនិរតីផងដែរ។
                </p>
            </FoodContent>    


            <FoodContent title="របៀបធ្វើប៊ុនសួង">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">វិធីបុរាណ៖</h4>

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
                                        <p>លាងឆ្អឹងជំនី 1 គីឡូក្រាមជាមួយទឹកខ្មេះនិងអំបិល។ ចៀនខ្ទឹមបារាំងរយៈពេល 6 នាទី។ លាងបង្គា ៥០០g ជាមួយទឹកទឹកកក និងអំបិល។ ប្រើកន្សែងស្អាតជូតបង្គាឱ្យស្ងួត។ កាត់ខ្ទឺមសន្លឹកតូច។ ចៀនខ្ទឹមបារាំងរហូតដល់ក្រអូប។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ធ្វើបង្គា</span>
                                        <p>ដាក់បង្គាចូលក្នុងម៉ាស៊ីនច្របល់ បន្ទាប់មកបន្ថែមគ្រឿងទេសមាន់ ១ស្លាបព្រា ស្ករស ម្រេចបន្តិច កូរឲ្យសព្វ។ ដាក់បង្គាក្នុងថង់ផ្លាស្ទិច ហើយដាក់ក្នុងទូរ      ទឹកកក។ បន្ថែមខ្ទឹមស ខ្ទឹមក្រហម និងម្ទេស រហូតដល់ម៉ត់។ បន្ទាប់ពី ៣០ នាទី យកបង្គាចេញហើយច្របាច់ពួកវាដើម្បីបង្កើតភាពស្អិត។ បន្ទាប់ពីវាយប្រហែល ២ នាទី បន្ថែមស៊ុតពណ៌ស 1 ស្លាបព្រាបាយ ម្សៅពោត ½ ស្លាបព្រាបាយ ម្សៅដុតនំ  ១ស្លាបព្រាកន្លះ កូរឱ្យសព្វ រួចបន្តបុករយៈពេល 5 នាទីទៀត។ ដាក់បង្គាចូលក្នុងក្របមួយកាត់ចុងចេញ រួចកាត់ជាដុំតូចៗល្មមដាក់ក្នុងឆ្នាំងទឹកពុះ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: ចម្អិនទំពាំងបាយជូរ</span>
                                        <p>ដាំទឹក ៣ លីត្រ រួចដាក់ឆ្អឹងជំនីរ។ បន្ថែមអំបិល ១ស្លាបព្រាបាយ ស្ករស ១ស្លាបព្រាបាយ និងខ្ទឹមបារាំងចូលឆ្នាំង។ ស្អំពពុះឱ្យស្មើៗគ្នា ដើម្បីជួយធ្វើឱ្យទំពាំងបាយជូរកាន់តែច្បាស់ និងមិនមានពពក។បន្ទាប់ពីយក Foam ទាំងអស់ចេញ បន្ថែមទឹកត្រជាក់ 1 លីត្រ ហើយបន្តយក Foam ចេញ។ បន្ថែមខ្ទឹមក្រហម និងបង្គាស្ងួត ៣០ក្រាមចូលក្នុងឆ្នាំង។ ដាំទឹកឱ្យពុះប្រហែល ១០ នាទី បិទភ្លើង គ្រប ហើយទុកឆ្នាំងមួយយប់ ដើម្បីឱ្យទឹកមានរសជាតិផ្អែម។ មួយយប់យើងនឹងយក radish ពណ៌សនិងខ្ទឹមបារាំង។ បន្ថែមស្ករស ២៥ក្រាម អំបិល ១ស្លាបព្រាបាយ ម្សៅស៊ុប ១.៥ស្លាបព្រាបាយ ម្សៅស៊ុបខ្នរ ½ ស្លាបព្រាកាហ្វេ បន្តបិទពពុះ។ ដាក់ចូលឆ្នាំងហើយបន្ថែមម្រេចបន្តិច។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/_74g4ocbU48?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        
                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: Vanh Khuyen Le</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">របៀបបង្កើតបំរែបំរួល៖</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                    ក្រោយមកទៀត មុខម្ហូបគុយទាវក៏លែងធ្វើតាមរបៀបបុរាណដែរ ប៉ុន្តែមានកន្លែងខ្លះកែប្រែមុខម្ហូបឱ្យកាន់តែមានភាពទាក់ទាញ ដោយមានគ្រឿងផ្សំបន្ថែមទៀត ដូចជាកន្លែងខ្លះមាន{highlightText('ឆ្អឹងជំនីរ')} {highlightText('មឹក')} {highlightText('បង្គា')} ជាដើម ឬកន្លែងខ្លះក៏បានផលិតឡើងជារាងវែងដូចសរសៃអំបោះ មានពណ៌ច្បាស់ជាងកន្លែងខ្លះ ដែលប៊ុន សួង ធ្វើឡើងក្នុងទម្រង់ក្រាស់ ក្រាស់ជាង ជាមួយនឹងពណ៌ងងឹត។ ទំពាំងបាយជូរមានវិធីស្ងោរឆ្អឹងខុសៗគ្នា ដូច្នេះភាពផ្អែមរបស់ទំពាំងបាយជូរមានលក្ខណៈខុសគ្នាខ្លះៗ ប៉ុន្តែមិនសំខាន់ទេ។ មនុស្សតែងតែនិយាយថា ខ្លឹមសារនៃម្ហូបគឺស្ថិតនៅក្នុងទឹកជ្រលក់ ដូច្នេះការលាយទឹកជ្រលក់ដើម្បីបង្កើតឱ្យមានរសជាតិឈ្ងុយឆ្ងាញ់ ក៏ជាមធ្យោបាយរក្សាអតិថិជនផងដែរ។ យើងអាចញ៉ាំគុយទាវធម្មតាជាមួយទឹកត្រីម្ទេស កន្លែងខ្លះក៏បន្ថែមខ្ទឹមស ឬទឹកសណ្តែកខ្មៅសម្រាប់ជ្រលក់សាច់ បង្គា ទឹកសណ្ដែកខ្មៅ និងសណ្ដែកដី អាចបន្ថែមរសជាតិឆ្ងាញ់ដល់ទឹកត្រី។ មានវិធីធ្វើច្រើនយ៉ាងខុសៗគ្នា ប៉ុន្តែជាទូទៅ រសជាតិនៃគុយទាវមិនផ្លាស់ប្តូរទេ វាគ្រាន់តែជាគ្រឿងផ្សំដែលបង្កើតវាប៉ុណ្ណោះ ហើយអាស្រ័យលើ "រសជាតិ" នៃមុខម្ហូបរបស់មនុស្សម្នាក់ៗ ពួកគេជ្រើសរើសវិធីធ្វើនំបញ្ចុកផ្សេងៗគ្នា។
                                </p>                
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

                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">តឿង៖ </h4>
                        <div>
                            <p>
                            បំពងខ្ទឹមស ខ្ទឹមក្រហម និងម្ទេស រហូតមានក្លិនឈ្ងុយ បន្ទាប់មកដាក់បង្គាចូល រួចច្របល់ចូលគ្នាអោយសព្វ។ ដាក់ទឹកស៊ីអ៊ីវ ២ស្លាបព្រាបាយចូលក្នុងម៉ាស៊ីនច្របល់ចូលច្របល់ចូលគ្នា។ បន្ថែមទឹកស៊ីអ៊ីវដីជាមួយខ្ទឹមបារាំងចៀន បន្ទាប់មកបន្ថែមស្ករស ១.៥ស្លាបព្រាបាយ និងម្សៅមីសជី ១ស្លាបព្រាបាយ។
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/xWGqdBpwXMQ?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: Vanh Khuyen Le</small>
                        </div>
                    </div>
            </FoodContent>


            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    {highlightText('ស្រុះ')}ជាមួយទឹកក្តៅហើយដាក់ក្នុងចានជាមួយបង្គា សាច់ជ្រូកចិញ្ច្រាំ ពោះជ្រូក និងពោះជ្រូក។ បន្ទាប់មកចាក់ទឹកដាក់ក្នុងចានមួយ ហើយអាចបន្ថែមទឹកត្រីម្ទេស ឬទឹកសណ្ដែកខ្មៅចូលជ្រលក់សាច់ បង្គា... បន្លែឆៅឆ្ងាញ់ៗ ឧស្សាហ៍ទទួលទានជាមួយប៊ុន សួង មានដូចជា៖ {highlightText('ត្រកូនចិត')} {highlightText('ស្រយ៉ោងចេក')} {highlightText('ស្លឹកខ្ទឹម សាឡាត់')} {highlightText('សណ្តែកបណ្តុះ')} {highlightText('និហុងក្រអុប')}…
                    </p>

                    <p>
                    ទឹកប្រហុកមានរសជាតិផ្អែមនៃបង្គា សាច់ ខ្ទឹមស រសជាតិជូរនៃក្រូចឆ្មា ឬអំពិល រសជាតិសម្បូរបែបនៃទឹកស៊ីអ៊ីវ ទឹកត្រី អំបិល និងគ្រឿងទេស។ គុយទាវមានរសជាតិឈ្ងុយឆ្ងាញ់របស់បង្គា។ ទាំងអស់រួមគ្នាបង្កើតនូវភាពឆ្ងាញ់ដែលគួរអោយចាប់អារម្មណ៍។
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ២៧០០០ ដុង - ៤០០០០ដុង។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BUNSUONGMAINKM
