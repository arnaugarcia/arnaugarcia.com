import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ProfileComponent} from './profile.component';
import {SocialComponent} from './social/social.component';

@NgModule({
    declarations: [ProfileComponent, SocialComponent],
    imports: [SharedModule]
})
export class ProfileModule {
}
