import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Example } from "../login/Example";


@Injectable({
  providedIn: "root"
})
export class ApiService {
  private login_url: string = "http://localhost:3333/login";
  private url: string = "http://localhost:3333/user";

  constructor(private http: HttpClient, private router: Router) {}

  getEmpoyee(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.errorHandler));
  }
  getUser(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.errorHandler));
  }

  login(loginDetail: Example): Observable<any> {
    return this.http
      .post<any>(this.login_url, loginDetail)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    localStorage.removeItem("token");
    return throwError(error.error || "Server error");
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  get getToken(): string {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate([""]);
  }
}
