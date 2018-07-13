// 快排思路
// 从数组的中间取一个主元， 这个主元的左指针指向数组的第一个元素、 右指针指向最后一个元素。
// 移动左指针 找到一个比主元大的元素， 然后移动右指针找到一个比主元小的元素， 交换它俩的值
// 重复这个过程， 知道左指针超过了右指针
// 结果： 比主元小的元素都在主元左边， 比主元大的都在主元右边


var quick = function(array, left, right){
    var index; //{1} 该变量能帮助我们将子数组分离为较小值数组和较大值数组，这样，我们就能再次递归的调用quick函数了
    if (array.length > 1) {
        index = partition(array, left, right); 
        if (left < index - 1) { 
            quick(array, left, index - 1); 
        }
        if (index < right) {
            quick(array, index, right); 
        }
    }
};

var partition = function(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)], 
    i = left, 
    j = right; 
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) { 
            j--;
        }
        if (i <= j) {
            swapQuickStort(array, i, j); 
            i++;
            j--;
        }
    }
    return i; 
};

var swapQuickStort = function(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
};