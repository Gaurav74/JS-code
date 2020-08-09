"use strict";
const first = { value: 1 };
console.log(first.value);
first.value = 2;
// it is described as const but it must not change .
// so Object.freeze is used. " use strict" is must.
Object.freeze(first);
first.value = 1;
console.log(first.value);