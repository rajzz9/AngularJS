import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {

    }
    createAndStorePost(postData:Post) {
        return this.http
        .post(
            'https://ng-complete-guide-31861.firebaseio.com/posts.json', postData, {
                observe: 'response'
            }
        ).subscribe(responseData => {
            console.log(responseData);
        }, error => {
            this.error.next(error.message);
        });
    }

    fetchPosts() {
        let serachParams = new HttpParams();
        serachParams = serachParams.append('print', 'pretty');
        serachParams = serachParams.append('custom-key', 'custom-value');

        return this.http.get<{ [key: string]: Post}>('https://ng-complete-guide-31861.firebaseio.com/posts.json', {
            headers: new HttpHeaders({ 'Custom-Header' : 'Hello'}),
            params: serachParams,
            responseType: 'json' // by default also json response type
        })
        //.pipe(map((responseData: { [key: string]: Post} ) => {
        .pipe(map(responseData => {
            const postArray: Post[] = [];
            for (const key in responseData) {
            if ( responseData.hasOwnProperty(key) ) {
                // Here we are using Spread Operator
                postArray.push({ ...responseData[key], id:key});
            }
            }
            return postArray;
        }), catchError (errorRes => {
            // Send to analylics server
            return throwError(errorRes);
        })
        );
        //.subscribe(posts => {});    
    }

    clearPosts(){
        return this.http.delete('https://ng-complete-guide-31861.firebaseio.com/posts.json', {
            observe: 'events',
            responseType: 'text'
        }).pipe(tap(event => {
            console.log(event);
            if ( event.type === HttpEventType.Sent ) {
                //.....
            }
            if ( event.type === HttpEventType.Response ) {
                console.log(event.body)
            } 
        }));
    }
}