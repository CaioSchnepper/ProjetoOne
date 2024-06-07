import { AfterViewInit, Component, ElementRef, Renderer2 } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PlantaComponent } from "./components/planta/planta.component";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    PlantaComponent,
    ButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
  constructor(private router: Router){}

  goToGraficos(){
    this.router.navigate(["graficos"])
  }

  goToPlanta(){
    this.router.navigate(["planta"])
  }

  ehHome(){
    return this.router.url === "/"
  }
}
