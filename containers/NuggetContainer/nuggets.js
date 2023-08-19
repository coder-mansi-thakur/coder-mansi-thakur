export const nuggets = [
  {
    title: 'If string is primitive, how "a".toUpperCase works?',
    description: `In JavaScript, strings are not considered primitive values but rather objects, specifically instances of the 'String' constructor. This means that even though strings behave like primitives in many ways, they still have associated methods and properties.

    The 'toUpperCase()' method is one of the built-in methods of the 'String' object in JavaScript, and it's used to convert a string to uppercase. Here's an example of how it works:
  
    
    In this example, 'myString' is a string object, and we call the 'toUpperCase()' method on it to create a new string in uppercase. The original 'myString' remains unchanged.
    
    When you use string literals, JavaScript automatically converts them to 'String' objects when you invoke methods on them. This is why you can use methods like 'toUpperCase()' on string literals as if they were objects:
    
    So, to reiterate, even though strings in JavaScript can be used in a way that seems similar to primitives, they are actually objects with methods, and the 'toUpperCase()' method is an example of how you can manipulate strings in JavaScript.`,
    tags: [1, 2, 3]
  }
]