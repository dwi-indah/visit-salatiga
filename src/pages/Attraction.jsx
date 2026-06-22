import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/elements/Hero'

export default function Attraction() {
    return(
        <>
            <Header />
            <main className="relative min-h-screen bg-white pt-16 pb-8 px-3 lg:px-4">
                <Hero headingId={2} />
            </main>
            <Footer />
        </>
    )
}