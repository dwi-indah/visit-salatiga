import { AttractionCard, AccommodationCard, EventCard, ItenaryCard } from './Card'

/**
 * CardList — renders a responsive grid of cards from a given data array.
 *
 * Props:
 *   items      {Array}   — array of data objects to render
 *   variant    {string}  — which card type to use:
 *                          'attraction' | 'accommodation' | 'event' | 'itenary'
 *                          defaults to 'attraction'
 *   className  {string}  — optional extra classes on the grid wrapper
 *   cardClass  {string}  — optional extra classes forwarded to each card
 *
 * Usage:
 *   <CardList items={data.events}             variant="event" />
 *   <CardList items={data.attraction.wisata}  variant="attraction" />
 *   <CardList items={data.accommodation}      variant="accommodation" />
 *   <CardList items={data.itenary}            variant="itenary" />
 */

const CARD_MAP = {
    attraction:    AttractionCard,
    accommodation: AccommodationCard,
    event:         EventCard,
    itenary:       ItenaryCard,
}

export default function CardList({
    items = [],
    variant = 'attraction',
    className = '',
    cardClass = '',
}) {
    const CardComponent = CARD_MAP[variant] ?? AttractionCard

    if (!items.length) {
        return (
            <p className="text-sm text-gray-400 py-8 text-center">
                Tidak ada data untuk ditampilkan.
            </p>
        )
    }

    return (
        <div className={`${className}`}>
            {items.map((item) => (
                <CardComponent
                    key={item.id ?? item.slug}
                    item={item}
                    className={cardClass}
                />
            ))}
        </div>
    )
}
