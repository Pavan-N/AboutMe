import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {
  displayTWModal: boolean = false;
  displayWAModal: boolean = false;
  totalExperience: string = '';

  constructor() { }

  ngOnInit(): void {
    let startDate = new Date('3/10/2016');
    let endDate = new Date();

    let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    let monthsDiff = endDate.getMonth() - startDate.getMonth();
    this.totalExperience = yearsDiff + ' years ' + monthsDiff + ' months';
  }

}
