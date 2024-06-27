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
        text: 'កូនក្រមុំ',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%B4%20d%C3%A2u.jpg'
    },
    {
        text: 'ផ្សារ',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BB%A3%20x%C6%B0a.jpg'
    },
    {
        text: 'ត្រីចិញ្ចឹម',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c%20nu%C3%B4i.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'ត្រីផ្ទក់',
        value: '១ក្បាល',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'អង្ករ',
        value: '២០០g',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg'
    },
    {
        text: 'មឹកស្រស់',
        value: '៥០០g',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'បង្គាស្ងួត',
        value: '៥០g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20kh%C3%B4.jpg'
    },
    {
        text: 'គ្រឿងផ្សំបន្ថែម',
        value: 'សណ្តែកបណ្តុះ ស្លឹកខ្ទឹម ក្រូចឆ្មា ខ្ទឹមបារាំង ពណ៌ស្វាយ សណ្ដែកដី ក្រូចឆ្មា ខ្ញី ម្ទេស។',
        image: 'https://buhkhkt.github.io/CHINH/NLP.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'អំបិល ស្ករ ប្រេងឆា ទឹកត្រី...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
]

const cachlambientau = [
    { 
        text: 'ប្រា', 
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20ba%20sa.jpg'
    },
    { text: 'ក្រពើ', image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%A5u.webp' },
    { 
        text: 'Hemibagrus', 
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C4%83ng.jpg' 
    },
    { text: 'គ្រាប់ផ្លែទទឹម', image: 'https://buhkhkt.github.io/CHINH/h%E1%BA%A1t%20l%E1%BB%B1u.webp' },
    { text: 'អង្ករដំទន់', image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg' },
    { text: 'អង្ករសំរូប', image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20l%E1%BB%A9c.jpg' },
    { text: 'បង្គា', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA.jpg' },
    { text: 'មឹក', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20t%C6%B0%C6%A1i.jpg' },
    { text: 'ខ្យង', image: 'https://buhkhkt.github.io/CHINH/s%C3%B2%20%C4%91i%E1%BB%87p.jpg' },
    { 
        text: 'ឆ្នាំងបាយ', 
        image: 'https://buhkhkt.github.io/CHINH/ch%C3%A1o%20n%E1%BB%93i%20c%C6%A1m%20%C4%91i%E1%BB%87n.jpg' 
    },
]

const thuongthucthanhpham = [
    {
        text: 'យបន្លែប្រមាត្រដី',
        image: 'https://buhkhkt.github.io/CHINH/rau%20%C4%91%E1%BA%AFng.jpg'
    },
    {
        text: 'សណ្តែកបណ្តុះ',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'ស្រយោងចេក',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
]

const CHAOAMMAINKM = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">បបរ Am</h1>
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
                    src="https://www.youtube.com/embed/6PtpNoWF-s4?list=PLO4xYQBA1oxU8Wh7CFDOoIq3broDVrOX3"
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
                    បបរ Am ១ចានក្នុងរូបនេះជាម្ហូបប្រពៃណីត្រាវិញដែលធ្វើពីបាយនិងទំពាំងបាយជូរ។ បបរមានសភាពរលោង និងផ្តល់នូវក្លិនក្រអូបដ៏ទាក់ទាញ។ នៅលើផ្ទៃនៃបបរមានសាច់ត្រីប្រឡាក់តូចៗមួយចំនួន រួមជាមួយនឹងឱសថ  ។ បបរ Am គឺជាម្ហូបដែលមានរសជាតិឆ្ងាញ់ និងមានជីវជាតិ។ បបរមានរសជាតិផ្អែម មានជាតិខ្លាញ់របស់អង្ករ សាច់ត្រីប្រហិត និងឱសថ។ នេះជាមុខម្ហូបដ៏ស័ក្តិសមសម្រាប់អ្នករាល់គ្នា ជាពិសេសអ្នកដែលទើបជាសះស្បើយពីជំងឺ ឬមនុស្សចាស់។
                    </p>

                    <div>
                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600" title="cháo ám" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/02b187e98fc24d03ab5fce9f094d32b9/embed"> </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="ទិដ្ឋភាពទូទៅ"
                           
            >

                <p>
                បបរ Am - និមិត្តសញ្ញាធ្វើម្ហូបរបស់ត្រាវិញ។ តាំងពីពេលដែលអ្នកបោះជើងក្នុងទឹកដីនេះ អ្នកនឹងមិនអាចជួយបានឡើយ ប៉ុន្តែសាកល្បងបបរមួយចានជាមុខម្ហូបពិសេសដែលមានឈ្មោះគួរឱ្យចាប់អារម្មណ៍។
                </p>
                <p>
                បបរ Am មិនមែនជាមុខម្ហូបចម្លែកនោះទេ ប៉ុន្តែវាមានប្រភពដើម និងរឿងរ៉ាវដាច់ដោយឡែកពី ឈ្មោះ។ ឈ្មោះ "បបរ Am " មិនដែលឈប់ចាប់អារម្មណ៍អ្នកដែលមកទីនេះជាលើកដំបូងទេ។ ដំបូងឡើយ វាជាបបរត្រីប្រហិត ប៉ុន្តែរឿងរ៉ាវដែលទាក់ទងគ្នាបានធ្វើឱ្យមានឈ្មោះនេះ។ នៅក្នុងទំនៀមទម្លាប់របស់តំបន់នេះ មុនពេលក្លាយជា{highlightText('កូនក្រមុំ')} ស្ត្រីម្នាក់ៗនឹងប្រឈមមុខនឹងបញ្ហាតែមួយគត់គឺការចម្អិនបបរត្រីងៀតមួយចានដ៏ឈ្ងុយឆ្ងាញ់។ ថ្វីត្បិតតែនេះមានលក្ខណៈសាមញ្ញទាក់ទងនឹងគ្រឿងផ្សំក៏ដោយ មិនមែនគ្រប់គ្នាសុទ្ធតែអាចយកឈ្នះលើបញ្ហាប្រឈមនេះពីម្តាយក្មេករបស់ពួកគេនោះទេ។ ដូច្នេះហើយបបរត្រីប្រហិតបានក្លាយជាការឈ្លក់វង្វេងរបស់កូនក្រមុំក្មេងៗ តាំងពីពេលនោះមកគេហៅថាបបរខ្មោច។
                </p>
                <p>
                ត្បិតតែវាមានដើមកំណើតតាំងពីសម័យបុរាណក៏ដោយ ប៉ុន្តែម្ហូបដ៏ឈ្ងុយឆ្ងាញ់នេះបានឆ្លងកាត់ដំណើរដ៏វែងឆ្ងាយ ដោយបានបង្ហាញខ្លួននៅផ្សារចូវថាញ់ក្នុងទសវត្សរ៍ទី 30 ។នៅពេលនោះ បបរខ្មៅគឺជាមុខម្ហូបអាហារពេលព្រឹកដ៏ពេញនិយមដែលលក់យ៉ាងទូលំទូលាយនៅតាម{highlightText('ផ្សារ')} និងដល់កុមារនៅតាមដងផ្លូវធំ។ ស្រុក។ ថ្វីត្បិតតែវិធីរៀបចំមិនស្មុគស្មាញក៏ដោយ ដើម្បីបង្កើតបបរមួយចានដ៏ឈ្ងុយឆ្ងាញ់ ចុងភៅត្រូវតែមានបទពិសោធន៍ក្នុងការជ្រើសរើសបាយ ត្រី និងប្រើប្រាស់គ្រឿងទេសឱ្យសមស្របដើម្បីបង្កើតរសជាតិតែមួយគត់ដែលមាននៅក្នុងបបរ។ អ្វីដែលសំខាន់បំផុតគឺជ្រើសរើសត្រីពស់ - គ្រឿងផ្សំសំខាន់។ ដើម្បីបានបបរត្រីងៀតឆ្ងាញ់ ត្រីកំពឹសត្រូវតែស្រស់ និងមានសាច់រឹងមាំ។ ប្រជាជនខេត្តត្រាវិញតែងតែចូលចិត្តប្រើ {renderTooltipText('"ត្រីផ្ទុកផ្នោរ"', 'ca-loc-dong')} ដើម្បីនាំមកនូវរសជាតិធម្មជាតិរបស់វា។ ទោះជាយ៉ាងណាក៏ដោយ ដោយសារតែធនធានត្រីកាន់តែខ្វះខាត ប្រជាជនបានជ្រើសរើស{highlightText('ត្រីចិញ្ចឹម')}ដែលធ្វើស្រែចំការជំនួសវិញ។ ក្រៅពីត្រី អង្ករឆ្ងាញ់ដែលប្រើក៏ជាធាតុមិនអាចខ្វះបានដែរ។ អង្ករដែលប្រើសម្រាប់ចម្អិនបបរ ជាទូទៅគឺអង្ករទាំងមូល វាមិនចាំបាច់អាំងដូចពេលចម្អិនបបរទេ ដើម្បីរក្សារសជាតិធម្មជាតិ និងក្លិនលក្ខណៈ។ ពេលបបរឆ្អិន វានឹងមានពណ៌សធម្មជាតិ និងទាក់ទាញធ្វើឱ្យអ្នកចងចាំរសជាតិនៃដីត្រាវិញជារៀងរហូត។
                </p>
                
            </FoodContent>    


            <FoodContent title="វិធីធ្វើបបរ Am ">
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
                                        <span>ជំហានទី 1: ធ្វើត្រី</span>
                                        <p>លាងត្រីរួចយកផ្នែកទាំងអស់ដែលនៅខាងក្នុងសាច់ត្រីមកលាងសម្អាតពោះវៀនរបស់ត្រី។ កាត់មាត់និងកន្ទុយរបស់ត្រី។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ស្ងោរត្រី</span>
                                        <p>ដាក់ឆ្នាំងទឹក។ ពេលរង់ចាំទឹកពុះ កាត់ខ្ញីជាច្រូត និងមឹកជាដុំៗល្មម ។ ពេលទឹកពុះ ដាក់ត្រីចូល។ ពេលត្រីឆ្អិន យកវាចេញ ទុកអោយត្រជាក់។ ត្រងសាច់ត្រី ពេលត្រីត្រជាក់។ បន្ទាប់មកបំពងខ្ទឹមបារាំងពណ៌ស្វាយរហូតដល់ប្រែពណ៌មាស រួចដាក់ត្រីចូល។ កូរថ្នមៗ ហើយកូររហូតទាល់តែត្រីរឹង។ បន្ថែមទឹកត្រី និងម្រេចបន្តិច ដើម្បីឱ្យសាច់ត្រីកាន់តែមានរសជាតិ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: ចម្អិនបបរ</span>
                                        <p>ដាក់ឆ្នាំងបបរហើយទុកចោលប្រហែល៣០នាទី ពេលបបរឡើងក្រាស់បន្តិចម្ដងៗដាក់មឹក និងបង្គាក្រៀមចូលឆ្នាំងដើម្បីបន្ថែមភាពផ្អែមដល់បបរ។ ប្រហែល 15-30 នាទី ពេលបបរឆ្អិន យើងរៀបចំបន្លែដែលអមមកជាមួយ ហើយដាក់បបរដាក់ក្នុងចានមួយ ដើម្បីរីករាយជាមួយនឹងសាច់ និងត្រីស្រស់ដែលទើបនឹងរៀបចំ។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/aQAG4UE-plY?list=PLO4xYQBA1oxU8Wh7CFDOoIq3broDVrOX3"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: Tra Vinh</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">របៀបបង្កើតបំរែបំរួល៖</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                បបរ ដែលជានិមិត្តរូបនៃម្ហូបត្រាវិញ មិនដែលឈប់នាំមកនូវភាពចម្រុះ និងការច្នៃប្រឌិតឡើយ។ បំរែបំរួលដិត និងចំណុចលេចធ្លោពិសេសសម្រាប់គ្រឿងផ្សំនីមួយៗ និងវិធីធ្វើម្ហូបនីមួយៗ បង្វែរបបរទៅជាពិធីបុណ្យនៃការបញ្ចូលគ្នារវាងប្រពៃណី និងគំនិតច្នៃប្រឌិត។ នៅក្នុងផែនទីធ្វើម្ហូបនេះ ត្រីពស់ដែលនាំមុខដោយរសជាតិតែមួយគត់របស់វា អាចត្រូវបានជំនួសដោយត្រីដូចជា {highlightText('ប្រា')}, {highlightText('ក្រពើ')} ឬ {highlightText('Hemibagrus')} ដើម្បីនាំនូវរសជាតិថ្មីជាមួយនឹងពណ៌ផ្សេងៗ។ ទឹកជ្រលក់ដែលបង្កើតភាពស៊ីសង្វាក់គ្នានៃមុខម្ហូបក៏មានភាពខុសគ្នាអាស្រ័យលើរបៀបដែលមនុស្សម្នាក់ៗប្រើ។ បបរមិនត្រូវបានកំណត់ដោយគ្រឿងផ្សំសំខាន់ៗទៀតទេ។ {highlightText('គ្រាប់ផ្លែទទឹម')} ជាមួយនឹងរសជាតិដ៏ឈ្ងុយឆ្ងាញ់ពិសេសរបស់វា កំពុងបង្កើតការច្នៃប្រឌិតដ៏គួរឱ្យចាប់អារម្មណ៍នៅក្នុងបបរ។ {highlightText('អង្ករដំទន់')} ឬ{highlightText('អង្ករសំរូប')} អាចផ្លាស់ប្តូរពណ៌ និងសមាសធាតុអាហារូបត្ថម្ភរបស់បបរ ដោយមិនកាត់បន្ថយតម្លៃរបស់វាឡើយ។ ចំពោះបរិមាណគ្រឿងផ្សំ មានអ្នកដែលបានកែលម្អមុខម្ហូបបបរ ដោយបន្ថែមគ្រឿងសមុទ្រ ដូចជា{highlightText('បង្គា')} {highlightText('មឹក')} ឬ{highlightText('ខ្យង')} បង្កើតបទពិសោធន៍ធ្វើម្ហូបដ៏អស្ចារ្យ។ ទីបំផុត មានអ្នកណាហ៊ានដើរចេញពីផ្ទះបាយបែបបុរាណ ដើម្បីចម្អិនបបរជាមួយ{highlightText('ឆ្នាំងបាយ')}។ នេះគឺជាការរួមផ្សំនៃភាពងាយស្រួលទំនើប និងរសជាតិបែបប្រពៃណី បង្កើតបានជាបបរចានតែមួយគត់ដែលសាកសមនឹងសម័យកាល។ បបរមិនគ្រាន់តែជាមុខម្ហូបប៉ុណ្ណោះទេ វាគឺជាដំណើរប្រកបដោយភាពច្នៃប្រឌិត ដែលមនុស្សគ្រប់គ្នាអាចបង្កើតរសជាតិផ្ទាល់ខ្លួន និងនិមិត្តសញ្ញាសម្រាប់ទឹកដីត្រាវិញ។
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

                    
            </FoodContent>


            <FoodContent title="រីករាយជាមួយផលិតផល">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    

                    <p>
                    ជាមួយនឹងម្ហូបត្រាវិញដ៏ឈ្ងុយឆ្ងាញ់នេះ មានវិធីជាច្រើនសម្រាប់អ្នកទទួលទានអាហារ។ អ្នកអាចញ៉ាំបបរធម្មតាដូចជាបបរបេះដូង បបរគ្រឿងសមុទ្រ... ឬអ្នកក៏អាចរៀនញ៉ាំតាមស្ទីលអ្នកស្រុក ដើម្បីទទួលអារម្មណ៍រសជាតិប្លែកនៃមុខម្ហូបនេះ។ ជាធម្មតា ប្រជាជនត្រាវិញនឹងលាយបបរ និងត្រីងៀតចូលគ្នា ហើយរីករាយជាមួយវាយ៉ាងរហ័ស និងឆ្ងាញ់។ ដើម្បីបន្សាបរសជាតិម្ហូប ប្រជាជននៅទីនេះនឹងទទួលទានបបរនេះជាមួ {highlightText('យបន្លែប្រមាត្រដី')} {highlightText('សណ្តែកបណ្តុះ')} {highlightText('ស្រយោងចេក')} និងស្លឹកខ្ទឹម ដូចជា ខ្ទឹមបារាំង ក្រូចឆ្មា... របស់សំខាន់ដែលធ្វើឱ្យបបរមានរសជាតិពិសេស។ បបរអ្នកចូលចិត្តយកទឹកជ្រលក់លាយជាមួយទឹកត្រី ក្រូចឆ្មា ម្ទេសជាដើម ច្របល់ឲ្យល្អ រួចជ្រលក់ត្រីគល់ភ្លៅ។ ភាពផ្អែមរបស់ត្រី និងរសជាតិប្រៃ និងហឹរនៃទឹកជ្រលក់បង្កើតបាននូវភាពឈ្ងុយឆ្ងាញ់ដែលតាមភាសាបស្ចិមប្រទេសគឺឆ្ងាញ់ {renderTooltipText('"het say"', 'het-say')}.
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ២០,០០០ដុង-៤៥,០០០ដុង។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            

            
        <Tooltip
            anchorSelect=".ca-loc-dong"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    ត្រី​កំពឹស គឺជា​ប្រភេទ​ត្រី​ទឹកសាប​ដែល​មាន​ជាទូទៅ​នៅតាម​តំបន់​ជនបទ និង​ទន្លេ។
                </div>
            }
        />
            
        <Tooltip
            anchorSelect=".het-say"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    អស្ចារ្យហួសថ្លែង។
                </div>
            }
        />

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHAOAMMAINKM
