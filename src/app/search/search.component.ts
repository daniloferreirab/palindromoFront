import { Component, OnInit } from '@angular/core'; 
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [],
})
export class SearchComponent implements OnInit {

  constructor(public service: ConfigService) { }

  ngOnInit(): void {
  }

  searchProduct(){
    let word = (<HTMLInputElement>document.getElementById('searchBoxId')).value;
      this.service.searchProducts(word);
  }

}
