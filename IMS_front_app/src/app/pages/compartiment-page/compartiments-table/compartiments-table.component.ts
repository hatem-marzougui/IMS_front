import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'compartiments-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule],
  templateUrl: './compartiments-table.component.html',
  styleUrl: './compartiments-table.component.css',
})
export class CompartimentsTableComponent {
  @Input() compartiments: any;

  //constructor(dataSource: MatTableDataSource<any>) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.compartiments);
    console.log('compartiments in table comp', this.compartiments);
  }
  displayedColumns: string[] = ['id', 'name', 'capacity', 'availablePlace'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
