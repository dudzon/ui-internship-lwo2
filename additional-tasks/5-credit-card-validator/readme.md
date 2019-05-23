### Credit Card Number Validator

Most credit card number can be validated using the Luhn algorithm, which is more or a less a glorified Modulo 10 formula

The Luhn Algorithm:
1. Drop the last digit from the number. The last digit is what we want to check against
2. Reverse the numbers
3. Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
4. Add all the numbers together
5. The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)

https://en.bitcoinwiki.org/wiki/Luhn_algorithm
