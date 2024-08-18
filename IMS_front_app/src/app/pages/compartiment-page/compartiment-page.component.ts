import { Component, OnInit } from '@angular/core';
import { CompartimentsTableComponent } from './compartiments-table/compartiments-table.component';
import { HttpProviderService } from '../../services/http-provider.service';

@Component({
  selector: 'compartiment-page',
  standalone: true,
  imports: [CompartimentsTableComponent],
  templateUrl: './compartiment-page.component.html',
  styleUrl: './compartiment-page.component.css',
})
export class CompartimentPageComponent implements OnInit {
  compartiments: any[] = [];

  constructor(private httpProviderService: HttpProviderService) {}

  ngOnInit(): void {
    this.loadCompartiments();
  }

  loadCompartiments() {
    this.httpProviderService.getAllCompartiments().subscribe(
      (res) => {
        this.compartiments = res.body;
        console.log('Compartiments:', this.compartiments);
      },
      (error) => {
        console.error('Error fetching compartiments:', error);
      }
    );
  }
}
