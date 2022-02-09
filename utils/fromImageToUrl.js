
/**
 * Given an image - returns the Url
 * (works for local and deployed)
 * @param {any} image
 */
 export const fromImageToUrl = (image) => {
    if (!image){
        return "/vercel.svg"
    }

    if(image.data.attributes.url.indexOf("/") === 0) {
        return `${API_URL}${image.data.attributes.url}`
    }

    return image.data.attributes.url
};