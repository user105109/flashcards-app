import { Component, signal, computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Flashcard} from './components/flashcard/flashcard';
import {NavigationCtrl} from './components/navigation-ctrl/navigation-ctrl';
import {ProgressBar} from './components/progress-bar/progress-bar';
import {flashcards} from './data/flashcards.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Flashcard, NavigationCtrl, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  index: number = 0;
  hideAnswerFlag: boolean = true;
  totalCards: number = flashcards.length;
  showOrHideText = 'Show Answer';

  goToNextCard() {
    this.index++;
    if (this.index >= flashcards.length) {
      this.index = flashcards.length - 1;
    }
    this.hideAnswerFlag = true;
  }

  goToPreviousCard() {
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
    this.hideAnswerFlag = true;
  }

  showOrHideAnswer() {
    this.hideAnswerFlag = !this.hideAnswerFlag;
    this.showOrHideText = this.hideAnswerFlag ? "Show Answer" : "Hide Answer";
  }
}
