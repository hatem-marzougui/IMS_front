import { Component } from '@angular/core';

@Component({
  selector: 'compartiment-page',
  standalone: true,
  imports: [],
  templateUrl: './compartiment-page.component.html',
  styleUrl: './compartiment-page.component.css',
})
export class CompartimentPageComponent {
  constructor() {}

  ngOnInit(): void {
    console.log('AppComponent has been initialized!');
  }
}
