function initTabs() {
  let tabs = document.querySelectorAll('.content-tabs');
  for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabsItems = tab.querySelectorAll('.content-tabs__list-tab');
    let tabsBlocks = tab.querySelectorAll('.content-tabs__contents-block');
    for (let index = 0; index < tabsItems.length; index++) {
      let tabs_item = tabsItems[index];
      tabs_item.addEventListener('click', function (e) {
        for (let index = 0; index < tabsItems.length; index++) {
          let tabs_item = tabsItems[index];
          tabs_item.classList.remove('open');
          tabsBlocks[index].classList.remove('open');
        }
        tabs_item.classList.add('open');
        tabsBlocks[index].classList.add('open');
        e.preventDefault();
      });
    }
  }
}

initTabs();

// Polyfill forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const ranges = document.querySelectorAll('.input-range-block');

function isOlderEdgeOrIE() {
  return (
    window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
    window.navigator.userAgent.indexOf('Edge') > -1
  );
}

function valueTotalRatio(value, min, max) {
  return ((value - min) / (max - min)).toFixed(2);
}

function getLinearGradientCSS(ratio, leftColor, rightColor) {
  return [
    '-webkit-gradient(',
    'linear, ',
    'left top, ',
    'right top, ',
    'color-stop(' + ratio + ', ' + leftColor + '), ',
    'color-stop(' + ratio + ', ' + rightColor + ')',
    ')'
  ].join('');
}

function updateRangeEl(rangeEl) {
  const ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
  rangeEl.style.backgroundImage = getLinearGradientCSS(ratio, '#2EB670', '#DBDCDE');
}

function initRangeEl(rangeBlock) {
  const rangeEl = rangeBlock.querySelector('.behavior-item__value-range');
  const textEl = rangeBlock.querySelector('.score');

  if (isOlderEdgeOrIE()) {
    rangeEl.addEventListener('change', function(e) {
      textEl.value = e.target.value + 'px';
    });
    rangeEl.addEventListener('input', function(e) {
      textEl.value = e.target.value + 'px';
    });
  } else {
    updateRangeEl(rangeEl);
    rangeEl.addEventListener('input', function(e) {
      updateRangeEl(e.target);
      textEl.value = e.target.value + 'px';
    });
  }
}

ranges.forEach(function (range) {
  initRangeEl(range);
});

const selection = document.querySelector('#currency');

window.onload = function() {
  selection.onchange = function(event){
    const dataCurrency = event.target.options[event.target.selectedIndex].dataset.currency;
    const labelCurrency = document.querySelector('.value-goal-result');
    labelCurrency.innerHTML = dataCurrency;
  };
};