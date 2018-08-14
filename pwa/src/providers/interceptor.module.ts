import {  Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ENVIRONMENT } from '../environment/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    private token: string;

    constructor(private storage: Storage) {
        this.storage.get(ENVIRONMENT.tokenNome).then(value => {
            this.token = value;
        });
    }

    intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>> {
        if (this.token) {
            const changeReq = req.clone({headers: req.headers.set('Authentication',this.token)});
            return next.handle(changeReq);
        } else {
            return next.handle(req);
        }
    }
}

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [
        { 
            provide: HTTP_INTERCEPTORS, 
            useClass: HttpRequestInterceptor,
            multi: true
        }
    ],
})
export class InterceptorModule {}