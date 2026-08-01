class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root; 
        for(let char of word){
            if(!curr.children.has(char)){
                curr.children.set(char, new TrieNode())
            }
            curr = curr.children.get(char)
        }
        curr.endOfWord = true; 
    }

    /**
     * @param {string} word
     * @return {boolean}
     */

    searchPortion(word, curr){
        console.log(word, curr)
        if(curr == null) return 
        for(let i = 0; i < word.length; i++){
            if(word[i] == "."){
                for(let [key, val] of curr.children){
                    return this.searchPortion(word.slice(i + 1), curr.children.get(key))
                }
            }
            else{
                if(!(curr.children.has(word[i]))) return false; 
                curr = curr.children.get(word[i])
            }
        }
        return curr.endOfWord; 
    }
    search(word) {
        let curr = this.root; 

        for(let i = 0; i< word.length; i++){
            if(word[i] == "."){
                for(let [key, val] of curr.children){
                    return this.searchPortion(word.slice(i + 1), curr.children.get(key))
                }
            }
            else{
                if(!(curr.children.has(word[i]))) return false; 
                curr = curr.children.get(word[i])
            }
        }
        return curr.endOfWord; 
        
    }
}

class TrieNode{
    constructor(){
        this.children = new Map(); 
        this.endOfWord = false; 
    }
}