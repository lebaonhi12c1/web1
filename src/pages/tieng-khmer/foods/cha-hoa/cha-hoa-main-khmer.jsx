import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'ផ្កា',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%C3%B4ng%20hoa.jpeg'
    },
    {
        text: 'ផ្ការាងត្រី',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20c%C3%A1%20ch%C3%A9p.webp'
    },
    {
        text: 'បាយ',
        image: 'https://buhkhkt.github.io/CHINH/c%C6%A1m%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'នំប៉័ង',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20m%C3%AC%20kh%C3%B4ng.jpg'
    },
    {
        text: 'នំបញ្ចុក',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    
]

const nguyenlieu = [
    {
        text: 'សាច់ជ្រូក',
        value: '៦០០g',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20heo%20b%C4%83m.webp'
    },
    {
        text: 'ពងមាន់អំបិល',
        value: '៥ពង',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%B2ng%20%C4%91%E1%BB%8F%20tr%E1%BB%A9ng%20mu%E1%BB%91i.webp'
    },
    {
        text: 'ពងមាន់',
        value: '២ ពង',
        image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20g%C3%A0.jpg'
    },
    {
        text: 'ផ្សិត',
        value: '៤g',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BA%A5m%20m%C3%A8o.webp'
    },
    {
        text: 'សាច់ក្រកឆៅ',
        value: '៤០០g',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%B2%20s%E1%BB%91ng.webp'
    },
    {
        text: 'ស្រាស',
        value: '២ស្លាបព្រា',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'ការ៉ុត',
        value: '២g',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A0%20r%E1%BB%91t.jpeg'
    },
    {
        text: 'សណ្តែកសៀង',
        value: '២g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20que.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'ទូទៅ',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'ពង​ទាបាក់ថាវ', image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20b%E1%BA%AFc%20th%E1%BA%A3o.jpg' },
    { text: 'តៅហ៊ូកី', image: 'https://buhkhkt.github.io/CHINH/t%C3%A0u%20h%E1%BB%A7%20ky.jpg' },
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

const CHAHOAMAINKM = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHA HOA</h1>
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
                    src="https://www.youtube.com/embed/D_IqWF9-0V4?list=PLO4xYQBA1oxWXmpMIIXHWCHoS9CIj2uSV"
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
                Cha Hoa ដែលជាមុខម្ហូបពិសេសរបស់ខេត្ត Tra Vinh ពិតជានិមិត្តរូបនៃភាពប៉ិនប្រសប់ និងសិល្បៈនៃការធ្វើម្ហូប។ វាមិនមែនគ្រាន់តែជាមុខម្ហូបប៉ុណ្ណោះទេ ប៉ុន្តែក៏ជាស្នាដៃសិល្បៈ ដែលជាតំណាងនៃភាពទំនើប និងគំនិតច្នៃប្រឌិតផងដែរ។ ផលិតពីគ្រឿងផ្សំស្រស់ៗដូចជា សាច់ជ្រូក ប៉ាតេ ស៊ុតអំបិល ស៊ុតចៀន បន្លែ និងផ្សិត។ ពេលក្រឡេកមើល Cha Hoa មិនមានអ្វីក្រៅពីចាប់អារម្មណ៍នឹងរូបរាងរបស់វា ដូចជា{highlightText('ផ្កា')}ដ៏ឆ្ងាញ់។ ដោយមានពងអំបិលធ្វើជាកណ្តាល ហ៊ុំព័ទ្ធដោយស្រទាប់ផ្សិត សាច់ក្រកឆ្ងាញ់ៗ និងពងមាន់បំពងពណ៌មាស បង្កើតបានជាក្រឡុកដ៏ស្រស់ស្អាត លាយបញ្ចូលគ្នាដើម្បីបង្កើតរសជាតិធម្មតារបស់ត្រាវិញ។
                </p>
                <p>
                ជាពិសេសមាន Cha {highlightText('ផ្ការាងត្រី')}ប្លែកពីគេ។ ផ្ការំយោលជាមួយពងអំបិល ជាការបំពេញពេលដាក់លើតុអំឡុងពេលបុណ្យតេត ទាំងស្រស់ស្អាត      និងទាក់ទាញ។ នេះពិតជាម្ហូបដ៏អស្ចារ្យ និងសម្បូរបែបដែលអាចបរិភោគជាមួយ {highlightText('បាយ')} {highlightText('នំប៉័ង')} ឬ{highlightText('នំបញ្ចុក')} បំពេញគ្រប់រសជាតិ។ ថ្វីត្បិតតែដំណើរការធ្វើផ្កាវិលមិនងាយស្រួល ទាមទារភាពប៉ិនប្រសប់ និងប៉ិនប្រសប់ក៏ដោយ លទ្ធផលចុងក្រោយគឺជាមុខម្ហូបដែលឆ្ងាញ់ មានជីវជាតិ និងគួរអោយចាប់អារម្មណ៍។ សាច់ជ្រូកចិញ្ច្រាំអោយស្អាត រួចផ្សំជាមួយគ្រឿងផ្សំផ្សេងៗ ហើយរុំស្លឹកចេកមុននឹងចំហុយ។ នេះបង្កើតនូវមុខម្ហូបដ៏ឈ្ងុយឆ្ងាញ់ និងជីវជាតិដែលទាក់ទាញបេះដូងប្រជាជន ហើយក៏ជាមោទនភាពរបស់ប្រជាជនត្រាវិញផងដែរ។
                </p>
                <p>
                វីតាមីន និងសារធាតុរ៉ែជាច្រើនដែលចាំបាច់សម្រាប់រាងកាយ។ ប្រសិនបើអ្នកមានឱកាសមកត្រាវិញ សូមកុំឲ្យឱកាសនេះកន្លងផុតទៅ ដើម្បីរីករាយនឹងភាពពិសេសនេះ។ រមៀលផ្កាមិនត្រឹមតែជាមុខម្ហូបប៉ុណ្ណោះទេ ថែមទាំងជាស្នាដៃសិល្បៈធ្វើម្ហូប ដែលបង្ហាញពីភាពប៉ិនប្រសប់ និងទំនើបកម្មរបស់សិប្បករក្នុងស្រុក។
                </p>
            </FoodContent>    


            <FoodContent title="វិធីធ្វើ Cha Hoa">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">វិធីពេញនិយម៖</h4>

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
                                        <p>យកផ្សិតខ្មៅ ៤g មកត្រាំក្នុងទឹកត្រជាក់ប្រហែល ២០-៣០ នាទីដើម្បីឱ្យផ្សិតខ្មៅរីក។ លាងសណ្តែក និងការ៉ុត កាត់ការ៉ុតជាប្រវែងស្មើជាមួយសណ្តែកខ្សែ។ ដាក់ខ្ទះលើចង្ក្រាន ចាក់ទឹកប្រហែល ២០០ml អំបិល ១ស្លាបព្រាកន្លះ បន្ថែមការ៉ុត រួចបើកភ្លើង ពេលទឹកពុះ ដាក់សណ្តែកបៃតងចូល។ ទុកចោល ១ នាទី ចាក់ទឹកចេញ សឹមលាងចេញដោយទឹកត្រជាក់ ដើម្បីរក្សាពណ៌បន្លែស្រស់ និងក្រៀម។ បន្ទាប់មកបន្ថែមស្រាស១ស្លាបព្រាបាយចូលទៅក្នុងស៊ុតអំបិលដើម្បីបំបាត់ក្លិន។ បន្ទាប់មកចំហុយពងមាន់រយៈពេល ៧-៨ នាទី (ប្រសិនបើដុតនំសូមទុកនៅ 160 អង្សាសេរយៈពេល 9-10 នាទី) ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ចៀនស៊ុតដើម្បីធ្វើសំបក</span>
                                        <p>បន្ថែមអំបិល ⅕ ស្លាបព្រាកាហ្វេ និងវាយល្អរហូតដល់ស៊ុតរលាយ។ បន្ទាប់មកបន្ថែម ១ស្លាបព្រានៃប្រេងចម្អិនអាហារទៅចង្ក្រាន។ ចាក់ពងមាន់ដាក់លើចង្ក្រានរហូតដល់រលោង បន្ទាប់មករង់ចាំរហូតដល់ផ្ទៃពងបានកំណត់ រួចយកចេញពីចង្ក្រាន។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: ធ្វើ Cha hoa ឆៅ</span>
                                        <p>បន្ទាប់ពីត្រាំផ្សិតរួច យើងកាត់ដើមមកកាត់ជាដុំតូចៗ រួចដាក់សាច់ក្រកឆៅ ៤០០ ក្រាម បន្ថែមម្សៅខ្ទឹមបារាំង ½ ស្លាបព្រាកាហ្វេ និងម្រេចស កន្លះស្លាបព្រាកាហ្វេ។ បន្ទាប់មកលាយឱ្យបានល្អ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 4: វេច Cha hoa</span>
                                        <p>បាចថង់ផ្លាស្ទិចដែលបានសម្អាតរួចលើផ្ទៃរាបស្មើ រួចដាក់ពងមាន់ចៀន បន្ទាប់មកដាក់សាច់ក្រកឆៅ ស្រទាប់ការ៉ុត និងសណ្តែកខ្សែ បន្ថែមសាច់ក្រកឆៅមួយស្រទាប់ទៀត ហើយស្រទាប់ចុងក្រោយគឺស្រទាប់ការ៉ុត និងសណ្តែក។  ដាក់ស៊ុតអំបិលនៅកណ្តាលស្រទាប់ខាងលើ។ រមៀលរុំរុំផ្ការហូតដល់វាមានរាងមូលនិងតឹង។ បន្ទាប់យកខ្សែហើយចងវាឱ្យជាមរ។ ចំហុយប្រហែល 30 នាទី បន្ទាប់មកយកវាចេញទៅត្រជាក់ប្រហែល 5 ម៉ោងសិន ទើបអ្នកអាចរីករាយនឹងវាបាន។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/Ec_AndMzUAM?list=PLO4xYQBA1oxWXmpMIIXHWCHoS9CIj2uSV"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel: Diem Nauy</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">របៀបបង្កើតបំរែបំរួល៖</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.webp" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.webp" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                បន្ថែមពីលើការវិលផ្កាបែបប្រពៃណី ឥឡូវនេះមានភាពខុសគ្នាជាច្រើននៃការវិលផ្កា ជាមួយនឹងការផ្លាស់ប្តូរគ្រឿងផ្សំ ឬវិធីសាស្រ្តកែច្នៃ។ ជំនួសឱ្យការប្រើពងប្រៃ {highlightText('ពង​ទាបាក់ថាវ')}។ ស៊ុតឱសថភាគខាងជើងមានរសជាតិប្រៃ និងខ្លាញ់ បង្កើតរសជាតិថ្មីសម្រាប់ក្រឡុកផ្កា។ ឬផ្កាក្រឡុកធ្វើពីគ្រឿងផ្សំបួសដូចជា {highlightText('តៅហ៊ូកី')} ផ្សិតខ្មៅ ការ៉ុត មើមសណ្តែក ... ដើម្បីជំនួសគ្រឿងផ្សំដូចជាសាច់ ឬស៊ុត។ វិលផ្កាបួសមានរសជាតិសន្សំសំចៃ សាកសមសម្រាប់អ្នកបួស។ នំប៉ាវផ្កាប្រាំពណ៌នាពេលបច្ចុប្បន្ននេះ ក៏ត្រូវបានផលិតចេញពីគ្រឿងផ្សំផ្សេងៗគ្នា ដែលបង្កើតឱ្យមានពណ៌ទាក់ទាញសម្រាប់មុខម្ហូប។ គ្រឿងផ្សំមួយចំនួនត្រូវបានគេប្រើជំនួសសាច់ជ្រូកដូចជាសាច់គោ មាន់ បង្គាជាដើម។ លើសពីនេះមនុស្សក៏អាចកែប្រែការក្រឡុកផ្កាដោយផ្លាស់ប្តូររបៀបកែច្នៃផងដែរ។ ជាឧទាហរណ៍ ក្រឡុកផ្កាដុតនឹងមានរសជាតិឆ្ងាញ់ និងស្រួយជាងក្រឡុកផ្កាចំហុយ។ ការផ្លាស់ប្តូរផ្កាវិលគឺជាវិធីមួយដើម្បីបង្កើតចានថ្មី និងទាក់ទាញជាងមុន។ ការប្រែប្រួលនៃផ្កាវិលទាំងនេះត្រូវបានមនុស្សជាច្រើនចូលចិត្ត ជាពិសេសយុវវ័យ។
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="វិធីធ្វើទឹកជ្រលក់">
                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">អំបិល និងម្រេចក្រូចឆ្មា៖</h4>
                        
                        <div>
                            <p>
                            យើងដុតម្រេចដើម្បីរក្សាក្លិនរបស់វា។ យើងលាយអំបិលគ្រើម និងអំបិលល្អចូលគ្នា ហើយដុតប្រហែល ៧ ទៅ ១០ នាទី ដើម្បីឱ្យអំបិលស្ងួត។ បន្ទាប់មកយើងយកម្រេចត្រជាក់មកកិនឱ្យម៉ត់ រួចហាន់ស្លឹកក្រូចសើច។ ចុងក្រោយ យើងលាយគ្រឿងផ្សំជាមួយនឹងល្បាយអំបិលដើម រួចបន្តអាំង។ យើងអាចបន្ថែមម្សៅម្ទេសបន្តិចដើម្បីឱ្យវាហឹរ។ បន្ទាប់ពីដុតមួយរយៈរួចបិទចង្ក្រានទុកឱ្យត្រជាក់។ កិន MSG រួចចាក់ចូលទៅក្នុងទឹកអំបិលលីង ហើយច្របល់ចូលគ្នា។ ដូច្នេះយើងមានល្បាយអំបិល និងម្រេចដ៏ឆ្ងាញ់ ឥឡូវយើងច្រោះអំបិលតាមកម្រាលឥដ្ឋដាក់ក្នុងពាងមួយ ហើយរក្សាវាទុក។ ពេលញ៉ាំ យើងគ្រាន់តែច្របាច់ក្រូចឆ្មាមួយដុំចូលទៅក្នុងអំបិល និងម្រេចដើម្បីឱ្យមានអំបិល និងម្រេចលាយជាមួយនឹងរូបមន្តពិសេសនេះ។
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/Sobl5BaSRAE?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            
                            <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel: Cuoi Khuc Khich</small>
                        </div>
                    </div>

                    
            </FoodContent>


            <FoodContent title="រីករាយជាមួយផលិតផល">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.webp" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    Cha Hoa គឺជាមុខម្ហូបពិសេសរបស់ខេត្តត្រាវិញ ដែលមនុស្សជាច្រើនចូលចិត្តសម្រាប់រសជាតិឆ្ងាញ់ និងស្រស់ស្អាត។ ម្ហូបនេះអាចទទួលបានច្រើនយ៉ាងអាស្រ័យតាមចំណង់ចំណូលចិត្តរបស់មនុស្សម្នាក់ៗ។ ផ្ការំលីងប្រពៃណីត្រូវបានគេទទួលទានជាញឹកញាប់ជាមួយនឹងបាយ នំប៉័ង ឬវល្លិ។ នៅពេលរីករាយ អ្នកអាចកាត់ផ្ការំលីងទៅជាចំណិតស្តើងៗ ហើយជ្រលក់ជាមួយអំបិលក្រូចឆ្មា និងម្រេច។ ទឹកជ្រលក់ក៏នឹងធ្វើឱ្យរបៀបដែលអ្នកទទួលទានផ្ការំលីងពិសេសដែរ ដូច្នេះអ្នកគួរជ្រើសរើសទឹកជ្រលក់ដែលល្អបំផុតដើម្បីទទួលបានរសជាតិចុងក្រោយ។
                    </p>

                    

                </div>
            </FoodContent>


            <FoodContent title="រក្សា">

                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                    Cha hoa គឺជាមុខម្ហូបដែលធ្វើពីសាច់ជ្រូក ប៉ាតេ ពងអំបិល ពងមាន់បំពង បន្លែ ផ្សិត... រុំស្លឹកចេក រួចចំហុយ។ ដើម្បីរក្សារមូរផ្កាឱ្យបានយូរ អ្នកត្រូវកត់សម្គាល់ចំណុចខាងក្រោម។ បន្ទះផ្កាគួរតែត្រូវបានរក្សាទុកក្នុងទូទឹកកកនៅសីតុណ្ហភាពពី 0 ទៅ 4 អង្សារសេ។ ការធ្វើបែបនេះនឹងជួយរក្សាផ្កាខាត់ណាឱ្យនៅស្រស់និងមិនខូច។ មុននឹងដាក់ក្នុងទូរទឹកកក អ្នកគួរគ្របក្រវិលផ្កាជាមួយនឹងថង់ប្លាស្ទិក ឬថង់ប្លាស្ទិក ដើម្បីចៀសវាងការស្ងួត និងខ្សោះជាតិទឹក ។ ផ្កាក្រឡុកអាចរក្សាទុកក្នុងទូទឹកកក និងប្រើប្រាស់ក្នុងរយៈពេល 3 ថ្ងៃ។ បន្ទាប់ពី 3 ថ្ងៃ, Cha hoa នឹងចាប់ផ្តើមស្ងួតនិងបាត់បង់រសជាតិឆ្ងាញ់របស់ពួកគេ។ ប្រសិនបើអ្នកចង់រក្សាផ្កាឱ្យបានយូរ អ្នកអាចដាក់ក្នុងទូរទឹកកកបាន។ ទោះជាយ៉ាងណាក៏ដោយ នៅពេលប្រើ អ្នកត្រូវ រំលាយទឹកកក Cha Hoa តាមធម្មជាតិនៅក្នុងទូទឹកកក ឬ រំលាយទឹកកក ក្នុងមីក្រូវ៉េវ។

                    </p>

                    

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>Cha Hoa ៥០០g មានចាប់ពី ៧៥០០០ ដុង-១២៥០០០ ដុង។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHAHOAMAINKM
