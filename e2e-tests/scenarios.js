'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('breweryFinder', function () {
	var searchBox = element(by.model('searchText'));
	
	beforeEach(function(){
		browser.get('');
	});
	
	it('should have a search field on the main page', function(){
		var foo;
		expect(searchBox).not.toBeUndefined();
		searchBox.sendKeys('hello');
		expect(searchBox.getAttribute('value')).toBe('hello');
	});
});
