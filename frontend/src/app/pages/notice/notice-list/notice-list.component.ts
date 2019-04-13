import {Component, OnInit} from '@angular/core';
import {NoticeService} from '../../../services/notice.service';
import {Notice} from '../../../models/notice';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
})
export class NoticeListComponent implements OnInit {
  notices: Notice[];

  constructor(private noticeService: NoticeService) {}

  ngOnInit() {
    this.noticeService.get().subscribe(
      data => this.notices = data,
    );
  }
}
