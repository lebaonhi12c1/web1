import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'around their homes',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20xung%20quanh%20nh%C3%A0.webp'
    },
    {
        text: 'appearance',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20h%C3%ACnh%20th%C3%B9.webp'
    },
    {
        text: 'It',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A2y%20qu%C3%A1ch.jpg'
    },
    {
        text: 'the outer skin',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20gi%C3%A0.jpg'
    },
    {
        text: 'Young wood apples',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20non.jpg'
    },
]

const nguyenlieu1 = [
    {
        text: 'The wood apple',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A1i%20qu%C3%A1ch.jpg'
    },
    {
        text: 'Sugar',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'Ice water',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C3%A1%20nhuy%E1%BB%85n.jpg'
    },
]

const nguyenlieu2 = [
    {
        text: 'The wood apples ',
        value:'6 fruits',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A1i%20qu%C3%A1ch.jpg'
    },
    {
        text: 'Rice wine',
        value:'4 liters',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20g%E1%BA%A1o.jpg'
    },
]


const thuongthucthanhpham = [
    {
        text: 'lettuce',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'spinach',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BA%A3i%20th%E1%BA%A3o.jpg'
    },
    {
        text: 'watercress',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%B4ng%20s%C3%BAng.jpg'
    },
    {
        text: 'slices of star fruit',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1t%20kh%E1%BA%BF%20chua.webp'
    },
    {
        text: 'green bananas',
        image: 'https://buhkhkt.github.io/CHINH/chu%E1%BB%91i%20ch%C3%A1t.jpg'
    },
    {
        text: 'fish sauce',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BB%A7%20m%E1%BA%AFm.jpg'
    },
    {
        text: 'wood apple smoothie',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20d%E1%BA%A7m.jpg'
    },
    {
        text: 'Wood apple wine',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20qu%C3%A1ch.jpg'
    },
]

