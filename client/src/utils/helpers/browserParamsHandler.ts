
const getUrlParams = () => {
    return window.location.pathname;
}

const getUrlSlug = (): string => {
    const res = window.location.pathname.split('/').pop();
    return res || '';
}

export {
    getUrlParams,
    getUrlSlug
}