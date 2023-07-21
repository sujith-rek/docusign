import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmojiCardComponent } from '../emoji-card/emoji-card.component';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export type Emoji = {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
};


@Component({
  selector: 'app-emoji-list',
  templateUrl: './emoji-list.component.html',
  styleUrls: ['./emoji-list.component.css'],
})
export class EmojiListComponent implements AfterViewInit {
  constructor(private http: HttpClient) {
    // https://emojihub.yurace.pro/api/all
    this.http.get<Emoji[]>('https://emojihub.yurace.pro/api/all').subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  showEmojiCard : boolean = false;
  emojiName : string = '';
  emojiCategory: string = '';
  emojiGroup : string = '';
  emojiHtmlCode: string[] = [];
  emojiunicode: string[] = [];

  showSpinner: boolean = false;

  accent: string = 'accent';
  indeterminate: ProgressSpinnerMode = 'indeterminate';

  dataSource = new MatTableDataSource<Emoji>();

  displayedColumns: string[] = ['emoji', 'category', 'group','name'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.showSpinner = true;
    this.http.get<Emoji[]>('https://emojihub.yurace.pro/api/all').subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
      this.showSpinner = false;
    }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEmojiClicked(row:any){
    this.showEmojiCard = true;
    this.emojiName = row.name;
    this.emojiCategory = row.category;
    this.emojiGroup = row.group;
    this.emojiHtmlCode = row.htmlCode;
    this.emojiunicode = row.unicode;
    console.log(
      this.emojiCategory,this.emojiGroup,this.emojiHtmlCode,this.emojiName,this.emojiunicode
    )

  }

  showCardChange(card: boolean){
    this.showEmojiCard = false;
  }

}
