import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Sample Project';
    buttonList = [
        {title: 'Hey', text: 'Hier'},
        {title: 'those', text: 'sind'},
        {title: 'are', text: 'ein'},
        {title: 'some', text: 'paar'},
        {title: 'Tooltips', text: 'Buttons'}
        ];

  public changeTitle() {
      this.title += 'lol';
  }

  public dontCopy(element: string): void {
      alert('Dont copy my ' + element + '!');
  }
}


