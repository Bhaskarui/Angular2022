import { Injectable } from "@angular/core";


export class LogginService {

    logStatusChange(status: string) {
        console.log('Server status change:' +" "+ status);
    }

}