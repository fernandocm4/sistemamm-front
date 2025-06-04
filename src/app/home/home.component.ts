import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomedataService } from './homedata.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit{
  data: any[] = [];


  constructor(private homeService: HomedataService) { } // Injete o serviço

  ngOnInit(): void {
    /*this.homeService.getHomeData().subscribe((data) => {
      this.data = data;
    });*/
  }

}
