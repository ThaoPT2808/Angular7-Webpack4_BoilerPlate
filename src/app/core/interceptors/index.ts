import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './httpconfig.interceptor';

export const interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
];