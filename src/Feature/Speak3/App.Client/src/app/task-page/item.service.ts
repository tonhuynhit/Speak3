import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  fetchItem(itemId) {
    return this.http.get(`/sitecore/api/ssc/speak/sampleitem/${itemId}/get`);
  }

  saveItem(itemId, data) {
    return this.http.post(`/sitecore/api/ssc/speak/sampleitem/${itemId}/post`, data);
  }
}
