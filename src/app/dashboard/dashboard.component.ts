import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor() {
    this.ui()
   }

  ngOnInit(): void {
  }

  ui(){
    

      $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
      $(this)
        .parent()
        .hasClass("active")
      ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
      } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
      }
      });
      
      $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
      });
      $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
      });
      
  }

}
