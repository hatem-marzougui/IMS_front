import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'compartiments-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule],
  templateUrl: './compartiments-table.component.html',
  styleUrls: ['./compartiments-table.component.css'],
})
export class CompartimentsTableComponent implements OnInit, OnChanges {
  // used to get the compartiments data from the parent component
  @Input() compartiments: any;

  // used to store the data source
  dataSource = new MatTableDataSource();

  // used to store the displayed columns which will be used to display the data
  displayedColumns: string[] = ['id', 'name', 'capacity', 'availablePlace'];

  // used to call on the initialization of the component
  ngOnInit() {
    this.initializeDataSource();
  }

  // used to call when the input value changes
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "compartiments" changed
    // because the first time ngOnChanges is called, the value of compartiments is undefined
    // and the dataSource will be initialized in ngOnInit
    if (changes['compartiments']) {
      this.initializeDataSource();
    }
  }

  // used to initialize the dataSource
  initializeDataSource() {
    // check if compartiments is not undefined
    if (this.compartiments) {
      console.log('Compartiments:', this.compartiments); // Log the data to verify

      // set the data source
      this.dataSource.data = this.compartiments;

      // set the filter predicate, which is used to filter the data
      // when the user types in the filter input
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        // convert the data to a string
        const dataStr = Object.keys(data)
          .reduce((currentTerm, key) => {
            // Use an array to store the data of the current key
            return (
              // Concatenate the current term with the data of the current key
              currentTerm +
              ((data[key] && data[key].toString().toLowerCase()) || '') +
              ' '
            );
          }, '')
          // Remove the last space and convert to lowercase
          .trim();

        // check if the filter value is in the data string
        return dataStr.indexOf(filter) != -1;
      };
    }
  }
  // used to filter the data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('Filter Value:', filterValue); // Log the filter value to verify
  }
}
