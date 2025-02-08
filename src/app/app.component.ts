import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { FeaturesSectionComponent } from "./components/features-section/features-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, FeaturesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-estudo-1';
}
