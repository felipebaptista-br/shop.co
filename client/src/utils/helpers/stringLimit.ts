
const limitStringByQuantity = (string: string, quantity: number): string => {
    if (string.length <= quantity) {
        return string;
    } else {
        return string.slice(0, quantity) + "...";
    }
};

export {
    limitStringByQuantity
}
