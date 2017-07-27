// TODO: as es6 module
var oLintOptions = {
  'arrsAllowedClasses': ['table', 'table-body', 'table-column', 'table-row'],
  'sRunNativeScript': 'full',
  'fAfterNativeScript': _fTablesToDivs
};

var _fTablesToDivs = function() {
  $('table').addClass('table');
  $('tbody').addClass('table-body');
  $('tr').addClass('table-row');
  $('td').addClass('table-column');

  $('table, tr, td').changeElementType('div');
}
