// currently only supports 4 cards per page. a little more logic needed for 8 cards or mixing (eg 2*quarters and 4 eigths)
// TODO: cloak the FOUC

angular.module('ngAppFlashCards', []).
controller('controllerFlashCards', function($scope) {
  
    function init() {
        let arroCourses = oCourses.courses,
            arroRows = [],
            arroAllCards = [],      // it's an array of arrays
            iPageCapacity = 8;

        $scope.arroPages = [];
        $scope.arroFlattenedCards = [];

        for (let i = 0; i < arroCourses.length; i++) {
            arroAllCards.push(arroCourses[i].cards);
        }

        $scope.arroFlattenedCards = flatten(arroAllCards);

        for (let i = 0; i < $scope.arroFlattenedCards.length; i++) {
            let iCurrentRow = Math.floor(i/2);

            if (arroRows[iCurrentRow]) {
                arroRows[iCurrentRow].arroCards.push($scope.arroFlattenedCards[i]);
            } else {
                arroRows.push({
                  'arroCards': [$scope.arroFlattenedCards[i]]
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

        $scope.bPrintMode = true;
    }
    init();

    $scope.fToggleMode = function() {
        $scope.bPrintMode = !$scope.bPrintMode;
        if(!$scope.bPrintMode) {
           $scope.fDrawCard();
        }
    }

    // TODO: allow random selection
    // TODO: don't auto-increment unless they ask
    $scope.fDrawCard = function() {
        if (!$scope.iCurrentCard
            || $scope.iCurrentCard === $scope.arroFlattenedCards.length) {
          $scope.iCurrentCard = 0;
        }
        $scope.iCurrentCard++;

        $scope.oCurrentCard = $scope.arroFlattenedCards[$scope.iCurrentCard - 1];
        $scope.bShowFrontOfCurrentCard = true;
    }

    $scope.fFlipCard = function() {
        $scope.bShowFrontOfCurrentCard = !$scope.bShowFrontOfCurrentCard;
    }
});

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
