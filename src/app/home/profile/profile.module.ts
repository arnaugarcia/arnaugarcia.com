import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ProfileComponent} from './profile.component';
import {SocialComponent} from './social/social.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
    declarations: [ProfileComponent, SocialComponent, SkillsComponent],
    exports: [
        ProfileComponent
    ],
    imports: [SharedModule]
})
export class ProfileModule {
}
