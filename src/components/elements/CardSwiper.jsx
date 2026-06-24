import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { ItenaryCard } from './Card'

/**
 * CardSwiper — horizontal swiper of ItenaryCard (variant="itenary").
 *
 * Props:
 *   items  {Array}  — array of itenary objects from data.json
 */
export default function CardSwiper({ items = [] }) {
    if (!items.length) {
        return (
            <p className="text-sm text-gray-400 py-8 text-center">
                Tidak ada data untuk ditampilkan.
            </p>
        )
    }

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={'auto'}
            breakpoints={{
                768:  { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: {
                    slidesPerView: 4
                }
            }}
            className="cardSwiper"
        >
            {items.map((item) => (
                <SwiperSlide key={item.id ?? item.slug}>
                    <ItenaryCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
