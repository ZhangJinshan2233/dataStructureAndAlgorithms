class ArrayList {
    constructor() {
        this.items = []
    }

    insert(element) {
        this.items.push(element);
    }

    insertSort() {
        let length = this.items.length;
        let j = 0;
        let temp = 0;
        for (let i = 0; i < length - 1; i++) {
            j = i;
            temp = this.items[i];
            while (j > 0 && this.items[j - 1] > temp) {
                this.items[j] = this.items[j - 1];
                j--
            }
            this.items[j] = temp
        }
    }
    mergeSort() {

        this.items = this.mergeSortRec(this.items)
    }

    mergeSortRec(array) {

        let length = array.length
        let left;
        let right;
        if (length === 1) {
            return array;
        } else {

            let mid = Math.floor(length / 2);
            left = array.slice(0, mid);
            right = array.slice(mid, length)
        }

        return this.merge(this.mergeSortRec(left), this.mergeSortRec(right))
    }

    merge(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }

        while (il < left.length) {
            result.push(left[il++])
        }

        while (ir < right.length) {
            result.push(right[ir++])
        }

        return result
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
            if (index < right) { //{6}
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