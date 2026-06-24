import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import data from '../../../public/data.json'
import CardList from './CardList'

const { wisata, kuliner } = data.attraction

const tabs = [
    { label: 'Wisata',    items: wisata },
    { label: 'Kuliner',   items: kuliner },
]

export default function Tabs() {
    return (
        <section className="w-full">
            <TabGroup>
                <TabList className="flex gap-2 border-b border-gray-200 mb-6">
                    {tabs.map(({ label }) => (
                        <Tab
                            key={label}
                            className="px-5 py-2 text-sm font-semibold text-gray-500 border-b-2 border-transparent transition focus:outline-none data-selected:border-emerald-600 data-selected:text-emerald-700 data-hover:text-gray-700"
                        >
                            {label}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels>
                    {tabs.map(({ label, items }) => (
                        <TabPanel key={label}>
                            <CardList items={items} variant="attraction" className="grid grid-cols-2 lg:grid-cols-8 gap-2 lg:gap-6" />
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </section>
    )
}
