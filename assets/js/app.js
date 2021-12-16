/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  //スムーズスクロール\n  var win_size = $(window).width();\n\n  var runScroll = function runScroll() {\n    $('a[href^=\"#\"]').click(function () {\n      var speed = 400; // ミリ秒で記述\n\n      var href = $(this).attr(\"href\");\n      var target = $(href == \"#\" || href == \"\" ? 'html' : href);\n      var position = target.offset().top - 100;\n      $('body,html').animate({\n        scrollTop: position\n      }, speed, 'swing');\n      return false;\n    });\n  }; // callback用ナビメニュー文言\n\n\n  var changeTxt = function changeTxt(trigger) {\n    var $targetTxt = $('.header__btn__txt');\n\n    if (trigger.hasClass('is-close')) {\n      $targetTxt.text('CLOSE');\n    } else {\n      $targetTxt.text('MENU');\n    }\n  }; // ハンバーガーメニュー開閉処理\n\n\n  var openHamburger = function openHamburger(callback) {\n    var $trigger = $('[data-hamburger=\"trigger\"]');\n    var $target = $('[data-hamburger=\"target\"]');\n    var $body = $('body');\n    $trigger.on('click', function () {\n      $(this).toggleClass('is-close');\n      $target.toggleClass('is-active');\n      $body.toggleClass('is-active');\n      callback($trigger);\n    });\n    $target.on('click', function () {\n      $(this).removeClass('is-active');\n      $trigger.removeClass('is-close');\n      $body.removeClass('is-active');\n      callback($trigger);\n    });\n    $target.find('a').on('click', function () {\n      $target.removeClass('is-active');\n      $trigger.removeClass('is-close');\n      $body.removeClass('is-active');\n      callback($trigger);\n    });\n  }; // ふわっとtextアニメーション\n\n\n  var huwaAnimation = function huwaAnimation() {\n    $('.animation').css('visibility', 'hidden');\n    $(window).scroll(function () {\n      var windowHeight = $(window).height(),\n          topWindow = $(window).scrollTop();\n      $('.animation').each(function () {\n        var targetPosition = $(this).offset().top;\n\n        if (topWindow > targetPosition - windowHeight + 100) {\n          $(this).addClass(\"fadeInDown\");\n        }\n      });\n    });\n  }; // パスワードlocalStorageの保存\n\n\n  var saveLocalStrage = function saveLocalStrage() {\n    localStorage.setItem('memberKey', 'true');\n  }; // パスワード訴求,ajaxファイル取得\n\n\n  var unlock = function unlock(callback) {\n    var $target = $('[data-answer=\"target\"]');\n    var $trigger = $('[data-answer=\"trigger\"]');\n    var key = $.trim($('h1.mainTitle').text());\n    var $submitDom = $('.ninja__submit');\n    var $followTxt = $('.note.follow');\n    var $inputText = $('input[name=\"passwd\"]');\n    var getLocalStorage = localStorage.getItem('memberKey');\n\n    if (getLocalStorage) {\n      $inputText.hide();\n      $('p.note.follow').hide();\n    }\n\n    $trigger.on('click', function () {\n      var idTarget = $(this).attr('id');\n\n      var runAjax = function runAjax() {\n        $.ajax({\n          url: 'a' + idTarget + '.html',\n          dataType: 'html',\n          success: function success(data) {\n            $target.html(data);\n          },\n          error: function error(data) {\n            alert('error');\n          }\n        });\n      };\n\n      if (getLocalStorage || $trigger.hasClass('is-release')) {\n        $submitDom.fadeOut();\n        $followTxt.fadeOut();\n        runAjax();\n      } else {\n        if ($('input[name=\"passwd\"]').val() == key) {\n          $submitDom.fadeOut();\n          $followTxt.fadeOut();\n          runAjax();\n          callback();\n        } else {\n          confirm('パスワードが違います！');\n        }\n      }\n    });\n  }; // 一覧画面もっとみるボタンアコーディオン\n\n\n  var runAccordion = function runAccordion() {\n    var $trigger = $('[data-accordion=\"trigger\"]');\n    var $target = $('[data-accordion=\"target\"]');\n    $trigger.on('click', function () {\n      var _self = $(this);\n\n      var _selfTarget = _self.next($target);\n\n      _self.hide();\n\n      _selfTarget.fadeIn();\n    });\n  };\n\n  var sp_bottom_banner = function sp_bottom_banner() {\n    var header_banner_flg = true;\n\n    if (win_size <= 768) {\n      $(window).on(\"scroll\", function () {\n        if ($(this).scrollTop() > 300) {\n          if (header_banner_flg) {\n            $('.header-banner').fadeIn();\n          }\n        } else {\n          $('.header-banner').fadeOut();\n        }\n      });\n    }\n\n    $('[data-banner-close]').on('click', function () {\n      $(this).hide();\n      $(this).parents('.header-banner').hide();\n      header_banner_flg = false;\n    });\n  };\n\n  setTimeout(function () {\n    var q_title = $('.ninja__tit').text().trim();\n    var tw_btn = \"\\n        <div class=\\\"tw-btn\\\">\\n          <a target=\\\"_blank\\\" href=\\\"https://twitter.com/share?url=\".concat(location.href, \"&text=\\u3010\").concat(q_title, \"\\u3011\\u3092\\u5B66\\u7FD2\\u3057\\u307E\\u3057\\u305F\\uFF01&via=ninjacodeee&hashtags=\\u5FCD\\u8005CODE,\\u30D7\\u30ED\\u30B0\\u30E9\\u30DF\\u30F3\\u30B0\\u521D\\u5FC3\\u8005,\\u99C6\\u3051\\u51FA\\u3057\\u30A8\\u30F3\\u30B8\\u30CB\\u30A2,\\u4ECA\\u65E5\\u306E\\u7A4D\\u307F\\u4E0A\\u3052\\\">\\n            \\u6D3B\\u52D5\\u8A18\\u9332\\u3092Tweet\\u3059\\u308B\\n          </a>\\n        </div>\");\n    $('.ninja__question').eq(0).append(tw_btn);\n  }, 1000); // キャンペーンモーダルlocalStorageの保存\n  // let campaignLocalStrage = function() {\n  //     localStorage.setItem('campaignKey', 'true');\n  // };\n  // キャンペーンモーダル訴求\n  // let campaignModal = function() {\n  //     let $modalTarget = $('[data-modal=\"target\"]');\n  //     let $modalClose = $('.ninja__modal__overlay');\n  //     let getLocalStorage = localStorage.getItem('campaignKey');\n  //     if (getLocalStorage) {\n  //         return;\n  //     }\n  //     setTimeout(function() {\n  //         $modalTarget.fadeIn(\"slow\");\n  //         campaignLocalStrage();\n  //     }, 300);\n  //     $modalClose.click(function() {\n  //         $modalTarget.fadeOut();\n  //     });\n  // };\n  // document ready\n\n  $(function () {\n    runScroll();\n    openHamburger(changeTxt);\n    huwaAnimation();\n    unlock(saveLocalStrage);\n    runAccordion();\n    sp_bottom_banner(); // campaignModal();\n\n    setTimeout(function () {\n      $('canvas').addClass('is-animation');\n    }, 2500);\n  });\n})(window.jQuery);\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });