import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/elements/Hero'

export default function Privacy() {
    return(
        <>
            <Header />
            <main className="relative min-h-screen bg-white pb-8 px-3 lg:px-4">
                <Hero headingId={6} />
            </main>
            <Footer />
        </>
    )
}