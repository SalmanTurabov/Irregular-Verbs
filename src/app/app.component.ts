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

  verbBe: any = [
    {
      first: '1-ая форма',
      second: '2-ая форма',
      third: '3-ая форма',
      translation: 'Перевод'
    },
    {
      first: 'be',
      second: 'was/were',
      third: 'been',
      translation: 'быть, являться, находиться'
    },
    {
      first: 'Don\'t <b>be</b> late.',
      second: 'I <b>was</b> tired after work.',
      third: 'I\'ve never <b>been</b> this happy.',
    },
  ];

  verbDo: any = [
    {
      first: 'do',
      second: 'did',
      third: 'done',
      translation: 'делать, выполнять'
    },
    {
      first: 'What <b>do</b> you do? <br>\
      I can\'t <b>do',
      second: 'You <b>did</b> a great job!',
      third: 'I\'ve never <b>done</b> this before.',
    },
  ];

  verbGo: any = [
    {
      first: 'go',
      second: 'went',
      third: 'gone',
      translation: 'идти'
    },
    {
      first: 'I <b>go</b> to the store every other day',
      second: 'I <b>went</b> to the store yesterday.',
      third: 'Tom\'s not here. He\'s <b>gone</b> to the store.',
    },
  ];

}
