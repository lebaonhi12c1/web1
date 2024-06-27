import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'The shape',
        image: 'https://buhkhkt.github.io/CHINH/su%C3%B4ng%20%C4%91u%C3%B4ng%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'shrimp',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA.jpg'
    },
    {
        text: 'pork belly',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20ba%20ch%E1%BB%89.jpg'
    },
    {
        text: 'vermicelli noodles',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'cornstarch',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'sesame oil',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BA%A7u%20%C4%91i%E1%BB%81u.jpg',
    },
    {
        text: 'soy bean sauce',
        image: 'https://buhkhkt.github.io/CHINH/t%C6%B0%C6%A1ng%20h%E1%BA%A1t.jpg'
    },
    {
        text: 'tamarind',
        image: 'https://buhkhkt.github.io/CHINH/me%20chua.jpg'
    }, 
]

const nguyenlieu = [
    {
        text: 'Shrimp',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'Dried shrimp',
        value: '30g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20kh%C3%B4.jpg'
    },
    {
        text: 'Pork ribs / Pork bones',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20s%C6%B0%E1%BB%9Dn%20heo.jpg'
    },
    {
        text: 'Vermicelli noodles',
        value: '3kg',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'White radish',
        value: '300g',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%A7%20c%E1%BA%A3i%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'Rock sugar',
        value: '25g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng%20ph%C3%A8n.jpg'
    },
    {
        text: 'Egg white',
        value: '1 piece',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%B2ng%20tr%E1%BA%AFng%20tr%E1%BB%A9ng%20g%C3%A0.png'
    },
    {
        text: 'Secondary ingredients',
        value: 'Soy bean sauce, garlic, onions, purple onions, herb, scallions, cilantro; lemons, chili, bean sprouts, and herbs to taste;',
        image: 'https://buhkhkt.github.io/CHINH/B%C3%9AN%20SU%C3%94NG%20NLP.jpg'
    },
    {
        text: 'Spices',
        value: 'Salt, sugar, cooking oil, chicken bouillon powder, fish sauce...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'young ribs', image: 'https://buhkhkt.github.io/CHINH/s%C6%B0%E1%BB%9Dn%20non.jpg' },
    { text: 'squid', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20%E1%BB%91ng.jpg' },
    { text: 'baby shrimp', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20t%C3%ADt.webp' }
]

const thuongthucthanhpham = [
    {
        text: 'Boil',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20tr%E1%BB%A5ng%20n%C6%B0%E1%BB%9Bc%20s%C3%B4i.webp'
    },
    {
        text: 'water spinach',
        image: 'https://buhkhkt.github.io/CHINH/rau%20mu%E1%BB%91ng%20ch%E1%BA%BB.png'
    },
    {
        text: 'sliced banana flowers',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'curly lettuce',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'mung bean sprouts',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'Thai basil',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%BAng%20th%C6%A1m.jpg'
    }
]

const BUNSUONGMAINTA = () => {
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
    
    return (
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÚN SUÔNG</h1>
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
                    src="https://www.youtube.com/embed/_P4IX3ojpAk?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
                    title="A Presentation on Bún Suông"
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
                    "Bún suông" in the picture features a light yellow broth, exuding the fragrant aroma of pork bones and spices. The broth has a sweet and savory taste, rich and flavorful. Shrimp rolls float on the surface of the broth, offering a sweet and slightly chewy texture. Inside the bowl, there are thin slices of pork belly and pork skin along with pork bones. The tender and sweet meat has a rich and unctuous flavor. Additionally, the bowl contains a few bean sprouts and herbs.
                    </p>

                    <div>
                        <iframe 
                        className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"
                        
                        title="bún suông" 
                        allowfullscreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking 
                        execution-while-out-of-viewport 
                        execution-while-not-rendered 
                        web-share 
                        src="https://sketchfab.com/models/ed5c62ee4ac0416e956a01ccfe68d7a9/embed" 
                    />
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="General Overview"
                           
            >
                <p>
                As a region where the culinary traditions of three ethnic groups-Kinh, Hoa, and Khmer-converge, a visit to Trà Vinh without savoring the local specialties would be a missed opportunity. Have you ever tried "Bún suông"? "Bún suông" is also known by the more rustic name "Bún đuông". The name associated with this dish has been around for so long that even the eldest locals are not entirely sure of its true origin. They only know that it is a time-honored folk dish that has been passed down from generation to generation in their homeland. 
                </p>
                <p>
                One of the most agreed-upon hypotheses is that it originated from shrimp rolls, the key ingredient that defines this dish. {highlightText('The shape')} of shrimp rolls in the "Bún suông" dish is cylindrical, with a pale yellow color that somewhat resembles a coconut worm. This might have inspired the dish to be named "Bún đuông" at first, which later evolved into "Bún suông". "Bún suông" primarily consists of the main ingredients: {highlightText('vermicelli noodles')}, {highlightText('shrimp')} and {highlightText('pork belly')} . As mentioned earlier, the most crucial component of this dish is the shrimp rolls, so the essential factor for a delicious bowl of "Bún suông" is the quality of the shrimp rolls. To make tasty shrimp rolls strands, fresh and plump shrimp are required. Shrimp, together with finely chopped dried garlic and shallots, will result in a smooth mixture. After seasoning with pepper, salt, {highlightText('cornstarch')} and {highlightText('sesame oil')} to add a vibrant yellow color, the mixture should be further kneaded to achieve the desired firmness of the rolls. Finally, the shrimp rolls is formed into long, slender strands and can be either directly added to a pot of boiling broth or fried in cooking oil. The broth in "Bún suông" also differs from other noodle soups. It is not only made from simmering bones but also features the flavors of {highlightText('soy bean sauce')} and a hint of sourness from {highlightText('tamarind')}, giving it a distinctive dark brown color compared to the typical clear broth found in other noodle soups.
                </p>
                <p>
                "Bún suông" is a delicious and nutritious dish. This dish is a distinctive hallmark of Trà Vinh cuisine while also bearing the rich flavors of Southern Vietnamese cuisine.
                </p>
            </FoodContent>    


            <FoodContent title='The Way To Make "Bún Suông"'>
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">The traditional way of doing things:</h4>

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
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>Wash 1kg of pork ribs with vinegar and salt. Grill the onions for 6 minutes. Rinse 500 grams of shrimp with ice-cold water and salt. Use a clean cloth to pat the shrimp dry. Chop the green onions finely. Sauté the onions until fragrant.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Make shrimp rolls</span>
                                        <p>Put the shrimp in a blender, then add 1 teaspoon of chicken bouillon powder, a little sugar, and a pinch of pepper, and blend well. Put the shrimp mixture into a plastic bag and place it in the freezer. Blend the garlic, scallions, and chili until smooth. After 30 minutes, take the shrimp out and crush it to create a sticky texture. After crushing for about 2 minutes, add 1 egg white, ½ tablespoon of cornstarch, and ½ teaspoon of baking powder. Mix well, and continue to crush for another 5 minutes. Form the shrimp mixture into small, smooth cylinders and place them in a pot of boiling water.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Prepare the broth</span>
                                        <p>Add 3 liters of water, then place the pork ribs in a pot. Add 1 tablespoon of salt, 1 tablespoon of sugar, and the onion after grilling. Skim the foam to help clarify the broth. After removing all the foam, add 1 liter of cold water and continue skimming. Add white radish and 30 grams of dried shrimp to the pot. Bring the water to a boil for about 10 minutes, then turn off the heat, cover, and let the pot sit overnight to make the broth clearer and sweeter. After one night, remove the white radish and onions. Add 25g of rock sugar, 1 teaspoon of salt, 1.5 teaspoons of chicken bouillon, and 1/2 teaspoon of seasoning powder to the pot. Continue skimming. Add a little ground pepper to the pot.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/OY42IT0w1qI?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
                                        title="The way to make Bún Suông"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "Vành Khuyên Lê"</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">The Way To Modify:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                Nowadays, the dish "Bún suông" is no longer made in the traditional way, but it has been modified in various places to become more appealing with additional ingredients. Some places include {highlightText('young ribs')}, {highlightText('squid')}, {highlightText('baby shrimp')}, and more. In other locations, the shrimp rolls are made of long, thin strands like vermicelli, while in some places, they are prepared as thicker, denser strands with a richer color. The broth can vary in sweetness depending on the different methods of simmering the bones, but the difference is not significant. It is often said that the essence of the dish lies in the dipping sauce, so the preparation of the sauce is crucial in creating a distinctive, flavorful experience and ensuring customer satisfaction. You can enjoy "Bún suông" with fish sauce mixed with sliced chili, and in some places, it is served with garlic or black bean sauce for dipping meat and shrimp. Black bean sauce can also be complemented with crushed peanuts to enhance the overall flavor of the dipping sauce. While there are various ways to prepare "Bún suông," the overall taste remains consistent, with the differences lying in the components used and the unique culinary preferences of each individual determining their choice of how to make this dish.
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

                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">Black bean sauce: </h4>
                        <div>
                            <p>
                            Sauté minced shallots, garlic, and chili, then add the shrimp paste mixture and mix it thoroughly by hand. Add 2 tablespoons of soybean sauce to a blender and blend well. After blending, combine the soybean sauce with the fragrant sautéed shallots. Then, add 1.5 tablespoons of sugar and 1/3 teaspoon of MSG.
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/ZrmGmIVoxsk?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="The way to make Black Bean Sauce"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                        
                            <small className="italic block text-center">Source: excerpt from the YouTube channel "Vành Khuyên Lê"</small>
                        </div>
                    </div>
            </FoodContent>


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        {highlightText('Boil')} the vermicelli noodles in hot water, then place them in a bowl along with shrimp, pork leg, and lean meat. Next, pour the broth into the noodle bowl, and you can add sliced chili fish sauce or black bean sauce to dip the meat and shrimp. Common fresh vegetables to accompany vermicelli noodles include {highlightText('water spinach')}, {highlightText('curly lettuce')}, {highlightText('sliced banana flowers')}, {highlightText('mung bean sprouts')} and {highlightText('Thai basil')}.
                    </p>

                    <p>
                    The broth of "Bún suông" has the sweet taste of shrimp, meat, white radish, the tangy flavor of lime or tamarind, the rich taste of peanut sauce, fish sauce, salt, and seasoning. "Bún suông" has a crispy, sweet, and fragrant taste of shrimp. All of these elements harmonize to create an impressive and delicious flavor.
                    </p>

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices </h3>
                        <p>Ranges from 27,000 VND to 40,000 VND.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>
            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BUNSUONGMAINTA