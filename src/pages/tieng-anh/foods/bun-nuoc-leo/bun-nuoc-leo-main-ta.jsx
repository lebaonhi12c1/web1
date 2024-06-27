import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'fresh coconut water',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'crushed lemongrass',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20%C4%91%E1%BA%ADp%20d%E1%BA%ADp.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'Fresh rice vermicelli',
        value: 'sufficient to eat',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'Prahok',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg'
    },
    {
        text: 'Straw mushroom',
        value: '300g',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BA%A5m%20r%C6%A1m.jpg'
    },
    {
        text: 'Auttum crosscus',
        value: '50g',
        image: 'https://buhkhkt.github.io/CHINH/Ng%C3%A3i%20B%C3%BAn.jpg'
    },
    {
        text: 'Lemongrass, finely minced lemongrass, chili',
        value: 'sufficient to eat',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20c%C3%A2y%20s%E1%BA%A3%20b%C4%83m%20%E1%BB%9Bt.jpg'
    },
    {
        text: "Pig's blood",
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/huy%E1%BA%BFt%20heo.jpg'
    },
    {
        text: 'Snakehead fish',
        value: '1',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'Side vegetables',
        value: 'Banana blossom, bean sprouts, chives...',
        image: 'https://buhkhkt.github.io/CHINH/rau.jpg'
    },
    {
        text: 'Spices',
        value: 'Sugar, salt, MSG,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'Vegan "Bún nước lèo"', image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20chay.jpg' },
    
]

const thuongthucthanhpham = [
    {
        text: 'banana blossom',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'water lily',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%B4ng%20s%C3%BAng.jpg'
    },
    {
        text: 'the pot',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BB%93i%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o.jpg'
    },
    {
        text: 'roasted pork',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20heo%20quay.jpg'
    },
    {
        text: 'blood sausage',
        image: 'https://buhkhkt.github.io/CHINH/huy%E1%BA%BFt%20%C4%83n%20k%C3%A8m.jpg'
    },
    {
        text: 'spring rolls',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20gi%C3%B2.jpg'
    },
    {
        text: 'the finely shredded vegetables',
        image: 'https://buhkhkt.github.io/CHINH/rau%20gh%C3%A9m.jpg'
    },
    {
        text: 'irresistible flavor',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91i%E1%BB%81u%20%C4%83n%20v%E1%BB%9Bi%20b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o.jpg'
    }
]

const BUNNUOCLEOMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÚN NƯỚC LÈO</h1>
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

                <div classNa    me="rounded-2xl shadow overflow-hidden">
                <iframe
                    className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                    src="https://www.youtube.com/embed/rl-AeCGEyAg?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                    title="A Presentation on Bún Nước Lèo"
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
                    In the depicted bowl of vermicelli soup, the broth is rich and flavorful with the distinctive aroma of fermented fish sauce. The vermicelli noodles in the bowl are fresh, small in size, and delightfully tender. The bowl also includes various accompaniments such as roast pork, spring rolls, blood sausage, and more, adding both deliciousness and diversity to the dish. Additionally, assorted fresh vegetables like bean sprouts and banana blossoms have been thoroughly cleaned and included.                                       
                    </p>

                    <div>
                        <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600" title="bún nước lèo" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/caa156d2f40a44618cefaa977181d750/embed"> </iframe>

                       
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="General Overview"
                           
            >
                <p>
                The "Bún nước lèo" dish, delicious and unique, is always the top choice for those who appreciate pure culinary delights. This is a specialty of the Khmer people, and "Bún nước lèo" has evolved into a culinary masterpiece highly favored in many regions. However, "Bún nước lèo" in Trà Vinh is truly rich and distinctive, leaving a lasting impression on those who savor it. The secret to the success of this dish begins with the selection of prahok, a delicate fish paste made from various types of fish. Prahok is the soul of "Bún nước lèo", imparting its unique flavor and dissolving instantly when it comes into contact with boiling water. Makers of prahok must adhere to strict standards and often use clay pots to cook the paste, preserving its distinct flavor. Many also add {highlightText('fresh coconut water')} and {highlightText('crushed lemongrass')} to the broth, creating a layer of exquisite fragrance.
                </p>
                <p>
                "Bún nước lèo" is not just a hearty, rustic dish but also a culinary symbol proudly showcased by the people of Trà Vinh. It doesn't only attract local visitors but has also become an emblem of Trà Vinh, making tourists from all around the world aware and eager to try it at least once. Exploring the land of rivers and waters in the early morning and savoring a steaming bowl of "Bún nước lèo" is an unforgettable experience, taking you through various levels of a gustatory journey.
                </p>
            </FoodContent>    


            <FoodContent title='The Way To Make "Bún Nước Lèo"'>
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
                                        <p>Cut the lemongrass and pound it to release the fragrance. Divide the auttum crosscus into two parts: one part peel, finely chop it along with the chili, and mix it with the finely chopped lemongrass. Grill the remaining part to bring out the aroma. Take 300 grams of straw mushrooms, remove the outer layer, and wash them thoroughly. Then, finely chop the straw mushrooms. Clean 500g of pig's blood, cut it into bite-sized pieces, and briefly blanch them. Wash all the accompanying vegetables and add them to a pot, mixing them thoroughly.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Boil blood</span>
                                        <p>We bring the pot of boiling water to a boil and blanch the meat briefly to prevent it from becoming fishy.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Boil the broth</span>
                                        <p>Put 400g of prahok in a pot and cook until the fish paste boils and dissolves. Once the paste releases its aroma and the meat dissolves, turn off the heat. Boil 4 liters of water in another pot and add the crushed lemongrass. When the water is boiling, add snakehead fish, finely chopped lemongrass after mixing, and crushed, grilled auttum crosscus into the pot. After boiling for some time, the fish in the pot will be cooked. Remove all the fish and add the straw mushrooms. Strain the previously boiled fish paste into the pot. Add 1,5 teaspoons of MSG. After removing the fish, proceed to separate the meat from the bones, being careful not to leave any bones. Add the blood, which has been boiled, and the separated fish meat to the broth. Now, all you have to do is wait for the broth to boil for about 5 minutes before enjoying it.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/ZcSbC6HsWCg?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                                        title="The way to make Bún Nước Lèo"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "ALO TRÀ VINH"</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">The Way To Modify:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                "Bún nước lèo" in Trà Vinh is a symbolic dish of southern Vietnam. The aromatic bowl of noodles and the delectable broth create an irresistible flavor universe. But the story doesn't stop there. In the innovative land of Trà Vinh, people are always ready to refresh and improve. "Bún nước lèo" in Trà Vinh has undergone a creative transformation, evolving into countless variations to cater to the preferences and needs of every diner. {highlightText('Vegan "Bún nước lèo"')}immerses the soul in a delicious and mesmerizing vegetarian dish, featuring a fragrant and delicate broth made from leafy greens and mushrooms. "Bún mắm nước lèo", instead of the traditional broth, introduces a rich and salty flavor, blending harmoniously with noodles and seafood. "Bún nước lèo" with fish and grilled meat, a unique creation, awakens the palate with the harmonious combination of fresh fish and savory grilled meat. "Bún nước lèo" with henicorhynchus offers the distinctive taste of this fish, incorporated into the bowl of "Bún nước lèo", providing a fresh experience. Finally, the special "Bún nước lèo" from restaurants and eateries represents the exquisite creativity of the chefs, ensuring that each bowl is a unique culinary masterpiece. "Bún nước lèo" in Trà Vinh is not just a meal but a symbol of diversity, creativity, and the fusion of various flavors. When you set foot in Trà Vinh, you not only savor a delicious dish but also embark on a journey to explore the richness and uniqueness of the local cuisine.
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="How To Make Dipping Sauce">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Chili vinegar:</h4>
                    
                        <p>
                        We take half a tablespoon of salt and add it to the water, then boil the chili for about 2 minutes. Add 100ml of vinegar, a tablespoon of sugar, and a teaspoon of MSG, stir until well dissolved. After boiling the chili, put it in a blender along with garlic. Blend until smooth and then mix it with the vinegar mixture, and you'll have a delicious chili vinegar mixture to make your food even more flavorful and explosive for your taste buds.
                        </p>
                    </div>
                    <div>
                    <iframe
                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                        src="https://www.youtube.com/embed/Fc2lHkR16nk?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                        title="The way to make Chili Vinegar"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                    ></iframe>
                           
                            <small className="italic block text-center">Source: excerpt from the YouTube channel "Sống Khỏe"</small>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">Chili salt:</h4>
                        <div>
                            <p>
                            We put rock salt in a pan and roast it. While roasting, we also crush it. When the salt becomes smooth and starts to dry, we add ground chili and stir it well to evenly distribute the chili into the salt. Remember to stir it continuously because if you don't, the salt will burn. After the salt mixture is evenly roasted, we add finely ground sugar. After about 3-5 minutes, when the mixture has a spicy and aromatic scent, we turn off the stove and can transfer it into a jar for storage.
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/3iFT0lh26cc?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="The way to make Chili Salt"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            <small className="italic block text-center">Source: excerpt from the YouTube channel "Anh Lee BTR"</small>
                        </div>
                    </div>
            </FoodContent>


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    In a bowl, you select each silky strand of noodles, filling it up. Add in fresh vegetables, {highlightText('banana blossom')}, delicious water spinach and crispy {highlightText('water lily')} , combining to create a beautiful and fresh natural picture. When you ladle out steaming hot broth from {highlightText('the pot')}, each drop of broth invades the space and creates a distinct aroma, making the noodle soup pot more enticing than ever. Diners have the freedom to customize their taste. They can add chili vinegar to make the dish tangy, spicy, and even more delicious.
                    </p>

                    <p>
                    You also won't want to miss out on enticing side dishes like {highlightText('roasted pork')} and {highlightText('blood sausage')}, {highlightText('spring rolls')}. Crispy and delicious roasted pork, with its flavorful blood used to create a delightful dipping sauce with vinegar and chili, offers an incredibly appealing taste. In Trà Vinh, those who make "Bún nước lèo" are even more meticulous when it comes to preparing {highlightText('the finely shredded vegetables')} such as banana blossoms, water lily, and water spinach, creating a uniquely harmonious blend. In cashew season, people even crush some cashew nuts to sprinkle on salads, creating an {highlightText('irresistible flavor')} . "Bún nước lèo" in Trà Vinh is not just an ordinary popular dish, but also a rich and unique culinary masterpiece.
                    </p>

                    <p>
                    When you have the chance to visit this region, set aside all worries and stop by a roadside eatery. Order a bowl of "Bún nước lèo" and savor it; you'll understand that this dish is not just food but an indispensable part of your journey to explore this remarkable land. Don't miss the opportunity to experience the unique and refined flavor of "Bún nước lèo", a specialty of Trà Vinh.
                    </p>

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 12,000 VND to 20,000 VND.</p>
                        <p>But the price may increase if you order additional side dishes such as roasted pork, spring rolls, blood sausage,...</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>                              
            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BUNNUOCLEOMAINTA