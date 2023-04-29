("use strict");
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};
const getParent = (element, selector) => {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
  if (element.classList.contains(selector)) {
    return element;
  }
};

/* ========  doGTranslate("ru|en");  ================== */
function googleTranslateElementInit2() {
  const ems = new google.translate.TranslateElement(
    {
      pageLanguage: "vi",
      autoDisplay: false,
    },
    "google_translate_element2",
  );
}
/* <![CDATA[ */
eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "6 7(a,b){n{4(2.9){3 c=2.9(\"o\");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s('t'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a=='')v;3 b=a.w('|')[1];3 c;3 d=2.x('y');z(3 i=0;i<d.5;i++)4(d[i].A=='B-C-D')c=d[i];4(2.j('k')==E||2.j('k').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,'m');7(c,'m')}}",
    43,
    43,
    "||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500".split(
      "|",
    ),
    0,
    {},
  ),
);
/* ]]> */
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages:
        "af,ach,ak,am,ar,az,be,bem,bg,bh,bn,br,bs,ca,chr,ckb,co,crs,cs,cy,da,de,ee,el,en,eo,es,es-419,et,eu,fa,fi, fo,fr,fy,ga,gaa,gd,gl,gn,gu,ha,haw,hi,hr,ht,hu,hy,ia, id,ig,is,it,iw,ja,jw,ka,kg,kk,km,kn,ko,kri,ku,ky,la, lg,ln,lo,loz,lt,lua,lv,mfe,mg,mi,mk,ml,mn,mo,mr,ms,mt, ne,nl,nn,no,nso,ny,nyn,oc,om,or,pa,pcm,pl,ps,pt-BR, pt-PT,qu,rm,rn,ro,ru,rw,sd,sh,si,sk,sl,sn,so,sq,sr, sr-ME,st,su,sv,sw,ta,te,tg,th,ti,tk,tl,tn,to,tr,tt, tum,tw,ug,uk,ur,uz,vi,wo,xh,yi,yo,zh-CN,zh-TW,zu",
      layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
    },
    "google_translate_element",
  );
}

$(window).on("load", function () {
  $(".goog-te-gadget").html($(".goog-te-gadget").children());
  $("#google-translate").fadeIn("1000");

  function cleartimer() {
    setTimeout(function () {
      window.clearInterval(myVar);
    }, 500);
  }
  function myTimer() {
    if ($(".goog-te-combo option:first").length) {
      $(".goog-te-combo option:first").html("Translate");
      cleartimer();
    }
  }

  var myVar = setInterval(function () {
    myTimer();
  }, 0);
});
/* =============== End Translate ==================== */
/* <![CDATA[ */
const welcomeText = select("#welcome"),
  wrapControl = select(".wrapControl"),
  clearScreen = select(".clearScreen"),
  welcome = select(".welcome"),
  inputEl = select("#importArticle"),
  resultArticleEl = select(".resultArticle"),
  controlPlayer = select(".controlPlayer ");
let rates = document.querySelector("#rate");
let pits = document.querySelector("#pitch");
var reloadState;
setTimeout(() => {
  reloadState = function () {
    var innerDoc;
    var iframe = document.querySelector(".VIpgJd-ZVi9od-ORHb-OEVmcd.skiptranslate");
    if (iframe) innerDoc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
    return innerDoc && innerDoc.getElementById(":1.close");
  };
}, 1500);
inputEl.addEventListener("input", function (e) {
  resultArticleEl.innerText = inputEl.value;
});
inputEl.addEventListener("focus", function (e) {
  responsiveVoice.speak("Xin chào! Hãy nhập vào những gì bạn muốn dịch và nghe!", "Vietnamese Female");
});
const translateLanguage = (function (languages) {
  var languages = select(".languages");
  languages.onclick = function (e) {
    let et = e.target,
      elementId = et.id;
    if (elementId) {
      switch (elementId) {
        case "England":
          language = "vi|en";
          break;
        case "Japan":
          language = "vi|ja";
          break;
        case "China":
          language = "vi|zh-CN";
          break;
        case "Korean":
          language = "vi|ko";
          break;
        default:
          break;
      }
      doGTranslate(language);
    }
  };
})();
let txt, language, txtClick, tWelcome, p, r;
function voiText(t) {
  txt = t;
  let voices,
    p = pits.value,
    r = rates.value;

  if (language) {
    switch (language) {
      case "vi|en":
        voices = "UK English Female";
        break;
      case "vi|ja":
        voices = "Japanese Male";
        break;
      case "vi|zh-CN":
        voices = "Chinese Male";
        break;
      case "vi|ko":
        voices = "Korean Male";
        break;
      default:
        voices = "Vietnamese Female";
        break;
    }
  }
  if (voices) {
    responsiveVoice.speak(txt, voices, {pitch: `${p}`, rate: `${r}`});
  } else if (txt == tWelcome) {
    responsiveVoice.speak("Xin chào Nguyễn Thu Hạ Trang!", "Vietnamese Female");
  } else {
    responsiveVoice.speak("Bạn cần lựa chọn một ngôn ngữ để nghe trước khi bấm Play", "Vietnamese Female");
  }
}
window.addEventListener("click", getCurrentText);
function getCurrentText(e) {
  let et = e.target;
  (word = window.getSelection().toString()),
    (parent =
      et.matches(".wrapControl") || et.matches(".clearScreen") || et.matches(".welcome")
        ? et
        : getParent(et, ".wrapControl") || getParent(et, ".wrapTextarea"));
  let isChild = resultArticleEl.contains(et),
    text = word;
  if (isChild) {
    if (text) {
      voiText(text);
    } else {
      let textWhenClick = e.target.innerText;
      voiText(textWhenClick);
      return;
    }
  } else if (!parent) {
    voiText("No text selected");
  }
  return txt;
}
welcome.addEventListener("click", function (e) {
  tWelcome = welcomeText.innerText;
  voiText(tWelcome);
});
const handleControl = (controlPlayer.onclick = (e) => {
  let textResult = resultArticleEl.innerText,
    et = e.target.matches(".Ctrl") ? et : getParent(e.target, ".Ctrl"),
    idLanguages = et.id;
  if (idLanguages) {
    switch (idLanguages) {
      case "Stop":
        if (responsiveVoice.isPlaying()) {
          responsiveVoice.cancel();
        }
        break;
      case "Start":
        voiText(textResult);
        break;
      case "Pause":
        if (responsiveVoice.isPlaying()) {
          responsiveVoice.pause();
        }
        break;
      case "resumed":
        responsiveVoice.resume();
        break;
      case "Clear":
        let reloadStateEl = reloadState();
        if (reloadStateEl) reloadStateEl.click();
        break;
      default:
        break;
    }
  }
});
clearScreen.onclick = () => {
  if (resultArticleEl.innerHTML !== "") {
    inputEl.value = "";
    resultArticleEl.innerHTML = inputEl.value;
  }
};
/* ]]> */
