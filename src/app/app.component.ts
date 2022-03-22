import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = "Ollie's Rating Component";
  ratingSubmitted = false;
  rating = '';

  onRatingSubmit(data: { submitted: boolean; rating: string }) {
    this.ratingSubmitted = data.submitted;
    this.rating = data.rating;
    
  }
}
