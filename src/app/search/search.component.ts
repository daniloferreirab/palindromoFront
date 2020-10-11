import { Component, OnInit } from '@angular/core'; 
import { ConfigService } from '../config/config.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [],
})
export class SearchComponent implements OnInit {

  constructor(public service: ConfigService) { }
  searchBoxId = "";
  ngOnInit(): void {
  }

  searchProduct(){
    console.log("call search");
    if(this.searchBoxId !== ''){
      this.service.searchProducts(this.searchBoxId).subscribe((w : Product[]) => {
        console.log("search :", w);
        this.service.set(w);
        this.service.setWord(this.searchBoxId);
    });}
    else{
      this.service.set([]);
    }
  }

}
