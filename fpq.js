'use strict'

function HeapNode(key, value, subheaps) {
  this.minKey   = minKey
  this.minValue = minValue
  this.subheaps = subheaps
}

function append(list, item) {
  var nlist = list.slice()
  nlist.push(item)
  return nlist
}

function mergePair(a, b) {
  if(!a) {
    return b
  } else if(!b) {
    return a
  } else if(a.minKey < b.minKey) {
    return new HeapNode(a.minKey, a.minValue, append(a.subheaps, b))
  } else {
    return new HeapNode(b.minKey, b.minValue, append(b.subheaps, a))
  }
}

function mergeRec(list, idx) {
  if(idx >= list.length) {
    return null
  }
  return mergePair(mergePair(list[idx], list[idx+1]), mergeRec(list, idx+2))
}

function makeHeap(keys, values) {
  var nodes = []
  for(var i=0; i<keys.length; ++i) {
    nodes.push(new HeapNode(keys[i], values[i], []))
  }
  return mergeRec(nodes, 0)
}

function pushHeap(heap, key, value) {
  return merge(heap, makeHeap(key, value))
}

function popHeap(heap) {
  return heap && mergeRec(heap.subheaps, 0)
}

function merge() {
  return mergeRec([].slice.call(arguments), 0)
}

module.exports        = makeHeap
module.exports.push   = pushHeap
module.exports.pop    = popHeap
module.exports.merge  = merge