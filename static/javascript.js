const languageSwitchBtn = document.querySelector('.btn-item-language');

let languageList = {
  en: {
    title: 'this guy is <a href="#">mrbbkk</a>',
    blockquote: '"You will never have what you like until you learn to like what you have."',
    btn: 'switch language',
  },
  zh: {
    title: '这个B叫作 <a href="#">mrbbkk</a>',
    blockquote: '"欲得到你喜欢的东西，应先学会喜欢你已有的东西。"',
    btn: '切换语言',
  },
};

let domTitle = document.querySelector('h1[language]');
let domBlockquote = document.querySelector('blockquote[language]');
let domBtn = document.querySelector('li.btn[language]');
// let domMain = document.querySelector('main');

function languageSwitch() {
  let currentLanguage = languageSwitchBtn.attributes.language.value;
  console.log('switch', currentLanguage);
  if (currentLanguage === 'en') {
    languageSwitchBtn.attributes.language.value = 'zh';
    document.body.style.fontFamily = 'system-ui';
    domTitle.innerHTML = '什么毛病';
    domBlockquote.innerHTML = languageList.zh.blockquote;
    domBtn.innerHTML = languageList.zh.btn;
  } else if (currentLanguage === 'zh') {
    document.body.style.fontFamily = 'Covered,pingfang-sc，micsoft-yahei';
    languageSwitchBtn.attributes.language.value = 'en';
    domTitle.innerHTML = languageList.en.title;
    domBlockquote.innerHTML = languageList.en.blockquote;
    domBtn.innerHTML = languageList.en.btn;
  }
}

languageSwitchBtn.addEventListener('click', languageSwitch);
