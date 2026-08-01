class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n: number, trust: number[][]): number {
        /**
         * adjcency list; 
         * (n - 1) pointers pointed to It &  no pointer moving away; 
         */

        let arr = []
        for(let i =1; i <= n; i++){
            arr.push(i)
        }

        for(let i = 0; i < arr.length; i++){
            // satisfy two things: 
            // 1. everyone trusts this val ; 2. it trusts no one; 
            const earnedAllTrust = this.hasEarnedAllTrust(arr[i], trust, arr)
            const trustsNoOne = this.trustsNoOne(arr[i], trust)

            if(earnedAllTrust && trustsNoOne) return arr[i]
        }

        return -1

    }

    hasEarnedAllTrust(val, trustList, arr): boolean {
        let count = 0
        /**
         * [1,2,3,4] ; val = 2
         *  ^
         *          
         * */
        for(let i = 0; i< arr.length; i++){
            if(arr[i] != val){
                for(let j = 0; j< trustList.length; j++){
                    if(trustList[j][0] == arr[i] && trustList[j][1] == val) count++
                }
            }
        }

        return count == (arr.length - 1)
    }

    trustsNoOne(val, trustList): boolean{
        for(let i = 0; i < trustList.length; i++){
            if(val == trustList[i][0]) return false
        }

        return true
    }
}
