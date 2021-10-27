import { Component, OnInit } from '@angular/core';
import {LinkService} from "../link.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appLinks = {};

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.appLinks = this.linkService.getAppLinks();
  }

  returnZero() {
    return 0
  }

}
