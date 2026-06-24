import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Cover from '../components/elements/Cover';
import Intro from '../components/elements/Intro';
import Heading from '../components/elements/Heading';
import Tabs from '../components/elements/Tabs';
import CardList from '../components/elements/CardList';

import data from '../../public/data.json'
import Trivia from '../components/elements/Trivia';
import CTA from '../components/elements/CTA';

const events = data.events
const itenary = data.itenary

function Home() {
    return (
        <>
            <Header />
            <main className="relative bg-white pb-8 px-3 lg:px-4">
                <Cover />
                <Intro />
                <div className="pt-12 mb-40 min-h-[30vh]">
                    <Heading
                        title="Wisata Populer"
                        subtitle="Jelajahi"
                        desc="Nikmati keindahan alam yang menenangkan dan destinasi yang memanjakan mata"
                        link="Lihat Semua Wisata"
                        linkAddress="attraction"
                    />
                    <Tabs />
                </div>
                <div className="pt-12 mb-40 min-h-[30vh]">
                    <Heading
                        title="Fakta Tentang Salatiga"
                        subtitle="Tahukah Kamu?"
                        desc="Kota kecil yang sejuk ini menyimpan banyak cerita unik, mulai dari sejarah kuno, keberagaman budaya, hingga prestasi yang membuat Salatiga dikenal di tingkat nasional."
                        link=""
                        linkAddress=""
                    />
                    <Trivia />
                </div>

                <div className="mb-40">
                    <Heading
                        title="Rencana Perjalanan"
                        subtitle="Rekomendasi"
                        desc="Temukan rencana perjalanan yang dirancang khusus untuk membantu Anda menjelajahi keindahan Salatiga dengan mudah dan menyenangkan."
                        link="Lihat Rencana Perjalanan"
                        linkAddress="itenary"
                    />
                    <CardList items={itenary} variant="itenary" className='grid md:grid-cols-2 gap-4 lg:gap-6' />
                </div>
                <div className="mb-40">
                    <Heading
                        title="Acara & Festival"
                        subtitle="Temukan"
                        desc="Daftar acara dan festival Salatiga, mulai dari perayaan budaya hingga event musik."
                        link="Lihat Semua Acara"
                        linkAddress="event"
                    />
                    <CardList items={events} variant="event" />
                </div>
                <CTA />
            </main>
            <Footer />
        </>
    )
}

export default Home
