import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Parallax } from 'swiper/modules';

import IntroCard from '../intro-card';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '@/hooks/use-auth';

export default function IntroWelcome() {
    const formRef = useRef(null);
    const { isLoggedIn } = useAuth();

    const feedbackHandler = () => {
        if (!isLoggedIn) {
            toast.error('Vui lòng đăng nhập để đánh giá!');
            return;
        }

        formRef.current?.focus();
    };

    return (
        <section className="w-full h-full">
            <Swiper speed={600} parallax={true} modules={[Parallax]}>
                <div
                    slot="container-start"
                    className="absolute inset-0 w-[130%] h-full bg-cover bg-center bg-[url(/images/food-0.jpg)]"
                    data-swiper-parallax="-23%"
                ></div>

                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                <SwiperSlide>
                    <IntroCard
                        title="Beware the hobby that eats"
                        subtitle="I want my food dead. Not sick, not dying, dead."
                        description="A man can live and be healthy without killing animals for food therefore, if he eats meat, he participates in taking animal life merely for the sake of his appetite"
                        onFeedback={feedbackHandler}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <IntroCard
                        title="One should eat to live, not live to eat. "
                        subtitle="Once, during Prohibition, I was forced to live for days on nothing but food and water."
                        description=" If you really want to make a friend, go to someone's house and eat with him... the people who give you their food give you their heart."
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
