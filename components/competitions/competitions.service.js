/**
 * Factory for getting my projects
 */

'use strict';

angular.module('jaimino')
  .factory('Competitions', function () {
    var competition = function(name, host, date, link, img, target){
        this.name = name;
        this.host = host;
        this.date = date;
        this.img = img;
        this.link = link;
        this.target = target;
    };
    var competitions = [
        new competition(
            "DelHack", 
            "University of Delaware ACM", 
            "November 14th 2015", 
            "http://www.ecl.udel.edu/~acm/hack.html", 
            "assets/img/delhack.png", 
            "_blank"
        ),
        new competition(
            "Code for Good Delaware", 
            "JPMorgan Chase & Co.", 
            "November 1st 2013", 
            "#", 
            "assets/img/codegood_november.jpg", 
            "_blank"
        ),
        new competition(
            "Code for Good Delaware", 
            "JPMorgan Chase & Co.", 
            "March 8th 2013", 
            "http://www.udel.edu/udaily/2013/mar/code030813.html", 
            "assets/img/CodeforGood1_march.jpg", 
            "_blank"
        ),
        //new project("Tastimals", "https://jaaimino.github.io/tastimals/", "assets/img/project_thumbs/tastimals_thumb.png", "_blank")
    ];
    var getCompetitions = function(){
        return competitions;
    }
    // Public API here
    return {
        getCompetitions : getCompetitions
    };
  });
