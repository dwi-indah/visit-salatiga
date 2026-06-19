export default function Hero({ title, subtitle, desc }) {
    return(
        <section className="py-16 bg-primary text-white rounded-lg">
            <div className="container mx-auto px-6 max-w-4xl">
                <span className="uppercase tracking-widest text-sm font-semibold">{subtitle}</span>
                <h1 className="text-6xl font-bold mt-2 mb-6">{title}</h1>
                <p className="text-lg text-white/80">{desc}</p>
            </div>
        </section>
    )
}