import { Injectable } from '@angular/core';
import {IResumeItem} from './resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private query(): IResumeItem[] {
    return null;
  }

}
