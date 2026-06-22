/**
 * Card.jsx — variant-based card components.
 *
 * Named exports:
 *   AttractionCard    — wisata & kuliner from attraction.*
 *   AccommodationCard — items from accommodation[]
 *   EventCard         — items from events[]
 *   ItenaryCard       — items from itenary[]
 *
 * All variants:
 *   - thumbnail on top, badge overlaid bottom-left of the image
 *   - wrap the card in a React Router <Link> using the item's slug
 *   - accept an optional `className` prop for layout overrides
 *
 * Default export is AttractionCard for backward-compat with Tabs.jsx.
 */

import { Link } from 'react-router'

/* ─── helpers ────────────────────────────────────────────────────────────── */

/**
 * Resolve an image src from data.json img[].title.
 * Values are either full URLs (https://...) or local filenames (foo.webp).
 * Local images are served from /images/ in the public folder.
 */
function resolveImg(title) {
    if (!title) return null
    if (title.startsWith('http://') || title.startsWith('https://')) return title
    return `/images/${title}`
}

/* ─── shared primitives ──────────────────────────────────────────────────── */

/**
 * Thumbnail — fixed-height image with badge overlaid bottom-left.
 * Falls back to a neutral placeholder when no src is available.
 */
function Thumbnail({ src, alt, badge }) {
    return (
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-100">
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-300">
                    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                    </svg>
                </div>
            )}
            {badge && (
                <span className="absolute bottom-2 left-2 rounded-lg bg-primary px-2 py-0.5 text-xs font-medium text-white capitalize shadow">
                    {badge}
                </span>
            )}
        </div>
    )
}

function ClockIcon() {
    return (
        <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    )
}

function PriceIcon() {
    return (
        <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v12M9 9h4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3H15" />
        </svg>
    )
}

function LocationIcon() {
    return (
        <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    )
}

function ArrowIcon() {
    return (
        <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    )
}

/* ─── AttractionCard ─────────────────────────────────────────────────────── */

/**
 * For items from attraction.wisata | attraction.kuliner
 * Internal link: /attraction/{slug}
 */
export function AttractionCard({ item, className = '' }) {
    if (!item) return null

    const { slug, name, marker, detail } = item
    const { alamat, kategori, jam_operasional, harga, deskripsi, img } = detail
    const thumbSrc = resolveImg(img?.[0]?.title)

    return (
        <Link
            to={`/attraction/${slug}`}
            className={`group flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition hover:shadow-md hover:-translate-y-0.5 ${className}`}
        >
            <Thumbnail src={thumbSrc} alt={name} badge={marker} />

            <div className="flex flex-col gap-2 p-4 flex-1">
                <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {name}
                </h3>

                <p className="text-xs text-gray-500">{kategori} &mdash; {alamat}</p>

                <p className="text-sm text-gray-700 line-clamp-3">{deskripsi}</p>

                <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <dt className="sr-only">Jam operasional</dt>
                        <ClockIcon />
                        <dd>{jam_operasional}</dd>
                    </div>
                    <div className="flex items-center gap-1">
                        <dt className="sr-only">Harga</dt>
                        <PriceIcon />
                        <dd>{harga}</dd>
                    </div>
                </dl>
            </div>
        </Link>
    )
}

/* ─── AccommodationCard ──────────────────────────────────────────────────── */

/**
 * For items from accommodation[]
 * Internal link: /accommodation/{slug}
 */
export function AccommodationCard({ item, className = '' }) {
    if (!item) return null

    const { slug, name, marker, detail } = item
    const { alamat, kategori, jam_operasional, harga, deskripsi, img } = detail
    const thumbSrc = resolveImg(img?.[0]?.title)

    return (
        <Link
            to={`/accommodation/${slug}`}
            className={`group flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition hover:shadow-md hover:-translate-y-0.5 ${className}`}
        >
            <Thumbnail src={thumbSrc} alt={name} badge={marker} />

            <div className="flex flex-col gap-2 p-4 flex-1">
                <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {name}
                </h3>

                <p className="text-xs text-gray-500">{kategori} &mdash; {alamat}</p>

                <p className="text-sm text-gray-700 line-clamp-3">{deskripsi}</p>

                <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <dt className="sr-only">Jam operasional</dt>
                        <ClockIcon />
                        <dd>{jam_operasional}</dd>
                    </div>
                    <div className="flex items-center gap-1">
                        <dt className="sr-only">Harga mulai</dt>
                        <PriceIcon />
                        <dd>{harga}</dd>
                    </div>
                </dl>
            </div>
        </Link>
    )
}

/* ─── EventCard ──────────────────────────────────────────────────────────── */

/**
 * For items from events[]
 * Internal link: /event/{slug}
 * `url` shown as a secondary "Lihat sumber" external link.
 */
export function EventCard({ item, className = '' }) {
    if (!item) return null

    const { slug, title, category, date, location, image, description, url } = item

    const formattedDate = new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <article className={`group flex flex-col rounded-xl bg-white shadow-sm overflow-hidden transition hover:shadow-md hover:-translate-y-0.5 ${className}`}>
            <Link to={`/event/${slug}`} tabIndex="-1" aria-hidden="true">
                <Thumbnail src={image} alt={title} badge={category} />
            </Link>

            <div className="flex flex-col gap-2 p-4 flex-1">
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    <Link to={`/event/${slug}`} className="hover:text-emerald-700 transition-colors">
                        {title}
                    </Link>
                </h3>

                <p className="text-sm text-gray-700 line-clamp-3">{description}</p>

                <dl className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <dt className="sr-only">Tanggal</dt>
                        <ClockIcon />
                        <dd>{formattedDate}</dd>
                    </div>
                    <div className="flex items-center gap-1">
                        <dt className="sr-only">Lokasi</dt>
                        <LocationIcon />
                        <dd>{location}</dd>
                    </div>
                </dl>

                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-800 transition-colors w-fit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ArrowIcon />
                        Lihat sumber
                    </a>
                )}
            </div>
        </article>
    )
}

/* ─── ItenaryCard ────────────────────────────────────────────────────────── */

/**
 * For items from itenary[]
 * Internal link: /itenary/{slug}
 */
export function ItenaryCard({ item, className = '' }) {
    if (!item) return null

    const { slug, name, detail } = item
    const stops = detail?.lokasi ?? []

    return (
        <Link
            to={`/itenary/${slug}`}
            className={`group flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 ${className}`}
        >
            <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors">
                {name}
            </h3>

            {stops.length > 0 && (
                <ol className="flex flex-col gap-1">
                    {stops.map((stop, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700">
                                {i + 1}
                            </span>
                            {stop.nama}
                        </li>
                    ))}
                </ol>
            )}

            <span className="mt-auto inline-flex items-center gap-1 text-xs text-emerald-600 group-hover:text-emerald-800 transition-colors">
                <ArrowIcon />
                Lihat rencana
            </span>
        </Link>
    )
}

/* ─── default export (backward-compat) ──────────────────────────────────── */

export default AttractionCard
