class ArrayList {
    constructor() {
        this.items = []
    }

    insert(element) {
        this.items.push(element);
    }

    quickSort() {
        this.quick(this.items, 0, this.items.length - 1)
    }
    quick(array, left, right) {
        var index;
        if (array.length > 1) {
            index = this.partition(array, left, right);
            console.log(index)
            if (left < index - 1) {
                this.quick(array, left, index - 1)
            }
            if (index < right) { 
                this.quick(array, index, right);
            }
        }

    };

    partition(array, left, right) {
        let mid = Math.floor((left + right) / 2);
        let pivot = array[mid]
        let i = left;
        let j = right;
        while (i <= j) {
            while (array[i] < pivot) {
                i++
            }
            while (array[j] > pivot) {
                j --;
            }
            if (i <= j) {
                this.swap(array, i, j)
                i++;
                j--
            }
        }

        return i

    };

    swap(array, index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
}