const fraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50]

export function miniumFaction(val, min=[]) {
    let res = {};
    if (checkLimitCalculation(val)) {      
      if (val === 0) {
        res = {fraction: compressArray(min)}
        return res
      }
      for (var i = 0; i < fraction.length; i++) {
        let res
        if (val - fraction[i] >= 0) {
          res = val - fraction[i]
          min.push(fraction[i])
          return miniumFaction(res, min)
        }
      }
      res = {fraction: compressArray(min), left: val}
      return res;
    } else {
      return res;
    }
  }
  
function checkLimitCalculation(value) {
    if (value.length > 8) {
        alert('Sorry we can calculate those numbers, we only accept 8 digits')
        return false
    } 
    return true
}
  
function compressArray(original) {
    var compressed = [];
    var copy = original.slice(0);
   
    for (var i = 0; i < original.length; i++) {
      var counter = 0;	
      for (var j = 0; j < copy.length; j++) {
        if (original[i] == copy[j]) {
          counter++;
          delete copy[j];
        }
      }
   
      if (counter > 0) {
        var a = {};
        a.value = original[i];
        a.count = counter;
        compressed.push(a);
      }
    }
    return compressed;
  };
