import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'flower',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%C3%B4ng%20hoa.jpeg'
    },
    {
        text: 'fish-shaped',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20c%C3%A1%20ch%C3%A9p.webp'
    },
    {
        text: 'rice',
        image: 'https://buhkhkt.github.io/CHINH/c%C6%A1m%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'bread',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20m%C3%AC%20kh%C3%B4ng.jpg'
    },
    {
        text: 'noodles',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    
]

const nguyenlieu = [
    {
        text: 'Ground pork',
        value: '600g',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20heo%20b%C4%83m.webp'
    },
    {
        text: 'Salted egg yolks',
        value: '5 items',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%B2ng%20%C4%91%E1%BB%8F%20tr%E1%BB%A9ng%20mu%E1%BB%91i.webp'
    },
    {
        text: 'Chicken eggs',
        value: '2 eggs',
        image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20g%C3%A0.jpg'
    },
    {
        text: 'Wood-ear mushrooms',
        value: '4g',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BA%A5m%20m%C3%A8o.webp'
    },
    {
        text: 'Vietnamese pork paste',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%B2%20s%E1%BB%91ng.webp'
    },
    {
        text: 'White wine',
        value: '2 tablespoons',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'Carrots',
        value: '20g',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A0%20r%E1%BB%91t.jpeg'
    },
    {
        text: 'Green beans',
        value: '20g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20que.jpg'
    },
    {
        text: 'The spices',
        value: 'common',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'century eggs', image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20b%E1%BA%AFc%20th%E1%BA%A3o.jpg' },
    { text: 'tofu', image: 'https://buhkhkt.github.io/CHINH/t%C3%A0u%20h%E1%BB%A7%20ky.jpg' },
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

const CHAHOAMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHẢ HOA</h1>
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
                    src="https://www.youtube.com/embed/QReSDHbyktg?list=PLO4xYQBA1oxWXmpMIIXHWCHoS9CIj2uSV"
                    title="A Presentation on Chả Hoa"
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
                "Chả hoa", a delicacy hailing from Trà Vinh province, is truly a symbol of finesse and artistry in culinary tradition. It is not just a mere dish but also a work of art, an embodiment of refinement and creativity. Crafted from fresh ingredients such as pork, pate, salted eggs, fried chicken eggs, vegetables, and wood-ear mushrooms, "Chả hoa" is a unique fusion of flavors and aesthetics. When gazing upon "Chả hoa", one cannot help but be captivated by its appearance, which resembles an exquisite {highlightText('flower')}. The salted egg takes center stage, surrounded by a layer of wood-ear mushrooms, a flavorful roll, and a golden, crispy layer of fried chicken eggs, forming a visually appealing roll that harmonizes the distinctive tastes of Trà Vinh.
                </p>
                <p>
                Specifically, there is a unique {highlightText('fish-shaped')} version. This salted egg pate dish, when presented on the table during the Lunar New Year, is not only visually appealing but also incredibly enticing. The flavor of the pate is a delicate and refined blend. It's a truly fantastic and versatile dish that can be enjoyed with {highlightText('rice')}, {highlightText('bread')} or {highlightText('noodles')}, catering to a variety of tastes. Although the process of making pork sausage is not easy and requires precision and delicacy, the end result is a delicious, nutritious, and impressive dish. Pork is finely ground, then combined with other ingredients and wrapped in banana leaves before being steamed until cooked. This creates a delicious and nutritious dish that captivates people's hearts and is a source of pride for the people of Trà Vinh.
                </p>
                <p>
                In addition to its delicious taste and appealing appearance, "Chả hoa" also boasts high nutritional value, containing abundant proteins, fats, vitamins, and essential minerals for the body. If you ever have the chance to visit Trà Vinh, don't miss the opportunity to savor this specialty. "Chả hoa" is not just a dish; it's also a culinary masterpiece that showcases the skill and finesse of local artisans.
                </p>
            </FoodContent>    


            <FoodContent title='The Way To Make "Chả Hoa"'>
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">The common approach:</h4>

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
                                        <p>Soak 4 grams of wood-ear mushrooms in cold water for about 20–30 minutes to allow the mushrooms to expand. Wash the green beans and carrots, then cut the carrots into evenly sized pieces with the green beans. Place a pan on the stove with about 200 ml of water and add ½ teaspoon of salt. Add the carrots to the pan and turn on the heat. Once the water comes to a boil, add the green beans. After 1 minute, drain the water and rinse the vegetables with cold water to keep them fresh and crisp. Next, add 1 tablespoon of white wine to the salted egg yolks to remove any odors. Then, steam the salted egg yolks for 7-8 minutes (if baking, leave them at 160°C for 9–10 minutes).</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Fry the eggs to make the crust</span>
                                        <p>Add 1/5 of a teaspoon of salt and whisk the eggs until they are well combined. Next, heat 1 tablespoon of cooking oil on the stove. Pour the eggs onto the stove and spread them evenly, then wait until the surface of the eggs sets before removing them from the heat.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Prepare Vietnamese pork paste</span>
                                        <p>After soaking the wood-ear mushrooms, remove the stems and cut them into small pieces. Then, add them to 400g of Vietnamese pork paste and mix in ½ teaspoon of onion powder and ½ teaspoon of white pepper. Mix well.</p>
                                    </div>

                                    <div>
                                        <span>Step 4: Wrap the multi-color "Chả hoa"</span>
                                        <p>Place a clean sheet of food wrap on a flat surface, then layer the fried eggs on it, followed by Vietnamese pork paste, a layer of carrots and green beans, and another layer of Vietnamese pork paste. The final layer consists of carrots and green beans. Add a salted egg yolk in the center of the top layer. Roll the wrap tightly, making sure it's round and secure. Then transfer the wrapped roll to aluminum foil. Tie it tightly with string. Steam for about 30 minutes, then allow it to cool for about 5 hours before enjoying.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/482ivvyBzqM?list=PLO4xYQBA1oxWXmpMIIXHWCHoS9CIj2uSV"
                                        title="The way to make Chả Hoa"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "Diễm Nauy"</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">The Way To Modify:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.webp" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.webp" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                In addition to traditional "Chả hoa", there are now various variations of "Chả hoa", with changes in ingredients or preparation methods. Instead of using salted eggs, "Chả hoa" uses {highlightText('century eggs')}. Century eggs have a salty and creamy flavor, creating a unique taste for "Chả hoa". Vegetarian "Chả hoa" are made from vegetarian ingredients such as {highlightText('tofu')}, mushrooms, carrots, and beans, replacing ingredients such as meat or eggs. Vegetarian "Chả hoa" have a light and refreshing flavor, making them suitable for vegetarians. Today's multi-colored "Chả hoa" are also transformed from various ingredients, creating an eye-catching appearance for the dish. Some ingredients are used to replace pork, such as beef, chicken, shrimp, and more. In addition, "Chả hoa" can also be transformed by changing the cooking method. For example, grilled "Chả hoa" have a delicious and crispy flavor compared to steamed "Chả hoa". Transforming flower cakes is a way to create new and attractive dishes. These modified "Chả hoa" dishes are loved by many, especially among young people.
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="How To Make Dipping Sauce">
                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">Pepper and salt with lemon:</h4>
                        
                        <div>
                            <p>
                            We roast the peppercorns to preserve their aroma. We combine coarse salt and fine salt, then roast them for about 7–10 minutes until the salt is dry. Next, we let the roasted peppercorns cool and then ground them while finely chopping some lemon leaves. Finally, we mix all the components with the initial salt mixture and continue to roast them. You can add a bit of chili powder for some spiciness. After a while, turn off the heat and let it cool. Grind some sugar, then pour it into the roasted salt mixture and mix thoroughly. Now we have a delicious peppercorn salt blend. At this point, we sieve the salt mixture into a container for storage. When serving, just squeeze some lemon over the peppercorn salt to enjoy this special blend.
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/aB1mzqC_6Ec?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="The way to make Pepper And Salt With Lemon"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            
                            
                            <small className="italic block text-center">Source: excerpt from the YouTube channel "Cười Khúc Khích"</small>
                        </div>
                    </div>

                    
            </FoodContent>


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.webp" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    "Chả hoa" is a specialty dish from Trà Vinh province, beloved by many for its delicious and visually appealing taste. This dish can be enjoyed in various ways, depending on individual preferences. Traditional "Chả hoa" is typically served with rice, bread, or noodles. When savoring it, you can slice the "Chả hoa" into thin pieces and dip it in a salt and lemon pepper dip. The dipping sauce also adds a unique element to the experience of eating "Chả hoa", so you should choose the best sauce to achieve sensory delight.
                    </p>

                    

                </div>
            </div>
            </FoodContent>


            <FoodContent title="Store">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                    "Chả hoa" is a dish made from pork, pate, salted eggs, fried eggs, vegetables, and wood-ear mushrooms, all wrapped in banana leaves and steamed to perfection. To ensure the longevity of "Chả hoa", there are some important steps to keep in mind. "Chả hoa" should be stored in the refrigerator at a temperature ranging from 0 to 4 degrees Celsius (32 to 39.2 degrees Fahrenheit). This helps keep "Chả hoa" fresh and prevents spoilage. Before placing it in the refrigerator, be sure to tightly wrap "Chả hoa" in plastic wrap or a plastic bag to prevent it from drying out and losing moisture. "Chả hoa" can be stored in the refrigerator and used for up to three days. After three days, it may start to dry out and lose its delicious flavor. If you want to extend its shelf life, you can store it in the freezer compartment of the refrigerator. However, when using it, be sure to thaw "Chả hoa" naturally in the refrigerator or use a microwave for defrosting.
                    </p>

                    

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>500g "Chả hoa" ranges from 100,000 VND to 300,000 VND.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>
            

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHAHOAMAINTA