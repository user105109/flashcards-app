import { Component, signal, computed } from '@angular/core';
import {Flashcard} from '../../components/flashcard/flashcard';
import {NavigationCtrl} from '../../components/navigation-ctrl/navigation-ctrl';
import {ProgressBar} from '../../components/progress-bar/progress-bar';
import {flashcards} from '../../data/flashcards.data';
import {FlashcardData} from '../../models/flashcard.model';

@Component({
  selector: 'app-study',
  imports: [
    Flashcard,
    NavigationCtrl,
    ProgressBar
  ],
  templateUrl: './study.html',
  styleUrl: './study.css',
})
export class Study {
  index = signal<number>(0);
  hideAnswerFlag = signal<boolean>(true);
  showOrHideText = signal<string>('Show Answer');
  totalCards: number = flashcards.length;


  goToNextCard() {
    this.index.update(index => index + 1);
    if (this.index() >= flashcards.length) {
      this.index.set(flashcards.length - 1);
    }
    this.hideAnswerFlag.set(true);
  }

  goToPreviousCard() {
    this.index.set(this.index() - 1);
    if (this.index() < 0) {
      this.index.set(0);
    }
    this.hideAnswerFlag.set(true);
  }

  showOrHideAnswer() {
    this.hideAnswerFlag.update(flag => !flag);
    this.showOrHideText.update(text => text == "Show Answer" ? "Hide Answer" : "Show Answer");
  }

  currentFlashCard = computed<FlashcardData>(() => flashcards[this.index()]);
}
