# Problem Solving with TypeScript & OOP


## Overview

This repository contains eight TypeScript problem solutions that reflect my understanding of core TypeScript concepts. The problems focus on basic types, optional, rest parameters, readonly tuples, interfaces, type narrowing, generics, Promises, and Object-Oriented Programming.

### Core TypeScript concepts used in Problems solving

1. **Optional Parameters and Nullish Coalescing** : I created multiplyValue function using `optional parameters(?)` and default values through `Nullish Coalescing (??)`. Nullish Coalescing provides a default value only when the value is null or undefined. It correctly handles 0.
2. **Union Types and Type Narrowing** : For processInput function, I created union types with type alias for both parameters and return output. I handled multiple data types using those `union types` and `typeof` for type narrowing.
3. **Readonly Tuples** : In formatCoordinate function, I defined `Readonly Tuples` using `readonly` modifier to the tuple parameter for preventing mutations inside the function. 
4. **Generics, Rest Parameters and flat() method** : In concatenateArrays function, I used `generic type parameter <T>` and `rest parameters` for generic function that accept multiple arrays of the same type T. I also used `flat()` method that combines nested arrays into one array.
5. **Interfaces and Array Method filter()** : In getPopularCourses function, I used Course interface for defining object structure of course.  I also used `filter()` method that does not mutate the original array.
6. **Generics and keyof** : In pluckValues function, I used `generics` with the `keyof constraint` for extracting object property values and maintaining type safety by ensuring valid property key of those objects.
7. **Object-Oriented Programming (OOP)** : During creation of classes Employee and Manager, I used `extends` keyword for inheritance, `constructors` for initializing property values, access modifiers `private` and `protected` to control accessability, and the `super` keyword to call constructor of parent class.
8. **Promise** : In validateAgeAsync function, I created and return promise using  `new Promise()`, `resolve()`, `reject()`, and `setTimeout()`.


## Links to blog files
[Blog on Type Alias vs Interface](https://github.com/mithunmodakdu/assignment1-problem-solving-with-typescript-and-oop/blob/main/type-vs-interface.md)
[Blog on Type Narrowing](https://github.com/mithunmodakdu/assignment1-problem-solving-with-typescript-and-oop/blob/main/type-narrowing.md)



