import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// to know how to use break points use https://www.youtube.com/watch?v=CJ2MZCM8omE
@Injectable({ // defineing the scope this is global 
    providedIn: 'root'
})
export class SizeClassService {
    public collapseNavigation = new BehaviorSubject<boolean>(true);

    constructor(
        public breakpointObserver: BreakpointObserver
    ) { }

    isBreakpointSmall(): Observable<boolean> {
        return this.breakpointObserver
            .observe(['(min-midth: 768px)'])
            .pipe(// this using a map so instead of of returning a state object it just returns a bool
                map((state: BreakpointState) => !state.matches)
            );
    }
}
