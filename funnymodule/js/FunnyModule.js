 'use strict';

 var FunnyModule = (function funnyModule() {

     function colorDivsToRed() {
         var divs = document.querySelectorAll("div");
         for (var i = 0; i < divs.length; i++) {
             var elem = divs[i];
             elem.className = "red";
         }

     }

     function addBorderToSections() {
         var sections = document.querySelectorAll("section");
         sections.forEach(function (section) {
             section.className = "border";
             console.log(section);
         })
     }

     function makeTextInSpansBig() {
         var spans = document.querySelectorAll("span");
         for (var i = 0; i < spans.length; i++) {
             var elem = spans[i];
             elem.className = "big";
         }

     }

     function addTextShadowToHeadings() {
         var heads = document.querySelectorAll("h1");
         for (var i = 0; i < heads.length; i++) {
             var elem = heads[i];
             elem.className = "shadow";
         }

     }
     
     return {
         colorDivs: colorDivsToRed, 
         addBorder: addBorderToSections,
         makeText: makeTextInSpansBig
     }
 })();

