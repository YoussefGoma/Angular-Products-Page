import { Component, input } from "@angular/core";

@Component({
    selector: "app-navBar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],

})

export class NavBarComponent {
    logo = input()
}