import {Component, Input} from '@angular/core';
import {flashcards} from '../../data/flashcards.data';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.css',
})
export class Flashcard {
  @Input() id: number = 0;
  @Input() hideAnswer: boolean = true;

  protected readonly flashcards = flashcards;
}
