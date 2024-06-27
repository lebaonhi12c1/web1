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
        text: 'the sandworm',
        image: 'https://buhkhkt.github.io/CHINH/con%20r%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'honey',
        image: 'https://buhkhkt.github.io/CHINH/m%C3%A0u%20m%E1%BA%ADt%20%C3%B4ng.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'Sandworms',
        image: 'https://buhkhkt.github.io/CHINH/con%20r%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'Salt',
        image: 'https://buhkhkt.github.io/CHINH/mu%E1%BB%91i.jpg'
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

const NUOCMAMRUOIMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">SANDWORM SAUCE</h1>
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
                
                <div className="rounded-2xl shadow overflow-hidden">
                <iframe
                    className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                    src="https://www.youtube.com/embed/hbvCE_dw3c0?list=PLO4xYQBA1oxUu9nptCBVmbDewjbLIGB95"
                    title="A Presentation on Sand Worm Sauce"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                ></iframe>
                   
                </div>
            </div>

            

            
 
            <FoodContent 
                title="General Overview"
                           
            >
                <p>
                Trà Vinh, a region in the southern part of Vietnam, has long been famous for its delicious and unique specialties. However, if you have ever set foot in this place, you are sure to have heard about a special type of fish sauce from this region, which is known as sandworm sauce.
                </p>
                <p>
                The town of Duyên Hai, in Trà Vinh province, is renowned for a unique aquatic creature - {highlightText('the sandworm')}. For generations, the local people here have been harnessing this aquatic species to create a unique kind of fish sauce. There's an intriguing legend about its origin, in which, when King Nguyễn Ánh was venturing into this land, a loyal subject provided him with a taste of this distinctive fish sauce. After ascending the throne as King Gia Long, every year, he sent boats southward to procure the sandworm sauce for consumption, following a royal ritual known as {renderTooltipText('"vua ngự thiện"', 'vua-ngu-thien')}. That's why sandworm sauce is called the king's fish sauce and has become a unique and precious product.
                </p>
                <p>
                Sandworms is a species of earthworm that lives underground in brackish and tidal areas, following rivers and coastal sandbanks. The unique characteristic of sandworms is that they only appear during the lunar months of October and November, resulting in the production of sandworm sauce happening only once a year. Pure sandworm sauce has a {renderTooltipText('high protein content', 'do-dam-cao')}, creating a delicious and salty flavor that surpasses regular fish sauce. The process of making sandworm sauce is also simple, with a quantity of sand worms mixed with salt in a fixed ratio, then left to ferment outdoors. This makes the sandworm sauce progressively thicker and takes on a golden color like {highlightText('honey')}, carrying a unique, gentle aroma. Each bottle of sandworm sauce is a symbol of the hard work and dedication of the fish sauce makers. With the support of the provincial agricultural association, sandworm sauce is now bottled, filtered through a UV sterilization machine, and sealed with a branded label. This helps enhance the quality of fish sauce and keeps it fresh and delicious.
                </p>
                <p>
                While sandworm sauce is only produced once a year, the local residents hold it in high esteem, and it is served only for special guests. Every year, the sandworm sauce is carefully preserved and taken to various parts of the country as a symbol of pride for the land of Trà Vinh.
                </p>
            </FoodContent>    


            <FoodContent title="The Way To Make Sandworm Sauce">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Ingredients:</h4>

                                <div>
                                   

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className="text-xl font-semibold">The steps to follow:</h4>

                                <div className="flex flex-col gap-3 mt-6">
                                    

                                    <div>
                                        
                                        <p>We proceed to ferment fish sauce. We mix sandworms and salt in a ratio of 7:3 (for example, if we have 70kg of sandworms, we will use 30kg of salt). Then, we stir to dissolve the salt evenly. We wait for a while for the water to settle on top, skim off the foam, and then seal the barrel tightly. We ferment the fish sauce for 10 months. After about 10 months, we proceed to filter the sauce and transfer it into bottles. Nowadays, with advanced technology, we can sterilize it using UV rays, making the filtering process modern and more reliable.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/I0R9LujTU3c?list=PLO4xYQBA1oxUu9nptCBVmbDewjbLIGB95"
                                        title="The way to make Sand Worm Sauce"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                      

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "TRUYỀN HÌNH TRÀ VINH"</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    Enjoying sand wormsauce is not just about eating; it's also about savoring and honoring the Trà Vinh region and its people. It's a way to connect with the history and culture of this coastal area and to show appreciation and respect for the hard work of those who make sandworm sauce. When you first place a piece of delicious, fresh fish or seafood onto a delicate rice paper, you'll experience the gentle, salty fragrance of anchovy fish sauce. This is the scent of the ocean, the smell of the sun, the aroma of white sands, and the waves of the sea. Each drop of sandworm sauce carries the breath of the sea, and as you savor it, you are truly immersing yourself in this unique seaside experience.
                    </p>

                    <p>
                    If you have the opportunity to savor sandworm sauce from Trà Vinh, relish every drop and every bite. Experience the taste of the sea and share the pride of a unique product that can only be found in this region.
                    </p>

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 50,000 VND 100,000 VND per 500ml depending on the quality of the sandworms used.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>
            

            
        <Tooltip
            anchorSelect=".vua-ngu-thien"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The premium food is reserved only for kings.
                </div>
            }
        />          
        
        <Tooltip
            anchorSelect=".do-dam-cao"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The amount of protein in the product is being referred to.
                </div>
            }
        />          
            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default NUOCMAMRUOIMAINTA