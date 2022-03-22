import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  formSubmitted = false;
  rating = '';
  previous: any;

  constructor() {}

  ngOnInit(): void {}

  @Output() ratingSubmitted = new EventEmitter<{
    submitted: boolean;
    rating: string;
  }>();

  onSubmitClick() {
    if (this.rating === '') {
      return;
    }
    this.formSubmitted = true;
    this.ratingSubmitted.emit({
      submitted: this.formSubmitted,
      rating: this.rating,
    });
  }

  onRatingSelected(ratingData: any) {
    if (this.previous !== undefined) {
      this.previous.classList.remove('rating__selected');
    }
    this.previous = ratingData.target;
    ratingData.target.classList.add('rating__selected');
    ratingData.siblings;
    this.rating = ratingData.target.innerText;
  }
}
