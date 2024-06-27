import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'sift the flour',
        image: 'https://buhkhkt.github.io/CHINH/r%E1%BB%95%20r%C3%A2y%20b%E1%BB%99t%20b%C3%A1nh%20r%C3%A2y.jpg'
    },
    {
        text: 'pandan leaves',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20d%E1%BB%A9a.jpg'
    },
    {
        text: 'a soup ladle',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1i%20v%C3%A1.png'
    }, 
]

const nguyenlieu = [
    {
        text: 'Glutinous rice flour',
        value: '200g',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%E1%BA%BFp.jpg'
    },
    {
        text: 'Pandan leaf water',
        value: '120-150ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20l%C3%A1%20d%E1%BB%A9a.webp'
    },
    {
        text: 'Grated coconut',
        value: '150g',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20n%E1%BA%A1o.jpg'
    },
    {
        text: 'Roasted peanuts',
        value: '50g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'Sugar',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'Tapioca flour',
        value: '10g',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'Vanilla tube',
        value: '1 tube',
        image: 'https://buhkhkt.github.io/CHINH/%E1%BB%91ng%20vani.jpg'
    },
]



const thuongthucthanhpham = [
    {
        text: 'hot tea',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A0%20n%C3%B3ng.jpg'
    },
    
]

const BANHRAYMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÁNH RÂY</h1>
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
                    src="https://www.youtube.com/embed/MJvlDMO24iM?list=PLO4xYQBA1oxVtcQx91K4UbaY5yQiwcARE"
                    title="A Presentation on Bánh Rây"
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
                        The dish “Bánh rây” on the plate comes in two different types. One type, with an ivory white color, is made from regular flour without the addition of pandan leaf water for color. The other type, with a green color, is made by mixing pandan leaf water into the dough to add both color and a delightful fragrance, enhancing the overall taste of the cake. The cake carries a subtle aroma, a sweet and refreshing flavor, and a rich texture. The plate of “Bánh rây" presents a harmonious and visually appealing blend of colors. The cake itself is soft, smooth, and delicious. This is a popular snack in Trà Vinh.                                      
                    </p>

                    <div>

                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"title="banh ray" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/d45505ad7c7748b986536cf8913bf002/embed"> </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="General Overview"
                           
            >
                <p>
                "Bánh rây", a traditional Khmer delicacy, is found in many provinces and regions where Khmer people reside. However, these days, "Bánh rây" has become quite rare, with only a few places still selling them in Trà Vinh. In the past, these cakes were known as "Ọm Chiếl" (as referred to by the Khmer community). Over time, based on the various processing steps involved, they came to be known as "Bánh rây" or leaf cakes made from pandan leaves. They are called "Bánh rây" because a mesh basket is used to {highlightText('sift the flour')} into the pan. The name "pandan leaf cake" comes from the fact that for this type of cake to be delicious, the glutinous rice must be ground together with {highlightText('pandan leaves')}. The simple ingredients for preparation include glutinous rice, pandan leaves, grated coconut, peanuts, and sugar. The necessary tools for preparation are just a pan, a strainer, {highlightText('a soup ladle')} and a stove. The ingredients and tools may be simple, but to create delicious cakes, one must go through a meticulous and detailed preparation process. "Bánh rây" is often sold in a takeaway style.

                    
                    
                </p>
                <p>
                    When visiting Tra Vinh or any of the provinces in the Mekong Delta, this simple yet delightful snack is a must-try for travelers. It allows you to experience the authentic culinary culture of the generous and hospitable Khmer people. This pastry is often present on the ancestral altars and offerings during the festive days of the Khmer community, honoring their ancestors and elders.
                </p>
            </FoodContent>    


            <FoodContent title="The Way To Make 'Bánh Rây'">
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
                                        <span>Step 1: Roast peanuts</span>
                                        <p>First, roast 50 grams of peanuts over medium heat, adding a teaspoon of salt to make the peanuts turn golden faster. When the peanut shells have become evenly browned, you can then squeeze and remove the shells.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Make the filling</span>
                                        <p>Take 150g of grated coconut and mix it thoroughly with 100g of white sugar, then let it sit for 15 minutes. After that, add the coconut mixture to a pan and stir it evenly. When the coconut becomes dry, add a vanilla tube to enhance the aroma. Continue stirring until the coconut starts to thicken, then add the peanuts.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Mix the dough</span>
                                        <p>Put 200 grams of glutinous rice flour, 10 grams of tapioca flour, 1 teaspoon of salt, and 150ml of pandan leaf water into a bowl. Pour the water slowly and mix everything by hand, kneading the dough until it becomes smooth.</p>
                                    </div>

                                    <div>
                                        <span>Step 4: Sift the flour and roll the coconut filling</span>
                                        <p>Pass the flour through a sifter. Then, heat the stove and sift the flour evenly into a hot pan, cover it, and wait for about 1 minute. Then, place the filling in the center of the cake. Then, fold the cake in four corners, and we have completed a "Bánh rây".</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/qlLi17qJ8EE?list=PLO4xYQBA1oxVtcQx91K4UbaY5yQiwcARE"
                                        title="The way to make Bánh Rây"
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
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    "Bánh rây" - after tearing it apart, pandan leaf cake exhibits a delightful chewiness and softness. When you take a bite, you'll experience a rich, fragrant flavor emanating from the sticky rice layer that harmoniously blends with the sweet, nutty coconut filling. It's both unique and incredibly delicious. When the cake is fully ripe, it exudes a captivating and unmistakable aroma that's truly one-of-a-kind. When you indulge in it, you'll undoubtedly be surprised by the smooth, crisp texture of the cake, combined with the sweet, refreshing taste of the glutinous rice flour, coconut, or peanuts.
                    </p>

                    <p>
                        The more you eat, the more enchanted you become because of the distinctive flavor. Since the pastry has a thin crust, you won't feel satiated when eating it. It's also perfect to enjoy with {highlightText('hot tea')}!
                    </p>

                </div>
            </div>      
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 5.000 to 10.000 VND.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BANHRAYMAINTA;