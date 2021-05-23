'use strict';

const tabTitle = document.querySelectorAll('.ly_tabtitle li');

// console.log(tabTitle);

const tabArea = document.querySelectorAll('.ly_content p');

// console.log(tabArea);

// 一つ目以外を非表示
tabArea.forEach((area, index)=>{
  if(index > 0){
    area.classList.add('none');
  };
});

// tabTitle クリック毎に tabArea 切り替え
tabTitle.forEach((title, index)=>{
  title.addEventListener('click', ()=>{
    tabArea.forEach((area, index2)=>{
      if(index === index2){
        area.classList.remove('none');
      } else {
        area.classList.add('none');
      };
    });
  });
});