import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'young glutinous rice grains',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BA%A1t%20n%E1%BA%BFp%20non.jpg'
    },
    {
        text: 'boxes of these',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BB%99p%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    {
        text: 'offered',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%BAng%20tr%C4%83ng.webp'
    },
    {
        text: 'process',
        image: 'https://buhkhkt.github.io/CHINH/ng%C6%B0%E1%BB%9Di%20l%C3%A0m%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    
    
]

const nguyenlieu1 = [
    {
        text: 'Glutinous rice',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20n%E1%BA%BFp%202.jpg'
    },
    
]

const nguyenlieu2 = [
    {
        text: 'Sweet rice flakes',
        value: '200g',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'Grated coconut',
        value: 'sufficient quantity',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20n%E1%BA%A1o.jpg'
    },
    {
        text: 'Sugar',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
]

const nguyenlieu3 = [
    {
        text: 'Sweet rice flakes',
        value: '1kg',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'Mung beans',
        value: '150g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'Coconut milk',
        value: '800ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'Roasted peanuts',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'Banana leaves',
        value: '4-5 leaf',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'Spices',
        value: 'Sugar, salt, vanilla tube, ...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },

    
]


const nguyenlieu4 = [
    {
        text: 'Sweet rice flakes',
        value: '1kg',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'Grated coconut',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'Coconut milk',
        value: '800ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'Roasted peanuts',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'Banana leaves',
        value: '4-5 leaf',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'Tapioca flour',
        value: 'sufficient quantity',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'Spices',
        value: 'Sugar, salt, vanilla tube, ...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },

    
]


const baoquan = [
    {
        text: 'edible canna',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20dong%20ri%E1%BB%81ng.jpg'
    },
    {
        text: 'lotus leaves',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20sen.jpg'
    },
    
]



const COMDEPMAINTA = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1, ...nguyenlieu2, ...nguyenlieu3, ...nguyenlieu4, ...baoquan];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">SWEET RICE FLAKES</h1>
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
                    src="https://www.youtube.com/embed/Pz5-h_Vykl8?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                    title="A Presentation on Sweet Rice Flakes"
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
                Trà Vinh, a place known for its ethnic and cultural diversity, is not only home to the Kinh people but also to the Chinese and Khmer communities. Thanks to this ethnic diversity, the cuisine here has become incredibly enticing and unique. Among the famous local specialties of Trà Vinh, cốm dẹp stands out as a symbol of the harmonious blend of various cultures.
                </p>
                <p>
                Sweet rice flakes are a special culinary delight, unique to the Khmer people, also known as "Om Bóc" in the Khmer language. Anyone who visits Trà Vinh and doesn't experience the delicate flavor of sweet rice flakes or doesn't try "Bánh tét" sweet rice flakes is truly missing out. Sweet rice flakes are made from {highlightText('young glutinous rice grains')}, harvested early, and then undergo {highlightText('boxes of these')} specialty sweet rice flakes to give to their loved ones and friends.
                </p>
                <p>
                But sweet rice flakes are not just a delicious dish; they also carry spiritual and cultural significance for the Khmer people. During the Ok Om Bok festival, sweet rice flakes are {highlightText('offered')} as a token of gratitude to the moon god. This festival takes place on the 10th lunar month every year to express gratitude to the moon god for bringing favorable weather, abundant harvests, and to seek a prosperous year ahead. Sweet rice flakes are an indispensable part of this celebration, symbolizing reverence and honor for nature and agriculture, keeping the tradition alive.
                </p>
                <p>
                From a cuisine with strong spiritual and cultural significance of the Khmer people in the Southern region, sweet rice flakes have become a renowned specialty of Trà Vinh, captivating all visitors who set foot here. The meticulousness, diligence, and perseverance of the Khmer people in the {highlightText('process')} of making sweet rice flakes reflect their work ethic and patience. Today, sweet rice flakes have become an emblem of Trà Vinh, often purchased as gifts or for personal indulgence. This dish has become an integral part of Trà Vinh's culture and economy, known and cherished by both locals and visitors, showcasing the diversity and uniqueness of Vietnamese cuisine.
                </p>
            </FoodContent>    


            <FoodContent title="The Way To Make Sweet Rice Flakes">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">The traditional way of doing things:</h4>

                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu1.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                        <span>Step 1: Roast glutinous rice</span>
                                        <p>Toasted glutinous rice by placing it in a pan over low heat, stirring continuously until the rice turns golden, slightly charred on the outside, and has a fragrant aroma.</p>
                                    </div>
                                    <div>
                                        <span>Step 2: Peel and press sweet rice flakes</span>
                                        <p>After roasting, the glutinous rice is put into the rice hulling machine to remove the husk. Next, the glutinous rice goes through the pressing machine. And there you have it, we've successfully completed the process of making delicious and fragrant sweet rice flakes.</p>
                                    </div>


                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/PeNjmJy6n_s?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="The way to make Sweet Rice Flakes"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                       

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "THVL Tổng Hợp"</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">Sweet rice flakes mixed coconut:</h4>
                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu2.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                       
                                        <p>We take 200g of sweet rice flakes along with grated coconut and sugar in a bowl. Then, we mix the ingredients evenly. After mixing, we let it sit for about 1 hour to prevent the sweet rice flakes from becoming mushy. And there you have it, a delightful mixture of sweet rice flakes with coconut.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/wa2XPYmUqdY?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="The way to make Sweet Rice Flakes Mixed Coconut"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "An Nhiên Vlogs"</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">"Bánh tét" sweet rice flakes filled with mung beans:</h4>
                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu3.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>We take 150g of pre-prepared mung beans and wash them thoroughly. We sift through the sweet rice flakes to identify any damaged or blackened grains, and discard them.</p>
                                    </div>
                                    <div>
                                        <span>Step 2: Make the filling</span>
                                        <p>I prepared the mung beans in a pot, filled it with water until submerged. Once the beans started boiling, I skimmed off the foam to make the filling smoother. I continued cooking until the water dried up and was absorbed by the beans. After cooking, I mashed the beans evenly. Next, I put the mung beans in a pan with 3 tablespoons of sugar and a pinch of salt, mixing thoroughly for an even blend. Then, I added 3 tablespoons of coconut milk to the filling until it dried up.</p>
                                    </div>
                                    <div>
                                        <span>Step 3: Wrap the filling</span>
                                        <p>We take the kernel and shape it into evenly round pieces.</p>
                                    </div>
                                    <div>
                                        <span>Step 4: Make the cake border</span>
                                        <p>Pour coconut milk into the pot along with a little salt and 2 tablespoons of sugar. Cook until the sugar and coconut milk heat up and dissolve. Next, evenly pour the coconut milk over sweet rice flakes and mix well to allow the sweet rice flakes to expand evenly. Let it sit for a while to allow the coconut milk to absorb, then knead the sweet rice flakes evenly to make it more elastic. Once the sweet rice flakes are soft and form a cohesive mass, it's ready.</p>
                                    </div>
                                    <div>
                                        <span>Step 5: Wrap the cakes</span>
                                        <p>We take a piece of dough, flatten it, then place the filling in and wrap it up, forming a round shape. Next, we roll the dough into a long shape. We take a banana leaf, roll the dough inside, and fold it into four corners, securing it with a rubber band. Then, we use a string to tie the cake.</p>
                                    </div>

                                    <div>
                                        <span>Step 6: Steam the cakes</span>
                                        <p>We just need to steam the cake for 15 minutes, and then we can take it out to enjoy.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/6lrMDZBzWdE?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="The way to make Sweet Rice Flakes Bánh Tét  With Mung Bean Filling"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "ALO TRÀ VINH"</small>
                                    </div>
                                </div>



                                <h4 className="text-xl font-semibold">"Bánh tét" sweet rice flakes filled with coconut:</h4>
                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu4.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>Sifting through the sweet rice flakes to identify any damaged or discolored grains, we discard them.</p>
                                    </div>
                                    <div>
                                        <span>Step 2: Make the filling</span>
                                        <p>We put coconut into the pot along with a cup of sugar and a little salt. Next, we mix well to let the sugar dissolve into the coconut. We take the coconut mixture to dry the coconut filling. When the filling is slightly dry, we add a mixture of tapioca flour and water to create a cohesive consistency. Along with that, we add some green beans, roasted peanuts, and a vanilla tube. Finally, we mix well to blend the ingredients together, and we have completed the coconut filling.</p>
                                    </div>
                                    <div>
                                        <span>Step 3: Wrap the filling</span>
                                        <p>We take the kernel and shape it into evenly round pieces.</p>
                                    </div>
                                    <div>
                                        <span>Step 4: Make the cake border</span>
                                        <p>Pour coconut milk into the pot along with a little salt and 2 tablespoons of sugar. Cook until the sugar and coconut milk heat up and dissolve. Next, evenly pour the coconut milk over sweet rice flakes and mix well to allow the sweet rice flakes to expand evenly. Let it sit for a while to allow the coconut milk to absorb, then knead the sweet rice flakes evenly to make it more elastic. Once the sweet rice flakes are soft and form a cohesive mass, it's ready.</p>
                                    </div>
                                    <div>
                                        <span>Step 5: Wrap the cakes</span>
                                        <p>We take a piece of dough, flatten it, then place the filling in and wrap it up, forming a round shape. Next, we roll the dough into a long shape. We take a banana leaf, roll the dough inside, and fold it into four corners, securing it with a rubber band. Then, we use a string to tie the cake.</p>
                                    </div>

                                    <div>
                                        <span>Step 6: Steam the cakes</span>
                                        <p>We just need to steam the cake for 15 minutes, and then we can take it out to enjoy.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/R7r4Dmsv3Yw?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="The way to make Sweet Rice Flakes Bánh Tét  With Coconut Filling"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "ALO TRÀ VINH"</small>
                                    </div>
                                </div>

                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    When you set foot in Trà Vinh, you can't miss the opportunity to savor one of the local specialties - sweet rice flakes. The unique flavor of flattened rice combined with sugar and coconut creates a truly special culinary experience. Enjoying sweet rice flakes mixed with coconut is a delightful blend of traditional taste and unique aroma. As you open the box of sweet rice flakes, the delightful fragrance of the flakes, combined with the sweet taste of coconut milk, is irresistible. Each soft and smooth grain of sweet rice flakes melts in your mouth, creating a perfect harmony with the delightful aroma and distinctive aftertaste of fresh coconut.
                    </p>

                    <p>
                    "Bánh tét" is a traditional Vietnamese dish, and in Trà Vinh, "Bánh tét" sweet rice flakes is a unique variation. The cake is wrapped in banana leaves, with a delicious layer of sweet rice flakes inside, providing a satisfying taste experience for those indulging in it.
                    </p>
                    <p>
                    Sweet rice flakes sticky rice is a popular local dish in Trà Vinh. It's made from sweet rice flakes, coconut, sugar, and a bit of coconut water, creating a unique dish with rich and creamy flavors. There are also many other dishes made from sweet rice flakes that have delicious and distinctive aromas.
                    </p>

                    <p>
                    Enjoying sweet rice flakes and the culinary delights derived from them is not just about savoring delicious flavors, but also a way for you to explore and honor the culture, traditions, and creativity of the people of Trà Vinh. Don't miss the opportunity to join this unique culinary journey when you visit this land.
                    </p>                        
                </div>
            </div>
            </FoodContent>


            <FoodContent title="Store">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20b%E1%BA%A3o%20qu%E1%BA%A3n.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                    In general, sweet rice flakes should be stored in a dry, cool place and separated into different types. It's not advisable to stock too many fresh sweet rice flakes at room temperature as they can quickly spoil. Here are some specific ways to preserve sweet rice flakes:
                    </p>
                    <div>
                        <p><b>For fresh sweet rice flakes used during the day:</b></p>
                        <p>
                        To keep sweet rice flakes fresh and flavorful, it's best to wrap them in {highlightText('edible canna')} or {highlightText('lotus leaves')} as the seller might have already done when you purchased them. This method not only prevents the sweet rice flakes from drying out but also enhances their aroma with the infused fragrance of lotus leaves.
                        </p>
                        <p>
                        However, because it's fresh sweet rice flakes, it's best to use them on the same day rather than overnight. You should consume sweet rice flakes within 6 hours if left at room temperature during summer or early fall, as prolonged exposure may cause them to spoil quickly due to the high temperature.
                        </p>
                        <p>
                        If you store sweet rice flakes in a place with air conditioning, which may lead to them drying out, make sure to wash your hands thoroughly. Then, moisten your hands with filtered water, mix the sweet rice flakes evenly, and wrap them back up with lotus leaves as originally packaged before continuing to use.
                        </p>
                    </div>
                    <div>
                        <p><b>Store sweet rice flakes in the refrigerator:</b></p>
                        <p>
                        If you want to store sweet rice flakes in the refrigerator for long-term use, from 6 months to 1 year, put the fresh sweet rice flakes in plastic bags or containers, then place them in the freezer compartment of the refrigerator.
                        </p>
                        <p>
                        When you need to use sweet rice flakes, simply take out the desired amount, spread it evenly on a tray, and thaw it by gently blowing air with a fan. Then, it's ready for use.
                        </p>
                    </div>                        
                                           
                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 25,000 VND to 35,000 VND per 500g.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default COMDEPMAINTA