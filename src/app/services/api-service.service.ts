import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private _http: HttpClient, private firestore: AngularFirestore) {}
  getData() {
    return this.firestore.collection("tasks").snapshotChanges();
  }
}
