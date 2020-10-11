import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ConfigService } from '../config/config.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  wordSearch: string;
  search: boolean;
  pageOfItems: Array<any>;
  page = 1;
  count = 0;
  

  constructor(public service: ConfigService) { }

  ngOnInit(): void {
    this.findProducts();
    this.service.getWordSearch().subscribe(w => {
        this.wordSearch = w;
    })
  }

  findProducts(){
     this.service.getProducts().subscribe(data  => {
      this.products = [];
        this.products = data;    
        this.count = this.products.length;
        if(this.count > 0){
          this.search = true;
        }else{
          this.search = false;
        }
        
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.findProducts();
  } 
}
