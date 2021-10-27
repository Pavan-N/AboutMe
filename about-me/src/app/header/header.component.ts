import { Component, OnInit } from '@angular/core';
import {LinkService} from "../link.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appLinks = {};

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.appLinks = this.linkService.getAppLinks();
  }

  returnZero() {
    return 0;
  }

}
