function longestCommonPrefix(strs) {
    // Constraint checks
    if (strs.length < 1 || strs.length > 200) {
        throw new Error("The number of strings must be between 1 and 200.");
    }

    for (let str of strs) {
        if (str.length < 0 || str.length > 200) {
            throw new Error("Each string length must be between 0 and 200.");
        }

        if (!/^[a-z]*$/.test(str)) {
            throw new Error("Each string must consist of only lower-case English letters.");
        }
    }

    if (strs.length === 0) return "";

    // Start by assuming the whole first string is the common prefix
    let prefix = strs[0];

    // Compare the assumed prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        let currentString = strs[i];

        // Update the prefix by comparing it to the current string
        while (currentString.indexOf(prefix) !== 0) {
            // Reduce the prefix length by one each time until it matches the start of the string
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example Usage:
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""
