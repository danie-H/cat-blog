const isFavourite = (favourites, image) => {
    if(image) {
        const favourite = favourites.find(fav => fav.image_id === image.id);
        return favourite ? true : false;
    }
    return false;
}

export default isFavourite;