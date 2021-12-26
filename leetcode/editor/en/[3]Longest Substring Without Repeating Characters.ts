//Given a string s, find the length of the longest substring without repeating 
//characters. 
//
// 
// Example 1: 
//
// 
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.
// 
//
// Example 2: 
//
// 
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.
// 
//
// Example 3: 
//
// 
//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a 
//substring.
// 
//
// 
// Constraints: 
//
// 
// 0 <= s.length <= 5 * 10⁴ 
// s consists of English letters, digits, symbols and spaces. 
// 
// Related Topics Hash Table String Sliding Window 👍 19760 👎 902


//leetcode submit region begin(Prohibit modification and deletion)
function lengthOfLongestSubstring(s: string): number {
	let result = {};
	let longest = 0;
	let current = 0;
	let i = 0;
	while (i < s.length) {
		const currentSymbol = s.slice(i, i + 1);
		if (result.hasOwnProperty(currentSymbol)) {
			const pos = result[currentSymbol];
			let j = 0;
			for (let prop in result) {
				if (result[prop] <= pos) {
					delete (result[prop]);
					--current;
				} else {
					result[prop] = ++j;
				}
			}
		}
		result[currentSymbol] = ++current;
		if (current > longest) {
			longest = current;
		}
		console.log(result, current);
		i++;
	}
	console.log('-------');
	return longest;
}

//leetcode submit region end(Prohibit modification and deletion)
/*
"aaabcaa"
"abcabcbb"
"bbbbb"
" "
"   23 "
""
"dvdf"
"ohvhjdml"
"ggububgvfk"
*/