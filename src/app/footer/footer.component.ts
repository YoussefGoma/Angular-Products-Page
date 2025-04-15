import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"],

})

export default class FooterComponent {
    currentYear: number = new Date().getFullYear();
    logo:string = 'images/logo.png'
    constructor() { }
}