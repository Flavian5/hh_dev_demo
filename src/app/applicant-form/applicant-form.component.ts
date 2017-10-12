import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Applicant } from '../applicant';
import { ApplicantResponse } from '../applicant-response';
import { API_URL } from '../../config';

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent {

  constructor() {}

  onSubmit() {
  }

  redirectToVictoryPage() {
  }

  callApi() {
  }
}
