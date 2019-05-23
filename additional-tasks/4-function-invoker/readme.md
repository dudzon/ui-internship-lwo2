### Function Invoker

Write a function that invokes given function
with its arguments taken from object

invoker(function(a, b, c) {}, {a: 1, b: 2, c: 3})
Must call supplied function as (1, 2, 3)

invoker(function(a, b, c, d) {}, {a: 1, b: 2, d: 4})
Must call supplied function as (1, 2, undefined, 4)
