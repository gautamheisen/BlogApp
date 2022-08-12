import { Component, OnInit } from '@angular/core';
import { BookService } from './shared/book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BlogAppBackup';
  constructor(private bookService : BookService){

  }
  ngOnInit(): void {
      this.bookService.AddBook();
  }
}
