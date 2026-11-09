# Type Narrowing in TypeScript: typeof, instanceof, and the in Operator

In TypeScript, If we use union type, a variable can have more than one type. For example variable may be a string or a number or a boolean. But we need to know its actual type before performing an operation. String operation can not be applied to variable of number or boolean type. This will cause error. In this case Type Narrowing helps us. It allows us to make TypeScript understand the specific type of a value.

## typeof
We use the `typeof` operator to get type of primitive types such as string, number, and boolean.

```
  function processData(data: string | number) {
  if (typeof data === "string") {
    return data.toLowerCase();
  }

  return data * 5;
}
```
Here, we get specific data type using `typof` in if block. when It is string type we use string method toLowerCase.

## instanceof

We use `instanceof` for checking whether an object belongs to a specific class.

```
 class Dog {
  bark() {
    console.log("Dog is barking...");
  }
}

class Cat {
  meow() {
    console.log("Cat is making sound meow meow.");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

Here, We narrow down animal type in if block using `instanceof` to check whether it belongs the Dog class or the Cat class.

## in Operator

We use `in` operator to check whether a property exists in an object.

```
 type TAdmin = {
  name: string;
  role: string;
};

type TCustomer = {
  name: string;
  purchaseCount: number;
};

function getInfo(user: TAdmin | TCustomer) {
  if ("role" in user) {
    return `The user is ${user.role}`;
  }

  return user.purchaseCount;
}
```

If the role property exists in the user object, the we will get info that The user is an Admin. Otherwise, it is a Customer.

Type narrowing is an important feature of TypeScript. It helps us narrow down type of variable with different possible types so that we can perform type specific operation. We can use typeof, instanceof, and the in operator to check types and avoid type errors. 
