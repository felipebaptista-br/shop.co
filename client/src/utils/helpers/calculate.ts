import ProductProps from "@/interfaces/product"

const calculateSubtotal = (products: ProductProps[]) => {
    let subtotal = 0;
    products.map((product) => { subtotal += parseFloat(product.price) })
    return subtotal;
}

const calculateDiscount = (products: ProductProps[], discount: number) => {
    return calculateSubtotal(products) * discount;
}

const calculateTotal = (products: ProductProps[], discount: number, deliveryFee: number) => {
    return calculateSubtotal(products) - calculateDiscount(products, discount) + deliveryFee;
}

export {
    calculateSubtotal,
    calculateDiscount,
    calculateTotal
}