const arrayMethods = [
  {
    id: 1,
    name: "concat",
    description: "Join 2 or more arrays",
    syntax: "array1.concat(array2*, .., arrayN)",
    returns: "array",
    isMutates: false,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 2,
    name: "copyWithin",
    description: "Copy ‘t’ elements to the same array",
    syntax: "array.copyWithin(t*, s, e)",
    returns: "array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 3,
    name: "every",
    description: "Checks if every el with in an array pass a test",
    syntax: "array.every(fn(el*, idx, a), thisVal)",
    returns: "boolean",
    isMutates: false,
    category: "iteration",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 4,
    name: "fill",
    description: "Fill all the array elements with a static value",
    syntax: "array.fill(val*, s=0, e=array.length)",
    returns: "array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 5,
    name: "filter",
    description:
      "Creates a new array with every element in an array that pass a test",
    syntax: "array.filter(fn(el*, idx, arr), thisVal)",
    returns: "array",
    isMutates: false,
    category: "iteration",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 6,
    name: "find",
    description:
      "Returns the value of the first element in an array that pass a test",
    syntax: "array.find(fn(el*, idx, a),thisVal)",
    returns: "array or undefined",
    isMutates: false,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 7,
    name: "findIndex",
    description:
      "Returns the index of the first element in an array that pass a test",
    syntax: "array.findIndex(fn(el*, idx, a),thisVal)",
    returns: "array or -1",
    isMutates: false,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 8,
    name: "forEach",
    description:
      "Calls the given function once for each element in an array, in a indexed order",
    syntax: "array.forEach(fn(el*, idx, a),thisVal)",
    returns: "undefined",
    isMutates: false,
    category: "iteration",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 9,
    name: "indexOf",
    description:
      "Search an array for the specified item, and returns its position",
    syntax: "array.indexOf(el*, start)",
    returns: "index or -1",
    isMutates: false,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 10,
    name: "isArray",
    description: "Checks the given object is an array",
    syntax: "Array.isArray(obj)",
    returns: "boolean",
    isMutates: false,
    category: "general",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 11,
    name: "join",
    description: "Joins all elements of an array into a string",
    syntax: "array.join(separator)",
    returns: "string",
    isMutates: false,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 12,
    name: "lastIndexOf",
    description:
      "Search an array for the specified item, and returns its position",
    syntax: "array.lastIndexOf(el*, start)",
    returns: "index or -1",
    isMutates: false,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 13,
    name: "map",
    description:
      "Creates a new array with the results of calling a function for every array element",
    syntax: "array.map(fn(el*, idx, a),thisVal)",
    returns: "array",
    isMutates: false,
    category: "iteration",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 14,
    name: "pop",
    description:
      "Removes the last element of an array, and returns that element",
    syntax: "array.pop()",
    returns: "any type*",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 15,
    name: "push",
    description:
      "Adds new items to the end of an array, and returns the new length",
    syntax: "array.push(item1*, item2, ..., itemX)",
    returns: "number equal to the length of an array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 16,
    name: "reduce",
    description:
      "Reduces the array to a single value. Executes a provided function for each value of the array (from left-to-right).The return value of the function is stored in an accumulator (result/total)",
    syntax: "array.reduce(fn(accumlator*, el*, idx, a),thisVal)",
    returns: "returns the accumulated value based on the type",
    isMutates: false,
    category: "iterator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 17,
    name: "reduceRight",
    description:
      "Same as reduce except it reduce the values of an array to a single value (going right-to-left)",
    syntax: "array.reduceRight(fn(accumlator*, el*, idx, a), this)",
    returns: "returns the accumulated value based on the type",
    isMutates: false,
    category: "iteration",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 18,
    name: "reverse",
    description: "Reverse the order of the elements in an array",
    syntax: "array.reverse()",
    returns: "array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 19,
    name: "shift",
    description:
      "Removes the first element of an array, and returns that element",
    syntax: "array.shift()",
    returns: "array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 20,
    name: "slice",
    description:
      "Returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument",
    syntax: "array.slice(start, end)",
    returns: "array",
    isMutates: false,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 21,
    name: "some",
    description: "Checks if some of the el with in an arr pass a test",
    syntax: "array.some(fn(el*, idx, a), thisVal)",
    returns: "boolean",
    isMutates: false,
    category: "iteration",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 22,
    name: "sort",
    description: "Sorts the elements from an array",
    syntax: "array.sort(compareFn)",
    returns: "array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 23,
    name: "splice",
    description:
      "Adds/removes items to/from an array, and returns the removed item(s) and inserts the items in the removed elements position",
    syntax: "array.splice(index, howmany, item1, ....., itemX)",
    returns: "array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 24,
    name: "toString",
    description: "Converts an array into a String and returns the result.",
    syntax: "array.toString()",
    returns: "string",
    isMutates: false,
    category: "general",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 25,
    name: "unshift",
    description:
      "Adds new items to the beginning of an array, and returns the new length",
    syntax: "array.unshift(item1*, item2, ..., itemX)",
    returns: "number equal to the length of an array",
    isMutates: true,
    category: "mutator",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  },
  {
    id: 26,
    name: "valueOf",
    description: "Returns the primitive value of an array",
    syntax: "array.valueOf(index)",
    returns: "array",
    isMutates: true,
    category: "access",
    refereces: [
      {
        id: 1,
        source: "",
        link: ""
      }
    ],
    examples: [
      {
        id: 1,
        source: "",
        link: "",
        detail: ""
      }
    ],
    usageCount: 0,
    comments: [
      {
        id: 1,
        by: "",
        title: "",
        detail: ""
      }
    ]
  }
];

export default arrayMethods;
