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
        text: 'ក្តាមសមុទ្រ',
        image: 'https://buhkhkt.github.io/CHINH/cua%20bi%E1%BB%83n.jpg'
    },
    {
        text: 'Ba Khia',
        image: 'https://buhkhkt.github.io/CHINH/ba%20kh%C3%ADa.jpg'
    },
    {
        text: 'សោកសៅ។',
        image: 'https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20bu%E1%BB%93n.webp'
    },
    {
        text: 'ខាញ់នៃ Chu U',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1ch%20ch%C3%B9%20%E1%BB%A5.webp'
    },
    {
        text: 'ទឹកអំពិល',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20s%E1%BB%91t%20me.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'Chu U',
        value: '៥០០g',
        image: 'https://buhkhkt.github.io/CHINH/con%20ch%C3%B9%20%E1%BB%A5.webp'
    },
    {
        text: 'ទឹកអំពិលទុំ',
        value: 'កន្លះចាន',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20me.jpg'
    },
    {
        text: 'ខ្ទឹមមើម',
        value: 'មើម១',
        image: 'https://buhkhkt.github.io/CHINH/t%E1%BB%8Fi.jpg'
    },
    {
        text: 'គ្រឿងទេស៖',
        value: 'ប្រេងឆា ស្ករ ទឹកត្រី...',
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

const CHUUMAINKM = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHU U លីងអម្ពិល</h1>
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
                    src="https://www.youtube.com/embed/tMVVeQgxTwI?list=PLO4xYQBA1oxU0vKk9WkupETKeffWYbgqm"
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
                Chu U លីងអំពិលអាចមានឈ្មោះចម្លែក ប៉ុន្តែមានមនុស្សជាច្រើនធ្លាប់មានឱកាសរីករាយជាមួយមុខម្ហូបដ៏ពិសេសនេះ។ នេះជាអាថ៌កំបាំងធ្វើម្ហូបដ៏ពិសេសរបស់ប្រជាជនខេត្តត្រាវិញ ដែលជាមុខម្ហូបពិសេសដែលអ្នកប្រាកដជាត្រូវសាកល្បងម្តងនៅពេលដែលអ្នកមកទីនេះ។ ត្រាវិញ ជាមួយនឹងភាពស្រស់ស្អាតនៃឆ្នេរសមុទ្រ និងរសជាតិពិសេសប្លែកពីគេ គឺជាគោលដៅដ៏គួរឱ្យចាប់អារម្មណ៍ និងទាក់ទាញសម្រាប់ភ្ញៀវទេសចរទាំងអស់។ នៅក្នុងបញ្ជីមុខម្ហូបឆ្ងាញ់ៗពីសមុទ្រ មិនអាចយល់ទេដែលមិននិយាយពី{highlightText('ក្តាមសមុទ្រ')} {highlightText('Ba Khia')} និង Chu U។  
                </p>
                <p>
                Chu U លេចធ្លោជាមួយនឹងរសជាតិប្លែក និងទាក់ទាញរបស់វា។ វាពិបាកក្នុងការប្រាប់ពីភាពខុសគ្នារវាង Chu U និង Ba Khia ដែលទាំងពីរប្រភេទនេះជាប្រភេទ {renderTooltipText('crustaceans', 'giap-xac')}។ ជាមួយនឹងសំបករដុប និងរាងកាយដ៏រឹងមាំ។ ចំណុចដែលគួរឲ្យកត់សម្គាល់គឺទឹកមុខរបស់ Chu U ដែលតែងតែពោរពេញទៅដោយភាព{highlightText('សោកសៅ។')} ប្រហែលជាវាជាលក្ខណៈពិសេសនេះហើយដែលបានជំរុញមនុស្សឱ្យដាក់ឈ្មោះដ៏ពិសេសមួយនេះ។ Chu U ច្រើនតែរស់នៅក្នុងតំបន់នោះ។ {renderTooltipText('ទឹកប្រហុក', 'nuoc-lo')} ព្រៃឈើឆ្នេរសមុទ្រ ប៉ុន្តែបរិមាណដ៏ធំបំផុតត្រូវបានរកឃើញនៅក្នុងទឹកនៃត្រាវិញ ហើយពីពួកគេប្រជាជនបានបង្កើតមុខម្ហូបឆ្ងាញ់ៗជាច្រើន។ យ៉ាងណាមិញ មានមុខម្ហូបសំខាន់ៗចំនួនបួនគឺ អាំង ស្ងោរ ចំហុយជាមួយស្រាបៀរ និងអំពិលអាំង។ ក្នុងចំណោមនោះ អំពិលឈូយូត្រូវបានគេចាត់ទុកថាជាមុខម្ហូបដែលមានលក្ខណៈពិសេសបំផុត និងមានរសជាតិគួរឱ្យទាក់ទាញបំផុត។
                </p>
                <p>
                ខែ៤ តាមច័ន្ទគតិ ជាពេលវេលាដ៏ស័ក្តិសមក្នុងការញ៉ាំបង្គាអម្ពិល ពេលដែលវាស្ថិតក្នុងដំណាក់កាល{renderTooltipText('សក', 'thoat-xac')} សាច់គឺឆ្ងាញ់ ទន់ល្មើយ ទាក់ទាញដល់កំពូល។ នេះក៏ជាឱកាសមួយដើម្បីទទួលបានរសជាតិដ៏អស្ចារ្យនៃសមុទ្រ និងអាហារស្រស់ៗនៃទឹកដីនេះ។ ការបង្កើតមុខម្ហូបដ៏ឈ្ងុយឆ្ងាញ់ Chu U អាំងជាមួយអម្ពិល ទាមទារការខិតខំប្រឹងប្រែង និងភាពល្អិតល្អន់ពីចុងភៅ។ ក្លិនឈ្ងុយឆ្ងាញ់ប្លែកចេញពីសាច់ទន់ៗ រសជាតិស្រួយនៃសំបក និងភាព{highlightText('ខាញ់នៃ Chu U')} ដែលលាយបញ្ចូលគ្នាយ៉ាងល្អឥតខ្ចោះជាមួយនឹងរសផ្អែម និងជូរនៃ{highlightText('ទឹកអំពិល')}។ ទាំងអស់បង្កើតបទពិសោធន៍ធ្វើម្ហូបដ៏អស្ចារ្យដែលអ្នកទទួលទានអាហារមិនអាចទប់ទល់បាន។
                </p>
                <p>
                Tra Vinh មិនត្រឹមតែនាំមកនូវបទពិសោធន៍ទេសចរណ៍ដ៏គួរឱ្យរំភើប និងវេទមន្តប៉ុណ្ណោះទេ ប៉ុន្តែក៏ជាកន្លែងដែលអ្នកមានឱកាសរីករាយជាមួយអាហារឆ្ងាញ់ៗប្លែកៗផងដែរ។ និងអំពិលជ្រលក់រសជាតិដ៏អស្ចារ្យ រួមចំណែកកសាង «យីហោមាស» ទឹកដីត្រាវិញក្នុងដួងចិត្តអ្នកទេសចរគ្រប់រូប។
                </p>
            </FoodContent>    


            <FoodContent title="របៀបធ្វើ Chu U អំពិល">
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
                                        <p>ត្រាំបង្គាក្នុងទឹកទឹកកក។ បន្ទាប់មកទៀត យើងបំបែកផ្នែកនៃ apricot ចេញ រួចយកឥដ្ឋ Chu U មកដាក់ក្នុងចាន ហើយក្នុងពេលតែមួយកាត់ចុងរបស់ Chu U ចេញ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ធ្វើទឹកអំពិលទុំ</span>
                                        <p>យើងចាក់ទឹកក្តៅប្រហែល ១០០ml ចូលទៅក្នុងចាន បន្ទាប់មកត្រាំអំពិលរហូតដល់វារលាយក្នុងទឹកស្មើៗគ្នា។ ដាក់ក្នុងចានមួយ ស្ករស ២ស្លាបព្រាបាយ ទឹកត្រី ២ស្លាបព្រាបាយ រួចច្របល់ចូលគ្នារហូតទាល់តែស្ករ និងទឹកត្រីរលាយ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: ចៀន Chu U</span>
                                        <p>យើងយកខ្ទះដាក់ប្រេងឆាចូលក្នុងខ្ទះ។ រង់ចាំរហូតដល់ប្រេងក្តៅ បន្ថែមពន្លកឬស្សីចូលឆារហូតដល់ពណ៌មាស រួចបត់ចូលចាន។</p>
                                    </div>
                                    
                                    <div>
                                        <span>ជំហានទី 4: លីងអំពិលនិង Chu U</span>
                                        <p>យើងដាក់ប្រេងឆាបន្តិចក្នុងឆ្នាំង ហើយខ្ទឹមសចិញ្ច្រាំរួចដាក់ខ្ទឹមបំពងរហូតមានក្លិនឈ្ងុយ។ បន្ទាប់យើងបន្ថែមផ្នែកនៃឥដ្ឋដើមដែលយើងទទួលបាននៅដើម។ នៅពេលដែលយើងឃើញល្បាយចាប់ផ្តើមឆ្អិន បន្ថែមទឹកអម្ពិល។ ជាចុងក្រោយ យើងគ្រាន់តែដាក់ជីវ៉ាន់ស៊ុយចូល ហើយកូរឱ្យសព្វ ដើម្បីឱ្យឈូកស្រូបយកគ្រឿងទេស ហើយយើងបានបញ្ចប់នូវអំពិលទុំដ៏ឈ្ងុយឆ្ងាញ់។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/Yy428yvYEHg?list=PLO4xYQBA1oxU0vKk9WkupETKeffWYbgqm"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: Dang Huyen</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            

            <FoodContent title="សូមរីករាយជាមួយផលិតផលដែលបានបញ្ចប់">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.png" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    បង្គាអម្ពិលអាំងមួយចានដែលគ្រប់យ៉ាងមើលថែយ៉ាងល្អិតល្អន់ ស្ថិតនៅចំពោះមុខភ្នែកដោយពណ៌មាសចែងចាំង។ នេះជាអាហារដ៏ប្លែកមួយដ៏ទាក់ទាញពីក្លិនឈ្ងុយឈ្ងប់រហូតដល់រសជាតិដ៏កំពូល។ ក្លិនក្រអូបស្រស់ និងពិសេសពីសាច់នីមួយៗ ស្អិតជាប់គ្នារវាងតំបន់តូចៗ បង្កើតបានជាការរួមបញ្ចូលគ្នាដ៏ឈ្ងុយឆ្ងាញ់ជាមួយនឹងរសជាតិស្រួយនៃសំបក។
                    </p>

                    <p>
                    ភាពស៊ីសង្វាក់ ការលាយបញ្ចូលគ្នានូវរសជាតិផ្អែម និងជូរនៃទឹកអំពិលទុំ និងសាច់ក្រក បង្កើតបទពិសោធន៍រសជាតិប្លែក។ ក្លិនខ្ទឹម និងខ្ទឹមបារាំង ស្រាល និងសម្បូរបែប បំពេញបន្ថែមយ៉ាងល្អឥតខ្ចោះនូវពិធីបុណ្យដ៏ឆ្ងាញ់នេះ។
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ១០០០០០-១៥០០០០ ដុង/ចាន។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            
        <Tooltip
            anchorSelect=".giap-xac"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    ពួក​វា​ជា​សត្វ​មួយ​ក្រុម​ដែល​មាន​សម្បុរ​ខាង​ក្រៅ​រឹង​មាំ (ហៅ​ថា​គ្រឿង​សឹក) និង​ជើង​ជា​ច្រើន។
                </div>
            }
        />
            
        <Tooltip
            anchorSelect=".nuoc-lo"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    វាគឺជាល្បាយនៃទឹកអំបិល និងទឹកសាប។
                </div>
            }
        />


        <Tooltip
            anchorSelect=".thoat-xac"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    នេះ​ជា​ដំណាក់​កាល​ដែល​សត្វ​ស្រក់​សំបក​ខាង​ក្រៅ​របស់​វា​ដើម្បី​លូតលាស់ និង​បង្កើន​ទំហំ។
                </div>
            }
        />




            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHUUMAINKM
