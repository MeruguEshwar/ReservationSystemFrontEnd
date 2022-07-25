import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  imageSrc = 'assets/Images/bookmyshow.jpg'
  imageAlt = 'iPhone'

  ImagePath1: string;

  constructor(private router:Router){
    this.ImagePath1 = '/assets/Images/bookmyshow.jpg';
    
  }
  

  ngOnInit(): void {
  }

  navigateToEmployee(emp:String):void{
    this.router.navigate([`${emp}`])
  }

  navigateToStudent(student:String):void{
    this.router.navigate([`${student}`])
  }

}
