# Can I drive and vote
In this task, you are given a JavaScript file which contains an incomplete function, `canIDriveAndVote()` - A function that checks if a person can legally drive and vote based on their age. This function takes a single argument, a `person` object.

## The `person` object:
1. `person.age` - is a number which represents the person's age
1. `person.country` - is a string representing the country ('gh', 'ke', 'ng', or 'us')

The JavaScript file also has two variables, `countryDriveLimit` and `countryVoteLimit` which is are both objects, containing the driving age and voting age for different countries, respectively.

## The task
You are to complete the function such that:
1. It should return `true` if a person can both drive and vote in their country.
1. It should return `false` if a person cannot drive but can vote in their country.
1. It should return `false` if a person can drive but cannot vote in their country.
1. It should return `false` if a person cannot either drive or vote in their country.
1. If the `person`'s country  does not exist in the `countryDriveLimit` and/or `countryVoteLimit`, function should return `false`.
