import { Component } from '@angular/core';

import { MultifilterPipe} from './multifilter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MultifilterPipe]
})
export class AppComponent {
	noRecordFlag: boolean = false;
	tblDisplayFlag: boolean = true;
	frmDisplayFlag: boolean = false;
	model: any;
	records: any = [];
	searchValue: string;

	constructor(private multifilterPipe: MultifilterPipe) {
		console.log("rahul here");
		localStorage.removeItem("empRecords");

		var temp = {'id': '1', 'firstname': 'Rahul', 'surname': 'Kumar', level: '3', 'salary': '333'};
		this.records.push(temp);
		localStorage.setItem("empRecords", JSON.stringify(this.records));
	}

	ngOnInit() {
		this.setupModel();
		this.records = JSON.parse(localStorage.getItem("empRecords"));
	}

	setupModel() {
		this.model = {'id': '', 'firstname': '', 'surname': '', level: '', 'salary': ''}
	}

	showForm() {
		this.setupModel();
		this.tblDisplayFlag = false;
		this.frmDisplayFlag = true;
	}

	onSubmit() {
		if(!this.model.id) {
			this.model.id = (this.records) ? this.records.length+1 : 1;
			this.records.push(this.model);
		} else {
			//update
			var tempRecord = [];
			var tempmodel;
			for(let emp of this.records) {
				if(emp.id != this.model.id) {
					tempRecord.push(emp);
				} else {
					tempmodel = {'id': this.model.id, 'firstname': this.model.firstname, 'surname': this.model.surname, level: this.model.level, 'salary': this.model.salary}	
					tempRecord.push(tempmodel);
				}
			}
			this.records = tempRecord;
		}

		console.log(this.model)
		
		localStorage.setItem("empRecords", JSON.stringify(this.records));
		this.tblDisplayFlag = true;
		this.frmDisplayFlag = false;
	}

	deleteRecord(empid) {
		if(confirm("Are you sure to delete record")) {
			var tempRecord = [];
			for(let emp of this.records) {
				if(emp.id != empid) {
					tempRecord.push(emp);
				}
			}
			this.records = tempRecord;
		}
	}

	editRecord(empid) {
		this.tblDisplayFlag = false;
		this.frmDisplayFlag = true;
		for(let emp of this.records) {
			if(emp.id == empid) {
				this.model = {'id': emp.id, 'firstname': emp.firstname, 'surname': emp.surname, level: emp.level, 'salary': emp.salary}
			}
		}

		console.log(this.model);
	}




}
