/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b) => a.start - b.start)
        console.log(intervals)

        for(let interval = 1; interval< intervals.length; interval++){
            if(intervals[interval].start < intervals[interval -1].end) return false
        }
        return true
    }
}
