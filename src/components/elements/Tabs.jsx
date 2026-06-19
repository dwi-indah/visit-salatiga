import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import data from '../../../public/data.json'
import Card from './Card'

const { wisata, kuliner, akomodasi } = data.attraction

const tabs = [
    { label: 'Wisata',      items: wisata },
    { label: 'Kuliner',     items: kuliner },
    { label: 'Akomodasi',   items: akomodasi },
]

export default function Tabs() {
    return (
        <section className="w-full px-4 py-12">
            <TabGroup>
                <TabList className="flex gap-2 border-b border-gray-200 mb-6">
                    {tabs.map(({ label }) => (
                        <Tab
                            key={label}
                            className="px-5 py-2 text-sm font-semibold text-gray-500 border-b-2 border-transparent
                                       transition focus:outline-none
                                       data-selected:border-emerald-600 data-selected:text-emerald-700
                                       data-hover:text-gray-700"
                        >
                            {label}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels>
                    {tabs.map(({ label, items }) => (
                        <TabPanel key={label}>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {items.map((item) => (
                                    <Card key={item.id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </section>
    )
}
