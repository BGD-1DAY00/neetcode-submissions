class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let trappedWater = 0; 

        let leftPrefix = this.buildLeftPrefix(height);
        let rightPrefix = this.buildRightPrefix(height);

        for(let i = 0; i < height.length; i++){
            let leftMax = leftPrefix[i]
            let rightMax = rightPrefix[i]
            let max = Math.min(leftMax, rightMax);
            let val = max - height[i];
            if(val > 0) trappedWater+= val
        }

        return trappedWater; 
    }

    buildLeftPrefix(height){
        let leftPrefix = [0]
        let leftMaxSoFar = height[0]
        for(let i = 1; i < height.length; i++){
            leftPrefix.push(leftMaxSoFar);
            leftMaxSoFar = Math.max(leftMaxSoFar, height[i])
        }

        return leftPrefix; 
    }

    buildRightPrefix(height){
        let rightPrefix = [0]
        let rightMaxSoFar = height[height.length - 1]
        for(let i = height.length - 2; i >=0; i--){
            rightPrefix.unshift(rightMaxSoFar);
            rightMaxSoFar = Math.max(rightMaxSoFar, height[i])
        }

        return rightPrefix; 
    }


}
