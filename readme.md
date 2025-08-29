Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll: The main difference is selection. getElementById select an id and return single value. getElementsByClassName, and querySelector / querySelectorAll can return more than one value and getElementsByClassName select only class but querySelector / querySelectorAll can select id or class.

Create and insert a new element into the DOM: Using JavaScript we can create and insert a new element. createElement can create a new element and appendChild can insert a new element to the parent element into the DOM.

Event Bubbling: Event bubbling is triggered a nested element and propagates upward through its parent element.

Event Delegation: Event delegation can work as a listener of more than one elements of parents. So, instead of adding single listener to individual element we can use event delegation of one parent of them. Event delegation is useful when large number of elements has to be dynamic.

Difference between preventDefault() and stopPropagation(): preventDefault() control the default action of event and preventPropagation() control the flow of event through the DOM.