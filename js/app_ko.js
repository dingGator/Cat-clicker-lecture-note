var Cat = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat_picture1.jpg');
	this.imgAttribution = ko.observable('http://www.flickr.com/photos/big')
	this.nicknames =ko.observableArray(['Orange', 'Brown', 'Red', 'Blue', 'Green'])

	this.title= ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 5) {
			title = 'Newborn';
		} else if (clicks < 15) {
			title = 'Infant';
		} else if (clicks < 20) {
			title = 'Child';
		} else if (clicks < 25) {
			title = 'Teen';
		} else if (clicks < 30) {
			title = 'Adult';
		} else {
			title = 'Ninja';
		}
		return title;

	}, this);
}
var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() +1);
	};
};
ko.applyBindings(new ViewModel());