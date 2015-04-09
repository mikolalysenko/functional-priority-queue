functional-priority-queue
=========================
A [confluently](http://en.wikipedia.org/wiki/Persistent_data_structure#Confluently_persistent) [persistent](http://en.wikipedia.org/wiki/Persistent_data_structure) [functional](http://en.wikipedia.org/wiki/Purely_functional) [priority queue](http://en.wikipedia.org/wiki/Priority_queue).  This priority queue is implemented using a [pairing heap](http://en.wikipedia.org/wiki/Pairing_heap), though because it uses a functional interface does not support the decrease-key function (as locating a node within the heap is expensive).

# Example

```javascript
var fpq = require('functional-priority-queue')


```

# API

```javascript
var fpq = require('functional-priority-queue')
```

#### `var pq = fpq(keys, values)`
Creates a new functional priority queue

* `keys` is an array of weights which are used to order the elements in the priority queue
* `values` is an array of values which are ascoiated to the keys

**Returns** A new priority queue

**Time Complexity** `O(keys.length)`

#### `pq.minKey`
The key of the smallest element in the priority queue

#### `pq.minValue`
The value of the smallest element in the priority queue

#### `var next = fpq.push(pq, key, value)`
Adds an item to the priority queue

* `pq` is the priority queue into which we are inserting
* `key` is the key we are inserting into the priority queue
* `value` is the value we are inserting into the priority queue

**Returns** A new priority queue with the pair `(key, value)` added to it

**Time Complexity** `O(1)`

#### `var next = fpq.pop(pq)`
Removes the top element from a priority queue

* `pq` is a priority queue which we are removing from

**Returns** A copy of `pq` with the minimal element deleted

**Time Complexity** `O(log(n))` [*amortized*](http://en.wikipedia.org/wiki/Amortized_analysis)

#### `var next = fpq.merge(pq1, pq2, ...pqn)`
Merges a list of priority queues into a single priority queue

* `pq1, pq2, ...pqn` is a list of `n` priority queues

**Returns** A single priority queue whose contents are equal to all the input priority queues combined

**Time Complexity** `O(n)`

# License
(c) 2015 Mikola Lysenko. MIT License