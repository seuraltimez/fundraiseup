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

const ranges = document.querySelectorAll('.input-range-block');

function initRange(rangeBlock) {
  const inputRange = rangeBlock.querySelector('.behavior-item__value-range');
  const rangeScore = rangeBlock.querySelector('.score');

  rangeScore.innerHTML = inputRange.value + 'px';

  inputRange.oninput = () => {
    rangeScore.innerHTML = inputRange.value + 'px';
  };
}

ranges.forEach((range) => {
  initRange(range);
});

