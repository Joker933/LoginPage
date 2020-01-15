import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'REZNIK';
  
  private username = "";
  private password = "";
  private vysledek = "";
  private logged = false;

  clickedButton() {
    if(this.username === "Vojtech" && this.password === "Nemec"){
      this.logged = true;
    } else {
      this.logged = false;
    }
  }
}

