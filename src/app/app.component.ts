import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My first Sample Project';
        buttonList = [
            {title: 'Hey', text: 'Hier', clicked: false},
            {title: 'those', text: 'sind', clicked: false},
            {title: 'are', text: 'ein', clicked: false},
            {title: 'some', text: 'paar', clicked: false},
            {title: 'Tooltips', text: 'Buttons', clicked: false}
            ];
    someVar = 'Text';
    public changeTitle() {
          this.title += 'lol';
        // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.buttonList.length; i++) {
              this.buttonList[i].clicked = false;
        }
    }
    public dontCopy(element: string): void {
          alert('Dont copy my ' + element + '!');
    }
    public disableButton(button) {
        button.clicked ? button.clicked = false : button.clicked = true;
    }
    public log(msg) {
        console.log(msg);
    }

    changeVar($event: { buttonTitle: string }) {
        this.someVar = $event.buttonTitle;
    }
}
