import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-three.component.html',
  styleUrl: './container-three.component.css'
})
export class ContainerThreeComponent {

  public showTooltip: boolean = false;

  public onClickTooltip(): void {
    this.showTooltip = !this.showTooltip;
  }

}
