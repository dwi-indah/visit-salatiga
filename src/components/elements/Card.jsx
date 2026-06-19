/**
 * Card — reusable attraction card.
 *
 * Props:
 *   item  {object}  — a single entry from attraction.wisata | kuliner | akomodasi
 */
export default function Card({ item }) {
    if (!item) return null

    const { name, marker, detail } = item
    const { alamat, kategori, jam_operasional, harga, deskripsi } = detail

    return (
        <article className="flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
            {/* Category badge */}
            <span className="w-fit rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 capitalize">
                {marker}
            </span>

            {/* Name */}
            <h3 className="text-base font-semibold text-gray-900 leading-snug">
                {name}
            </h3>

            {/* Category & address */}
            <p className="text-xs text-gray-500">{kategori} &mdash; {alamat}</p>

            {/* Description */}
            <p className="text-sm text-gray-700 line-clamp-3">{deskripsi}</p>

            {/* Footer details */}
            <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <dt className="sr-only">Jam operasional</dt>
                    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                    <dd>{jam_operasional}</dd>
                </div>
                <div className="flex items-center gap-1">
                    <dt className="sr-only">Harga</dt>
                    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v12M9 9h4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3H15" />
                    </svg>
                    <dd>{harga}</dd>
                </div>
            </dl>
        </article>
    )
}
