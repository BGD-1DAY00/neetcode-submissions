class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i =0; i < numbers.length; i++){
            let left = i + 1, right = numbers.length - 1;
            let valueToFind = target - numbers[i];
            let isAvailableArr = this.findValue(numbers, valueToFind, left, right);
            if(isAvailableArr[0]) return [i +1, isAvailableArr[1] + 1];
        }
        return [];
    }

    findValue(numbers, valueToFind, l, r){
        while(l <= r){
            let mid = Math.floor((l + r)/2);
            if(numbers[mid] == valueToFind) return [true, mid];
            else if(numbers[mid] > valueToFind){
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }

        return [false, -1]
    }
}
