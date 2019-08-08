class Set {
    constructor() {
        this.items = {}
    }

    add(value) {

        if (!this.has(value)) {
            this.items[value] = value; //{1} 
            return true;
        }
        return false;

    }

    delete(value) {

        if (!this.has(value)) {
            this.items[value] = value; //{1} 
            return true;
        }
        return false;

    }

    has(value) {

        return value in this.items
    }

    clear() {
        this.items = {}
    }
    size() {
        return Object.keys(this.items).length
    }

    values() {
        let values = [];
        for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
            values.push(this.items[keys[i]]);
        }
        return values;


    }
}