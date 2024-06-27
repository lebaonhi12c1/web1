import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'creamy',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20s%E1%BB%87t.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'Makapuno',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p.jpeg'
    },
    {
        text: 'Condensed milk',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BB%AFa%20%C4%91%E1%BA%B7c.jpg'
    },
    {
        text: 'Sugar',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'Crispy roasted peanuts',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'Ice cold',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C3%A1%20nhuy%E1%BB%85n.jpg'
    },
]





const thuongthucthanhpham = [
    {
        text: 'memories',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A8o%20c%C3%A2y%20d%E1%BB%ABa.jpg'
    },
    
]

const DUASAPMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">MAKAPUNO</h1>
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
                    src="https://www.youtube.com/embed/tMUjYecQUyg?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                    title="A Presentation on Makapuno"
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
                Makapuno is a unique fruit. This name originates from the excellence of the coconut flesh, which is soft and rich. This fruit was first discovered in the 1960s in Trà Vinh province, located in the western region of Vietnam, a land renowned for the diversity of delicious and miraculous coconuts. In Trà Vinh, the unique climate and soil have created a distinct genetic mutation found only here. Makapuno cannot be grown anywhere else, making it special and precious.
                </p>
                <p>
                Its value far exceeds that of regular coconuts. What's special is that in the process of propagating makapuno, the ones without wax are selected to be used for breeding, as they have the ability to produce seeds. Makapuno, while delicious, cannot be used for propagation. They are instead utilized to create other flavorful products.
                </p>
                <p>
                If you've ever had the pleasure of savoring makapuno, you'll find yourself immersed in the sweet, luscious richness of the incredibly unique, {highlightText('creamy')} coconut water. However, this type of fruit often yields very few coconuts, typically only about 2 to 3 per tree. This rarity makes them precious and expensive, but it also highlights the value and uniqueness of makapuno, a moist treasure of Trà Vinh.
                </p>
            </FoodContent>    


            <FoodContent title="Some Common Ways Of Eating">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Eat Directly:</h4>
                                <div>
                                    <p>
                                    The simplest way to fully experience the creamy coconut flavor is to consume it directly. When you eat it, you can distinctly taste the rich sweetness and the fragrant aroma of coconut spreading in your mouth. The soft and dense coconut flesh is the special feature that anyone who has tried it will never forget.
                                    </p>
                                </div>


                                <h4 className="text-xl font-semibold">The makapuno with ice and milk:</h4>
                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                        <span>Step 1: Preparing the makapuno</span>
                                        <p>Peel and split the coconut. Next, we separate the coconut and scrape out all the coconut meat into a bowl.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Coconut processing</span>
                                        <p>Add about a tablespoon of sugar and condensed milk into the bowl, and then mix well. After mixing, simply pour the coconut mixture into a glass with ice and a few peanuts, and you're ready to enjoy.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/LOYjPXAur-Q?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                                        title="The way to make The Makapuno With Ice And Milk"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel: "LEO COOKING"</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">Makapuno smoothie:</h4>
                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                        <span>Step 1: Preparing the makapuno</span>
                                        <p>Split the coconut in half. Next, we remove all the coconut meat from the shell.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Blend the smoothie</span>
                                        <p>Put coconut meat in a blender along with condensed milk and 3 tablespoons of sugar. Then, cover the blender and blend until the coconut becomes smooth. Next, add crushed ice and blend together. Keep blending and adding crushed ice until the previous mixture is fully incorporated. When you see that your smoothie is thick enough, stop. Finally, just pour it into a glass and enjoy.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/5TuZiBnV2Co?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                                        title="The way to make Makapuno Smoothie"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    
                
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel: "Tôi là người Bến Tre"</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    Enjoying Trà Vinh's makapuno is a magical experience. It's an incredibly unique culinary icon. The aroma of makapuno is unlike any other. As soon as the knife pierces through the thick shell of the coconut, a sweet and naturally rich fragrance bursts forth, awakening all the senses. When the smooth, tender coconut flesh touches the tongue, an exquisitely sweet flavor begins to enchant every tastebud. Not every type of coconut has the ability to deliver such a refined sensation. This is a superb fusion of taste and natural fragrance.
                    </p>

                    <p>
                    Makapuno from Trà Vinh is not just a type of food; it is a masterpiece of nature. Its rarity makes the tasting experience even more special. This is a high-value and unique food item, which adds an extra layer of excitement to trying it. Besides tantalizing the senses, makapuno also evokes {highlightText('memories')} of the countryside in the Western region of Vietnam, where this coconut variety is cultivated and harvested.
                    </p>
                                            
                    <p>
                    Enjoying it is a way to connect with the culture and unique specialties of the region, and that feeling is truly amazing. Indulging in Trà Vinh's makapuno is a journey to experience the beauty and uniqueness of Trà Vinh through experiences that evoke unforgettable emotions.
                    </p>

                </div>
            </div>
            </FoodContent>



            <FoodContent title="Store">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                    With a freshly harvested makapuno, you can store it at room temperature for 15–20 days. If you want to extend the storage time, place the makapuno in the refrigerator, and it will last for about 25–30 days. For a makapuno that has been deseeded, you can store it in the fridge for up to 3 days or in the freezer for a week. However, to fully enjoy the fresh and sweet flavor of this rare fruit, it is best to consume it within 10 days. Storing it for too long may cause the makapuno to lose its fresh flavor, and the coconut meat may not remain as tender as when freshly harvested.
                    </p>

                    

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 100,000 VND to 300,000 VND per fruit, depending on the quality of each fruit.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default DUASAPMAINTA