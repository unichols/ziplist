const _ = require('./__cdnjs.cloudflare.com_ajax_libs_underscore.js_1.8.3_underscore.js');
function zipList(list1, list2) {
  const zipped = [];
  for (let i = 0; i < list1.length; i++) {
    zipped.push(list1[i], list2[i]);
  }
  return zipped;
}
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));