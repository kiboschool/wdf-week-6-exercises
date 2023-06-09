# Three-digit Armstrong

In this exercise, you would write a program to determine if a given number is an Armstrong number. You would also need to check if the given input is a three-digit number in the first place.

In recreational number theory, an Armstrong number
(named after Michael F. Armstrong) is a
number that is the sum of its own digits each raised to the power of the number of digits. 

Our focus here, however, is on three-digit numbers only. This means, given a three-digit number, the sum of the cubes of the individual digits must equal to the number itself.
For example, 153 = 1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup>; 153 is an armstrong number.
167 on the other hand is not an armstrong number because 1<sup>3</sup> + 6<sup>3</sup> + 7<sup>3</sup> equals 343, not 167. Other examples of armstrong numbrs are: 370, 371 and 407.

## Preamble

1. In the `index.html` file given, there is a text input and a button element to be used to trigger the function. There is also a paragraph element to display the results. You are not expected to modify this file.

2. In the `script.js` file, an event listener has been added to the button for a click event.

## Instructions
1. In the given `script.js` file:

1. Create three variables, namely `paragraph`, `input` and `btn` to each refer to the paragraph, text input and button elements in `index.html`. Hint: use  `document.querySelector()`. This will result in three lines of code.

1. Write a function to determine if a given input is an armstrong number or not:
- the function identifier should be `checkArmstrong()`
- the function would display its output in the given paragraph
    - where the user input is an armstrong number,  display `X is is an Armstrong number.`
         - where `X` stands for the user input
    - if it is not anumber  display `X is not a  number.`
    - if it is not an armstrong number display `X is not is not Armstrong!!!`     
    - if the input is not a three-digit positive number, display `is not a three-digit number.`.
- 

## Expected Output
- Given `153` as the input. Output: `153 is  an Armstrong number.`
- Given `0` as input. Output: `0 is not a three-digit number.`
- Given `-5` as input. Output: `-5 is not a three-digit number.`

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