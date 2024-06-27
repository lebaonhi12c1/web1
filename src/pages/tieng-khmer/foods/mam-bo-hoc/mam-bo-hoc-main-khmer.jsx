import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'ត្រីផ្ទុក',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'ត្រីកំភ្លាញ',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%B7c.jpg'
    },
    {
        text: 'ត្រីករាញ់',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20r%C3%B4%20phi.webp'
    },
    {
        text: 'ឡាពៀ',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20linh.jpg'
    },
    {
        text: 'ប្រជាប្រិយ',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20b%C3%ACnh%20d%E1%BB%8B.jpg'
    },
    {
        text: 'ថាសថ្ងៃឈប់សម្រាក',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20m%C3%A2m%20c%E1%BB%97.jpg',
    },
    {
        text: 'ទឹកជ្រលក់',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20n%C6%B0%E1%BB%9Bc%20ch%E1%BA%A5m.jpg'
    },
    {
        text: 'នំបញ្ចុក',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20num%20b%C3%B2%20ch%C3%B3c.jpg'
    }, 
    {
        text: 'ទឹកត្រី',
        image: 'https://buhkhkt.github.io/CHINH/l%E1%BA%A9u%20m%E1%BA%AFm.jpg'
    },
    {
        text: 'ប្រហិតសាច់ជ្រូក',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20kho%20th%E1%BB%8Bt.jpg'
    },
    {
        text: 'បាកលាវ',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20b%E1%BA%A1c%20li%C3%AAu.jpg'
    },
    {
        text: 'សុកត្រាំង',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20s%C3%B3c%20tr%C4%83ng.jpg',
    },
]

