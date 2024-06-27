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
        text: 'crab',
        image: 'https://buhkhkt.github.io/CHINH/cua%20bi%E1%BB%83n.jpg'
    },
    {
        text: 'sesarmid crab',
        image: 'https://buhkhkt.github.io/CHINH/ba%20kh%C3%ADa.jpg'
    },
    {
        text: 'melancholy',
        image: 'https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20bu%E1%BB%93n.webp'
    },
    {
        text: '"Chù ụ" carapace',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1ch%20ch%C3%B9%20%E1%BB%A5.webp'
    },
    {
        text: 'tamarind sauce',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20s%E1%BB%91t%20me.jpg'
    },
]

const nguyenlieu = [
    {
        text: '"Chù ụ"',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/con%20ch%C3%B9%20%E1%BB%A5.webp'
    },
    {
        text: 'Tamarind juice',
        value: '1/2 cup',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20me.jpg'
    },
    {
        text: 'Garlic',
        value: '1 clove',
        image: 'https://buhkhkt.github.io/CHINH/t%E1%BB%8Fi.jpg'
    },
    {
        text: 'Spices',
        value: 'Cooking oil, sugar, fish sauce,...',
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

const CHUUMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHÙ Ụ RANG ME</h1>
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
                    src="https://www.youtube.com/embed/C5-OleZnfsA?list=PLO4xYQBA1oxU0vKk9WkupETKeffWYbgqm"
                    title="A Presentation on Chù Ụ Rang Me"
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
                The name "Chù ụ rang me" may sound unfamiliar, but many people have had the opportunity to savor this unique dish. It is a special culinary secret of the people of Trà Vinh, a delicacy that you must definitely try when you set foot here. Trà Vinh, with its beautiful beaches and the unique flavors of its specialties, is an interesting and enticing destination for every traveler. In the list of delicious seafood dishes, we cannot forget to mention {highlightText('crab')}, {highlightText('sesarmid crab')} and "Chù ụ".
                </p>
                <p>
                "Chù ụ" stands out with its unique and enticing flavor. It's quite challenging to distinguish the similarities between "Chù ụ" and sesarmid crab because both belong to the {renderTooltipText('crustacean family', 'giap-xac')}, with their rugged carapace and plump bodies. One distinctive feature worth noting is the face of the "Chù ụ", which always carries a sense of {highlightText('melancholy')}. Perhaps it is this very feature that has led people to give it such a unique name. "Chù ụ" typically inhabit areas near {renderTooltipText('brackish water', 'nuoc-lo')} and coastal forests, but the largest population is found in the Trà Vinh coastal region, from which the locals have created many delicious dishes. However, there are four main cooking styles: grilling, boiling, steaming, and tamarind stir-frying. Among these, "Chù ụ rang me" is considered the most exquisite and outstanding dish, synonymous with the most enticing flavor.
                </p>
                <p>
                The lunar month of April is the perfect time to savor "Chù ụ rang me", when "Chù ụ" are in their {renderTooltipText('prime', 'thoat-xac')}, with tender, succulent, and irresistibly flavorful meat. It's also an opportunity to experience the fantastic seafood and fresh produce of this region. Creating the delicious "Chù ụ rang me" dish requires meticulous attention and culinary expertise. The distinctive aroma emanates from the tender "Chù ụ" meat, the crispiness of the "Chù ụ" shell, and the rich creaminess of the {highlightText('"Chù ụ" carapace')}, perfectly harmonizes with a touch of sweet and sour {highlightText('tamarind sauce')}. It all culminates in a delightful culinary experience that leaves diners unable to resist.
                </p>
                <p>
                Trà Vinh not only offers fascinating and marvelous travel experiences but also provides an opportunity to savor unique and delicious dishes. And "Chù ụ rang me" with its exquisite flavor, contributes to building the golden reputation of Trà Vinh in the hearts of every traveler.
                </p>
            </FoodContent>    


            <FoodContent title='The Way To Make "Chù Ụ Rang Me"'>
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Ingredients:</h4>

                                <div>
                                    

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className="text-xl font-semibold">The steps to follow</h4>
                                <div className="flex flex-col gap-3 mt-6">
                                   

                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>Soak "Chù ụ" in ice water. Next, we separate the bud portion, then transfer the "Chù ụ" carapace to a bowl while cutting off the head of the "Chù ụ" corner.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Make tamarind sauce</span>
                                        <p>I pour about 100 ml of warm water into a bowl and then gently dissolve the tamarind in the water. I add 2 tablespoons of sugar and 2 tablespoons of fish sauce to the bowl, and then mix it well to dissolve the sugar and fish sauce.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Fry the "Chù ụ"</span>
                                        <p>I lift the pan and pour cooking oil into it. I wait until the oil heats up, then I add the "Chù ụ" to fry until it turns golden evenly, and then I transfer it to a plate.</p>
                                    </div>
                                    
                                    <div>
                                        <span>Step 4: Roast the "Chù ụ"</span>
                                        <p>In a pan, add some cooking oil and finely chopped garlic, then sauté the garlic until fragrant. Next, add the "Chù ụ" rice that you prepared earlier. When you see the mixture start to simmer, add the tamarind sauce. Finally, just mix in the "Chù ụ" and stir well to ensure it absorbs the flavors, and you have completed the delicious "Chù ụ rang me".</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/wP1A6H63amo?list=PLO4xYQBA1oxU0vKk9WkupETKeffWYbgqm"
                                        title="The way to make Chù Ụ Rang Me"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "Đặng Huyền"</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            

            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.png" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    A plate of "Chù ụ rang me", meticulously prepared, glistened with a radiant golden hue right before my eyes. This was a unique and mesmerizing meal, captivating from the alluring aroma to the pinnacle of flavors. The delicious and distinctive fragrance emanated from each piece of "Chù ụ" meat, clinging tenderly amidst small, crispy regions, creating an exquisite harmony with the crispiness of the "Chù ụ" skin.
                    </p>

                    <p>
                    The delightful combination of the sweet and tangy tamarind sauce with the tender "Chù ụ" meat creates a unique and harmonious flavor experience. The subtle yet robust aromas of garlic and scallions are the perfect finishing touch for this exquisite feast.
                    </p>

                </div>
                </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 100,000 to 150,000 VND per dish.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>


           
        <Tooltip
            anchorSelect=".giap-xac"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The group of animals with a fairly sturdy exoskeleton and multiple legs.
                </div>
            }
        />          
           
        <Tooltip
            anchorSelect=".nuoc-lo"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    The mixture of saltwater and freshwater.
                </div>
            }
        />          


        <Tooltip
            anchorSelect=".thoat-xac"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    It is the stage when "Chù ụ" shed their outer shells to grow and increase in size.
                </div>
            }
        />          



            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHUUMAINTA