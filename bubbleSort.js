function ArrayList(arr) {
    var array = arr || [];

    this.insert = function(item) {
        array.push(item);
    };

    this.toString = function() {
        return array.join();
    };

    this.bubbleSort = function() {
        var len = array.length;

        for (let i = 0; i < len; i++) {
            const elem = array[i];
            
            for (let j = 0; j < len - i - 1; j++) {
                const now = array[j];
                const next = array[j + 1];
                
                if (now > next) this.swap(j, j + 1, array);
            }
        }

        return array;
    }

    this.swap = function (prev, next, array) {
        const temp = array[prev];
        array[prev] = array[next];
        array[next] = temp;
    }
}

const array = new ArrayList([3, 11, 2, 4, 1, 90, 23]);
const sortResult = array.bubbleSort();

console.log(sortResult);