import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Projet de test des composants";
  public image_url: string = "https://picsum.photos/300/400";
  public firstname: string = "John"; 
  
  public fruits: string[] = ["Pommes", "Poires", "Bananes"];
  public myArray: any[] = ["abc", 42, true, [], {}];
  public justANumber: number = 42;
  public user: any = {
    firstname: "Bob",
    lastname: "DOE",
  };


  public result: number = 0;

  constructor()
  {
    this.result = this.addition(21, 42);
  }

  public sayHello(): void
  {
    alert("Hello There !");
  }

  public addition(a: number, b: number): number
  {
    return a + b;
  }
}