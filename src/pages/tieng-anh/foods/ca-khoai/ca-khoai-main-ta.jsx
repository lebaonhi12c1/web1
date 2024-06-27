import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'Ba Động',
        image: 'https://buhkhkt.github.io/CHINH/v%C3%B9ng%20ba%20%C4%91%E1%BB%99ng.jpg'
    },
    {
        text: 'Ba Động Beach',
        image: 'https://buhkhkt.github.io/CHINH/bi%E1%BB%83n%20ba%20%C4%91%E1%BB%99ng.jpg'
    },
    {
        text: 'Harpadon nehereus',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20d%E1%BB%93i%20d%C3%A0o.jpg'
    },
]

const nguyenlieu1 = [
    {
        text: 'Harpadon nehereus',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai.jpg'
    },
    {
        text: 'Rice',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg'
    },
    {
        text: 'Onion, chives, mushrooms, garlic',
        image: 'https://buhkhkt.github.io/CHINH/NLP%20c%C3%A1%20khoai.jpg'
    },
    {
        text: 'Seasoning powder',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C3%AAm.jpg'
    },
]

const nguyenlieu2 = [
    {
        text: 'Harpadon nehereus',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai.jpg'
    },
    {
        text: 'Celery, tomatoes',
        image: 'https://buhkhkt.github.io/CHINH/rau%20c%E1%BA%A7n,%20c%C3%A0%20chua.jpg'
    },
    {
        text: 'Green onions, garlic, chili',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%A0nh%20t%E1%BB%8Fi%20%E1%BB%9Bt.jpg'
    },
    {
        text: 'Spices',
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

const CAKHOAIMAINTA = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1, ...nguyenlieu2, ...cachlambientau, ...thuongthucthanhpham];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">HARPADON NEHEREUS</h1>
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
                    src="https://www.youtube.com/embed/ZnKkMvksnv8?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
                    title="A Presentation on Hapardon Nehereus"
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
                Harpadon nehereus, a type of sea fish found in {highlightText('Ba Động')}, Trà Vinh, is not only a popular culinary delight but also an exciting experience for those who appreciate the natural flavors of the sea. When you step onto the shores of {highlightText('Ba Động Beach')}, you'll find yourself immersed in the pristine beauty of nature, with fine white sand and azure waves. This is where {highlightText('Harpadon nehereus')} becomes a part of the local marine ecosystem, thriving on the abundant food sources and resulting in large, delicious, and nutrient-rich flesh. The residents of Ba Động have crafted special dishes using Harpadon nehereus, from Harpadon nehereus cooked with water dropwort and tomatoes to Harpadon nehereus porridge.
                </p>
                <p>
                Each dish creates a unique flavor with a skillful combination of fresh ingredients and natural spices. The natural, fresh, and rich taste of this sea fish will make you nod in approval. And the wonderful thing is that you don't need to be a master chef to enjoy these dishes; eateries in Ba Động and Trà Vinh, from large restaurants to cozy little eateries, are ready to serve you enticing Harpadon nehereus dishes. Get ready to explore the variety of Harpadon nehereus preparation methods and savor the unique flavors of the sea that this fish species brings.
                </p>
               
            </FoodContent>    


            <FoodContent title="Common Dishes Made">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Harpadon nehereus porridge:</h4>

                                <div>
                                    <span className="underline">Ingredients:</span>

                                    <ul>
                                        {nguyenlieu1.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>In the case of Harpadon nehereus, remove the head and clean it. For the herbs like scallions, parsley, and mushrooms, clean them and chop them finely. Sauté the garlic until fragrant.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Cook porridge</span>
                                        <p>First, we pour water into the pot. Once the rice is in the pot and the porridge starts to boil, we add the mushroom and a tablespoon of seasoning powder. Next, we add the Harpadon nehereus. Finally, when the porridge is almost cooked, we add herbs and sautéed garlic, and we have successfully prepared a pot of Harpadon nehereus porridge!</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/BpnMaTY5nGc?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
                                        title="The way to make Harpadon Nehereus Porridge"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "Anh Em Lang Thang"</small>
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold">Harpadon nehereus cooked with celery and tomatoes:</h4>
                                <div>
                                    <span className="underline">Ingredients: </span>

                                    <ul>
                                        {nguyenlieu2.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">The steps to follow:</span>

                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>Chop the tomatoes, green onions, and celery, separating the roots and leaves. For Harpadon nehereus, cut off the head and wash it thoroughly. Wash all types of vegetables.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Processing</span>
                                        <p>I put some cooking oil in a pot and sauté the base of the spring onion until it becomes fragrant. Once the base of the spring onion turns golden, I add water to the pot. Next, I add tomatoes, garlic, and chili to make the broth more flavorful and spicy. Then, I add Harpadon nehereus and season it with 1 tablespoon of sugar, 1 tablespoon of salt, 1 teaspoon of MSG, and 1 tablespoon of fish sauce. Since Harpadon nehereus cooks quickly, you need to simmer it for about 5-10 minutes until the fish is cooked, then transfer it to a plate. Next, I add the spring onion and celery bases first. After about 1-2 minutes, I can add the spring onion and celery leaves. Finally, you can either serve Harpadon nehereus separately on a plate or include it in the hot pot, both are delicious.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/kevxVefMPlY?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
                                        title="The way to make Harpadon Nehereus Cooked With Celery And Tomatoes"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "GẤU KUTE TV"</small>
                                    </div>
                                </div>
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
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    The open sea always exists as an endless treasure trove of natural flavors and abundant food sources. At Ba Động Beach, Trà Vinh, Harpadon nehereus is a precious part of the unique sea cuisine. This type of fish, with its delicious, aromatic, and tender flesh, has become an inspiration for many enticing dishes, among which Harpadon nehereus porridge and Harpadon nehereus cooked with celery and tomatoes stand out the most. Once you take a bite of the smooth, rich Harpadon nehereus, it melts in your mouth like a dream.
                    </p>

                    <p>
                    Harpadon nehereus is not just a type of food, but also an experience of the fresh taste of the sea. Get ready to immerse yourself in the unique flavor of each bite of Harpadon nehereus.
                    </p>

                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 200,000 VND to 250,000 VND per kilogram.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>
            

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CAKHOAIMAINTA