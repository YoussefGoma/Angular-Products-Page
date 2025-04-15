import { Component } from '@angular/core';
import { AboutMobileComponent } from '../about-mobile/about-mobile.component';
import { AboutWebComponent } from '../about-web/about-web.component';

@Component({
  selector: 'app-about',
  imports: [AboutMobileComponent,AboutWebComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
