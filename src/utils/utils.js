import data from '../../public/data.json';

export const getSiteData = async () => {
    try {
        const response = await fetch('/data.json');

        if (!response.ok) {
            throw new Error('Failed to load data.json');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getMenu = async () => {
    const data = await getSiteData();
    return data?.menu || [];
};

export const getCity = async () => {
    const data = await getSiteData();
    return data?.city || '';
};

export const getFooterMenu = async () => {
    const data = await getSiteData();
    return data?.footerMenu || '';
};

export const getFooterLink = async () => {
    const data = await getSiteData();
    return data?.footerLink || '';
};

/**
 * getTitleHeading — look up a titleHeading entry by id.
 *
 * Synchronous static import — no fetch, no loading state needed.
 * Returns { id, title, tag, note } or null if the id is not found.
 *
 * @param {number} id - the titleHeading id from data.json
 * @returns {{ id: number, title: string, tag: string, note: string } | null}
 */
export const getTitleHeading = (id) => {
    return data.titleHeading.find((item) => item.id === id) ?? null;
};
