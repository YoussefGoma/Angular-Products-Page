import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-navBar",
    imports: [RouterLink],
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],

})

export class NavBarComponent {
    logo = input()
}