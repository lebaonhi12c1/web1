import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import clsx from "clsx";

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'លាយជាមួយសណ្តែកដី',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20t%C3%A2y%20ninh.jpg'
    },
    {
        text: 'នំអន្សមជ្រូកគ្រាប់ស្វាយចន្ទី',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20h%E1%BA%A1t%20%C4%91i%E1%BB%81u.jpg'
    },
    {
        text: 'នំអន្សមជ្រូក ស្លឹក Cam',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20l%C3%A1%20c%E1%BA%A9m.jpg'
    },
    {
        text: 'អន្សមជ្រូក​អំបុក',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    {
        text: 'ខ្សែកក់',
        image: 'https://buhkhkt.github.io/CHINH/d%C3%A2y%20l%C3%A1t.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'អង្ករដំណើប',
        value: '២kg',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20n%E1%BA%BFp.jpg'
    },
    {
        text: 'ទឹកខ្ទិះដូង',
        value: '៥០០ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'ទឹកស្លឹកតើយ',
        value: '៥០០ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20l%C3%A1%20d%E1%BB%A9a.webp'
    },
    {
        text: 'សាច់ជ្រូក',
        value: '៥០០g',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20ba%20ch%E1%BB%89.jpg'
    },
    {
        text: 'ស៊ុតអំបិល',
        value: 'vài quả',
        image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20mu%E1%BB%91i.jpg'
    },
    {
        text: 'សណ្តែកបៃតង',
        value: '៤០០g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'ចេកណាមវ៉ា',
        value: '១០ផ្លែ',
        image: 'https://buhkhkt.github.io/CHINH/chu%E1%BB%91i%20xi%C3%AAm.jpg'
    },
    {
        text: 'គ្រឿងផ្សំបន្ថែម',
        value: 'ខ្ទឹមបារាំងពណ៌ស្វាយ ខ្ទឹម',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%A0nh%20t%C3%ADm%20t%E1%BB%8Fi.jpg'
    },
    {
        text: 'គ្រឿងទេស',
        value: 'អំបិល, ស្ករ, គ្រឿងទេសសាច់, មីចេញ, ម្រេចដី, ...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'sườn non', image: 'https://buhkhkt.github.io/CHINH/s%C6%B0%E1%BB%9Dn%20non.jpg' },
    { text: 'mực ống', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20%E1%BB%91ng.jpg' },
    { text: 'tôm tít', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20t%C3%ADt.webp' }
]

const thuongthucthanhpham = [
    {
        text: 'សាច់ជ្រូកខពង',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20kho%20h%E1%BB%99t%20v%E1%BB%8Bt.jpg'
    },
    {
        text: 'Cu kieu',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%A7%20ki%E1%BB%87u.jpg'
    },
    {
        text: 'ជ្រុក',
        image: 'https://buhkhkt.github.io/CHINH/d%C6%B0a%20mu%E1%BB%91i.webp'
    },
    {
        text: 'សាច់ក្រក',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20l%E1%BB%A5a.jpeg'
    },
    
]

const BANHTETMAINKM = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">នំអន្សមជ្រូក​ Tra Cuon</h1>
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
                    src="https://www.youtube.com/embed/jWhvd9usnKY?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
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
                នំអន្សមជ្រូក - ជានំមួយប្រភេទដែលមានតាំងពីយូរយារណាស់មកហើយមានក្នុងជីវភាពរស់នៅរបស់ជនជាតិ Viet Nam។ តាំងពីបុរាណកាលមក នំអន្សមជ្រូកតែងតែមានវត្តមានក្នុងឱកាសបុណ្យនានានៅប្រទេសវៀតណាម។ តាមតំបន់នីមួយៗនៅវាលទំនាប Cuu Long តែងតែបង្កើតប្រភេទ នំអន្សមជ្រូកដែលសមស្របនឹងតំបន់របស់ពួកគេ។ នំអន្សមជ្រូកឥឡូវនេះបានក្លាយទៅជាម្ហូបពិសេសរបស់តំបន់ជាច្រើននៅភាគខាងត្បូង ដែលកន្លែងនីមួយៗមានរសជាតិរៀងៗខ្លួន។ Binh Duong និង Tay Ninh មានភាពល្បីល្បាញដោយសារ នំអន្សមជ្រូកដ៏គួរឱ្យទាក់ទាញរបស់ពួកគេធ្វើពីអង្ករដំណើប {highlightText('លាយជាមួយសណ្តែកដី')}{' '}Dong Nai មានការចាប់អារម្មណ៍ដោយសារ {highlightText('នំអន្សមជ្រូកគ្រាប់ស្វាយចន្ទី')}របស់ពួកគេ Can Tho មាន{highlightText('នំអន្សមជ្រូក ស្លឹក Cam')} ហើយ Soc Trang មាន banh នំ{highlightText('អន្សមជ្រូក​អំបុក')} Tra Vinh មាន នំអន្សមជ្រូក Tra Cuon​​​​​​​​។ តាមទំនៀមទំលាប់របស់ប្រជាជនខេត្តTra Vinh នំអន្សមជ្រូកនេះត្រូវបានរៀបចំ និងលក់ដោយស្ត្រីខ្មែរម្នាក់ឈ្មោះ Thach Thi Let នៅស្រុក Cau Ngang ដើម្បីប្រកបរបរចិញ្ចឹមជីវិត។ មកទល់នឹងពេលនេះ នំអន្សមជ្រូកនេះមានប្រវត្តិ ៨០ឆ្នាំ បានក្លាយជាមុខម្ហូបពិសេសរបស់ប mien Tay ដែលអ្នកស្រុកនិងអ្នកទេសចរចូលចិត្តគ្រប់ទីកន្លែង។ នំ​នេះ​មាន​រសជាតិ​ពិសេស ទាក់ទាញ និង​ប្លែក​ពី​គេ ដែល​អាច​ធ្វើ​ឱ្យ​អ្នក​ដែល​បាន​ភ្លក់​លង់​ស្នេហ៍។ Tra Cuon banh tet មិនត្រឹមតែជាមុខម្ហូបដ៏ឈ្ងុយឆ្ងាញ់ប៉ុណ្ណោះទេ ប៉ុន្តែវាក៏តំណាងឱ្យមោទនភាព និងប្រពៃណីធ្វើម្ហូបរបស់ត្រាវិញផងដែរ.
                </p>
                <p>
                ដើម្បីធ្វើនំអន្សមជ្រូកមួយ អ្នកធ្វើនំត្រូវតែឆ្លងកាត់ដំណើរការដ៏ស្មុគ្រស្មាញ ដោយស្វែងរកគ្រឿងផ្សំដែលចាំបាចជាច្រើនដើម្បីបង្កើតធ្វើនំ។ តាមរូបរាងខាងក្រៅនំអន្សមជ្រូក Tra Cuon ​នៅពេលអ្នកកាន់វា អ្នកនឹងមានអារម្មណ៍ថា {renderTooltipText('"រឹងមាំ"', 'chac-nich')} និងមានតុល្យភាព។ សម្បកខាងក្រៅរបស់នំខេកត្រូវបានចងយ៉ាងតឹងជាមួយ{highlightText('ខ្សែកក់')} និងភ្ជាប់នឹងតំណាងឱ្យ "នំអន្សមជ្រូក Tra Cuon "ចែងចាំង។ នៅពេលដែលអ្នកស្រាយសម្បក អ្នកនឹងភ្ញាក់ផ្អើលជាមួយនឹងអង្ករដំណើបដ៏ទន់ល្មើយ គ្របដណ្ដប់យ៉ាងទាក់ទាញជាមួយសណ្តែកបៃតងពណ៌មាស សាច់ខ្លាញ់ទន់ បង្គាក្រៀមក្រអូប និងស៊ុតអំបិល លាយបញ្ចូលគ្នាដើម្បីបង្កើតជា សិល្បៈធ្វើម្ហូបដ៏អស្ចារ្យ។ ដុំនំនីមួយៗ ធ្វើឲ្យអ្នករលាយចិត្ត ព្រោះអង្ករដំណើបគឺទន់រលោង មិនរឹងពេក មិនមិនរលួយពេក  គួបផ្សំជាមួយនឹងរសជាតិ​​សណ្តែកបៃតង សាច់ខ្លាញ់ ស៊ុតអំបិល និងបង្គាក្រៀម ទាំងអស់បង្កើតរសជាតិដ៏អស្ចារ្យសម្រាប់អ្នក នាំមកនូវអារម្មណ៍រំភើបរីករាយ។ 
ប៉ុន្តែ នំអន្សមជ្រូក Tra Cuon មិនត្រឹមតែមានភាពទាក់ទាញ ដោយសារតែរសជាតិដ៏អស្ចារ្យរបស់វានោះទេ វាក៏មានតម្លៃ ល្អសម្រាប់សុខភាពផងដែរ។ សណ្តែកបៃតងធ្វើឱ្យត្រជាក់ និងបន្សុទ្ធរាងកាយ ខណៈដែលការបំពេញផ្តល់នូវកាឡូរី និងប្រូតេអ៊ីនច្រើន ដែលធានាបាននូវអាហាររូបត្ថម្ភគ្រប់គ្រាន់សម្រាប់មនុស្សគ្រប់គ្នា។
                </p>
                <p>
                អន្សមជ្រូក Tra Cuon មិនត្រឹមតែជាមុខម្ហូបដ៏ឈ្ងុយឆ្ងាញ់ប៉ុណ្ណោះទេ ថែមទាំងជានិមិត្តរូបនៃវប្បធម៌ និងមោទនភាពផ្នែកធ្វើម្ហូបរបស់ត្រាវិញផងដែរ។
                </p>
            </FoodContent>    
            

            <FoodContent title="របៀបធ្វើ ប៊ិអន្សមជ្រូក">
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

                                <div className="flex flex-col gap-3 mt-6">
                                    <h4 className="text-xl font-semibold">ជំហានធ្វើនំអន្សមជ្រូកស្នូលសាច់៖</h4>
                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>លាងអង្ករដំណើប ២ kg។បន្ទាប់មកលាងសណ្តែកបៃតង ៤០០ ក្រាម។ យក​ស៊ុត​លឿង​ប្រៃ លាង​នឹង​ស្រា ហើយ​ចំហុយ​ជាមួយ​ប្រេង​ល្ង ដើម្បី​ឲ្យ​ស៊ុត​លឿង​ប្រឡាក់​ឆ្អិន​ស្មើ​គ្នា។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ត្រាំអង្ករដំណើប និងសណ្តែកបៃតង</span>
                                        <p>បន្ទាប់​ពី​លាង​អង្ករ​ដំណើប​រួច បន្ថែម​ទឹក​រួម​ជាមួយ​អំបិល ១ ស្លាបព្រា​កាហ្វេ។ ត្រាំអង្ករដំណើបមួយយប់ប្រហែល១០ម៉ោង។ បន្ទាប់​ពី​លាង​សណ្តែក​បៃតង​រួច បន្ថែម​ទឹក​ចូល​ហើយ​ត្រាំ​ប្រហែល ៣-៤ ម៉ោង។ បន្ទាប់ពីត្រាំប្រហែល 3-4 ម៉ោងសណ្តែកបៃតងបានរីកចេញច្រើនចាក់ទឹកហើយទុកឱ្យសណ្តែកបៃតងស្ងួតទឹក។ ១យប់​ក្រោយ​យក​អង្ករ​ដំណើប​ដាក់​ក្នុង​កន្ត្រក​លាង​ទឹក​ស្អាត។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: ចម្អិនស្នូលសណ្តែក</span>
                                        <p>ដាក់​សណ្តែក​បៃតង​ក្នុង​ឆ្នាំង​ជាមួយ​អំបិល ១ ស្លាបព្រា​កាហ្វេ ប្រេងឆា ១ ស្លាបព្រា​បាយ ទឹក ៨០០ml គ្រប​ឱ្យ​ជិត ហើយ​ចម្អិន​រហូត​ដល់​សណ្ដែក​បៃតង​។ បន្ទាប់​ពី​សណ្ដែក​បៃតង​ពុះ​ហើយ យើង​យក​គម្រប​ចេញ ហើយដួស​ពពុះ​ដែល​អណ្តែត​ទៅ​ខាង​លើ រួច​បន្ត​បិទ​គម្រប​តែ​កុំ​បិទ​ឱ្យ​ជិត ដើម្បី​ទុក​រន្ធ​ខ្យល់​តូច។ បន្ទាប់ពីប្រហែល ១៥ នាទីសណ្តែកបៃតងនឹងស្ងួតគ្រោប យ៉ាងតឹងហើយបន្តចម្អិន រយៈពេល ១០ នាទីទៀត។ បន្ថែម​ស្ករស ១ស្លាបព្រាបាយ​ចូល​ឆ្នាំង​សណ្តែក​បៃតង កូរ​ឱ្យ​សព្វ រួច​បិទ​ភ្លើង។ បន្ទាប់​ពី​កូរ​រួច​ចាក់​សណ្តែក​បៃតង​ចេញ រង់ចាំ​ឱ្យ​សណ្តែក​បៃតង​ត្រជាក់ និង​ស្ងួត ។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 4: ធ្វើឱ្យសាច់បំពេញ</span>
                                        <p>កាត់សាច់ជ្រូក ៥០០g ទៅជាចំណិតស្តើងៗ កាន់តែស្តើង កាន់តែមានរសជាតិឆ្ងាញ់។ បន្ទាប់​ពី​ហាន់​រួច​ត្រូវ​យក​សាច់​មក​ចិញ្ច្រាំ​ដោយ​បន្ថែម​ស្ករស ១ ស្លាបព្រា​បាយ ម្សៅ​ឆា ១ ស្លាបព្រា​កាហ្វេ ម្រេច​ដី ១ ស្លាបព្រា​កាហ្វេ បន្ថែម​ខ្ទឹមបារាំង​ពណ៌​ស្វាយ និង​ខ្ទឹមស​ចិញ្ច្រាំ ម្សៅ​ស៊ុប​បន្តិច ហើយ​ទុក​ឱ្យ​ត្រជាក់​ប្រហែល ៣០ នាទី ។ សាច់​ដែល​ប្រឡាក់​រួច​ត្រូវ​យក​ទៅ​បំពង​ដើម្បី​ឱ្យ​សាច់​មាន​ក្លិន​ឈ្ងុយ និង​រឹង។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 5: ចម្អិនអង្ករដំណើប</span>
                                        <p>ដាក់​ទឹក​ស្លឹក​តើយ ៥០០ml ទឹក​ខ្ទិះ​ដូង ៥០០ml ស្ករ ១០០g អំបិល ៣០g។ ពេល​ដែល​ល្បាយ​ពុះ​ដាក់​អង្ករ​ដំណើប​ចូល​កូរ​ឱ្យ​សព្វ​ទើប​អង្ករដំណើប​ស្រូប​យក​ទឹកខ្ទិះដូង និង​​ស្លឹក​តើយ​ចូល​។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 6: វេចនំ</span>
                                        <p>ក្រោយពេលសណ្តែកបែតងស្ងួតហើយ យកសាច់ដាក់លើថង់ផ្លាស្ទិច ហើយរាលដាលការបំពេញឱ្យស្មើៗគ្នា បន្ទាប់មកដាក់សាច់ និងស៊ុតអំបិលពីលើ រួចចិតចុងទាំងពីរឱ្យជ្រុង។ យើង​រៀបចំ​ស្លឹក​ចេក​ជា​ស្រទាប់​ខាង​ក្រៅ និង​ខាងក្នុង រួច​ហាល​ផ្នែក​ស្អិត​ចេញ​ជា​ស្តើងៗ។ បន្ទាប់​មក​បន្ថែម​ការ​បំពេញ​ដែល​អ្នក​ទើប​តែ​រុំ​រួច​រុំ​ចុង​ពីរ​នៃ​នំ​ឱ្យ​តឹង​ដើម្បី​ឱ្យ​នំ​មាន​ភាព​ស្មើគ្នា។ ចុងក្រោយ យើង​ប្រើ​ខ្សែ​ដើម្បី​ចង​នំ​ឲ្យ​តឹង​នៅ​នឹង១​កន្លែង។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 7: ចំហុយនំខេក</span>
                                        <p>ចំហុយនំតាមបែបប្រពៃណី យើងអាចដាក់នំនៅក្នុងឆ្នាំងចំហុយ ហើយតម្រង់វាជាមួយស្លឹកចេក បន្ទាប់មកចាក់ទឹកចូល រួចផ្សំជាមួយនំ។ ប៉ុន្តែចំហីយនំតាមរបៀបនេះអាចបង់ពេលច្រើន ត្រឹម ៨ - ៩ ម៉ោង។ ដូច្នេះហើយ យើង​អាច​អនុវត្ត​វិធី​ខាងក្រោម​នេះ ដើម្បី​ចំណេញ​ពេលតីច ដោយ​មិន​ប្រែប្រួល​រសជាតិ​នំ​នោះទេ។</p>
                                        <p>ដាក់​ចំហុយ​ក្នុង​ឆ្នាំង បន្ថែម​ទឹក​ឱ្យ​ពុះ​។ ពេល​ទឹក​ពុះ​ដាក់​នំ​ចូល​ឆ្នាំង​ហើយ​បិទ​គម្រោប។ ប្រហែល ១ ម៉ោងក្រោយមក យកគម្រោបចេញ ហើយបង្វែរនំឱ្យស្មើៗគ្នា។ បន្ទាប់មកបន្តគ្របនិងចំហុយរយៈពេល ១ម៉ោងកន្លះដល់២ម៉ោងទៀត។ បន្ទាប់ពីពេលវេលាគ្រប់គ្រាន់ យើងបិទចង្ក្រាន ហើយគ្រោបខ្ទះពេញមួយយប់ដើម្បីឱ្យការបំពេញឆ្អិនស្មើគ្នា ហើយអង្ករដំណើបកាន់តែទន់។</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/H5iOSkruTaQ?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">ប្រភព៖ ដកស្រង់ចេញពី youtube channel: ALO TRA VINH</small>
                                    </div>



                                    <h4 className="text-xl font-semibold">ជំហានធ្វើនំអន្សមជ្រូកស្នូលចេក៖</h4>
                                    <div>
                                        <span>ជំហានទី 1: រៀបចំគ្រឿងផ្សំ</span>
                                        <p>លាងអង្ករដំណើប ២kg</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 2: ត្រាំអង្ករដំណើប</span>
                                        <p>បន្ទាប់​ពី​លាង​អង្ករ​ដំណើប​រួច បន្ថែម​ទឹក​រួម​ជាមួយ​អំបិល ១ ស្លាបព្រា​កាហ្វេ។ ត្រាំអង្ករដំណើបមួយយប់ប្រហែល១០ម៉ោង។ ១យប់​ក្រោយ​យក​អង្ករ​ដំណើប​ដាក់​ក្នុង​កន្ត្រក​លាង​ទឹក​ស្អាត។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 3: ចម្អិនស្នូលចេក</span>
                                        <p>យកផ្លែចេកដាក់ក្នុងចានមួយ រួចបន្ថែម៣ស្លាបព្រាស្ករស ១ស្លាបព្រាអំបិល ១ស្លាបព្រាបាយ និងស្រាសបន្តិច រួចលាយចូលគ្នាឱ្យសព្វ។ ទុក​ឱ្យ​ផ្លែ​ចេក​លាយ​រួច​ទុក រយៈពេល ១-៨ ម៉ោង។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 4: ចម្អិនអង្ករដំណើប</span>
                                        <p>ដាក់​ទឹក​ស្លឹក​តើយ ៥០០ml ទឹក​ខ្ទិះ​ដូង ៥០០ml ស្ករ ១០០g អំបិល ៣០g។ ពេល​ដែល​ល្បាយ​ពុះ​ដាក់​អង្ករ​ដំណើប​ចូល​កូរ​ឱ្យ​សព្វ​ទើប​អង្ករ​ដំណើប​ស្រូប​យក​ទឹកដូង និង​ទឹក​ស្លឹក​ត្នោត​ចូល​។</p>
                                    </div>

                                    <div>
                                        <span>ជំហានទី 5: : វេចនំ</span>
                                        <p>យើង​រៀបចំ​ស្លឹក​ចេក​ជា​ស្រទាប់​ខាង​ក្រៅ និង​ខាងក្នុង រួច​ហាល​ផ្នែក​ស្អិត​ចេញ​ជា​ស្តើងៗ។ បន្ទាប់​មក​ដាក់​សំបក​ចេក​ទុំ​ពីលើ ហើយ​រុំ​ចុង​ទាំងពីរ​នៃ​នំ​ឱ្យ​តឹង​ដើម្បី​ឱ្យ​នំ​មាន​ភាព​ស្មើគ្នា​។ ចុងក្រោយ យើង​ប្រើ​ខ្សែ​ដើម្បី​ចង​នំ​ឲ្យ​តឹង​នៅ​នឹង​កន្លែង។</p>
                                    </div>
                                    <div>
                                        <span>ជំហានទី 6: ចំហុយនំ</span>
                                        <p>ចំហុយនំតាមបែបប្រពៃណី យើងអាចដាក់នំនៅក្នុងឆ្នាំងចំហុយ ហើយតម្រង់វាជាមួយស្លឹកចេក បន្ទាប់មកចាក់ទឹកចូល រួចផ្សំជាមួយនំ។ ទោះជាយ៉ាងណាក៏ដោយ វិធីសាស្ត្រចំហុយនេះអាចចំណាយពេលច្រើន ចាប់ពី ៨-៩ ម៉ោង។ ដូច្នេះហើយ យើង​អាច​អនុវត្ត​វិធី​ខាងក្រោម​នេះ ដើម្បី​ចំណាយ​ពេលវេលា​តិចជាង ដោយ​មិន​​ផ្លាស់ប្តូរ​រសជាតិ​នំ​នោះទេ។</p>
                                        <p>ដាក់​ចំហុយ​ក្នុង​ឆ្នាំង បន្ថែម​ទឹក​ឱ្យ​ពុះ​។ ពេល​ទឹក​ពុះ​ដាក់​នំ​ចូល​ឆ្នាំង​ហើយ​បិទ​គម្រប។ ប្រហែល ១ម៉ោងក្រោយមក យកគម្របចេញ ហើយបង្វែរនំឱ្យស្មើៗគ្នា។ បន្ទាប់មកបន្តគ្របនិងចំហុយរយៈពេល ១ម៉ោងកន្លះ​ដល់២ម៉ោងទៀត។ ដល់ពេលល្មម យើងបិទចង្ក្រាន ហើយគ្របខ្ទះទុកមួយយប់ដើម្បីឱ្យចេកទុំល្អ ហើយអង្ករដំណើបកាន់តែទន់។</p>
                                    </div>
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/G2n7SFhAn6o?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
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
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201%20.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    មិន​ត្រឹម​តែ​មាន​រសជាតិ​ឈ្ងុយ​ឆ្ងាញ់​ប៉ុណ្ណោះ​ទេ នំអន្សមជ្រូក Tra Cuon ​ក៏​ជា​មុខ​ម្ហូប​ដែល​មាន​វិធីញ៉ាំ​ប្លែក​ៗ​ជា​ច្រើន​ទៀត​ផង​។ បើអ្នកមកត្រាវិញ គួរតែសាកល្បងញ៉ាំនំអន្សមជ្រូក Tra Cuon និង{highlightText('សាច់ជ្រូកខពង')}ទា ឬញ៉ាំនំអន្សមជ្រូក Tra Cuon ជាមួយ {highlightText('Cu kieu')} ។
                    </p>

                    <p>
                    លើស​ពី​នេះ​ទៅ​ទៀត អ្នក​ក៏​អាច​ញ៉ាំ​វា​ជាមួយ​នឹង{highlightText('ជ្រុក')} ​ផង​ដែរ ដើម្បី​បង្កើន​ភាពប្លែហនៃ​អាហារ​។ ឬយើងអាចរីករាយជាមួយនំអន្សមជ្រូក ជាមួយ{highlightText('សាច់ក្រក')}សាច់ឬចៀនវានៅក្នុងប្រេងមុនពេលញ៉ាំដែលជាវិធីមួយសម្រាប់អ្នកក្នុងការធ្វើឱ្យម្ហូបនេះស្រស់។ ហើយមិនថាអ្នកញ៉ាំនំប្រពៃណីផ្ទាល់ខ្លួន ឬធ្វើតាមរបៀបថ្មីទេ រសជាតិរបស់នំអន្សមជ្រូក Tra Cuon នៅតែដដែល សម្បូរទៅដោយភាពស្រស់ស្អាតនៃវប្បធម៌ និងប្រជាជនលោកខាងលិច។
                    </p>

                </div>
            </FoodContent>

            <FoodContent title="របៀបរក្សា">

                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                  
                </div>

                <div>
                    <p>
                    នំអន្សមជ្រូក Tra Cuon ប្រសិនបើទុកនៅសីតុណ្ហភាពបន្ទប់អាចមានរយៈពេលប្រហែល ១-២ ថ្ងៃ។ ដើម្បីរក្សាគុណភាពរបស់ នំអន្សមជ្រូក បន្ទាប់ពីអ្នកទិញវានៅផ្ទះ អ្នកអាចទុកវានៅក្នុងទូទឹកកក។ វិធីនេះអ្នកអាចរក្សានំបានរយៈពេល ៣-៤ ថ្ងៃ។ លើសពីនេះ អ្នក​អាច​ដាក់​នំអន្សមជ្រូក​ក្នុង​ទូរ​ទឹកកក​ ហើយ​ទុក​វា​បាន​រហូតដល់ ៦ ខែ។ ពេលញ៉ាំ អ្នកអាចរំលាយទឹកកកនិងចំហុយវាញ៉ាំបានភ្លាមៗ។ វិធីរក្សាទុកនេះ អ្នកនឹងមិនចាំបាច់ព្រួយបារម្ភអំពីនំដែលខូច ឬជូរ ប្រសិនបើអ្នកមិនញ៉ាំវាទាន់ពេលនោះទេ។
                    </p>

                    
                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">តម្លៃ៖ </h3>
                <p>ចាប់ពី ៧០០០០-១៥០០០០ ដុង/នំំមួយ។</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            

            
        <Tooltip
            anchorSelect=".chac-nich"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    រឹង​ខ្លាំង​ដែល​វា​មាន​អារម្មណ៍​ថា​វា​ត្រូវ​បាន​ខ្ចប់​យ៉ាង​តឹង។
                </div>
            }
        />

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BANHTETMAINKM;
