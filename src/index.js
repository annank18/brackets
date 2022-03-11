module.exports = function check(str, bracketsConfig) {
      const stack = [];
      const brackets = {};

    bracketsConfig.forEach((b) => (brackets[b[0]] = b[1]));

    const arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (brackets[stack[stack.length - 1]] === arr[i]) {
            stack.pop();
        } else if (brackets.hasOwnProperty(arr[i])) {
            stack.push(arr[i]);
        } else {
            return false;
        }
    }

    return stack.length === 0 ? true : false;
}
