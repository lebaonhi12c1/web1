import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'Hồ Chí Minh City',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20tphcm.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'pork shank',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%B2%20heo.webp'
    },
    {
        text: 'pork bones',
        image: 'https://buhkhkt.github.io/CHINH/x%C6%B0%C6%A1ng%20%E1%BB%91ng%20heo.webp'
    },
    {
        text: 'fresh rice noodles',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BB%A3i%20b%C3%A1nh%20canh.webp'
    },
    {
        text: 'rice flour',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20g%E1%BA%A1o.jpg'
    },
    {
        text: 'pork offal',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99%20l%C3%B2ng%20heo.jpg'
    },
    {
        text: 'spices',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
   
]





const BANHCANHMAINTA = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÁNH CANH BẾN CÓ</h1>
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
                    src="https://www.youtube.com/embed/yqi80cq02ME?list=PLO4xYQBA1oxVDRzXzjLUPhnlEC5JMx628"
                    title="A Presentation on Bánh Canh Bến Có"
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
                    "Bánh canh" is a popular dish in the Southern Mekong Delta region of Vietnam. Depending on personal taste and ingredients, you can find various types of "Bánh canh". However, when mentioning Trà Vinh, one cannot overlook the traditional dish known as "Bánh canh Bến Có". "Bánh canh Bến Có" has become a culinary symbol in this region for over 20 years. It has been a staple on the menu of Trà Vinh locals for a long time and has attracted visitors from all around. The distinct flavor of this dish leaves a profound impression on anyone who tries it, making them want to come back for more.
                    
                </p>
                <p>
                    The story begins in the 1980s, when a mother with six children opened a "Bánh Canh" food cart right next to Bến Có Bridge. With passion and traditional secrets, they gradually developed their business. After the mother passed away, the six children continued the legacy and expanded the "Bánh Canh Bến Có" brand. Today, the "Bánh Canh Bến Có" brand has become famous and has expanded into the Western provinces, reaching as far as {highlightText('Hồ Chí Minh City')} and participating in culinary events nationwide. This "Bánh Canh" dish has become an icon of Trà Vinh and a must-visit stop for tourists when they come here.
                    
                </p>
            </FoodContent>    


            <FoodContent title="The Way To Make 'Bánh Canh Bến Có'">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Ingredients:</h4>

                                <div>
                                    <p>
                                        To prepare the dish "Bánh canh Bến Có", which embodies the essence of Trà Vinh's land, you will need to gather some fresh ingredients. These include {highlightText('pork shank')}, a few {highlightText('pork bones')} to enhance the broth's richness, {highlightText('fresh rice noodles')} made from {highlightText('rice flour')}, and a small amount of {highlightText('pork offal')}, including heart, liver, and kidney. You will also need traditional daily {highlightText('spices')} like salt, sugar, MSG, fish sauce, chili, pepper, shallots and cilantro.
                                        
                                    </p>
                                    
                                </div>
                                <h4 className="text-xl font-semibold">Traditional method:</h4>
                                <div >
                                    <p>
                                        Over the centuries, Vietnamese cuisine has evolved with a rich and diverse array of flavors. Among them, the dish "Bánh canh Bến Có" stands out for its distinctiveness and unique taste that cannot be easily replicated. This dish has become a symbol of the country's unique culinary culture, drawing food enthusiasts from all over to come and savor its flavors. "Bánh canh Bến Có" is not just delicious; it's a symbol of culinary excellence and the marvel of combining unique ingredients with traditional secrets. It is certain that anyone who has ever tasted this dish will be captivated by its extraordinary flavor.
                                    </p>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            <FoodContent title="How To Make Dipping Sauce">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Fish sauce:</h4>
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

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        To fully enjoy a bowl of "Bánh canh Bến Có", you can't do without accompanying ingredients such as lean meat, pork knuckles, pig's offal, including liver, heart, and intestines, and a handful of fresh greens. For a complete bowl of "Bánh canh", when serving, blanch the noodles in boiling water, then place them in a bowl, layering with the meat, pig's offal, scallions, and a dash of black pepper on top. Pour the broth until it covers the noodles, and it's at its best when served hot.
                    </p>

                    <p>
                        For people in the Western region, an indispensable condiment is a bowl of pure fish sauce accompanied by a few slices of fresh red chili peppers to enhance the flavor. The rich taste of the dipping sauce, combined with the ingredients, makes this rustic dish even more flavorful and delicious than ever.
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 45,000 VND to 55,000 VND per bowl.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BANHCANHMAINTA;