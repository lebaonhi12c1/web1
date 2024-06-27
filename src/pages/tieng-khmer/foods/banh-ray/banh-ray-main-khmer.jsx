import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'រែងម្សៅ',
        image: 'https://buhkhkt.github.io/CHINH/r%E1%BB%95%20r%C3%A2y%20b%E1%BB%99t%20b%C3%A1nh%20r%C3%A2y.jpg'
    },
    {
        text: 'ស្លឹក​តើយ',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20d%E1%BB%A9a.jpg'
    },
    {
        text: 'វែក',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1i%20v%C3%A1.png'
    }, 
]

const nguyenlieu = [
    {
        text: 'ម្សៅអង្ករដំណើប',
        value: '២០០g',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%E1%BA%BFp.jpg'
    },
    {
        text: 'ទឹកស្លឹក តើយ',
        value: '១២០-១៥០ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20l%C3%A1%20d%E1%BB%A9a.webp'
    },
    {
        text: 'ខ្ទិះដូង',
        value: '១៥០g',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20n%E1%BA%A1o.jpg'
    },
    {
        text: 'សណ្តែកដីលីង',
        value: '៥០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'ស្ករស',
        value: '១០០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'ម្សៅដំឡូងឈើ',
        value: '១០g',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'វ៉ានី',
        value: '១បំពង់',
        image: 'https://buhkhkt.github.io/CHINH/%E1%BB%91ng%20vani.jpg'
    },
]



const thuongthucthanhpham = [
    {
        text: 'តែក្តៅៗ',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A0%20n%C3%B3ng.jpg'
    },
    
]

const BANHRAYMAINKM = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">នំលំអងចេក</h1>
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
                    src="https://www.youtube.com/embed/YdZa-OqWn7U?list=PLO4xYQBA1oxVtcQx91K4UbaY5yQiwcARE"
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
                    នំលំអងចេក​​ មានពីរប្រភេទផ្សេងគ្នា មួយប្រភេទគឺពណ៌សភ នេះជានំម្សៅធម្មតា ដោយមិនបន្ថែមទឹកស្លឹកតើយ ដើម្បីបង្កើតពណ៌ និងប្រភេទពណ៌បៃតងមួយទៀត ជានំលាយជាមួយនឹងទឹកស្លឹកតើយ ដើម្បីបង្កើត ពណ៌ និងក្លិនក្រអូប ដើម្បីធ្វើឱ្យនំកាន់តែឆ្ងាញ់។ នំនេះមានក្លិនក្រអូបស្រាល រសជាតិផ្អែម និងរសជាតិខ្លាញ់។ ចាន​នំ​មាន​ពណ៌​ចុះ​សម្រុង​គ្នា ទាក់​ភ្នែក។ នំគឺទន់រលោងនិងឆ្ងាញ់។ នេះជាអាហារសម្រន់ដ៏ពេញនិយមនៅត្រាវិញ។                  
                    </p>

                    <div>

                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"title="banh ray" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/d45505ad7c7748b986536cf8913bf002/embed"> </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="ការណែនាំទូទៅ"
                           
            >
                <p>
                នំលំអងចេក​​ជានំប្រពៃណីខ្មែរ វាមានវត្តមាននៅតាមបណ្តាខេត្ត-ក្រុងជាច្រើនដែលមានប្រជាជនខ្មែររស់នៅ។ ទោះជាយ៉ាងនេះក្តី បច្ចុប្បន្ននំលំអងចេក​​  ដែលនៅសេសសល់គឺកម្រមានណាស់ ហើយមានលក់តែនៅពីរបីកន្លែងក្នុងខេត្តត្រាវិញប៉ុណ្ណោះ។ ពី​មុន​នំ​នេះ​មាន​ឈ្មោះ​ថា "​នំលំអងចេក​​" (​ដូច​ខ្មែរ​ហៅ​វា​) ។ យូរៗទៅ ដោយផ្អែកលើការកែច្នៃ គេក៏ហៅវាថា នំលំអងចេក​​ ឬ banh dua ។ វាត្រូវបានគេហៅថា banh ray ដោយសារតែមនុស្សប្រើកន្ត្រកសំណាញ់ដើម្បី{highlightText('រែងម្សៅ')}ចូលទៅក្នុងខ្ទះ។ ចំពោះ​ឈ្មោះ banh dua​ ព្រោះ​ដើម្បី​ធ្វើ​នំ​នេះ​មាន​រសជាតិ​ឆ្ងាញ់ អង្ករ​ដំណើប​ត្រូវ​កិន​ជាមួយ​ស្លឹក​តើយ។ គ្រឿង​ផ្សំ​សម្រាប់​ការ​រៀបចំ​បែប​សាមញ្ញ​រួម​មាន អង្ករ​ដំណើប {highlightText('ស្លឹក​តើយ')}{' '}ខ្ទិះដូង សណ្ដែក​ដី និង​ស្ករ​គ្រាប់។ ឧបករណ៍សម្រាប់ធ្វើត្រូវការតែខ្ទះ អង្រែង {highlightText('វែក')} និងចង្ក្រាន។ គ្រឿងផ្សំ និងឧបករណ៍គឺសាមញ្ញ ប៉ុន្តែដើម្បីធ្វើបាននំឆ្ងាញ់ អ្នកត្រូវឆ្លងកាត់ដំណើរការរៀបចំយ៉ាងច្រើន និងល្អិតល្អន់។ នំលំអងចេកច្រើនតែត្រូវបានលក់ជាយកទៅ។
                    
                </p>
                <p>
                ប្រសិនបើអ្នកមានឱកាសមកត្រាវិញ ឬបណ្តាខេត្តនៅទិសខាងលិច អាហារសម្រន់ដ៏សាមញ្ញនេះគឺជាមុខម្ហូបដែលអ្នកទេសចរមិនគួររំលង ពីទីនោះអ្នកនឹងមានអារម្មណ៍ថាមានវប្បធម៌ធ្វើម្ហូបរបស់ប្រជាជនខ្មែរដ៏ស្មោះស្ម័គ្រ។ នំ​នេះ​ច្រើន​តែ​មាន​ក្នុង​ការ​សែន​ដូនតា​និង​ជីដូន​ជីតា​ក្នុង​ឱកាស​បុណ្យ​ទាន​របស់​ប្រជាពលរដ្ឋ​ខ្មែរ។
                </p>
            </FoodContent>    


            <FoodContent title="របៀបធ្វើនំលំអងចេក">
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
                                <h4 className="text-xl font-semibold">របៀបធ្វើ៖</h4>
                                <div className="flex flex-col gap-3 mt-6">
                                

                                    <div>
                                        <span>ជំហានទី 1: សណ្តែកដីដុត</span>
                                        <p>ដំបូង​យក​សណ្តែកដី ៥០ ក្រាម​ទៅ​ដុត​លើ​ភ្លើង​ល្មម ហើយ​បន្ថែម​អំបិល ១ ស្លាបព្រា​កាហ្វេ ដើម្បី​ដុត​សណ្តែកដី​ឱ្យ​លឿន​។ ពេល​សម្បក​សណ្តែកដី​មាន​ពណ៌​ត្នោត​ស្មើៗ​គ្នា យើង​ច្របាច់​យក​វា​ចេញ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ធ្វើស្នូល</span>
                                        <p>យក​ខ្ទិះដូង ១៥០ក្រាម លាយ​ជាមួយ​ស្ករស ១០០ក្រាម រួច​ទុកចោល ១៥នាទី។ បន្ទាប់​មក​យក​ខ្ទិះ​ដូង​ដែល​លាយ​ចូល​គ្នា​ចូល​ក្នុង​ខ្ទះ រួច​កូរ​ឱ្យ​សព្វ។ ពេល​ខ្ទិះ​ដូង​អស់​ហើយ បន្ថែម​វ៉ានី ​មួយ​បំពង់​ដើម្បី​ជួយ​បន្ថែម​ក្លិន​ឈ្ងុយ។ បន្ត​កូរ​រហូត​ដល់​ខ្ទិះ​ដូង​ឡើង​ក្រាស់ រួច​បន្ថែម​សណ្ដែក​ដី</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: លាយម្សៅ</span>
                                        <p>ដាក់ក្នុងម្សៅអង្ករដំណើប ចានមួយ ២០០g ម្សៅដំឡូងឈើ ១០g អំបិលបន្តិច ទឹកស្លឹកតើយ ១៥០ml ប្រោះទឹកបន្តិចៗ រួចច្របល់ចូលគ្នាឲ្យសព្វល្អ រួចច្របាច់ម្សៅឲ្យម៉ត់។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 4: ​រែងម្សៅហើយក្រឡុកខ្ទិះដូង</span>
                                        <p>​រែងម្សៅ រហូតដល់រលោង។ បន្ទាប់មក​បើក​ចង្ក្រាន​ក្តៅ ហើយ​រែង​ម្សៅ​ឱ្យ​ស្មើ​គ្នា​ដាក់​លើ​ខ្ទះ គ្រោប​ទុក​ប្រហែល​១​នាទី រួច​ដាក់​ម្សៅ​ចូល​ចំ
