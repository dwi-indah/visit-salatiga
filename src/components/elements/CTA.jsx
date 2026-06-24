import { ButtonSecondary } from "./Button";

export default function CTA() {
    return(
        <section className="flex justify-center">
            <div className="container bg-linear-to-r bg-primary rounded-lg px-4 py-8 lg:py-16 text-center text-white">
                <h2 className="text-5xl font-display font-bold mb-6">Siap Menjelajahi Salatiga?</h2>
                <p className="max-w-zxl mx-auto mb-10">Temukan lebih banyak destinasi, kuliner khas, budaya, dan pengalaman menarik lainnya di Kota Salatiga.</p>
                <ButtonSecondary linkAddress="attraction" link="Jelajahi Destinasi Lain" />
            </div>
        </section>
    )
}
