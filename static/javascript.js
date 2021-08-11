function languageEvent() {
  let domTitle = document.querySelector('div.title[language]');
  let domBlockquote = document.querySelector('blockquote[language]');
  let domBtn = document.querySelector('li.btn[language]');
  // let domMain = document.querySelector('main');

  function languageSwitch() {
    let languageList = {
      en: {
        title: 'this guy is <span>mrbbkk</span>',
        blockquote: '"You will never have what you like until you learn to like what you have."',
        btn: 'switch language',
      },
      zh: {
        title: '这个B叫作 <a href="">mrbbkk</a>',
        blockquote: '"欲得到你喜欢的东西，应先学会喜欢你已有的东西。"',
        btn: '切换语言',
      },
    };

    let currentLanguage = languageSwitchBtn.attributes.language.value;
    console.log('switch', currentLanguage);
    if (currentLanguage === 'en') {
      document.body.style.fontFamily = 'system-ui';
      domTitle.innerHTML = '喂！三点几咧！';
      domBlockquote.innerHTML = languageList.zh.blockquote;
      domBtn.innerHTML = '做……做撚啊做！';
      return (languageSwitchBtn.attributes.language.value = 'zh');
    } else if (currentLanguage === 'zh') {
      document.body.style.fontFamily = 'Covered,pingfang-sc，micsoft-yahei';
      domTitle.innerHTML = languageList.en.title;
      domBlockquote.innerHTML = languageList.en.blockquote;
      domBtn.innerHTML = languageList.en.btn;
      return (languageSwitchBtn.attributes.language.value = 'en');
    }
  }
  const languageSwitchBtn = document.querySelector('.btn-item-language');
  languageSwitchBtn.addEventListener('click', languageSwitch);
}

function audioEvent() {
  let audio = document.querySelector('audio');
  audio.play();
  audio.volume = 0.015;

  mrbbkk.addEventListener('click', () => {
    audio.volume = 0.1;
    audio.play();
  });

  audio.addEventListener('timeupdate', function firstPause() {
    if (audio.currentTime >= 1) {
      audio.pause();
      audio.removeEventListener('timeupdate', firstPause);
    }
  });
  audio.addEventListener('timeupdate', function firstPause() {
    console.log(audio.currentTime);
    if (audio.currentTime >= 2.3) {
      audio.pause();
      audio.removeEventListener('timeupdate', firstPause);
    }
  });
}

languageEvent();
audioEvent();
