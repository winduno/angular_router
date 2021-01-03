import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Minh';
  public age = 29;
  public vehicles = [ 'xe đạp', 'xe máy', 'ô tô'];

  constructor() { }

  ngOnInit(): void {
  }

  public tangTuoi(){
    this.age++;
  }

  public giamTuoi(){
    this.age--;
  }

}
