import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IMail, Mail} from './email.model';
import {EmailService} from './email.service';
import {HttpResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    mail: IMail = new Mail();
    mailSent = false;
    response: string;

    constructor(private emailService: EmailService,
                private translateService: TranslateService) {
    }

    onSubmit() {
        this.mailSent = true;
        this.response = this.translateService.instant('CONTACT.LOADING');
        this.emailService.sendMessage(this.mail).subscribe((response: HttpResponse<void>) => {
            this.response = this.translateService.instant('CONTACT.SUCCESS');
        }, error => {
            this.response = this.translateService.instant('CONTACT.ERROR');
            console.error(error);
        });
    }
}
