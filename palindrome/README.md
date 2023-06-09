# Palindrome Check

In this exercise, you would write a program to determine if a given input is a palindrome. 

A palindrome is a word, phrase, or sequence that reads the same backwards as forwards. Examples include: `madam`,  `noon`, `civic`, `racecar`, `level`, `mom`, `tattarrattat`, `Ward Draw`.

## Preamble

1. In the `index.html` file given, there is a text input and a button element to be used to trigger the function. There is also a paragraph element to display the results. You are not expected to modify this file.



## Instructions
1. Create a `script.js` file and link this to the `index.html`  file.

1. In the `script.js` file:

1. Create three variables, namely `paragraph`, `input` and `btn` to each refer to the paragraph, text input and button elements in `index.html`. Hint: use  `document.querySelector()`. This will result in three lines of code.

1. Add an event listener to call the function `checkPalindrome()` when the given button is clicked.

1. Write a function to determine if a given input is a palindrome.
    - the function identifier should be `checkPalindrome()`
    - the function would display its output in the given paragraph
    - where the user input is a palindrome,  display `X is a palindrome.`
    - where the user input is a palindrome,  display `X is not a palindrome.`
         - where `X` stands for the user input, exactly as typed in.
   
- Hint: use the paragraph's `textContent` property. 
- Note: Palindromes are not case senitive. 


## Expected Output
- Given `Ward Draw` as the input. Output: `Ward Draw is a palindrome.`
- Given `noon` as input. Output: `noon is a palindrome.`
- Given `Lake` as input. Output: `Lake is not a palindrome.`

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