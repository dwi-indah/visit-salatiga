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