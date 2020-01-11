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

  clickedButton() {
    if(this.username === "Vojtech" && this.password === "Nemec"){
      this.vysledek = "Logged In";
    } else {
      this.vysledek = "Incorrect Password";
    }
  }
}

