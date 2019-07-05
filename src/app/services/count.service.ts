import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountService {
  /**
   * 1. Create user that we are going to share.
   */
  private user = new BehaviorSubject<number>(0);

  /**
   * Make it as observable so that we can monitor/observe the changes from anywhere.
   */
  cast = this.user.asObservable();

  /**
   * To edit the user
   */
  editUser(newUser) {
    /**
     * next method will replace the value of the use
     */
    this.user.next(Object.keys(newUser).length);
  }

  constructor() {}
}
