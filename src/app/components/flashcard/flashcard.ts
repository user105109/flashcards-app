import {Component, Input} from '@angular/core';
import {FlashcardData} from '../../models/flashcard.model';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.css',
})
export class Flashcard {
  @Input() currentCard!: FlashcardData;
  @Input() hideAnswer: boolean = true;
}
