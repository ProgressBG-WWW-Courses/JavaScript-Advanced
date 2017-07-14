import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

	constructor() {
		this.okText = 'OK';
		this.cancelText = 'Cancel';
	}

	emitValue(value) {
		this.valueEmitted.emit(value);
	}

	ngOnInit() {
	}

}

