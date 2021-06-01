export function findById(someArr, id) {
    for (let item of someArr) {
        if (item.id === id) {
            return item;
        }
    }
}