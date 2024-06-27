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
        text: 'bride',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%B4%20d%C3%A2u.jpg'
    },
    {
        text: 'Market',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BB%A3%20x%C6%B0a.jpg'
    },
    {
        text: 'farmed snakehead fish',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c%20nu%C3%B4i.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'Snakehead fish',
        value: '1 unit',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'Rice',
        value: '200g',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg'
    },
    {
        text: 'Fresh squid',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'Dried shrimp',
        value: '50g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20kh%C3%B4.jpg'
    },
    {
        text: 'Secondary ingredients',
        value: 'Bean sprouts, onions, cilantro, purple onions, peanuts, lemon, ginger, and chili',
        image: 'https://buhkhkt.github.io/CHINH/NLP.jpg'
    },
    {
        text: 'Spices',
        value: 'Salt, sugar, cooking oil, fish sauce,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
]

const cachlambientau = [
    { 
        text: 'basa fish', 
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20ba%20sa.jpg'
    },
    { text: 'alligator gar', image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%A5u.webp' },
    { 
        text: 'catfish', 
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C4%83ng.jpg' 
    },
    { text: 'Pomegranate seeds', image: 'https://buhkhkt.github.io/CHINH/h%E1%BA%A1t%20l%E1%BB%B1u.webp' },
    { text: 'Sticky rice', image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg' },
    { text: 'brown rice', image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20l%E1%BB%A9c.jpg' },
    { text: 'shrimp', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA.jpg' },
    { text: 'squid', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20t%C6%B0%C6%A1i.jpg' },
    { text: 'clams', image: 'https://buhkhkt.github.io/CHINH/s%C3%B2%20%C4%91i%E1%BB%87p.jpg' },
    { 
        text: 'electric rice cooker', 
        image: 'https://buhkhkt.github.io/CHINH/ch%C3%A1o%20n%E1%BB%93i%20c%C6%A1m%20%C4%91i%E1%BB%87n.jpg' 
    },
]

const thuongthucthanhpham = [
    {
        text: 'bitter vegetables',
        image: 'https://buhkhkt.github.io/CHINH/rau%20%C4%91%E1%BA%AFng.jpg'
    },
    {
        text: 'bean sprouts',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'banana blossoms',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
]

const CHAOAMMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHÁO ÁM</h1>
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
                        src="https://www.youtube.com/embed/COeDYyIlxGM?list=PLO4xYQBA1oxU8Wh7CFDOoIq3broDVrOX3"
                        title="A Presentation on Cháo Ám"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                ></iframe>
                    
                </div>
            </div>

            

            <FoodContent 
                title="3D Image" 
            >
                <div className="flex flex-col gap-3">

                    <p>                   
                    The “Cháo ám” bowl in the picture is a traditional dish from Trà Vinh, made from rice and broth. The porridge is smooth and emits an enticing aroma. On the surface of the porridge, there are some slices of snakehead fish, accompanied by finely chopped herbs. The “Cháo ám” bowl is a delicious and nutritious dish. The porridge has a sweet and clear taste, with the rich texture of rice, snakehead fish, and aromatic herbs. This dish is suitable for everyone, especially for those recovering from illness or the elderly.
                    </p>

                    <div>
                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600" title="cháo ám" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/02b187e98fc24d03ab5fce9f094d32b9/embed"> </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="General Overview"
                           
            >

                <p>
                "Cháo ám" is a culinary symbol of Trà Vinh. Since stepping foot into this region, you won't be able to resist trying a bowl of "Cháo ám", a unique dish that even its name is intriguing.
                </p>
                <p>
                "Cháo ám" is not an unfamiliar dish, but it has its own origin and a unique story hidden behind its name. The name "Cháo ám" never fails to intrigue those who first set foot here. Initially, it was a dish made from snakehead fish porridge, but the related story gave rise to this name. In the tradition of this region, before becoming a {highlightText('bride')},  every woman had to face a unique challenge: to cook a delicious pot of snakehead fish porridge. This, despite being simple in terms of ingredients, was not an easy task to overcome, given the scrutiny from the mother-in-law. As a result, the pot of snakehead fish porridge became an obsession for young brides, and from then on, it was called "Cháo ám".
                </p>
                <p>
                Despite its ancient origins, this delicious dish has undergone a long journey, making its appearance at Châu Thanh {highlightText('Market')} in the 1930s. Back then, fish congee was a popular breakfast option widely sold at the market and major roads within the district. While the preparation method is not overly complex, to create a delicious bowl of congee, the cook must have experience selecting rice, fish, and spices properly to achieve the distinctive flavor unique to fish congee. The most crucial element is choosing the main ingredient, the snakehead fish. To make a delicious snakehead fish congee, the fish must be fresh and firm. The people of Tra Vinh often prefer to use {renderTooltipText('"wild snakehead fish"', 'ca-loc-dong')} for its distinctive natural flavor. However, due to the increasingly scarce source of fish, people have opted for {highlightText('farmed snakehead fish')} as a substitute. In addition to fish, the use of fragrant rice is also an essential element. Rice for making congee is usually unpolished, not roasted as when making savory congee, in order to preserve its natural, delicious taste and distinctive aroma. When the congee is cooked, it will have a natural and enticing white color, making you forever remember the taste of Trà Vinh's land.
                </p>
                
            </FoodContent>    


            <FoodContent title='The Way To Make "Cháo Ám"'>
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">The traditional way:</h4>

                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                        <span>Step 1: Prepare the fish</span>
                                        <p>Wash the fish thoroughly and remove all the internal parts for fish gut cleaning. Cut off the fish's mouth and tail.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Boil the fish</span>
                                        <p>Boil a pot of water. While waiting for the water to boil, slice the ginger into thin strips and cut the squid into bite-sized pieces. Once the water is boiling, add the fish. When the fish is cooked, remove it from the pot and let it cool. After the fish has cooled, separate the meat from the bones. Next, sauté the purple onions until they turn golden, then add the fish. Stir gently to make the fish firm. Add a little fish sauce and pepper to make the fish meat more flavorful.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Cook the porridge</span>
                                        <p>In a pot, cook the rice porridge for about 30 minutes until it thickens. Then, add squid and dried shrimp to the pot to enhance the sweetness of the porridge. After another 15–30 minutes, when the porridge is fully cooked, prepare various side vegetables and ladle the porridge into a bowl to enjoy with the freshly prepared fish slices.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/7DI2tHNxGqo?list=PLO4xYQBA1oxU8Wh7CFDOoIq3broDVrOX3"
                                        title="The way to make Cháo Ám"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>    

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "Trà Vinh"</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">The Way To Modify:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                "Cháo ám", a culinary icon of Trà Vinh, never ceases to carry within itself diversity and creativity. Bold variations, distinctive highlights for each ingredient and cooking style have transformed "Cháo ám" into a culinary showdown between tradition and innovation. In this culinary map, the snakehead fish, with its characteristic flavor at the forefront, can be replaced by other fish such as {highlightText('basa fish')}, {highlightText('alligator gar')}, or {highlightText('catfish')} to bring about a fresh and diverse feast of flavors. Sauce sets the rhythm of the dish, and it also varies depending on how each person uses it. Congee is no longer limited by its main ingredients. {highlightText('Pomegranate seeds')}, with their unique crispiness, are creating an interesting twist in congee. {highlightText('Sticky rice')} or {highlightText('brown rice')} is changing the color and nutritional value of congee without ever diminishing its worth. In terms of ingredients, some have elevated the humble rice porridge by incorporating seafood, such as {highlightText('shrimp')}, {highlightText('squid')}, or {highlightText('clams')}, creating a fantastic culinary experience. Finally, there are those who dare to step out of the traditional kitchen to cook rice porridge using an {highlightText('electric rice cooker')}. This is a blend of modern convenience and traditional flavors, creating a unique and contemporary porridge. "Cháo ám" is not just a dish; it's a creative journey where everyone can craft their individual taste, symbolizing the essence of the Trà Vinh region.
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="How To Make Dipping Sauce">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Fish sauce: </h4>
                        <div className="grid grid-cols-2 gap-2">
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%201.webp" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%202.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%203.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%204.jpg" className="w-full h-full object-cover"/>

                        </div>

                        <p>
                        Pure fish sauce. Typically, there will be a plate of lemon and chili, and you can add lemon and chili according to your taste.
                        </p>
                    </div>

                    
            </FoodContent>


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    

                    <p>
                    With this delicious "Trà Vinh" dish, there are many ways to enjoy it. You can eat it as a regular porridge, such as organ porridge or seafood porridge. Alternatively, you can learn to savor it in the authentic "Trà Vinh" way to experience its distinctive flavor. Typically, locals will mix the porridge and snakehead fish together and enjoy it quickly and conveniently. To balance the flavors of this dish, people in "Trà Vinh" eat it with {highlightText('bitter vegetables')}, {highlightText('bean sprouts')}, {highlightText('banana blossoms')} and various herbs like onions and cilantro. An important element that contributes to the special taste of this porridge is the dipping sauce. In the past, people in "Trà Vinh" preferred a dipping sauce made from fish sauce, lemon, and chili, mixed thoroughly, and used for dipping the snakehead fish. However, nowadays, to make the dish more widespread and suitable for diverse regional cuisines, people often opt for a dipping sauce with garlic and chili. The sweet taste of the fish, combined with the salty and spicy flavors of the dipping sauce, creates an alluring and irresistible taste, which, in the language of the Western region, is {renderTooltipText('"hết sảy"', 'het-say')} delicious.
                    </p>

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 20,000 VND to 45,000 VND.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>
            

            
        <Tooltip
            anchorSelect=".ca-loc-dong"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Snakehead fish is a freshwater fish commonly found in rural and riverine areas.
                </div>
            }
        />          
        <Tooltip
            anchorSelect=".het-say"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Absolutely fantastic.
                </div>
            }
        />          

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHAOAMMAINTA