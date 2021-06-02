//finds an item of some array by its id, returns item
export function findById(someArr, id) {
    for (let item of someArr) {
        if (item.id === id) {
            return item;
        }
    }
}