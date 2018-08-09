import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Constants} from "../../constants";
@Injectable()
export class MbtiService {
  constructor(private _http: Http, private constant: Constants) {

  }

  getMbti(): Observable<any[]>{
    return this._http.get(this.constant.MBTI)
      .map((response: Response) => response.json())
  }
  saveMbti(data): Observable<any[]>{
    return this._http.post(this.constant.SAVE_MBTI_RESULT,data)
      .map((response: Response) => response.json())
  }

  getMbtiresult(data: any): Observable<any[]>{
    return this._http.get(this.constant.GET_MBTI_RESULT+"?userId="+ data)
      .map((response: Response) => response.json())
  }

  updateMbti(data): Observable<any[]>{
    return this._http.post(this.constant.UPDATE_MBTI_RESULT,data)
      .map((response: Response) => response.json())
  }

  getTopUniMBTI(data: number): Observable<any[]>{
    return this._http.get(this.constant.TOP_UNI_MBTI+"?mbtiTypeId="+data).map((res: Response)=> res.json());
  }

}

