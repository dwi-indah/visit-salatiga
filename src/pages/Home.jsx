import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Cover from '../components/elements/Cover';
import Intro from '../components/elements/Intro';
import Heading from '../components/elements/Heading';
import Tabs from '../components/elements/Tabs';

function Home() {
    return (
        <>
            <Header />
            <main className="relative bg-white pb-8 px-3 lg:px-4">
                <Cover />
                <Intro />
                <div className="pt-12 mb-40 min-h-[30vh]">
                    <Heading title="Wisata Populer" subtitle="Jelajahi" desc="Nikmati keindahan alam yang menenangkan dan destinasi yang memanjakan mata" link="Lihat Semua Wisata" linkAddress="attraction"/>
                    <Tabs />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home