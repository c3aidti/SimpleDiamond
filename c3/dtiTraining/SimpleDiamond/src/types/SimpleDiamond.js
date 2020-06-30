/*
* Returns the recalculated value for depth of current diamond
*/
function recalculatingDepth(diamondID){

  var diamond, result;
  diamond = SimpleDiamond.get({id:diamondID});
  // total depth percentage = z / mean(x, y) = 2 * z / (x + y) (43--79)
  result = 2 * diamond.zAxis / (diamond.xAxis + diamond.yAxis);
  return result;

}
