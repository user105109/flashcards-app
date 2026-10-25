import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-navigation-ctrl',
  imports: [],
  templateUrl: './navigation-ctrl.html',
  styleUrl: './navigation-ctrl.css',
})
export class NavigationCtrl {
  @Output() forwardButtonClick = new EventEmitter();
  @Output() backwardButtonClick = new EventEmitter();
  @Output() showOrHideAnswer = new EventEmitter();
  @Input() showOrHideText: string = '';

  nextCard() {
    this.forwardButtonClick.emit()
  }

  previousCard() {
    this.backwardButtonClick.emit()
  }

  showOrHideAnswerClick() {
    this.showOrHideAnswer.emit();
  }
}
