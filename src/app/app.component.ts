import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-ngStyle-Directive';

  cssStyle : Style = new Style(); 
}
class Style{
  color : string='blue';
  'font-size.px': number =20;
  'font-weight' : string = 'bold';
}