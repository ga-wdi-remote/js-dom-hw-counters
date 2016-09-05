// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
  var counts = [];
  /// DO NOT EDIT ABOVE THIS LINE ///

  var incrementCounter = function(i){
    // Change underlying data
    counts[i]++;
    // Change UI
    var counterDisplay = document.querySelectorAll('.counter span')[i];
    counterDisplay.innerHTML = counts[i];
  };

  var addNewCounter = function(){
    // Change underlying data
    counts.push(0);
    // Create new element
    var newCounter = document.createElement('div');
    newCounter.innerHTML =  "<h3>Count: <span>0</span></h3>";
    newCounter.innerHTML += "<button> +1 </button>";
    // Add properties
    newCounter.className += ' counter';
    newCounter.dataset.index = counts.length - 1;
    // Add event handlers
    newCounter.children[1].onclick = function(){
      var i = Number(this.parentNode.dataset.index);
      incrementCounter(i);
    };
    // Change UI by inserting new counter into page
    document.getElementById('counter-list').appendChild(newCounter);
  };

  document.getElementById('new-counter').onclick = addNewCounter;
};
