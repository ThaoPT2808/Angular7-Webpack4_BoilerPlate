import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    set(name: string, value: any) {
        localStorage.setItem(name, value);
    }
    get(name: string) {
        return localStorage.getItem(name);
    }
}
