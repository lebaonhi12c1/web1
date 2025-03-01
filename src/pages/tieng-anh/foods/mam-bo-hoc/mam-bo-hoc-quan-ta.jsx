import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

function SVGFacebook() {
    return (
        <svg width="320" height="320" viewBox="0 0 29 29" style={{ width: 140, height: 140 }}>
            <path fill="#fff" d="M0 0h29v29H0z"></path>
            <path d="M0 0h7v1H0zm8 0h4v1H8zm5 0h3v1h-3zm5 0h1v1h-1zm4 0h7v1h-7zM0 1h1v1H0zm6 0h1v1H6zm5 0h5v1h-5zm6 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm6 0h1v1h-1zM0 2h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm3 0h1v1H9zm2 0h1v1h-1zm2 0h2v1h-2zm5 0h3v1h-3zm4 0h1v1h-1zm2 0h3v1h-3zm4 0h1v1h-1zM0 3h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm4 0h2v1h-2zm4 0h2v1h-2zm3 0h1v1h-1zm5 0h1v1h-1zm2 0h3v1h-3zm4 0h1v1h-1zM0 4h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm4 0h4v1h-4zm5 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm2 0h3v1h-3zm4 0h1v1h-1zM0 5h1v1H0zm6 0h1v1H6zm3 0h1v1H9zm2 0h1v1h-1zm2 0h2v1h-2zm5 0h1v1h-1zm4 0h1v1h-1zm6 0h1v1h-1zM0 6h7v1H0zm8 0h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h7v1h-7zM8 7h2v1H8zm4 0h1v1h-1zm2 0h1v1h-1zm6 0h1v1h-1zM0 8h2v1H0zm3 0h2v1H3zm3 0h1v1H6zm3 0h1v1H9zm3 0h6v1h-6zm7 0h1v1h-1zm3 0h1v1h-1zm6 0h1v1h-1zM0 9h1v1H0zm3 0h1v1H3zm2 0h1v1H5zm2 0h2v1H7zm3 0h1v1h-1zm4 0h1v1h-1zm7 0h1v1h-1zm2 0h2v1h-2zm3 0h2v1h-2zM0 10h1v1H0zm3 0h2v1H3zm3 0h1v1H6zm2 0h2v1H8zm4 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm7 0h1v1h-1zm2 0h1v1h-1zM0 11h1v1H0zm2 0h1v1H2zm2 0h1v1H4zm3 0h2v1H7zm7 0h2v1h-2zm3 0h1v1h-1zm2 0h5v1h-5zm6 0h1v1h-1zm3 0h1v1h-1zM1 12h7v1H1zm8 0h2v1H9zm4 0h2v1h-2zm3 0h1v1h-1zm4 0h1v1h-1zm2 0h1v1h-1zm6 0h1v1h-1zM0 13h1v1H0zm2 0h2v1H2zm3 0h1v1H5zm5 0h1v1h-1zm2 0h1v1h-1zm5 0h2v1h-2zm3 0h9v1h-9zM2 14h2v1H2zm3 0h2v1H5zm3 0h1v1H8zm2 0h1v1h-1zm4 0h4v1h-4zm5 0h4v1h-4zm7 0h1v1h-1zm2 0h1v1h-1zM0 15h2v1H0zm4 0h2v1H4zm3 0h1v1H7zm2 0h1v1H9zm3 0h4v1h-4zm11 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zM0 16h3v1H0zm5 0h2v1H5zm3 0h1v1H8zm2 0h3v1h-3zm9 0h2v1h-2zm4 0h1v1h-1zm2 0h1v1h-1zM0 17h2v1H0zm3 0h2v1H3zm4 0h1v1H7zm2 0h1v1H9zm2 0h1v1h-1zm4 0h1v1h-1zm3 0h3v1h-3zm6 0h1v1h-1zm2 0h2v1h-2zM0 18h2v1H0zm4 0h1v1H4zm2 0h3v1H6zm6 0h4v1h-4zm7 0h1v1h-1zm5 0h2v1h-2zm4 0h1v1h-1zM0 19h2v1H0zm3 0h2v1H3zm6 0h3v1H9zm4 0h1v1h-1zm5 0h1v1h-1zm7 0h2v1h-2zM0 20h2v1H0zm6 0h1v1H6zm3 0h1v1H9zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h3v1h-3zm5 0h8v1h-8zM8 21h3v1H8zm4 0h2v1h-2zm3 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zm4 0h2v1h-2zM0 22h7v1H0zm9 0h3v1H9zm4 0h1v1h-1zm2 0h1v1h-1zm4 0h2v1h-2zm3 0h1v1h-1zm2 0h2v1h-2zM0 23h1v1H0zm6 0h1v1H6zm4 0h4v1h-4zm5 0h1v1h-1zm2 0h1v1h-1zm2 0h2v1h-2zm5 0h1v1h-1zm3 0h2v1h-2zM0 24h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm2 0h2v1H8zm3 0h3v1h-3zm4 0h1v1h-1zm2 0h1v1h-1zm2 0h7v1h-7zm8 0h2v1h-2zM0 25h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zm3 0h2v1h-2zm3 0h1v1h-1zm2 0h1v1h-1zm10 0h1v1h-1zM0 26h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm5 0h3v1h-3zm4 0h1v1h-1zm4 0h1v1h-1zm2 0h1v1h-1zm2 0h2v1h-2zm3 0h3v1h-3zM0 27h1v1H0zm6 0h1v1H6zm2 0h2v1H8zm3 0h1v1h-1zm7 0h1v1h-1zm3 0h1v1h-1zm3 0h3v1h-3zm4 0h1v1h-1zM0 28h7v1H0zm8 0h2v1H8zm6 0h3v1h-3zm5 0h4v1h-4zm5 0h2v1h-2z"></path>
        </svg>
    );
}

