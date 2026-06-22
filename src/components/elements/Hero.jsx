import { getTitleHeading } from '../../utils/utils'

/**
 * Hero — page hero banner driven by titleHeading data.
 *
 * Props:
 *   headingId  {number}  — id from data.json > titleHeading
 *
 * Usage:
 *   <Hero headingId={2} />   // Destinasi Wisata
 *   <Hero headingId={3} />   // Acara & Festival
 */
export default function Hero({ headingId }) {
    const heading = getTitleHeading(headingId)

    if (!heading) return null

    const { title, tag, note } = heading

    return (
        <section className="py-16 bg-primary text-white rounded-lg">
            <div className="container mx-auto px-6 max-w-4xl">
                {tag && (
                    <span className="uppercase tracking-widest text-sm font-semibold">
                        {tag}
                    </span>
                )}
                <h1 className="text-6xl font-bold mt-2 mb-6">{title}</h1>
                {note && (
                    <p className="text-lg text-white/80">{note}</p>
                )}
            </div>
        </section>
    )
}
