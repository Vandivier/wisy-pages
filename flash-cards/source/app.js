// currently only supports 4 cards per page. a little more logic needed for 8 cards or mixing (eg 2*quarters and 4 eigths)

angular.module('ngAppFlashCards', []).
controller('controllerFlashCards', function($scope) {
    let arroCourses = oCourses.courses,
        arroRows = [],
        arroAllCards = [],      // it's an array of arrays
        arroFlattenedCards = [],
        iPageCapacity = 8;

    $scope.arroPages = [];

    for (let i = 0; i < arroCourses.length; i++) {
        arroAllCards.push(arroCourses[i].cards);
    }

    arroFlattenedCards = flatten(arroAllCards);

    for (let i = 0; i < arroFlattenedCards.length; i++) {
        let iCurrentRow = Math.floor(i/2);

        if (arroRows[iCurrentRow]) {
            arroRows[iCurrentRow].arroCards.push(arroFlattenedCards[i]);
        } else {
            arroRows.push({
              'arroCards': [arroFlattenedCards[i]]
            });
        }
    }

    for (let i = 0; i < arroRows.length; i++) {
        let iCurrentPage = Math.floor(i/2);

        if ($scope.arroPages[iCurrentPage]) {
            $scope.arroPages[iCurrentPage].arroRows.push(arroRows[i]);
        } else {
            $scope.arroPages.push({
              'arroRows': [arroRows[i]]
            });
        }
    }

    console.log($scope.arroPages, arroRows);
});

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
