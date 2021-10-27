import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class LinkService {
  appLinks: {[link: string]: string} =
    {
      'experience': 'PROFESSIONAL EXPERIENCE',
      'technical': 'TECHNICAL EXPERTISE',
      'achievements': 'ACHIEVEMENTS',
      'qualification': 'EDUCATIONAL QUALIFICATION',
      'personal': 'PERSONAL DETAILS'
    };

  getAppLinks() {
    return this.appLinks;
  }
}
