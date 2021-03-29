import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FolderDef} from './folder';

@Injectable({
  providedIn: 'root'
})
export class FolderSearchService {

  constructor(private http: HttpClient) { }

  getFolder(path: string): Observable<FolderDef> {
    const params = new HttpParams();
    params.append('path', path);
    console.log(params);
    // TODO store path root in environment
    return this.http.get<FolderDef>('http://localhost:5000/filesystem', {
      params: new HttpParams()
        .set('path', path)
    });
  }

}
