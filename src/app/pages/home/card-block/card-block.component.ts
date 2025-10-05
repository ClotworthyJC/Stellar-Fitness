import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-block',
  imports: [],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css',
})
export class CardBlockComponent {
  @Input() cardIcon!: string;
  @Input() cardTitle!: string;
  @Input() cardType!: string;
}