​កណ្តាល​នំ​។ បន្ទាប់មកចុចនំជា៤ជ្រុងហើយយើងបាននំលំអងចេកមួយហើយ។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/9CBac1bMYfY?list=PLO4xYQBA1oxVtcQx91K4UbaY5yQiwcARE"
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


            


            <FoodContent title="បរិភោគនំដែលជាផលិតផលបានសម្រេច">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    នំលំអងចេក - banh dua បន្ទាប់ពីហែកចេញគឺអាចបត់បែនបាន និងទន់ល្មើយ ពេលញ៉ាំមានក្លិនឈ្ងុយចេញពីអង្ករដំណើប លាយជាមួយនឹងខ្ទិះដូងផ្អែម ទាំងប្លែក និងឆ្ងាញ់ខ្លាំង។ ពេល​នំ​ឆ្អិន វា​មាន​ក្លិន​ឈ្ងុយ​ឆ្ងាញ់​ប្លែក​ពី​គេ​មិន​នឹក​ស្មាន​ដល់។ នៅពេលដែលអ្នកញ៉ាំវា អ្នកប្រាកដជាភ្ញាក់ផ្អើលជាមួយនឹងភាពរលោង និងទន់របស់នំដែលលាយជាមួយនឹងភាពផ្អែម និងខ្លាញ់នៃអង្ករដំណើប ដូង ឬសណ្ដែកដី។
                    </p>

                    <p>
                    ញ៉ាំកាន់តែច្រើន អ្នកកាន់តែចាប់អារម្មណ៍ ព្រោះតែរសជាតិប្លែក។ ដោយសារតែនំមានសំបកស្តើង ទើបអ្នកមិនធុញក្នុងការញ៉ាំវា វាពិតជាសាកសមសម្រាប់អ្នកញ៉ាំជាមួយ{highlightText('តែក្តៅៗ')} !
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖  </h3>
                <p>ចាប់ពី៥០០០​ដុង -​ ១០០០០ដុង។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BANHRAYMAINKM;
