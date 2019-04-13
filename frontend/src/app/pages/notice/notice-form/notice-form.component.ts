import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NoticeService} from '../../../services/notice.service';
import {salaryValidator} from '../../../customValidators/NoticeValidator';

@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html'
})
export class NoticeFormComponent implements OnInit {
  noticeForm: FormGroup;

  constructor(private fb: FormBuilder, private noticeService: NoticeService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.noticeForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      salaryMin: [0, [
        Validators.required,
        Validators.min(1),
      ]],
      salaryMax: [0, [
        Validators.required,
        Validators.min(1),
        salaryValidator
      ]],
      city: ['', Validators.required],
      street: ['', Validators.required],
      postalCode: ['', [
        Validators.required,
        Validators.pattern('[0-9]{2}\\-[0-9]{3}')
      ]]
    });
  }

  onSubmit() {
    this.noticeService.post(this.noticeForm.value).subscribe(
      data => data && this.snackBar.open('Dodano ogłoszenie', null, {duration: 2000})
    );
  }

  get title() {
    return this.noticeForm.get('title');
  }

  get company() {
    return this.noticeForm.get('company');
  }

  get salaryMin() {
    return this.noticeForm.get('salaryMin');
  }

  get salaryMax() {
    return this.noticeForm.get('salaryMax');
  }

  get street() {
    return this.noticeForm.get('street');
  }

  get city() {
    return this.noticeForm.get('city');
  }

  get postalCode() {
    return this.noticeForm.get('postalCode');
  }
}
