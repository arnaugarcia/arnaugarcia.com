import {Component} from '@angular/core';
import {IMail, Mail} from './email.model';
import {EmailService} from './email.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  mail: IMail = new Mail();

  constructor(private emailService: EmailService) { }

  onSubmit() {
    this.emailService.sendMessage(this.mail).subscribe((response: HttpResponse<void>) => {
      console.log('Sucesss!');
    }, error => {
      console.error('Error!');
    });
  }
}
