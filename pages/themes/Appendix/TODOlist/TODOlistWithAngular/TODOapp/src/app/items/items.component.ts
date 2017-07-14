import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '[items]',
	templateUrl: "./items.component.html",
	styleUrls: ["items.component.css"],
	encapsulation: ViewEncapsulation.Native,
})
export class ItemsComponent  {
	title = 'ItemsComponent';
	items =  [
		{content: 'Item1', checked: false },
		{content: 'Item2', checked: true },
		{content: 'Item3', checked: false },
	];

	itemClasses = {
		'red': true,
		'f2': true,
	};

	itemStyles = {
		'background': 'yellow',
		'color': "brown",
	}

	isVisible(){
		return Math.random() > 0.5 ? true: false;
	}
	constructor() {
	}

	onInput(e){
		this.items[0].content = e.target.value
	}
}