const nguyenlieu = [
    {
        text: 'ត្រីកំភ្លាញ ',
        value: 'ត្រីផ្ទុក ត្រីក្រាញ់ ត្រីបរៀល...',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%B7c++.jpg'
    },
    {
        text: 'បាយកក',
        value: 'បរិមាណគ្រប់គ្រាន់',
        image: 'https://buhkhkt.github.io/CHINH/c%C6%A1m%20ngu%E1%BB%99i.jpg'
    },
    {
        text: 'អង្ករលីង',
        value: 'បរិមាណគ្រប់គ្រាន់',
        image: 'https://buhkhkt.github.io/CHINH/th%C3%ADnh%20g%E1%BA%A1o.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'ស្ករ អំបិល...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
]


const thuongthucthanhpham = [
    {
        text: 'វឺមីសែ',
        image: 'https://buhkhkt.github.io/CHINH/Ng%C3%A3i%20B%C3%BAn.jpg'
    },
    {
        text: 'ស្លឹកគ្រៃ',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20%C4%91%E1%BA%ADp%20d%E1%BA%ADp.jpg'
    },
    
]

const MAMBOHOCMAINKM = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">ប្រហុក</h1>
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
                    src="https://www.youtube.com/embed/POVk4V3h13c?list=PLO4xYQBA1oxVQmeSFBdRlBfD4Y37TpQgc"
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
                ខេត្ត Tra Vinh ជាខេត្តមួយនៅតំបន់ដីសណ្ដទន្លេមេគង្គ ហ៊ុំព័ទ្ធដោយសាខាពីរនៃទន្លេ Tien និង Hau ដូច្នេះវាមានប្រភពទឹកសាបដែលងាយស្រួលសម្រាប់ការនេសាទ និងវារីវប្បកម្ម។ ក្នុងចំណោមនោះ បង្គា និងត្រី គឺជាផលិតផលដែលផ្តល់ដោយធម្មជាតិនៅលើដីនេះ។ ដោយសារវត្ថុធាតុដើមសម្បូរបែប ផលិតផលត្រីក៏ត្រូវបានអភិវឌ្ឍយ៉ាងខ្លាំង ជាពិសេសទឹកត្រី។ ការធ្វើទឹកត្រីបានក្លាយជាអាជីពពេញនិយមសម្រាប់ប្រជាជននៅទីនេះ។ ក្នុងចំណោមប្រភេទទឹកត្រីនៅ Tra Vinh ទឹកត្រីដែលប្លែកជាងគេគឺទឹកត្រីសាច់គោ។ ម៉មបូហុក (ប្រហុក ឬ ប្រូហុក) ជាមុខម្ហូបដែលជាប់ទាក់ទងជាមួយជនជាតិខ្មែរក្នុងប្រទេសកម្ពុជា ក៏ដូចជាប្រជាជនខ្មែរនៅភាគខាងត្បូងជាច្រើនជំនាន់មកហើយ។ ប្រហុក ត្រូវបានរៀបចំយ៉ាងល្អិតល្អន់ពីត្រីទឹកសាប ដូចជា{highlightText('ត្រីផ្ទុក')} {highlightText('ត្រីកំភ្លាញ')} {highlightText('ត្រីករាញ់')} {highlightText('ឡាពៀ')}… ប្រហុក ថ្វីត្បិតតែវាជាម្ហូបបែបច្រែះ និងសាមញ្ញក៏ដោយ ប៉ុន្តែវាបាន "ឆក់បេះដូង" ជាច្រើន អ្នកទេសចររីករាយនឹងវាជាលើកដំបូង។
                </p>
                <p>
                ប្រសិនបើអ្នកមានឱកាសធ្វើដំណើរទៅ Tra Vinh អ្នកគួរតែទៅលេងផ្ទះប្រជាជនក្នុងតំបន់ ដើម្បីស្វែងយល់ពីរបៀបធ្វើទឹកជ្រលក់សាច់គោ។ អ្នកដែលមានបទពិសោធន៍ធ្វើទឹកត្រីពីដើមនៅទីនេះ និយាយថា ការធ្វើទឹកត្រីមិនពិបាកពេកទេ ប៉ុន្តែទាមទារច្រើនជំហាន។ ប្រហុក បានក្លាយជាមុខម្ហូបដែលធ្លាប់ស្គាល់ក្នុងជីវភាពរស់នៅប្រចាំថ្ងៃរបស់ប្រជាជនខ្មែរតាំងពីយូរណាសមកហើយ ពី{highlightText('ប្រជាប្រិយ')} មកដល់{highlightText('ថាសថ្ងៃឈប់សម្រាក')}។ មិនឈប់ត្រឹមតែជាមុខម្ហូបធម្មតារបស់ប្រជាជនខ្មែរ ប្រហុកក៏បានក្លាយជាមុខម្ហូបពិសេសរបស់ត្រាវិញដែរ។ ប្រហុក លាយក្រូចឆ្មា ស្ករ ខ្ទឹមស ម្ទេស ធ្វើ{highlightText('ទឹកជ្រលក់')} ឆ្ងាញ់ណាស់ សម្រាប់បន្លែ ស្ងោរ ក្រឡុក...ក្រៅពីទទួលទានឆៅ 
                </p>
                <p>
                ទឹកត្រីក៏ជាគ្រឿងផ្សំសំខាន់ដែលបង្កើតរសជាតិប្លែកសម្រាប់មុខម្ហូបដូចជា {highlightText('នំបញ្ចុក')} {highlightText('ទឹកត្រី')} {highlightText('ប្រហិតសាច់ជ្រូក')}... មុខម្ហូបសម្បូរទៅដោយរសជាតិ។ រសជាតិដ៏ល្អបំផុតនៃទឹកជ្រលក់សាច់គោគឺស៊ុប ។ បើនិយាយពីគុយទាវនៅបស្ចិមប្រទេស មានម៉ាកល្បីៗជាច្រើនដូចជា នំបញ្ចុកនៅត្រាវិញ នំបញ្ចុកនៅ{highlightText('បាកលាវ')} មីស៊ុបគុយទាវនៅ{highlightText('សុកត្រាំង')}… ទោះជាយ៉ាងនេះក្តី លក្ខណៈរបស់គុយទាវវល្លិក្នុង ត្រាវិញគឺការប្រើទឹកត្រីសាច់គោចិញ្ច្រាំធ្វើទឹកស៊ុប។ តំបន់នីមួយៗមានបំរែបំរួលផ្សេងៗគ្នាទៅតាមរសជាតិរបស់មនុស្សម្នាក់ៗ។ កន្លែងជាច្រើនក៏ជំនួសទឹកសាច់គោជាមួយទឹកត្រី ឡាពៀ ទឹកត្រី... ពេលធ្វើវល្លិ។ ដោយឡែកសម្រាប់គុយទាវខ្មែរនៅត្រាវិញគេតែងតែប្រើទឹកសាច់គោដ៏សម្បូរបែបនេះ។
                </p>
            </FoodContent>    
            
            <FoodContent title="របៀបធ្វើប្រហុក">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">គ្រឿងផ្សំ៖</h4>

                                <div>
                                   

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className="text-xl font-semibold">ជំហាន៖</h4>
                                <div className="flex flex-col gap-3 mt-6">
                                    

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>យើងធ្វើមាត្រដ្ឋានកាត់ក្បាលត្រីហើយលាងវា។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ស្ងាត្រី</span>
                                        <p>ក្រោយពេលលាងត្រីរួច ស្រង់ចេញ យកទៅហាលថ្ងៃ ហាលថ្ងៃស្ងួត កុំភ្លេចយកក្រណាត់មកគ្របពីលើ ដើម្បីកុំអោយរុយ ហើយទុកអោយស្ងួតប្រហែល 18-24 ម៉ោង រហូតត្រីមានក្លិនស្អុយ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: លាយទឹកត្រី</span>
                                        <p>បន្ទាប់ពីយកត្រីមកចាក់ត្រីចូលក្នុងចាន រួចលាយជាមួយបាយ អំបិល ស្ករ និងអង្ករត្រជាក់ រួចច្របល់ចូលគ្នាឲ្យសព្វ។ ជាចុងក្រោយ យើងដាក់ទឹកត្រីដាក់ក្នុងប្រអប់ ប៉ុន្តែយើងត្រូវទុកវានៅទីនោះប្រហែល 3 ខែ ទើបយើងអាចប្រើវាបាន។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/48lgbX7BOcI?list=PLO4xYQBA1oxVQmeSFBdRlBfD4Y37TpQgc"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        
                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: Mam Bo Hoc Vlog</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    ប្រហុក ក៏ជាគ្រឿងទេសដ៏សំខាន់ដែលបង្កើតនូវរសជាតិដ៏សម្បូរបែបសម្រាប់មុខម្ហូបដូចជា៖ សាច់គោបំពង មីឆា ទឹកត្រី {highlightText('វឺមីសែ')} {highlightText('ស្លឹកគ្រៃ')}ល... ពេលបានក្លិនទឹកប្រហុក អ្នកនឹងស្រក់ទឹកមាត់មិនខាន ព្រោះរសជាតិ។ ភាពសម្បូរបែបនៃទឹកត្រី ក្លិនឈ្ងុយនៃដង្កូវនាង ស្លឹកគ្រៃ។ល។ គ្រឿងផ្សំទាំងនោះលាយជាមួយនឹងទឹកត្រីសាច់គោ ធ្វើឱ្យទំពាំងបាយជូរមានរសជាតិផ្អែមឆ្ងាញ់ និងមានរសជាតិជូរ។ បន្លែជ្រលក់ក្នុងទឹកត្រីពិតជាអស្ចារ្យណាស់ ហើយប្រហែលជាអាចញ៉ាំបាយបានទាំងអស់ ដោយសារតែរសជាតិដ៏សម្បូរបែបនៃទឹកត្រី និងក្លិនឈ្ងុយ។
                    </p>

                    <p>
                    ម្ហូបនេះនឹងស័ក្តិសមបំផុតសម្រាប់ញ៉ាំនៅថ្ងៃអាកាសធាតុត្រជាក់។ ឬមនុស្សក៏អាចញ៉ាំទឹកសាច់គោដើម្បីជ្រលក់នៅពេលរមៀលក្រដាសអង្ករជាមួយ vermicelli បន្លែនិងសាច់ដើម្បីបង្កើនរសជាតិនៃម្ហូប។
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ៩០០០០ដុង-១២០០០០ដុង/៥០០០g។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default MAMBOHOCMAINKM
