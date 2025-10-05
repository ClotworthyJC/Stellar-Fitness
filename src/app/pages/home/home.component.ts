import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { SubtitleComponent } from "../../shared/subtitle/subtitle.component";
import { CardComponent } from "../../shared/card/card.component";
import { CardBlockComponent } from "./card-block/card-block.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SubtitleComponent, CardComponent, CardBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
