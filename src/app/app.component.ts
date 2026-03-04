import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { ContainerOneComponent } from "./components/container-one/container-one.component";
import { ContainerTwoComponent } from "./components/container-two/container-two.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ContainerOneComponent, ContainerTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'article-preview-component';
}
