import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

function SVGFacebook() {
    return (
        <svg width="320" height="320" viewBox="0 0 29 29" style={{ width: 140, height: 140 }}>
            <path fill="#fff" d="M0 0h29v29H0z"></path>
           <path fill="#000" d="M0 0h7v1H0zM8 0h4v1H8zM14 0h1v1H14zM17 0h2v1H17zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM11 1h4v1H11zM18 1h2v1H18zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h1v1H9zM11 2h1v1H11zM13 2h2v1H13zM16 2h1v1H16zM19 2h2v1H19zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM10 3h2v1H10zM13 3h1v1H13zM17 3h1v1H17zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM10 4h5v1H10zM16 4h1v1H16zM18 4h2v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM9 5h1v1H9zM11 5h1v1H11zM13 5h2v1H13zM16 5h1v1H16zM20 5h1v1H20zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h2v1H8zM12 7h3v1H12zM16 7h1v1H16zM18 7h3v1H18zM0 8h2v1H0zM3 8h2v1H3zM6 8h1v1H6zM9 8h1v1H9zM12 8h1v1H12zM14 8h2v1H14zM17 8h1v1H17zM19 8h2v1H19zM22 8h1v1H22zM28,8 h1v1H28zM0 9h1v1H0zM2 9h1v1H2zM4 9h1v1H4zM8 9h1v1H8zM10 9h1v1H10zM13 9h2v1H13zM17 9h2v1H17zM21 9h1v1H21zM23 9h2v1H23zM26 9h2v1H26zM0 10h2v1H0zM6 10h2v1H6zM9 10h1v1H9zM12 10h1v1H12zM14 10h4v1H14zM24 10h1v1H24zM26 10h1v1H26zM2 11h1v1H2zM16 11h8v1H16zM25 11h1v1H25zM28,11 h1v1H28zM0 12h1v1H0zM5 12h2v1H5zM8 12h3v1H8zM13 12h2v1H13zM16 12h1v1H16zM20 12h1v1H20zM22 12h1v1H22zM28,12 h1v1H28zM2 13h3v1H2zM7 13h1v1H7zM10 13h1v1H10zM12 13h1v1H12zM14 13h3v1H14zM18 13h1v1H18zM20,13 h9v1H20zM0 14h1v1H0zM4 14h3v1H4zM8 14h1v1H8zM14 14h2v1H14zM18 14h5v1H18zM26 14h1v1H26zM28,14 h1v1H28zM1 15h1v1H1zM3 15h1v1H3zM5 15h1v1H5zM8 15h1v1H8zM10 15h1v1H10zM12 15h3v1H12zM16 15h1v1H16zM23 15h1v1H23zM26 15h1v1H26zM28,15 h1v1H28zM0 16h2v1H0zM3 16h2v1H3zM6 16h1v1H6zM10 16h3v1H10zM15 16h1v1H15zM19 16h2v1H19zM23 16h1v1H23zM25 16h1v1H25zM0 17h6v1H0zM9 17h1v1H9zM11 17h1v1H11zM15 17h1v1H15zM17 17h1v1H17zM19 17h2v1H19zM24 17h1v1H24zM26 17h2v1H26zM0 18h7v1H0zM8 18h1v1H8zM10 18h1v1H10zM12 18h4v1H12zM17 18h1v1H17zM19 18h1v1H19zM24 18h2v1H24zM28,18 h1v1H28zM0 19h3v1H0zM5 19h1v1H5zM9 19h1v1H9zM11 19h1v1H11zM13 19h1v1H13zM15 19h2v1H15zM25 19h2v1H25zM0 20h7v1H0zM9 20h3v1H9zM13 20h1v1H13zM16 20h2v1H16zM20 20h8v1H20zM8 21h1v1H8zM10 21h1v1H10zM12 21h2v1H12zM15 21h1v1H15zM18 21h1v1H18zM20 21h1v1H20zM24 21h2v1H24zM0 22h7v1H0zM11 22h1v1H11zM13 22h1v1H13zM15 22h1v1H15zM18 22h3v1H18zM22 22h1v1H22zM24 22h2v1H24zM0 23h1v1H0zM6 23h1v1H6zM11 23h3v1H11zM16 23h2v1H16zM19 23h2v1H19zM24 23h1v1H24zM27 23h1v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h1v1H8zM10 24h4v1H10zM16 24h1v1H16zM19 24h7v1H19zM28,24 h1v1H28zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM13 25h4v1H13zM18 25h1v1H18zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM9 26h1v1H9zM11 26h3v1H11zM15 26h1v1H15zM18 26h2v1H18zM21 26h1v1H21zM23 26h2v1H23zM26,26 h3v1H26zM0 27h1v1H0zM6 27h1v1H6zM8 27h1v1H8zM11 27h1v1H11zM15 27h2v1H15zM21 27h1v1H21zM24 27h3v1H24zM28,27 h1v1H28zM0 28h7v1H0zM8 28h1v1H8zM10 28h1v1H10zM14 28h1v1H14zM19 28h4v1H19zM24 28h2v1H24z"></path>
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
const CAKHOAIQUANTA = () => {
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

            <FoodContent title="1. Trinh Harpadon Nehereus Hotpot Restaurant">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold self-baseline">Facebook QR Code</span>
                        <div className="flex justify-center">
                            <SVGFacebook />
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold">Or </span>search:{' '}
                        <span>
                            {'"'}Quan Lau Ca Khoai Trinh{'"'}
                        </span>
                    </div>

                    <div>
                        <div>
                            <span className="font-semibold">Address: </span>
                            <span>Trương Văn Kỉnh Street, Ward 1, Trà Vinh City, Trà Vinh Province.</span>
                        </div>
                        <div className="mt-4">
                            <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.886640144137!2d106.3326502747928!3d9.94338909015913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a010ad833b0b99%3A0x287dc91e95160988!2zUXXDoW4gVHJpbmggTOG6qXUgQ8OhIEtob2Fp!5e0!3m2!1svi!2s!4v1703593645502!5m2!1svi!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                       
                           
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

            <FoodContent title="2. 67 Restaurant">
                <div className="flex flex-col gap-4">
                    <div>
                        <div>
                            <span className="font-semibold">Address: </span>
                            <span>Ward 1, Trà Vinh City, Trà Vinh Province.</span>
                        </div>
                        <div className="mt-4">
                            <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9188345442913!2d106.33346437479277!3d9.940711290161715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a011731d99bceb%3A0x9905e7aae8a9b3ce!2zUXXDoW4gxIJuIEdpYSDEkMOsbmggNjc!5e0!3m2!1svi!2s!4v1703593745101!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           
                           
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

export default CAKHOAIQUANTA;
