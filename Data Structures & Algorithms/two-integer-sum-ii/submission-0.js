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
            let isAvailable = this.findValue(numbers, valueToFind, left, right);
            if(isAvailable) return [numbers[i], valueToFind];
        }
        return [];
    }

    findValue(numbers, valueToFind, l, r){
        while(l <= r){
            let mid = Math.floor((l + r)/2);
            if(numbers[mid] == valueToFind) return true;
            else if(numbers[mid] > valueToFind){
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }

        return false
    }
}
