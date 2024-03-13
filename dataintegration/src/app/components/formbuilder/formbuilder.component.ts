import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; // Import the DataService

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss'],
})
export class FormbuilderComponent implements OnInit {
  constructor(private dataService: DataService) {} // Inject DataService

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((data) => {
      console.log(data); // Example: Log the fetched JSON data
    });
  }
}
