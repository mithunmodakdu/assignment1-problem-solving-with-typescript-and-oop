# Type alias vs Interface in TypeScript: What's the Difference?

In TypeScript, both type alias and interface are used to define the data structure. They help us write code with type safety but they have some differences. 

## Type alias
A type alias is a custom name for a type in TypeScript. Type aliases can represent primitive types, object types, function types, unions, intersections, and tuples.

```
  type TUser = {
    name: string;
    age: number;
    email: string;
  };

  type TUserStatus = "active" | "inactive";
```

## Interface 
An interface defines the structure of an object. It tells us which properties and methods an object should have and what their corresponding types should be.

```
  interface IUser {
    name: string;
    age: number;
    email: string;
  }

  const user: IUser = {
    name: "Mithun",
    age: 37,
    email: "mithunmodakdu@gmail.com"
  };
```

## Interface vs Type alias
1. Interfaces are mainly used to describe object structures while Type aliases are more flexible because they can represent primitive types, union types, intersection types, tuples, and object types.
2. Interfaces mainly describe object structures while Type aliases can describe almost any type.
3. Interfaces support declaration merging while Type aliases do not support declaration merging
4. Interfaces can extend other interfaces using `extends` keyword while Type aliases can combine types using `intersections(&)`


Both type alias and interface are useful in TypeScript. We should choose one based on our requirements and coding needs. We should use type alias when working with unions, tuples, intersections, and primitive types. We should use interface when defining the structure of objects and classes.