const TRAIQUACHMAINTA = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1,...nguyenlieu2, ...thuongthucthanhpham];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">WOOD APPLE</h1>
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
                    src="https://www.youtube.com/embed/-EM8KCty42k?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                    title="A Presentation on Wood Apple"
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
                    In the picture, we can see two halves of a wood apple with thick rinds in two different colors because the wood apple in the photo is not fully ripe yet. One side of the wood apple is grayish-white, indicating the unripe part, with small scattered seeds and fibers. The flesh inside is white, crispy, and slightly sour. The other half of the wood apple is dark brown, showing the ripe part, with more seeds and tough fibers in the inner flesh. When eaten, it has a sweet and slightly bitter taste with a distinctive fragrance.
                    </p>

                    <div>
                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"title="trái quách" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/bef92e4318e7449cab88c1df175774ce/embed">
                        
                         </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="General Overview"
                           
            >
                <p>
                The wood apple tree, a soil-picky species, can be found throughout Vietnam, from the north to the south, but the fruit is only seen in the Mekong Delta region. This is a special tree, not commonly found and grown in only a few places. The wood apple tree is often cultivated in areas like Cầu Kè and Trà Vinh, where it is usually intermixed with other fruit-bearing trees. In particular, the Khmer people enjoy planting wood apple trees {highlightText('around their homes')} to create shade and have the opportunity to enjoy the delicious fruit.
                </p>
                <p>
                Wood apples, also known as "Gáo", doesn't have an alluring {highlightText('appearance')}. However, its distinctive flavor is what captivates people and keeps them coming back for more. The wood apple tree belongs to the Sapotaceae family and thrives in non-waterlogged environments. {highlightText('It')} grows to a height of approximately 7-10 meters, and after about 4 years of cultivation, it starts bearing fruit, with the fruit yield increasing as the tree matures. Wood apples are round in shape, smaller than a plastic soccer ball, with gray-white, rough skin. The wood apple season typically falls in December and January. When ripe, the fruit's pulp turns dark and contains numerous small seeds resembling drumsticks, which naturally fall at night. Despite falling from a considerable height, they are not prone to breaking due to their tough outer shell. Therefore, harvesting wood apples is not as challenging as with some other fruit varieties. People in Trà Vinh usually wait for wood apples to ripen and fall before harvesting them, as picking them too early and ripening them with vinegar doesn't make the fruit as fragrant and delicious as when it ripens on the tree.
                </p>
                <p>
                When the wood apple reaches the desired ripeness, people often don't eat it right away. Instead, they let the fruit ripen thoroughly, allowing {highlightText('the outer skin')} to become slightly moldy and soft before consuming it. While it is possible to eat the wood apple immediately, the flavor at this stage is not the best. {highlightText('Young wood apples')} have a sour and astringent taste. The longer the wood apple ripens, the darker the flesh becomes, and the more pronounced the aroma.
                </p>
                <p>
                Apart from being a delicious fruit, in folklore, wood apples are also known for their numerous medicinal uses, such as cooling the body, treating constipation, diarrhea, bronchitis, strengthening the bones, nourishing the kidneys, and many other benefits. Therefore, dishes made from wood apples, a humble fruit, are often favored in the lives of rural people. Typically, there are three ways to prepare wood apples: consuming them with fish sauce, blending them into smoothies, or soaking them in alcohol.
                </p>
            </FoodContent>    


            <FoodContent title="Some Common Ways Of Eating">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Wood apple smoothie:</h4>

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
                                        <span>Step 1: Separate the wood apple flesh</span>
                                        <p>We crack open the wood apple shell and use a spoon to scoop out the flesh of the wood apple into a glass.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Processing</span>
                                        <p>We add 2 teaspoons of sugar in there. If you want, you can add a little water to make it smoother. We stir the sugar until it dissolves into the wood apple. Then, all we need to do is add ice water, and it's ready to enjoy.</p>
                                    </div>

                                    
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/N2SyKUjQ7sg?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                                        title="The way to make Wood Apple Smoothie"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel: "GẤU KUTE TV"</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">Wood apple wine:</h4>

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
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>We clean the wood apple shells.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Soaking in alcohol</span>
                                        <p>We crush wood apples and put them in a container. Add 4 liters of rice wine to the container, and let it sit for a month to create a refreshing wood apple wine.</p>
                                    </div>

                                    
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/9eckCN1_Sqg?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                                        title="The way to make Wood Apple Wine"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                       

                                        <small className="italic block text-center">Source: excerpt from the YouTube channel: "HỮU QUỐC MÓN NGON DỄ LÀM"</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Enjoy The Product">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    Wood apples are a diverse dish with various ways to enjoy, bringing different flavors. When rolling various types of raw vegetables ({highlightText('lettuce')},{' '}
                        {highlightText('spinach')}, {highlightText('watercress')})  with {highlightText('slices of star fruit')} or {highlightText('green bananas')}, into spicy and sweet {highlightText('fish sauce')},  the people of Trà Vinh often roll them together with the pulp of wood apples as the filling. This traditional, Southern-style way of savoring it is extremely enticing, providing diners with a wonderful gustatory experience. Each bite of the tangy and thick wood apple pulp blends harmoniously with the rich dipping sauce, sour tamarind slices, crisp and fresh raw vegetables, gradually infusing your taste buds. As a result, the meal feels light and less overwhelming.
                    </p>

                    <p>
                    One special treat beloved during the summer is {highlightText('wood apple smoothie')}. The flesh of the wood apple is blended with water, crushed ice, sugar, and milk to create a refreshing smoothie that many people enjoy. As you take a bite of the wood apple, savor the crisp, creamy, tangy, and sweet qualities of the fruit's flesh, along with its distinctive aroma enveloping your senses. All of these combine with the sweetness of sugar, the coolness of milk, and the refreshing crushed ice to awaken your taste buds, providing a delightful and invigorating sensation. With a glass of wood apple smoothie, even the most sweltering summer afternoons seem to be relieved.
                    </p>

                    <p>
                    {highlightText('Wood apple wine')} is also one of the proud specialties of the people in Trà Vinh. On special occasions when welcoming esteemed guests, homeowners often serve wood apple wine as a way to express their hospitality and warm-heartedness.
                    </p>

                </div>
            </div>
            </FoodContent>



            <FoodContent title="Store">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                
                </div>

                <div>
                    <p>
                    With each ripe wood apple, you can leave it at room temperature for 2-3 days to achieve a certain level of ripeness and store it for one week.
                    </p>
                </div>
            </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 30,000 VND to 40,000 VND per kilogram.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>
            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default TRAIQUACHMAINTA