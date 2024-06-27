import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'snakehead fish',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'trichogaster pectoralis',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%B7c.jpg'
    },
    {
        text: 'tilapia',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20r%C3%B4%20phi.webp'
    },
    {
        text: 'siamese mud carp',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20linh.jpg'
    },
    {
        text: 'humble meals',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20b%C3%ACnh%20d%E1%BB%8B.jpg'
    },
    {
        text: 'festive feasts',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20m%C3%A2m%20c%E1%BB%97.jpg',
    },
    {
        text: 'dipping sauce',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20n%C6%B0%E1%BB%9Bc%20ch%E1%BA%A5m.jpg'
    },
    {
        text: '"Bún num bò chóc"',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20num%20b%C3%B2%20ch%C3%B3c.jpg'
    }, 
    {
        text: '"Lẩu mắm"',
        image: 'https://buhkhkt.github.io/CHINH/l%E1%BA%A9u%20m%E1%BA%AFm.jpg'
    },
    {
        text: '"Mắm kho thịt ba chỉ"',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20kho%20th%E1%BB%8Bt.jpg'
    },
    {
        text: 'Bạc Liêu',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20b%E1%BA%A1c%20li%C3%AAu.jpg'
    },
    {
        text: 'Sóc Trăng',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20s%C3%B3c%20tr%C4%83ng.jpg',
    },
]

const nguyenlieu = [
    {
        text: 'Trichogaster pectoralis ', 
        value: 'Snakehead fish, tilapia, siamese mud carp,...',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%B7c++.jpg'
    },
    {
        text: 'Cold rice',
        value: 'Sufficient quantity',
        image: 'https://buhkhkt.github.io/CHINH/c%C6%A1m%20ngu%E1%BB%99i.jpg'
    },
    {
        text: 'Powdered grilled rice',
        value: 'Sufficient quantity',
        image: 'https://buhkhkt.github.io/CHINH/th%C3%ADnh%20g%E1%BA%A1o.jpg'
    },
    {
        text: 'Spices',
        value: 'Sugar, salt,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
]


const thuongthucthanhpham = [
    {
        text: 'autumn crocus',
        image: 'https://buhkhkt.github.io/CHINH/Ng%C3%A3i%20B%C3%BAn.jpg'
    },
    {
        text: 'lemongrass',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20%C4%91%E1%BA%ADp%20d%E1%BA%ADp.jpg'
    },
    
]

const MAMBOHOCMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">PRAHOK</h1>
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
                    src="https://www.youtube.com/embed/Uihp6pmXaGc?list=PLO4xYQBA1oxVQmeSFBdRlBfD4Y37TpQgc"
                    title="A Presentation on Prahok"
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
                Trà Vinh, a province in the Mekong Delta, is surrounded by the Tiền and Hậu branches of the Mekong River, providing a favorable source of freshwater for fishing and aquaculture. Among the gifts of nature in this region, shrimp and fish are prominent. Thanks to abundant resources, fish-based products have thrived, with fish sauce being a standout. Making fish sauce has become a common profession for the local residents. Among the various fish sauces in Trà Vinh, the most unique is prahok. Prahok is a dish closely associated with the Khmer people in Cambodia and also the Khmer community in the Southern region of Vietnam for generations. Prahok is elaborately prepared from various freshwater fish species found in the river and waterways, such as {highlightText('snakehead fish')}, {highlightText('trichogaster pectoralis')}, {highlightText('tilapia')}, {highlightText('siamese mud carp')}, … Although prahok is a humble and simple dish, it has captured the hearts of many travelers, even on their first taste.
                </p>
                <p>
                When visiting Trà Vinh, tourists have the opportunity to explore the art of making prahok by visiting local households. Those experienced in crafting this traditional fish paste in the region believe that while the process is not overly difficult, it does involve several steps. Prahok has become a familiar dish in the daily lives of Khmer people, from {highlightText('humble meals')} to {highlightText('festive feasts')}. It's not just a distinctive Khmer dish; prahok has also become a specialty of Trà Vinh. Mixing prahok with lemon, sugar, garlic, and chili creates a delicious {highlightText('dipping sauce')} for boiled vegetables and rice rolls, making them all the more delightful.
                </p>
                <p>
                Besides being used for raw consumption, prahok is also a crucial ingredient that imparts a unique flavor to dishes such as "Bún nước lèo", {highlightText('"Bún num bò chóc"')}, {highlightText('"Lẩu mắm"')}, {highlightText('"Mắm kho thịt ba chỉ"')} and more. The most flavorful dish that features the distinctive taste of prahok is undoubtedly "Bún nước lèo". When talking about "Bún nước lèo" in the Western region, there are numerous renowned brands like "Bún nước lèo" Trà Vinh, "Bún nước lèo" {highlightText('Bạc Liêu')}, "Bún nước lèo" {highlightText('Sóc Trăng')},… However, the hallmark of "Bún nước lèo" in Trà Vinh is the use of prahok in preparing the broth. Each locality has its own variations to suit the preferences of the locals. In many places, prahok is even replaced with paste of {highlightText('siamese mud carp')}, {highlightText('trichogaster pectoralis')},… when cooking noodles.
                </p>
            </FoodContent>    


            <FoodContent title="The Way To Make Prahok">
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
                                <h4 className="text-xl font-semibold">The steps to follow:</h4>
                                <div className="flex flex-col gap-3 mt-6">
                                    

                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>We scale the fish, remove the head, and then wash it thoroughly.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Dry the fish</span>
                                        <p>After cleaning the fish, we'll drain the water and take it for drying. Please note that when drying, remember to cover it with a piece of cloth on top to prevent flies from getting to it, and let it dry for about 18-24 hours until the fish smells.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Mix the paste</span>
                                        <p>After catching the fish, we put them in a basket and then mix them with powdered grilled rice, salt, sugar, and cold rice. Finally, we put them in a jar, but we need to let it sit for about 3 months before we can use it.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/nAYLKtmzV-8?list=PLO4xYQBA1oxVQmeSFBdRlBfD4Y37TpQgc"
                                        title="The Way To Make Prahok"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        
                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "Mắm bò hóc Vlog"</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    Prahok is also an important seasoning that contributes rich flavors to dishes such as "Bún num bò chóc", "Bún nước lèo", "Bún mắm",... When you catch a whiff of the aromatic "Bún nước lèo" broth, you won't be able to resist the intense taste of fermented fish paste, the fragrant essence of {highlightText('autumn crocus')}, {highlightText('lemongrass')}, and more. Those ingredients, combined with prahok, create a flavorful and distinct broth with a rich sweetness and a refreshing sourness. When paired with vegetables and prahok, it's truly delightful, and you might find yourself finishing your meal entirely because of the intense and harmonious flavor of the fermented fish sauce and the lingering aromatic scent.
                    </p>

                    <p>
                    This dish is perfect for cold weather days. Some people also enjoy prahok as a dipping sauce for rolling rice paper with noodles, vegetables, and meat to enhance the flavor of the meal.
                    </p>

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 90,000 VND to 120,000 VND per 500g.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>
            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default MAMBOHOCMAINTA