# Prime Number Check

In this exercise, you would write a program to determine if a given number is a prime number. You would also need to check if the given input is a number in the first place.

A prime number is an integer that is only divisible by 1 and itself.

## Preamble

1. In the `index.html` file given, there is a text input and a button element to be used to trigger the function. There is also a paragraph element to display the results. You are not expected to modify this file.

2. In the `script.js` file, an event listener has been added to the button for a click event.

## Instructions
1. In the given `script.js` file:

1. Create three variables, namely `paragraph`, `input` and `btn` to each refer to the paragraph, text input and button elements in `index.html`. Hint: use  `document.querySelector()`. This will result in three lines of code.

1. Write a function to determine if a given input is a prime number or not:
- the function identifier should be `checkPrime()`
- the function would display its output in the given paragraph
    - where the user input is a prime number,  display `X is  a prime number.`
         - where `X` stands for the user input
    - if it is not a prime number  display `X is not a prime number.`
    - if it is not a number display `X is not a number.`     
    - if the input is a zero `0`, or a negative number, display `Zeros and negatives are not prime numbers.`.
- note that 1 is taken as a prime number in this exercise; letters and other characters are not numbers.
- Hint: use the paragraph's `textContent` property.

## Expected Output
- Given `1` as the input. Output: `1 is a prime number.`
- Given `0` as input. Output: `Zeros and negatives are not prime numbers.`
- Given `-5` as input. Output: `Zeros and negatives are not prime numbers.`
- Given `7` as input. Output: `7 is  a prime number.`
- Given `68` as input. Output: `68 is not a prime number.`

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