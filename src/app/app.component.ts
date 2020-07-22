import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  password = '';
  enterLength = 0;

  Submit(){
    const letters="abcdeghijklmnopqrstuvwxyz";
    const symbols = "@#$%^&*()_+=-";
    const numbers ="123456780";

    let validChars = '';

    console.log(this.includeLetters)
    console.log(this.includeSymbols)
    console.log(this.includeNumbers);

    if(this.includeLetters) validChars = validChars + letters;
    if(this.includeNumbers) validChars = validChars + numbers;
    if(this.includeSymbols) validChars = validChars + symbols;
    let generatedPassword = '';
    console.log(validChars);
    for (let i=0 ; i< this.enterLength; i++){
      generatedPassword = generatedPassword + validChars[Math.floor(Math.random() * validChars.length)];
    }

    this.password = generatedPassword;


  }
}
