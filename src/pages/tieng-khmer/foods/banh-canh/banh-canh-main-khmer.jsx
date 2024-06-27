import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'ទីក្រុងហូជីមិញ',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20tphcm.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'ជើងជ្រូក',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%B2%20heo.webp'
    },
    {
        text: 'ឆ្អឹង',
        image: 'https://buhkhkt.github.io/CHINH/x%C6%B0%C6%A1ng%20%E1%BB%91ng%20heo.webp'
    },
    {
        text: 'Banh canh',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BB%A3i%20b%C3%A1nh%20canh.webp'
    },
    {
        text: 'ម្សៅអង្ករ',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20g%E1%BA%A1o.jpg'
    },
    {
        text: 'ងគ្រឿងក្នុងរបស់ជ្រូក',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99%20l%C3%B2ng%20heo.jpg'
    },
    {
        text: 'គ្រឿង',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
   
]

const thuongthuc = [
    {
        text: 'ទឹកត្រីសុទ្ធមួយចាន',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm+%E1%BB%9Bt.jpg'
    },
    
   
]




const BANHCANHMAINKM = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu, ...thuongthuc];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BANH CANH BEN CO</h1>
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
                    <iframe className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.youtube.com/embed/iWm4A_VN84w?list=PLO4xYQBA1oxVDRzXzjLUPhnlEC5JMx628" title="Thuyết trình về món Bánh Canh Bến Có" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   
                </div>
            </div>

            

            
 
            <FoodContent 
                title="និយាយរួម"          
            >
                <p>
                Banh Canh គឺជាមុខម្ហូបដ៏ពេញនិយមរបស់តំបន់ Tay Nam Bo ។ តាមរសជាតិ និងគ្រឿងផ្សំ អ្នកអាចរកបានបាយឆាច្រើនប្រភេទ។ ទោះជាយ៉ាងណាក៏ដោយ នៅពេលនិយាយអំពី Tra Vinh យើងមិនអាចមិននិយាយអំពី Banh canh Ben Co បានទេ។ Banh canh Ben Co បានក្លាយជា អាហាតំណាងនៅទីនេះអស់រយៈពេល 20 ឆ្នាំមកហើយ។ ដោយស្ថិតក្នុងបញ្ជីមុខម្ហូបរបស់ប្រជាជនត្រាវិញជាយូរយារណាស់មកហើយ Banh canh Ben Co បានទាក់ទាញភ្ញៀវទេសចរមកពីគ្រប់ទិសទី។ រសជាតិប្លែកនៃអាហានេះនឹងធ្វើឱ្យអ្នកណាដែលបរិភោគវាមានការចាប់អារម្មណ៍យ៉ាងខ្លាំង ហើយចង់ត្រលប់មកម្តងទៀត។
                    
                </p>
                <p>
                រឿងផ្តើមក្នុងឆ្នាំ 1980 មានអ្នកម្តាយម្នាក់មានកូន៦នាក់ រែកអង្រែក Banh canh លុកក្បែរស្ពាន Ben Co។ ប្រកមឲបដោយចំណង់ចំណូលចិត្ត និងចំណេះដឹងផ្នែកទំនាក់ទំនង ពួកគេបានអភិវឌ្ឍអាជីវកម្មរបស់ពួកគេបន្តិចម្តងៗ។ បន្ទាប់ពីម្តាយបានទទួលមរណភាព កូនទាំង៦នាក់បានបន្តទំនាក់ទំនងអាជីវកម្ម និងអភិវឌ្ឍម៉ាកគុយទាវ Ben Co។ ច្ចុប្បន្ននេះ យីហោ Banh canh Ben Co មានភាពល្បីល្បាញ និងបានពង្រីកទៅខេត្តភាគខាងលិចរហូតដល់{highlightText('ទីក្រុងហូជីមិញ')} និងចូលរួមក្នុងព្រឹត្តិការណ៍ដែលទាក់ទងនឹងការធ្វើម្ហូបទូទាំងប្រទេស។ Banh canh Ben Co ​បាន​ក្លាយ​ជា​និមិត្ត​រូប​របស់​ត្រាវិញ និង​ជា​កន្លែង​ឈប់​សម្រាក​សម្រាប់​ភ្ញៀវ​ទេសចរ​ដែល​មក​ទី​នេះ។
                </p>
            </FoodContent>    


            <FoodContent title="របៀបធ្វើ Banh canh Ben Co">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">គ្រៀងផ្សំ</h4>

                                <div>
                                    <p>
                                    រៀបចំ Banh canh Ben Co ដែលជាម្ហូបពិសេសរបស់ត្រាវិញ។ ត្រូវ​រៀបចំ​គ្រឿង​ផ្សំ​ស្អាត​មួយ​ចំនួន​រួម​មាន៖ {highlightText ('ជើងជ្រូក')} បន្ថែម​{highlightText('ឆ្អឹង')}មួយ​ចំនួន​ដើម្បី​ធ្វើ​ឱ្យ​ទឹកស៊ុបឆ្ងាញ់ ទង{highlightText('Banh canh')}ធ្វើអំពី{highlightText('ម្សៅអង្ករ')} និ{highlightText('ងគ្រឿងក្នុងរបស់ជ្រូក')} រួម​ជាមួយ​{highlightText('គ្រឿង')}ដូច​ជា៖ អំបិល ស្ករ ម្សៅស៊ុប ទឹកត្រី ទឹកត្រី ម្រេច ខ្ទឹម ។
                                    </p>
                                    
                                </div>
                                <h4 className="text-xl font-semibold">របៀបធ្វើ Banh canh Ben Co ៖</h4>
                                <div >
                                    <p>
                                    ឆ្លងកាតើជាច្រើនសតវត្សមកហើយ ម្ហូបអាហាវៀតណាមបានអភិវឌ្ឍជាមួយនឹងការបង្កើត និងរសជាតិដ៏សម្បូរបែប។ ក្នុងចំណោមនោះ Banh canh Ben Co មានភាពល្បីល្បាញដោយសារភាពប្លែក និងរសជាតិពិសេស ដែលមិនអាចដឹងពីរបៀបធ្វើបាន។ម្ហូបនេះបានក្លាយជានិមិត្តសញ្ញាវប្បធម៌ធ្វើម្ហូបតែមួយគត់ ដែលទាក់ទាញអ្នកហូបចុកមកពីគ្រប់ទិសមកបរិភោគនិងស្វែងយល់។ Banh canh Ben Co មិនត្រឹមតែមានរសជាតិឆ្ងាញ់ប៉ុណ្ណោះទេ ថែមទាំងជានិមិត្តរូបនៃភាពសម្បូរបែបនៃមុខម្ហូប និងការរួមបញ្ចូលគ្នានៃគ្រឿងផ្សំប្លែកៗ ដែលយើងមិនអាចដឹងបាន។ ប្រាកដ​ណាស់​អ្នក​ញ៉ាំ ​ដែល​ធ្លាប់​សាក​ម្ហូប​នេះ​នឹង​ចាប់​អារម្មណ៍​នឹង​រសជាតិ​ដ៏​ពិសេស​នេះ។ 
                                    </p>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            <FoodContent title="វិធីធ្វើទឹកជ្រលក់">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">ទឹកត្រី: </h4>
                        <div className="grid grid-cols-2 gap-2">
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%201.webp" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%202.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%203.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%204.jpg" className="w-full h-full object-cover"/>

                        </div>

                        <p>
                        គ្រឿងផ្សំទឹកត្រី។ ធម្មតានឹងមានក្រូចឆ្មា ហើយយើងនឹងអាចប្រើក្រូចឆ្មា និងម្ទេសតាមចំណង់ចំណូលចិត្តរបស់យើង ។
                        </p>
                    </div>

                    
            </FoodContent>


            <FoodContent title="បរិភោគ Banh canh Ben Co">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    ដើម្បី Banh canh Ben Co មួយចាន គឺមិនអាចខ្វះបានឡើយ ដោយត្រូវមានគ្រឿងផ្សំដូចជា សាច់គ្មានខ្លាញ់ សាច់ជ្រូក ត្រកួន ពោះវៀនជ្រូក រួមទាំងក្រលៀន ថ្លើម ផូ បេះដូង... និងបន្លែមួយចំនួនទៀត។
 ដើម្បីបាន Banh canh Ben Co មួយចានពេញ ពេលញ៉ាំត្រូវច្រលិក Banh canh ក្នុងទឹកឱ្យក្តៅ រួចដាក់ក្នុងចានមួយរៀបសាច់ ពោះវៀនជ្រូក ខ្ទឹមសន្លឹក និងម្រេចពីលើ ។ ចាក់ទំពាំងបាយជូរពីលើនំហើយវាល្អបំផុតនៅពេលដែលវានៅក្តៅ។
                    </p>

                    <p>
                    សម្រាប់អ្នកបស្ចិមប្រទេស គ្រឿងទេសដែលមិនអាចរំលងបាននោះគឺ{highlightText('ទឹកត្រីសុទ្ធមួយចាន')} ជាមួយនឹងម្ទេសក្រហមស្រស់ពីរបីចំណិត ដើម្បីធ្វើឱ្យរសជាតិកាន់តែសម្បូរបែប។  រសជាតិដ៏សម្បូរបែបនៃទឹកជ្រលក់ដែលប្រកបដោយគ្រឿងផ្សំដែលធ្វើឱ្យម្ហូបធម្មតានេះកាន់តែមានរសជាតិ និងឆ្ងាញ់ជាងពេលណាៗទាំងអស់។
                    </p>

                </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                
                <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ៤៥,០០០ ដុង-​ ៥៥,០០០ ដុង/ចាន។</p>
            </section>


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BANHCANHMAINKM;
