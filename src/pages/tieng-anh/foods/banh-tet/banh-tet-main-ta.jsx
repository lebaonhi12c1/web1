import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import clsx from "clsx";

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'peanuts',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20t%C3%A2y%20ninh.jpg'
    },
    {
        text: 'featuring cashew nuts',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20h%E1%BA%A1t%20%C4%91i%E1%BB%81u.jpg'
    },
    {
        text: 'Peristrophe roxburghiana',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20l%C3%A1%20c%E1%BA%A9m.jpg'
    },
    {
        text: 'green rice filling',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    {
        text: 'rattan strings',
        image: 'https://buhkhkt.github.io/CHINH/d%C3%A2y%20l%C3%A1t.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'Glutinous rice',
        value: '2kg',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20n%E1%BA%BFp.jpg'
    },
    {
        text: 'Coconut milk',
        value: '500ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'Pandan leaf water ',
        value: '500ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20l%C3%A1%20d%E1%BB%A9a.webp'
    },
    {
        text: 'Pork belly',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20ba%20ch%E1%BB%89.jpg'
    },
    {
        text: 'Salted eggs',
        value: 'a few eggs',
        image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20mu%E1%BB%91i.jpg'
    },
    {
        text: 'Mung beans',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'Thai banana',
        value: '10 fruits',
        image: 'https://buhkhkt.github.io/CHINH/chu%E1%BB%91i%20xi%C3%AAm.jpg'
    },
    {
        text: 'Secondary ingredients',
        value: 'Purple onions, garlic',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%A0nh%20t%C3%ADm%20t%E1%BB%8Fi.jpg'
    },
    {
        text: 'Spices',
        value: 'Salt, sugar, meat seasoning, seasoning granules, MSG, ground pepper,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'sườn non', image: 'https://buhkhkt.github.io/CHINH/s%C6%B0%E1%BB%9Dn%20non.jpg' },
    { text: 'mực ống', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20%E1%BB%91ng.jpg' },
    { text: 'tôm tít', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20t%C3%ADt.webp' }
]

const thuongthucthanhpham = [
    {
        text: 'caramelized pork and eggs',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20kho%20h%E1%BB%99t%20v%E1%BB%8Bt.jpg'
    },
    {
        text: 'Chinese onion',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%A7%20ki%E1%BB%87u.jpg'
    },
    {
        text: 'pickles',
        image: 'https://buhkhkt.github.io/CHINH/d%C6%B0a%20mu%E1%BB%91i.webp'
    },
    {
        text: 'Vietnamese pork rolls',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20l%E1%BB%A5a.jpeg'
    },
    
]

const BANHTETMAINTA = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÁNH TÉT TRÀ CUÔN</h1>
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
                    src="https://www.youtube.com/embed/CpCy9TfOOFA?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
                    title="A Presentation on Bánh Tét Trà Cuôn"
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
                Bánh tét" is a traditional Vietnamese cake that has been enjoyed by the Vietnamese people for a long time. Historically, "Bánh tét" has been a staple during festive occasions in Vietnam. Each region in the Mekong Delta typically creates its own version of "Bánh tét" that suits its local preferences. Today, "Bánh tét" has become a specialty in many southern regions, each with its own unique flavor story. Bình Dương and Tây Ninh are renowned for their enticing "Bánh tét" made from glutinous rice and {highlightText('peanuts')}, Đồng Nai impresses with "Bánh tét" {highlightText('featuring cashew nuts')}, Cần Thơ offers a distinctive "Bánh tét" {highlightText('Peristrophe roxburghiana')} and Sóc Trăng presents "Bánh tét" with a delectable {highlightText('green rice filling')}. In Trà Vinh, there's "Bánh tét Trà Cuôn", which, according to local tradition, was created by a Khmer woman named Mrs. Thạch Thị Lết in Cầu Ngang district as a means of livelihood. Over its 80-year history, this cake has become a beloved specialty in the Mekong Delta, cherished by locals and visitors alike. "Bánh tét Trà Cuôn" not only represents a delicious dish but also symbolizes the pride and culinary heritage of Trà Vinh.
                </p>
                <p>
                To create the perfect "Bánh tét", the baker must undergo an intricate process, seeking out the finest ingredients to craft a culinary masterpiece. Right from its appearance, "Bánh tét Trà Cuôn" exudes a sense of {renderTooltipText('"solidity"', 'chac-nich')} and balance when you hold it in your hand. The banana leaf wrapping is tightly secured with {highlightText('rattan strings')} and adorned with a label that makes the "Bánh tét Trà Cuôn" brand shine. As you unwrap the banana leaf, you'll be pleasantly surprised by the smooth, rich layer of glutinous rice enveloping the enticing filling of shiny green beans, tender fatty pork, fragrant dried shrimp, and salted duck egg, creating a marvelous culinary masterpiece. Each bite will make you melt, thanks to the soft, non-excessive glutinous rice combined with the luscious flavors of green beans, fatty pork, salted egg, and dried shrimp. It all culminates in a delightful sensation for your taste buds, leaving you in ecstasy. However, "Bánh tét Trà Cuôn" is not only alluring due to its superb taste but also its nutritional value, promoting good health. Green beans offer cooling and detoxifying properties, while the filling provides ample calories and protein, ensuring sufficient nutrition for everyone.
                </p>
                <p>
                 "Bánh tét Trà Cuôn" is not only a delicious dish but also a symbol of Trà Vinh's culture and culinary pride.
                </p>
            </FoodContent>    
            

            <FoodContent title='The Way To Make "Bánh Tét Trà Cuôn"'>
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

                                <div className="flex flex-col gap-3 mt-6">
                                    <h4 className="text-xl font-semibold">Steps to make "Bánh tét" with meat filling:</h4>
                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>Wash 2kg of glutinous rice thoroughly. Next, clean 400g of mung beans. Take the yolks of salted eggs, rinse them with white wine, and steam them with sesame oil until the yolks of the salted eggs are evenly cooked.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Soak glutinous rice and mung beans</span>
                                        <p>After cleaning the glutinous rice, add water and 1 teaspoon of salt. Soak the rice overnight, approximately 10 hours. The mung beans, after shelling, should also be soaked in water for about 3–4 hours. After 3–4 hours, when the mung beans have swollen, drain the water and let the beans sit to drain excess water. After one night, place the glutinous rice in a strainer to drain excess water and rinse with clean water.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Cook the bean filling</span>
                                        <p>In a pot, add the mung beans along with 1 teaspoon of salt, 1 tablespoon of cooking oil, and 800ml of water. Cover the pot tightly and bring the mung beans to a boil. Once the mung beans start boiling, uncover the pot and skim off any foam that rises to the top. Then, cover the pot again, but not completely sealed, leaving a small vent. After about 15 more minutes, the mung beans will have absorbed most of the water. Seal the pot tightly again and continue cooking for another 10 minutes. Add 1 tablespoon of sugar to the mung beans, stir well, and turn off the heat. Stir the mung beans until they cool and dry.</p>
                                    </div>

                                    <div>
                                        <span>Step 4: Prepare the meat filling</span>
                                        <p>Slice 500 grams of pork belly into thin slices; the thinner, the better. After finishing the slicing, proceed to marinate the meat by adding 1 tablespoon of sugar, 1 teaspoon of seasoning granules, 1 teaspoon of ground pepper, minced purple onions and garlic, and a dash of MSG. Let it sit for about 30 minutes. Take the marinated meat and briefly pan-fry it to make it fragrant and firm.</p>
                                    </div>

                                    <div>
                                        <span>Step 5: Sauté the glutinous rice</span>
                                        <p>Pour 500ml of pandan leaf water into a saucepan, along with 500ml of coconut milk, 100g of sugar, and 30g of salt. Once the mixture comes to a boil, add the glutinous rice and stir well until the rice absorbs all the coconut milk and pandan leaf water.</p>
                                    </div>
                                    <div>
                                        <span>Step 6: Wrap "Bánh tét"</span>
                                        <p>After the mung beans have dried, I put the filling on a food wrap, evenly spreading out the filling, and then place the meat and salted eggs on top, folding the edges of the filling to make it square. I arrange the banana leaves both on the outside and inside, then spread the glutinous rice thinly. Next, after wrapping the filling, I fold both ends of the cake tightly to ensure it's secure. Finally, I use a string to tie the "Bánh tét" firmly in place.</p>
                                    </div>

                                    <div>
                                        <span>Step 7: Steam "Bánh tét"</span>
                                        <p>With the traditional method of steaming "Bánh tét", we can place it in a steamer and line it with banana leaves, then fill the steamer with water along with the "Bánh tét". However, this steaming method can take a long time, ranging from 8 to 9 hours. Therefore, we can use the following method to save time while maintaining the same delicious flavor of "Bánh tét".</p>
                                        <p>Fill a pot with water and bring it to a boil. Once the water is boiling, place the "Bánh tét" on top of the pot and cover it tightly. After about 1 hour, remove the lid and flip the "Bánh tét" to even out the cooking. Then, cover it tightly and steam for another 1.5–2 hours. When the time is up, turn off the heat, keep the "Bánh tét" covered, and let it sit overnight to allow the filling to fully cook and the glutinous rice to become softer and more elastic.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/jYH7NKPSAII?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
                                        title="The way to make Bánh Tét With Meat Filling"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        <small className="italic block text-center">Source: excerpt from the YouTube channel "ALO TRÀ VINH"</small>
                                    </div>



                                    <h4 className="text-xl font-semibold">Steps to make "Bánh tét" with banana filling:</h4>
                                    <div>
                                        <span>Step 1: Prepare the ingredients</span>
                                        <p>Wash 2kg of glutinous rice thoroughly.</p>
                                    </div>

                                    <div>
                                        <span>Step 2: Soak glutinous rice</span>
                                        <p>After cleaning the glutinous rice, add water and 1 teaspoon of salt. Soak the rice overnight, approximately 10 hours. After one night, place the glutinous rice in a strainer to drain excess water and rinse with clean water.</p>
                                    </div>

                                    <div>
                                        <span>Step 3: Prepare the banana filling</span>
                                        <p>Take Thai bananas into a bowl and add 3 tablespoons of sugar, 1 teaspoon of salt, and a little white wine. Mix thoroughly. Marinate the banana mixture for 1–8 hours.</p>
                                    </div>

                                    <div>
                                        <span>Step 4: Sauté the glutinous rice</span>
                                        <p>Pour 500ml of pandan leaf water into a saucepan, along with 500ml of coconut milk, 100g of sugar, and 30g of salt. Once the mixture comes to a boil, add the glutinous rice and stir well until the rice absorbs all the coconut milk and pandan leaf water.</p>
                                    </div>

                                    <div>
                                        <span>Step 5: Wrap "Bánh tét"</span>
                                        <p>We arrange banana leaves into outer and inner layers, then spread the glutinous rice thinly over them. Next, we spread the banana filling on top, then fold the two ends of the "Banh tet" tightly together to encase the filling. Finally, we use a string to secure the "Banh tet" tightly in place.</p>
                                    </div>
                                    <div>
                                        <span>Step 6: Steam "Bánh tét"</span>
                                        <p>With the traditional method of steaming "Bánh tét", we can place it in a steamer and line it with banana leaves, then fill the steamer with water along with the "Bánh tét". However, this steaming method can take a long time, ranging from 8 to 9 hours. Therefore, we can use the following method to save time while maintaining the same delicious flavor of "Bánh tét".</p>
                                        <p>Fill a pot with water and bring it to a boil. Once the water is boiling, place the "Bánh tét" on top of the pot and cover it tightly. After about 1 hour, remove the lid and flip the "Bánh tét" to even out the cooking. Then, cover it tightly and steam for another 1.5–2 hours. When the time is up, turn off the heat, keep the "Bánh tét" covered, and let it sit overnight to allow the filling to fully cook and the glutinous rice to become softer and more elastic.</p>
                                    </div>
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/lmjJgJ5tr4o?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
                                        title="The way to make Bánh Tét With Banana Filling"
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
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201%20.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                    Not only is "Bánh tét Trà Cuôn" delicious and flavorful, but it is also a dish that can be enjoyed in many unique ways. If you visit Trà Vinh during Tet, you should try "Bánh tét" with {highlightText('caramelized pork and eggs')} or "Bánh tét" with {highlightText('Chinese onion')}.
                    </p>

                    <p>
                    Additionally, you can also enjoy it with {highlightText('pickles')} to enhance the flavor. Alternatively, you can enjoy '"Bánh tét" with {highlightText('Vietnamese pork rolls')} or deep-fry it before eating, which is another way to refresh this dish. And whether you're enjoying a traditional, individual piece of cake or a modern twist, the flavor of "Bánh tét Trà Cuôn" remains authentic and rich, much like the beauty of the culture and the people of the Western region.
                    </p>

                </div>
            </div>
            </FoodContent>

            <FoodContent title="Store">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                  
                </div>

                <div>
                    <p>
                    If you want to preserve "Bánh tét", storing it at room temperature can only ensure its quality for 1-2 days. To maintain the quality of "Bánh tét" after bringing it home, you can store the cake in the refrigerator. Using this method, you can store the cake for 3-4 days. Additionally, you can place "Bánh tét" in the freezer compartment of your refrigerator, where it can be preserved for up to 6 months. When you're ready to eat, you can thaw and steam it, and it'll be ready to enjoy immediately. With this storage approach, you won't have to worry about the cake going bad or sour before you have a chance to eat it.
                    </p>

                    
                </div>
            </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />}
                    <div>
                        <h3 className="font-semibold text-lg text-gray-800">Prices: </h3>
                        <p>Ranges from 70.000 to 150.000 VND per roll.</p>
                    </div>

                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={borderBackground} alt="" />} */}
                </div>
            </section>                                
            
            
        <Tooltip
            anchorSelect=".chac-nich"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Firm to the point of being tightly compressed.
                </div>
            }
        />                       
            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BANHTETMAINTA