var _table_ = document.createElement('table');
var _tr_ = document.createElement('tr');
var _th_ = document.createElement('th');
var _td_ = document.createElement('td');
var _input_=document.createElement('input');

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable(arr) {
     var table = _table_.cloneNode(false);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
 }
 
function buildFormFromRecipe(recipe)
{
  var rowBegin = '<div class="row">';
  var rowEnd = '</div>'
  var nameColumnBegin = '<div class="one-third column">'
  var columnNameEnd  = '</div>'
  var valueColumnBegin = '<div class="two-thirds column">'
  var valueColumnEnd = '</div>'

  var html ='';

  if(recipe['name'] != null)
  {
    html += '<h4>' + recipe.name + '</h4>'
  }

  html += '<div class="container">';
  var ingredients = recipe.ingredients
  for(var key in ingredients)
  {
        html += rowBegin;
        html += nameColumnBegin + key + columnNameEnd;
        
        if(typeof ingredients[key] == 'object')
        {
            html += valueColumnBegin + buildFormFromRecipe(ingredients[key]) + valueColumnEnd;
        }
        else
        {
            html += valueColumnBegin + ingredients[key] + valueColumnEnd;
        }        
        html += rowEnd;
  }
  return html + '</div>';
}