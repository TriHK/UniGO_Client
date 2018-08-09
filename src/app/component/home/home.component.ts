import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Router} from "@angular/router";
import {SearchService} from "../../service/base-service/search.service";
import {Observable} from "rxjs/Observable";
import {Select2OptionData} from "ng2-select2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit,OnDestroy {
  public valueCurrent: any;

  public searchMajor: any[];
  isActive: boolean = false;

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {

    this.getTopThreeMajor(4314);

    $('#news-uni li').click(function(){
      $('#news-uni li').removeClass("active");
      $(this).addClass("active");
    });

  }

  getTopThreeMajor(value){
    this.isActive = true;
    this.valueCurrent = value;
    this.searchMajor = [];
    this.searchService.getTopThreeMajor(value).subscribe((response: any)=>{
      this.searchMajor = response;
    });
  }

  ngOnDestroy() {

  }

}
