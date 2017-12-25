var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var app = express();


var anaylzer = require('./analyze.js')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/scrapeynews', function(req, res){
	var url = 'https://news.ycombinator.com';
	console.log('the url I got is ' + url);

	request(url, function(error, response, html){
		if(error){
			console.log(JSON.stringify(error));
			console.log('fuck there was an error in scraping')
		} else {
			var $ = cheerio.load(html);
		    var parsedResults = [];
		    $('span.comhead').each(function(i, element){
		      var a = $(this).prev();
		      var rank = a.parent().parent().text();
		      var title = a.text();
		      var url = a.attr('href');
		      var subtext = a.parent().parent().next().children('.subtext').children();
		      var points = $(subtext).eq(0).text();
		      var username = $(subtext).eq(1).text();
		      var comments = $(subtext).eq(2).text();
		      var metadata = {
		        rank: parseInt(rank),
		        title: title,
		        url: url,
		        points: parseInt(points),
		        username: username,
		        comments: parseInt(comments)
		      };
		      parsedResults.push(metadata);
		    });
		    console.log(parsedResults);
		}
	})
})

app.get('/analyze', function(req, res) {
	var keyword = req.query.keyword;
	//plan: populate a binary tree of links on the new website use BFS (implement a queue) to 
	//find that keyword located throughout the newspsper-> send that list to the analyzing module to get back	

	var returnobj = analyzer.histOfTitles()



})

app.get('/analyzeTechcrunchNews', function(req, res){
	var url = 'https://techcrunch.com/'

	request(url, function(error, response, html){
		if(error){
			console.error(error);
			console.log('techcrunch scrape went bad xD')
		} else {
			var $ = cheerio.load(html);
			console.log(($));
		}
	})


})

app.get('/scrape', function(req, res) {

	//represents layers of the binary treedsabkdsdsakjh
	var limit = req.query.limit;

	//starting url to begin the scraping adevnture withhrdhasahdkajs
	var url = req.query.url;

	console.log("Alright then, I'm going to start scraping at: " + url + " with a binary tree limit of " + limit + " layers");




})

app.listen('8080');
console.log('listening on port 8080 hahaha')
