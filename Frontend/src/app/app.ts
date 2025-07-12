import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Dashbord}from './components/dashbord/dashbord';
import{TopNav} from './components/top-nav/top-nav'
import{Footer} from './components/footer/footer'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TopNav,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Angular_Frontend';
}
