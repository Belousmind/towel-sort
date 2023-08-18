
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
  for (i in matrix) {
    if (i % 2 ) {
      matrix[i].reverse()
      for (j in matrix[i]) {
        newMatrix.push(matrix[i][j])
      } 
    } else {
      for (j in matrix[i]) {
        newMatrix.push(matrix[i][j])
      } 
    }
  }
  return newMatrix 
}