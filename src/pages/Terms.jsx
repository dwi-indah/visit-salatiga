import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Hero from '../components/elements/Hero'
import Content from '../components/elements/Content'

export default function Terms() {
    return(
        <>
            <Header />
            <main className="relative min-h-screen bg-white py-16 px-3 lg:px-4">
                <Hero title="Term of Use" subtitle="Legal" desc="Terakhir diperbarui: Juni 2026" />
                <Content />
            </main>
            <Footer />
        </>
    )
}