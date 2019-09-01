import {Pipe, PipeTransform} from '@angular/core';
import {ISocialNetwork} from '../../home/profile/social/social.model';

@Pipe({
    name: 'iconSquare'
})
export class IconSquarePipe implements PipeTransform {

    private static addSquare() {
        return (socialNetwork) => {
            socialNetwork.icon = socialNetwork.icon.concat('-square');
            return socialNetwork;
        };
    }

    transform(value: ISocialNetwork[], excludedIconsClass?: string[]): ISocialNetwork[] {
        value
            .filter(socialNetwork => !excludedIconsClass.includes(socialNetwork.icon))
            .map(IconSquarePipe.addSquare());
        return value;
    }
}
