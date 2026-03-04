import { Component } from '@angular/core';
import { ContainerThreeComponent } from '../container-three/container-three.component';

@Component({
  selector: 'app-container-two',
  standalone: true,
  imports: [ContainerThreeComponent],
  templateUrl: './container-two.component.html',
  styleUrl: './container-two.component.css'
})
export class ContainerTwoComponent {

}
