import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {ISocialNetwork} from './social.model';

@Injectable({
    providedIn: 'root'
})
export class SocialService {

    constructor(private db: AngularFirestore) {
    }

    public querySocialNetworks(): Observable<ISocialNetwork[]> {
        return this.db.collection<ISocialNetwork>('social-networks').valueChanges();
    }
}