function CallTo({ phonenumber }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <a className="text-black font-semibold phonenumber-1 cursor-pointer" onClick={() => setIsOpen(true)}>
                {phonenumber}
            </a>
            <ImageViewer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <a href={`tel:${phonenumber}`} className='flex items-center gap-2 outline-none'>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>

                    Gọi
                </a>
            </ImageViewer>
        </>
    );
}

/* eslint-disable react/no-unknown-property */
const MAMBOHOCQUANTA = () => {
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

    const [isOpenPhoneNumber, setIsOpenPhoneNumber] = useState(null);

    const sampleList = [
        {
            text: `"ANH SHIPPER"`,
            image: 'https://buhkhkt.github.io/CHINH/anh%20shipper.jpg',
        },
        {
            text: `"ANH SHIPPER" `,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-search.jpg',
        },
        {
            text: `"Pages"`,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-page.jpg',
        },

        {
            text: `"Message"`,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-message.jpg',
        },
        {
            text: `"SHIPPER TRÀ VINH"`,
            image: 'https://buhkhkt.github.io/CHINH/shipper%20Tr%C3%A0%20Vinh.jpg',
        },
        {
            text: `"SHIPPER TRÀ VINH" `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-search.jpg',
        },
        

    
        {
            text: `"Pages" `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-page.jpg',
        },

        {
            text: `"Message" `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-message.jpg',
        },
    ];

    const showImageFromText = (text) => () => {
        const getImageIdx = sampleList.findIndex((x) => x.text.toLowerCase() === text.toLowerCase());

        if (getImageIdx > -1) {
            setOpenImage(sampleList[getImageIdx].image);
        }
    };

    const highlightText = (text) => {
        return (
            <span
                className="inline relative text-[#be9f76] font-semibold italic cursor-pointer"
                onClick={showImageFromText(text)}
            >
                {text}
            </span>
        );
    };

    return (
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">FAMOUS EATERIES</h1>
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
                
            </div>

            <FoodContent title="1.Trà Vinh Market">
                <div className="flex flex-col gap-4">
                   

                    

                    <div>
                        <div>
                            <span className="font-semibold">Address: </span>
                            <span>Ward 3, Trà Vinh City, Trà Vinh Province.</span>
                        </div>
                        <div className="mt-4">
                            <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7859.969727800556!2d106.34322600000002!3d9.935217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a017543aee1d03%3A0xd4993464099847f5!2zQ2jhu6MgVHLDoCBWaW5oLCBQaMaw4budbmcgMywgVHLDoCBWaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1703609012161!5m2!1svi!2sus"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                        </div>
                    </div>

                    <div>
                        <p>
                            If you're near a restaurant or have a craving for some delicious food, you can try one of the following ways to order your meal:
                        </p>
                        
                        <ul className="list-[disclosure-closed] pl-5">
                            <li>
                                Method 1: Order food through the delivery service{' '}
                                <div className="text-center">{highlightText(`"ANH SHIPPER"`)}</div>
                                <div>
                                    <ul className="list-none">
                                        <li>Shipping fee: varies depending on the delivery distance</li>
                                        <li>
                                            Phone number:  <CallTo phonenumber="0989529949" />
                                        </li>
                                        <li>
                                            Facebook: Search for {highlightText(`"ANH SHIPPER" `)}, in {highlightText(`"Pages"`)} and click the{' '}
                                            {highlightText(`"Message"`)} button to place an order.
                                        </li>
                                    </ul>    
                                </div>
                            </li>

                            <li>
                                Method 2: Order food through the delivery service{' '}
                                <div className="text-center">
                                    <span className="font-semibold italic">{highlightText(`"SHIPPER TRÀ VINH"`)}</span>
                                </div>
                                <div>
                                    <ul className="list-none">
                                        <li>Shipping fee: varies depending on the delivery distance</li>
                                        <li>
                                            Phone number: <CallTo phonenumber="0961111232" />
                                        </li>
                                        <li>
                                            Facebook: Search for {highlightText(`"SHIPPER TRÀ VINH" `)} in {highlightText(`"Pages" `)}and click the{' '}
                                            {highlightText(`"Message" `)} button to place an order.
                                        </li>
                                    </ul>

                                    
                                </div>
                            </li>
                        </ul>
                    </div>

                    
                </div>
            </FoodContent>

            

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
        </div>
    );
};

export default MAMBOHOCQUANTA;
