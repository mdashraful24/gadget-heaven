import { toast } from "react-toastify";

const getStoredCartList = () => {
    const storeListStr = localStorage.getItem('cart-list');
    if (storeListStr) {
        const storeList = JSON.parse(storeListStr);
        return storeList;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storeList = getStoredCartList();
    if (storeList.includes(id)) {
        toast.warn("Already add to cart!!", {
            position: "top-center"
        });
    }
    else {
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('cart-list', storeListStr);
        toast.success("Added successfully", {
            position: "top-center"
        });
    }
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.warn("Already add to cart!!", {
            position: "top-center"
        });
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast.success("Added successfully", {
            position: "top-center"
        });
    }
}

export { addToStoredCartList, addToStoredWishlist, getStoredCartList, getStoredWishList }