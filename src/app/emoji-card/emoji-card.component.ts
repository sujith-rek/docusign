import { Component } from '@angular/core';
import { Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emoji-card',
  templateUrl: './emoji-card.component.html',
  styleUrls: ['./emoji-card.component.css'],
})
export class EmojiCardComponent {

  @Input() emojiName : string = '';
  @Input() emojiCategory: string = '';
  @Input() emojiGroup : string = '';
  @Input() emojiHtmlCode: string[] = [];
  @Input() emojiunicode: string[] = [];
  @Output() showCardChange = new EventEmitter<boolean>();

  closeCard(){
    this.showCardChange.emit(false);
  }




}
