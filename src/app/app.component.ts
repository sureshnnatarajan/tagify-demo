import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tagify-app';
  keywords = [];
  placeHolderString = 'Type and press Enter to add more than one keywords...';

  checkTagify(value: any) {
    this.keywords.forEach( (data) => {
      console.log(data.value);
    });
  }
}
