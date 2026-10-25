import { Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Study} from './pages/study/study';
import {About} from './pages/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
