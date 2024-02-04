import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title: string[] = ['1-ая форма', '2-ая форма', '3-ая форма', 'Перевод' ]

  be : string[] = ['be', 'was, were', 'been', 'быть, находиться'];
}
