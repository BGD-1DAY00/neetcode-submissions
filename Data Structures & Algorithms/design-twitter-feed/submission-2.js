class Twitter {
    constructor() {
        this.users = new Map(); 
        this.maxHeap = [];
        this.k = 10;
    }

    push(x) {
        if (this.maxHeap.length < this.k) {
            this.maxHeap.push(x);
            this.heapifyUp();
        } else {
            if (x > this.peek()) {  // Keep larger values - max heap
                this.maxHeap[0] = x;
                this.heapifyDown(); 
            }
        }
    }

    peek() {
        return this.maxHeap[0] || [];
    }

    heapifyUp() {
        let curr = this.maxHeap.length - 1;
        while (curr > 0) {
            let parent = Math.floor((curr - 1)/2);
            if (this.maxHeap[curr] > this.maxHeap[parent]) {  // Max heap property
                [this.maxHeap[curr], this.maxHeap[parent]] = [this.maxHeap[parent], this.maxHeap[curr]];
                curr = parent;
            } else break; 
        }
    }

    heapifyDown() {
        let curr = 0; 
        while (true) {
            let leftChild = (curr * 2) + 1;
            let rightChild = (curr * 2) + 2;
            let largest = curr; 

            if (leftChild < this.maxHeap.length && this.maxHeap[leftChild] > this.maxHeap[largest]) {  
                largest = leftChild;
            }

            if (rightChild < this.maxHeap.length && this.maxHeap[rightChild] > this.maxHeap[largest]) {
                largest = rightChild;
            }

            if (curr === largest) break; 

            [this.maxHeap[largest], this.maxHeap[curr]] = [this.maxHeap[curr], this.maxHeap[largest]];
            curr = largest;
        }
    }

    postTweet(userId, tweetId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, {
                tweets: [tweetId],
                followers: new Set()
            });
        } else {
            let user = this.users.get(userId);
            user.tweets.push(tweetId);
        }
    }

    getNewsFeed(userId) {
        this.maxHeap = [];
        let user = this.users.get(userId);
        if (!user) return [];

        // Add user's own tweets
        for (let j = user.tweets.length - 1; j >= 0; j--) {
            this.push(user.tweets[j]);
        }

        // Add followers' tweets
        for (let followeeId of user.followers) {
            if (followeeId !== userId){
            let followee = this.users.get(followeeId);
            if (followee) {
                for (let j = followee.tweets.length - 1; j >= 0; j--) {
                    this.push(followee.tweets[j]);
                }
            }
            }
        }

        return this.maxHeap;
    }

    follow(followerId, followeeId) {
        if (!this.users.has(followerId)) {
            this.users.set(followerId, {
                tweets: [],
                followers: new Set([followeeId])
            });
        } else {
            let user = this.users.get(followerId);
            user.followers.add(followeeId);
        }
    }

    unfollow(followerId, followeeId) {
        let user = this.users.get(followerId);
        if (user) {
            user.followers.delete(followeeId);
        }
    }
}