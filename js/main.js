!function(n){var e={};function t(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return n[c].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=n,t.c=e,t.d=function(n,e,c){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(c,l,function(e){return n[e]}.bind(null,l));return c},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports){eval("console.log(`O! Widzę dobry ziomek. Skoro tu wszedłeś to już umiesz klikać w devtoolsy ;)\r\nPozdro!`);\r\n\r\nconst footerTitle = document.querySelector('.footer__paragraph--js');\r\n\r\n\r\nconst IdentifyPerson = (age, name) => {\r\n  const matured = age >= 18 && age <= 60;\r\n  const old = age >= 61 && age <= 75 || age >= 75;\r\n\r\n  if(matured) {\r\n    console.log(`Witaj ${name}, dorosły człowieku! Twój obecny wiek to ${age}.`);\r\n  } else if(old) {\r\n    console.log(`Witaj ${name}, starszy człowieku! Twój obecny wiek to ${age}.`);\r\n  } else {\r\n    console.log(`Witaj ${name}, młoda osóbko! Twój wiek to ${age}.`);\r\n  }\r\n\r\n  // switch(true) {\r\n  //   case (age >= 35 && age <= 40):\r\n  //     console.log(`Witaj, ${name} dorosły człowieku! Twój obecny wiek to ${age}.`);\r\n  //   break;\r\n  //   case (age >= 41 && age <= 70 || age >= 70):\r\n  //     console.log(`Witaj, ${name} starszy człowieku! Twój obecny wiek to ${age}.`);\r\n  //   break;\r\n    \r\n  //   default:\r\n  //     console.log(`Witaj, ${name} młody człowieku! Twój wiek to ${age}.`);\r\n  // }\r\n}\r\n\r\nIdentifyPerson(61, 'Paweł');\r\nIdentifyPerson(32, 'Jarek');\r\nIdentifyPerson(17, 'Natalia');\r\n\r\n// console.log(footerTitle.innerHTML);\r\nfooterTitle.innerHTML = 'Strona domowa Jarka Kajko, wszystkie treści są własnością autora, ale śmiało można kopiować na pełnym legalu.';\r\n\r\nconst navigationBurger = document.querySelector('.hamburger__icon--js');\r\n\r\nnavigationBurger.addEventListener('click', (e) => {\r\n  const navigationList = document.querySelector('.navigation__list--js');\r\n  const buttonActive = document.querySelector('.button');\r\n  navigationList.classList.toggle('navigation__list--visible');\r\n  buttonActive.classList.toggle('active');\r\n  buttonActive.classList.toggle('not-active');\r\n\r\n});\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3RjtBQUN4Rjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLEtBQUssMkNBQTJDLElBQUk7QUFDN0UsR0FBRztBQUNILHlCQUF5QixLQUFLLDJDQUEyQyxJQUFJO0FBQzdFLEdBQUc7QUFDSCx5QkFBeUIsS0FBSywrQkFBK0IsSUFBSTtBQUNqRTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUssMENBQTBDLElBQUk7QUFDbEY7QUFDQTtBQUNBLCtCQUErQixLQUFLLDBDQUEwQyxJQUFJO0FBQ2xGOztBQUVBO0FBQ0EsK0JBQStCLEtBQUssaUNBQWlDLElBQUk7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coYE8hIFdpZHrEmSBkb2JyeSB6aW9tZWsuIFNrb3JvIHR1IHdzemVkxYJlxZsgdG8ganXFvCB1bWllc3oga2xpa2HEhyB3IGRldnRvb2xzeSA7KVxyXG5Qb3pkcm8hYCk7XHJcblxyXG5jb25zdCBmb290ZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3BhcmFncmFwaC0tanMnKTtcclxuXHJcblxyXG5jb25zdCBJZGVudGlmeVBlcnNvbiA9IChhZ2UsIG5hbWUpID0+IHtcclxuICBjb25zdCBtYXR1cmVkID0gYWdlID49IDE4ICYmIGFnZSA8PSA2MDtcclxuICBjb25zdCBvbGQgPSBhZ2UgPj0gNjEgJiYgYWdlIDw9IDc1IHx8IGFnZSA+PSA3NTtcclxuXHJcbiAgaWYobWF0dXJlZCkge1xyXG4gICAgY29uc29sZS5sb2coYFdpdGFqICR7bmFtZX0sIGRvcm9zxYJ5IGN6xYJvd2lla3UhIFR3w7NqIG9iZWNueSB3aWVrIHRvICR7YWdlfS5gKTtcclxuICB9IGVsc2UgaWYob2xkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgV2l0YWogJHtuYW1lfSwgc3RhcnN6eSBjesWCb3dpZWt1ISBUd8OzaiBvYmVjbnkgd2llayB0byAke2FnZX0uYCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKGBXaXRhaiAke25hbWV9LCBtxYJvZGEgb3PDs2JrbyEgVHfDs2ogd2llayB0byAke2FnZX0uYCk7XHJcbiAgfVxyXG5cclxuICAvLyBzd2l0Y2godHJ1ZSkge1xyXG4gIC8vICAgY2FzZSAoYWdlID49IDM1ICYmIGFnZSA8PSA0MCk6XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBXaXRhaiwgJHtuYW1lfSBkb3Jvc8WCeSBjesWCb3dpZWt1ISBUd8OzaiBvYmVjbnkgd2llayB0byAke2FnZX0uYCk7XHJcbiAgLy8gICBicmVhaztcclxuICAvLyAgIGNhc2UgKGFnZSA+PSA0MSAmJiBhZ2UgPD0gNzAgfHwgYWdlID49IDcwKTpcclxuICAvLyAgICAgY29uc29sZS5sb2coYFdpdGFqLCAke25hbWV9IHN0YXJzenkgY3rFgm93aWVrdSEgVHfDs2ogb2JlY255IHdpZWsgdG8gJHthZ2V9LmApO1xyXG4gIC8vICAgYnJlYWs7XHJcbiAgICBcclxuICAvLyAgIGRlZmF1bHQ6XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGBXaXRhaiwgJHtuYW1lfSBtxYJvZHkgY3rFgm93aWVrdSEgVHfDs2ogd2llayB0byAke2FnZX0uYCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5JZGVudGlmeVBlcnNvbig2MSwgJ1Bhd2XFgicpO1xyXG5JZGVudGlmeVBlcnNvbigzMiwgJ0phcmVrJyk7XHJcbklkZW50aWZ5UGVyc29uKDE3LCAnTmF0YWxpYScpO1xyXG5cclxuLy8gY29uc29sZS5sb2coZm9vdGVyVGl0bGUuaW5uZXJIVE1MKTtcclxuZm9vdGVyVGl0bGUuaW5uZXJIVE1MID0gJ1N0cm9uYSBkb21vd2EgSmFya2EgS2Fqa28sIHdzenlzdGtpZSB0cmXFm2NpIHPEhSB3xYJhc25vxZtjacSFIGF1dG9yYSwgYWxlIMWbbWlhxYJvIG1vxbxuYSBrb3Bpb3dhxIcgbmEgcGXFgm55bSBsZWdhbHUuJztcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25CdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyX19pY29uLS1qcycpO1xyXG5cclxubmF2aWdhdGlvbkJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbGlzdC0tanMnKTtcclxuICBjb25zdCBidXR0b25BY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJyk7XHJcbiAgbmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbGlzdC0tdmlzaWJsZScpO1xyXG4gIGJ1dHRvbkFjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBidXR0b25BY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZSgnbm90LWFjdGl2ZScpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);