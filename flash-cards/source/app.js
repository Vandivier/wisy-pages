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

        $scope.oState = {};             // holds ng-modeled values; TODO: should it hold the whole state? eg bPrintMode
        $scope.oState.bShuffle = false;
        $scope.bPrintMode = true;
        $scope.iCurrentCard = 0;
    }

    init();

    $scope.fToggleMode = function() {
        $scope.bPrintMode = !$scope.bPrintMode;
        if(!$scope.bPrintMode) {
           $scope.fDrawCard();
        }
    }

    // TODO: don't auto-increment unless they ask
    // note: iCurrentCard is 1-indexed, not 0-indexed, so it matches the rendered index not the array position.
    $scope.fDrawCard = function() {
        let iDeckSize = $scope.arroFlattenedCards.length;

        if (!$scope.oState.bShuffle) {
            if ($scope.iCurrentCard === iDeckSize) {
              $scope.iCurrentCard = 0;
            }
            $scope.iCurrentCard++;
        } else {
            $scope.iCurrentCard = randomNewIntFromInterval(1, iDeckSize, $scope.iCurrentCard);
        }

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

// ref: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// makes sure you don't click "next card" as a user and draw the same card.
function randomNewIntFromInterval(min, max, iOriginal) {
    let iNew = randomIntFromInterval(min, max);

    while (iNew === iOriginal) {
        iNew = randomIntFromInterval(min, max);
    }

    return iNew;
}
