import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'អង្ករដំណើបខ្ចី',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BA%A1t%20n%E1%BA%BFp%20non.jpg'
    },
    {
        text: 'អំបុកពិមួយប្រអប់',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BB%99p%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    {
        text: 'សែន',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%BAng%20tr%C4%83ng.webp'
    },
    {
        text: 'ផលិត',
        image: 'https://buhkhkt.github.io/CHINH/ng%C6%B0%E1%BB%9Di%20l%C3%A0m%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    
    
]

const nguyenlieu1 = [
    {
        text: 'អង្ករដំណើប',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20n%E1%BA%BFp%202.jpg'
    },
    
]

const nguyenlieu2 = [
    {
        text: 'អំបុក',
        value: '២០០g',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'ខ្ទិះដូង',
        value: 'បរិមាណគ្រប់គ្រាន់',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20n%E1%BA%A1o.jpg'
    },
    {
        text: 'ស្ករស',
        value: '១០០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
]

const nguyenlieu3 = [
    {
        text: 'អំបុក',
        value: '១kg',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'សណ្តែក:',
        value: '១៥០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'ទឹកខ្ទិះដូង',
        value: '៨០០ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'សណ្តែកដីលីង',
        value: '១០០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'ស្លឹកចេក',
        value: '៤-៥ ស្លឹក',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'ស្ករ អំបិល បំពង់វ៉ានីឡា...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },

    
]


const nguyenlieu4 = [
    {
        text: 'អំបុក',
        value: '១kg',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'ខ្ទិះដូង',
        value: '៤០០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'ទឹកខ្ទិះដូង',
        value: '៨០០ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'សណ្តែកដីលីង',
        value: '១០០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'ស្លឹកចេក',
        value: '៤-៥ ស្លឹក',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'ម្សៅដំឡូងឈើ',
        value: 'បរិមាណគ្រប់គ្រាន់',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'ស្ករ អំបិល បំពង់វ៉ានីឡា...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },

    
]


const baoquan = [
    {
        text: 'ស្លឹកយ៉ុងរៀង',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20dong%20ri%E1%BB%81ng.jpg'
    },
    {
        text: 'ស្លឹកឈូក',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20sen.jpg'
    },
    
]



const COMDEPMAINKM = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1, ...nguyenlieu2, ...nguyenlieu3, ...nguyenlieu4, ...baoquan];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">អំបុក</h1>
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
                    src="https://www.youtube.com/embed/7MHY1XsVd1M?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
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
                ត្រាវិញ ជាកន្លែងដែលមានជាតិសាសន៍ និងវប្បធម៌ចម្រុះ មិនត្រឹមតែមានជនជាតិ Kinh ប៉ុណ្ណោះទេ ប៉ុន្តែក៏ជាកន្លែងរស់នៅរបស់ជនជាតិចិន និងខ្មែរផងដែរ។ ដោយសារភាពចម្រុះជាតិសាសន៍ ម្ហូបនៅទីនេះបានក្លាយទៅជាភាពទាក់ទាញ និងប្លែកពីគេបំផុត។ ក្នុងចំណោមមុខម្ហូបពិសេសដ៏ល្បីល្បាញរបស់ត្រាវិញ អំបុកលេចធ្លោជានិមិត្តរូបនៃភាពចម្រុះ និងភាពសុខដុមរមនារវាងវប្បធម៌។
                </p>
                <p>
                អំបុកជាម្ហូបខ្មែរសុទ្ធពិសេស ឬហៅម្យ៉ាងទៀតថា «អូមបុក» ជាភាសាខ្មែរ។ អ្នកណាដែលមកត្រាវិញហើយមិនធ្លាប់បានស្គាល់រសជាតិឆ្ងាញ់របស់អង្ករបៃតង ឬមិនសាកនំអង្ករបៃតងគឺពិតជាខកខាន។ អំបុកត្រូវបានផលិតចេញពីគ្រាប់{highlightText('អង្ករដំណើបខ្ចី')} ប្រមូលផលទាន់ពេល ហើយបន្ទាប់មកឆ្លងកាត់ជំហាននៃការត្រាំ អាំង និងបុក ដើម្បីបង្កើតរសជាតិប្លែក និងមិនអាចបំភ្លេចបាន។ មនុស្សជាច្រើនពេលទៅលេងខេត្តត្រាវិញកុំភ្លេចទិញ{highlightText('អំបុកពិមួយប្រអប់')} ដើម្បីចែកជូនញាតិមិត្ត និងមិត្តភ័ក្តិ។
                </p>
                <p>
                ប៉ុន្តែអំបុក មិនមែនគ្រាន់តែជាមុខម្ហូបដ៏ឈ្ងុយឆ្ងាញ់នោះទេ វាថែមទាំងបង្កប់នូវតម្លៃខាងវិញ្ញាណ និងទំនៀមទម្លាប់វប្បធម៌របស់ជនជាតិខ្មែរផងដែរ។ ក្នុងឱកាសពិធីបុណ្យ អកអំបុក បណ្តែតប្រទីប សំពះព្រះខែអំបុកបានកេយក{highlightText('សែន')}ព្រះខែ។ ពិធីបុណ្យនេះធ្វើឡើងនៅថ្ងៃពេញបូណ៌មី ខែតុលា ជារៀងរាល់ឆ្នាំ ដើម្បីឧទ្ទិសកុសលផលបុណ្យដល់ព្រះច័ន្ទ ដែលនាំមកនូវភ្លៀង និងខ្យល់បក់មកជួយច្រូតកាត់បានផលល្អ និងបួងសួងឱ្យអាកាសធាតុអំណោយផលនៅឆ្នាំក្រោយ។ អំបុកគឺជារបស់មួយដែលមិនអាចខ្វះបានក្នុងពិធីបុណ្យនេះ ហើយវាបង្ហាញពីការគោរព និងកិត្តិយសចំពោះធម្មជាតិ និងកសិកម្ម។
                </p>
                <p>
                    Tពីមុខម្ហូបដែលមានអត្ថន័យខាងវិញ្ញាណបង្កប់ដោយវប្បធម៌របស់ជនជាតិខ្មែរភាគខាងត្បូង អង្ករបៃតងបានក្លាយទៅជាមុខម្ហូបពិសេសដ៏ល្បីល្បាញរបស់ត្រាវិញ ដែលទាក់ទាញភ្ញៀវទេសចរទាំងអស់នៅពេលពួកគេមកទីនេះ។ ភាពល្អិតល្អន់ ឧស្សាហ៍ព្យាយាម និងការខិតខំរបស់ប្រជាជនខ្មែរក្នុងដំណើរការ{highlightText('ផលិត')}អំបុកបង្ហាញពីស្មារតីធ្វើការ និងការអត់ធ្មត់របស់ពួកគេ។ សព្វថ្ងៃនេះ អំបុកបានក្លាយជានិមិត្តរូបរបស់ត្រាវិញ ដែលមនុស្សជាច្រើនបានទិញទុកជាអំណោយ ឬដើម្បីរីករាយ។ មុខម្ហូបនេះបានក្លាយទៅជាផ្នែកមួយដ៏សំខាន់នៃវប្បធម៌ និងសេដ្ឋកិច្ចរបស់ត្រាវិញ ដែលប្រជាជនក្នុង និងក្រៅប្រទេសស្គាល់ និងស្រឡាញ់ដោយបង្ហាញពីភាពចម្រុះ និងប្លែកនៃមុខម្ហូបវៀតណាម។
                </p>
            </FoodContent>    


            <FoodContent title="វិធីធ្វើអំបុក">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">វិធីបុរាណ៖</h4>

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
                                        <span>ជំហានទី 1: លីងអង្ករដំណើប</span>
                                        <p>ដាក់អង្ករដំណើបចូលឆ្នាំងហើយដុតលើភ្លើងតិចៗ កូរឱ្យសព្វរហូតដល់អង្ករដំណើបមានពណ៌មាសពណ៌លឿងបន្តិចខាងក្រៅមានក្លិនក្រអូប។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 2: បកសំបកហើយបុកអំបុកយកសំបកចេញ</span>
                                        <p>ដាក់អង្ករដំណើបបន្ទាប់ពីអាំងចូលទៅក្នុងម៉ាស៊ីនក្រឡុកដើម្បីបំបែកស្បែកស្អិត។ បន្ទាប់យើងដាក់ផ្នែកស្អិតតាមរយៈសារពត៌មាន។ ដូច្នេះហើយ យើងបានបញ្ចប់នូវអង្ករសំប៉ែតដ៏ឈ្ងុយឆ្ងាញ់ ជាមួយនឹងក្លិននៃអង្ករដំណើបថ្មី។</p>
                                    </div>


                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/4vSxy12CyUw?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                   

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី YouTube Channel: THVL Tong Hop</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">អំបុកលាយជាមួយដូង៖</h4>
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
                                       
                                        <p>យើងដាក់អំបុក ២០០g រួមជាមួយនឹងខ្ទិះដូង និងស្ករសដាក់ក្នុងចានមួយ។ បន្ទាប់មកយើងលាយល្បាយឱ្យស្មើគ្នា។ បន្ទាប់ពីលាយរួចទុកចោលប្រហែល១ម៉ោងដើម្បីកុំឱ្យប្រឡាក់ប្រឡាក់។ ដូច្នេះយើងមានចំណែកដ៏គួរឱ្យទាក់ទាញនៃអំបុកលាយជាមួយដូង។</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/eUUsh3KJVpE?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: An Nhien Vlogs</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">នំអន្សមជ្រូកស្នូលសណ្តែក៖</h4>
                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu3.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>យើងយកសណ្តែកបៃតងដែលកែច្នៃរួចចំនួន ១៥០ g មកលាងសម្អាតឱ្យស្អាត។ រែងដុំស្រូវសំប៉ែតមើលថាខូចឬខ្មៅហើយបោះចោល។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 2: ធ្វើស្នូល</span>
                                        <p>យើងដាក់សណ្តែកបៃតងដែលបានកែច្នៃរួចក្នុងឆ្នាំងដើម្បីចម្អិន យើងចាក់ទឹកចូលឆ្នាំងដើម្បីគ្របវាបន្តិច។ ពេលសណ្តែកពុះហើយយកពពុះចេញដើម្បីឱ្យការបំពេញកាន់តែច្បាស់។ យើងបន្តចម្អិនរហូតដល់ទឹកស្ងួត ហើយស្រូបសណ្តែកទាំងអស់។ បន្ទាប់ពីចម្អិនសូមវាយសណ្តែករហូតដល់រលោង។ បន្ទាប់មកដាក់សណ្តែកបាយចូលក្នុងខ្ទះជាមួយស្ករ៣ស្លាបព្រាបាយ និងអំបិលបន្តិច រួចច្របល់ចូលគ្នារហូតទាល់តែលាយចូលគ្នា។ បន្ទាប់មកបន្ថែមទឹកដោះគោដូង៣ស្លាបព្រាបាយរហូតដល់ទឹកស្ងួត។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 3: ធ្វើស្នូលឱ្យមូល</span>
                                        <p>យើងរមៀលការបំពេញទៅជាដំមូល។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 4: ធ្វើគែមនំ</span>
                                        <p>យើងដាក់ខ្ទិះដូងចូលឆ្នាំងជាមួយអំបិលបន្តិច និងស្ករស ២ស្លាបព្រា  ។ យើងចំអិនរហូតទាល់តែស្ករនិងទឹកឡើងកំដៅនិងរលាយ។ បន្ទាប់មកយើងប្រោះខ្ទិះដូងឱ្យស្មើគ្នាចូលទៅក្នុងដុំអង្ករសំប៉ែត រួចច្របល់ចូលគ្នាឱ្យសព្វទើបម្សៅអង្ករពណ៌បៃតងសំប៉ែតរីកស្មើ។ យើងទុកវាចោលមួយសន្ទុះ ដើម្បីឱ្យទឹកត្រាំចូល បន្ទាប់មកយើងច្របាច់គ្រាប់ធញ្ញជាតិឱ្យស្មើៗគ្នា ដើម្បីអោយវាកាន់តែងាយ   ស្រួល។ ពេលដុំសាច់ទន់ហើយលាយចូលជាដុំល្មមហើយ។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 5: វេច</span>
                                        <p>យើងយកនំខេកមួយមកសំប៉ែតរួចដាក់បំពេញក្នុងរុំវា ហើយរមៀលវាជាបាល់។ បន្ទាប់យើងរមៀលនំរហូតដល់វាវែង។ យើងយកស្លឹកចេកមួយមករមៀលឡើងលើនំរួចបត់វាជាបួនជ្រុង ហើយធានាវាដោយក្រណាត់យឺត។ បន្ទាប់យើងប្រើខ្សែដើម្បីចងនំ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 6: ចំហុយនំ</span>
                                        <p>យើងគ្រាន់តែចំហុយនំរយៈពេល ១៥នាទីមុនពេលយើងអាចយកវាចេញហើយរីករាយ។</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/O2Yrt7IBFoM?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: ALO TRA VINH</small>
                                    </div>
                                </div>



                                <h4 className="text-xl font-semibold">នំអន្សមជ្រូកស្នូលខ្ទិះដូង៖</h4>
                                <div>
                                    <span className="underline">គ្រឿងផ្សំ៖ </span>

                                    <ul>
                                        {nguyenlieu4.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">ជំហាន៖</span>

                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>រែងដុំស្រូវអំបុកមើលថាខូចឬខ្មៅហើយបោះចោល។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 2: ធ្វើស្នូល</span>
                                        <p>យើងដាក់ដូងចូលក្នុងខ្ទះជាមួយស្ករ 1 ពែង និងអំបិលបន្តិច។ បន្ទាប់មកទៀតយើងលាយឱ្យសព្វដើម្បីឱ្យស្ករត្រាំចូលក្នុងដូង។ យើងយកខ្ទិះដូងមកលាយទុកឲ្យខ្ទិះដូងស្ងួត។ នៅពេលដែលការបំពេញគឺស្ងួតបន្តិចបន្ថែមម្សៅ tapioca លាយជាមួយទឹកដើម្បីបង្កើតល្បាយរលូន។ ទន្ទឹមនឹងនោះ បន្ថែមសណ្តែកបៃតងបន្តិច សណ្តែកដីលីង និងវ៉ានីឡាមួយបំពង់។ ចុងក្រោយ យើងលាយឱ្យសព្វល្អដើម្បីឱ្យគ្រឿងផ្សំលាយចូលគ្នា ហើយយើងបានបំពេញខ្ទិះដូង។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 3: ធ្វើស្នូលឱ្យមូល</span>
                                        <p>យើងរមៀលស្នូលឱ្យមូល។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 4: ធ្វើគែមនំ</span>
                                        <p>យើងដាក់ខ្ទិះដូងចូលឆ្នាំងជាមួយអំបិលបន្តិច និងស្ករស ២ស្លាបព្រាបាយ។ យើងចំអិនរហូតទាល់តែស្ករនិងទឹកឡើងកំដៅនិងរលាយ។ បន្ទាប់មកយើងប្រោះខ្ទិះដូងឱ្យស្មើគ្នាចូលទៅក្នុងដុំអង្ករសំប៉ែត រួចច្របល់ចូលគ្នាឱ្យសព្វទើបម្សៅអង្ករពណ៌បៃតងសំប៉ែតរីកស្មើ។ យើងទុកវាចោលមួយសន្ទុះ ដើម្បីឱ្យទឹកស្រូបចូល បន្ទាប់មកយើងច្របាច់កឱ្យស្មើៗគ្នា ដើម្បីអោយវាកាន់តែងាយស្រួល។ ពេលដុំសាច់ទន់ហើយលាយចូលជាដុំល្មមហើយ។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 5: វេចនំ</span>
                                        <p>យើងយកនំខេកមួយមកសំប៉ែតរួចដាក់បំពេញក្នុងរុំវា ហើយរមៀលវាជាបាល់។ បន្ទាប់យើងរមៀលនំរហូតដល់វាវែង។ យើងយកស្លឹកចេកមួយមករមៀលឡើងលើនំរួចបត់វាជាបួនជ្រុង ហើយធានាវាដោយក្រណាត់យឺត។ បន្ទាប់យើងប្រើខ្សែដើម្បីចងនំ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 6: ចំហុយនំ</span>
                                        <p>យើងគ្រាន់តែចំហុយនំរយៈពេល ១៥ នាទីមុនពេលយើងអាចយកវាចេញហើយញ៉ាំបាន។</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/r5Zrz1ZKCWQ?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: ALO TRA VINH</small>
                                    </div>
                                </div>

                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    នៅពេលអ្នកទៅដល់ត្រាវិញ អ្នកមិនអាចខកខានឱកាសដើម្បីរីករាយជាមួយអាហារពិសេសក្នុងស្រុកដ៏ល្បីល្បាញមួយនេះគឺអង្ករបៃតង។ រសជាតិប្លែកនៃអង្ករសំប៉ែត ផ្សំជាមួយស្ករ និងដូង បង្កើតបទពិសោធន៍ធ្វើម្ហូបពិសេស។ ការទទួលទានអង្ករសំប៉ែតលាយជាមួយដូង គឺជាបទពិសោធន៍ដ៏អស្ចារ្យនៃរសជាតិប្រពៃណី និងក្លិនក្រអូបពិសេស។ នៅពេលអ្នកបើកប្រអប់អង្ករពណ៌បៃតង ក្លិនឈ្ងុយនៃអង្ករបៃតង លាយជាមួយនឹងរសជាតិផ្អែមរបស់ទឹកដោះគោដូង ធ្វើឲ្យវាមិនអាចទ្រាំទ្របាន។ អង្ករដំណើបមានរាងសំប៉ែត គ្រាប់តូចៗនីមួយៗមានសភាពទន់រលោង រលាយក្នុងមាត់ ហើយបង្កើតបានជាការរួមបញ្ចូលគ្នាដ៏ល្អឥតខ្ចោះជាមួយនឹងក្លិនឈ្ងុយឆ្ងាញ់ និងរសជាតិនៃដូងស្រស់។
                    </p>

                    <p>
                    នំអន្សមជ្រូកគឺជាម្ហូបប្រពៃណីរបស់វៀតណាម ហើយនៅ Tra Vinh នំអន្សមជ្រូកគឺជាបំរែបំរួលតែមួយគត់។ នំនេះត្រូវបានរុំដោយស្លឹកចេក ជាមួយនឹងស្រទាប់អង្ករសំប៉ែតដ៏ឈ្ងុយឆ្ងាញ់នៅខាងក្នុង ធ្វើឱ្យមនុស្សចូលចិត្តរសជាតិរបស់ពួកគេ។
                    </p>
                    <p>
                    អង្ករដំណើបជាមួយអង្ករបៃតង គឺជាមុខម្ហូបដ៏ពេញនិយមមួយនៅត្រាវិញ។ អង្ករដំណើបត្រូវបានចម្អិនពីអង្ករដំណើប ដូង ស្ករ និងទឹកដូងបន្តិច បង្កើតបានជាម្ហូបពិសេសមួយដែលមានរសជាតិសម្បូរបែប និងមានជាតិខាញ់។ ឬមានមុខម្ហូបជាច្រើនទៀតដែលធ្វើពីអង្ករសំប៉ែតដែលមានក្លិនឈ្ងុយឆ្ងាញ់ និងប្លែកពីគេ។
                    </p>

                    <p>
                    ការញ៉ាំអំបុកជាមួយនិងមុខម្ហូបរបស់វាមិនត្រឹមតែទទួលបានរសជាតិឆ្ងាញ់ប៉ុណ្ណោះទេ ថែមទាំងជាមធ្យោបាយសម្រាប់អ្នកដើម្បីស្វែងយល់ និងគោរពវប្បធម៌ ប្រពៃណី និងភាពច្នៃប្រឌិតរបស់ប្រជាជនខេត្តត្រាវិញផងដែរ។ កុំខកខានឱកាសដើម្បីចាប់ផ្តើមដំណើរធ្វើម្ហូបដ៏ពិសេសនេះ នៅពេលអ្នកទៅលេងទឹកដីនេះ។
                    </p>                        
                </div>
            </FoodContent>


            <FoodContent title="រក្សា">

                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20b%E1%BA%A3o%20qu%E1%BA%A3n.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                    ជាទូទៅ អំបុកគួររក្សាទុកក្នុងកន្លែងស្ងួត ត្រជាក់ ហើយបែងចែកជាប្រភេទដាច់ដោយឡែក។ កុំទុកអង្ករស្រស់ច្រើនពេកនៅសីតុណ្ហភាពបន្ទប់ព្រោះវានឹងខូចយ៉ាងឆាប់រហ័ស។ ជាក់ស្ដែង មានវិធីរក្សាទុកអង្ករបៃតងដូចខាងក្រោម៖
                    </p>
                    <div>
                        <p><b>សម្រាប់អំបុកស្រស់ប្រើពេលថ្ងៃ៖</b></p>
                        <p>
                        ដើម្បីរក្សាអំបុក ស្រស់ឱ្យនៅមានរស់ជាតិឆ្ងាញ់ និងទន់ល្មើយ វិធីល្អបំផុតគឺការរុំអង្ករបៃតងក្នុង{highlightText('ស្លឹកយ៉ុងរៀង')} ឬ{highlightText('ស្លឹកឈូក')} ដែលអ្នកលក់រុំឱ្យអ្នក ពេលទិញមកជាមួយវិធីនេះ អង្ករបៃតងនឹងមិនស្ងួតឡើយ។ ចេញ ប៉ុន្តែក៏នឹងបង្កើនក្លិនស្លឹកឈូកដែលលាយក្នុងអំបុក ។
                        </p>
                        <p>
                        ទោះជាយ៉ាងណាក៏ដោយ ដោយសារតែវាជាអង្ករបៃតងស្រស់ យកល្អគួរតែប្រើវាក្នុងថ្ងៃតែមួយ ហើយមិនត្រូវទុកវាចោលពេញមួយយប់ឡើយ។ អ្នកគួរតែប្រើអង្ករបៃតងក្នុងរយៈពេល ៦ ម៉ោង ប្រសិនបើអ្នកទុកវានៅសីតុណ្ហភាពបន្ទប់ក្នុងរដូវក្តៅ ឬដើមរដូវស្លឹកឈើជ្រុះ ព្រោះប្រសិនបើអ្នកទុកវាចោលយូរ វានឹងខូចយ៉ាងឆាប់រហ័សដោយសារសីតុណ្ហភាពខ្ពស់។
                        </p>
                        <p>
                        ប្រសិនបើកន្លែងដែលអ្នកទុកអង្ករបៃតងនោះ ស្ថិតក្នុងកន្លែងដែលមានម៉ាស៊ីនត្រជាក់ ធ្វើឱ្យអង្ករបៃតងស្ងួតត្រូវលាងដៃឱ្យសើមដោយទឹកចម្រោះ រួចលាយអង្ករបៃតងឱ្យម៉ត់ រួចរុំស្លឹកឈូកជាការស្រេច។ ពីមុនអាចប្រើម្តងទៀត។
                        </p>
                    </div>
                    <div>
                        <p><b>រក្សាទុកអំបុកក្នុងទូទឹកកក៖</b></p>
                        <p>
                        ប្រសិនបើអ្នកចង់រក្សាទុកអង្ករបៃតងក្នុងទូទឹកកកសម្រាប់ប្រើប្រាស់បានយូរចាប់ពី៦ខែដល់១ឆ្នាំ ត្រូវដាក់អង្ករបៃតងស្រស់ក្នុងថង់ប្លាស្ទិក ឬប្រអប់ផ្លាស្ទិក ហើយដាក់ក្នុងទូរបង្កក។
                        </p>
                        <p>
                        នៅពេលដែលអ្នកត្រូវការប្រើដុំគីស អ្នកគ្រាន់តែត្រូវយកបរិមាណដែលអ្នកត្រូវការប្រើ បាចវាឱ្យស្មើៗគ្នានៅលើថាស បន្ទាប់មកកំដៅវានៅពីមុខកង្ហារដើម្បីកកមុនពេលអ្នកអាចប្រើវាបាន។
                        </p>
                    </div>                        
                                           
                </div>
                
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                    <p>ចាប់ពី ២៥០០០ ដុង-៣៥០០០ ដុង/៥០០g។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>



            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default COMDEPMAINKM
