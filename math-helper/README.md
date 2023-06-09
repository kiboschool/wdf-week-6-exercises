# Math Helper

In this exercise you will write a program to help calculate different math functions. This exercise combines the other three exercises in this week, namely, the Prime Number Checker, Palindrome Checker and the Three-digit Armstrong. Given a single interface, a user can specify which of the three math functions to be computed and the appropriate answer would be generated.

## Instructions
1. A starter `index.html` file has been given to you. You are not expected to modify this file. In the file, 
    - there is a `<select>` element, which would be used to select the math function to be performed. 
    - a button element to be used to trigger the computation based on the selected option.
    - there is also a paragraph element to display the results. 
1. A `script.js` file has also been provided with some starter code.
1. In the `script.js` file, create three functions `checkPalindrome()`, `checkArmstrong()` and `checkPrime()` as decribed in the previous exercises.
1. Add an event listener to the button, such that when it is clicked, it gets the value of the `<select>` element and calls the appropriate function:
    - If the selected value is `prime`, call the `checkPrime()` function.
    - If the selected value is `palindrome`, call the `checkPalindrome()` function.
    - If the selected value is `armstrong`, call the `checkArmstrong()` function.

## Testing
To check that your solution meets the criteria, run `npm run test` in the console. (If you haven't already, you'll need to run `npm install` to install the packages required for testing).

<!-- If your solution has all the required elements it should say something like:

```txt
 
Ran all test suites. 
```-->

If it does not pass one of the tests, you should get some feedback about what is wrong or missing in your solution.

### Valid HTML

The last test is that your HTML follows all of the recommended rules for an HTML document.

[Here is a list](https://html-validate.org/rules/index.html) of all the rules that will be automatically checked. You don't have to memorize this list or check each rule yourself. Instead, if you get feedback that your HTML breaks one of the rules, you can find an explanation of the rule from that list.