import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static invalidprojectName(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return { 'invalidProjectName': true }
        }
        return { 'invalidProjectName': false }

    }

    // static asyncInValidProjectName(control: FormControl): Promise<any> | Observable<any> {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout((control:any) => {
    //             if (control.value === 'Testproject') {
    //                 resolve({ 'invalidProjectName': true })
    //             } else {
    //                 return { 'invalidProjectName': false };
    //             }
    //         }, 2000)
    //     });
    //     return promise;
    // }
}