import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'item',
	template: `<li>Item Name</li>`,
	// template: `<li>{{item.content}}, {{item.checked}}</li>`,
	styles: []
})
export class itemComponent implements OnInit {
	title = "Item 1";
	constructor() { }

	ngOnInit() {
	}
}
