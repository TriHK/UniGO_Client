import {Injectable} from "@angular/core";

@Injectable()
export class Constants{
  public HTTP = 'http://';
  public SERVER_IP = 'localhost';
  public SERVER_PORT = ':8080';
  public SERVER_PATH= '/unistart';
  public CLIENT_PORT = ':4200';

  // API
  public REGISTER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/register";
  public LOGIN = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/check-login";
  public LOGIN_PROVIDER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/user/check-login-3rd-party";
  public UNIVERSITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/show-university";
  public MAJOR  = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/show-major";
  public LOCATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/location/show-location";
  public BLOCK = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/block/get-all-block";
  public SEARCH = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/search";
  public CREATE_UNIVESITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/create";
  public UPDATE_UNIVESITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/update";
  public UPDATE_LOCATION_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/update-location-major";
  public REMOVE_MAJOR_UNI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/remove-major-uni";
  public GET_UNI_BY_ID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-university";
  public MBTI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/show-mbti-question";
  public SAVE_MBTI_RESULT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/save-mbti-result";
  // public GET_MBTI_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/get-mbti-major";
  public UPDATE_MBTI_RESULT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/mbti/update-mbti-result";
  public GET_MBTI_RESULT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/mbti/get-mbti-results";
  public DELETE_UNIVERSITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/delete";
  public UPDATE_SCORE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/score/save-score";
  public GET_TOP_THREE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-by-group";
  public SAVE_REVIEW = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/save-review";
  public GET_REVIEW_BY_UNI_ID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/show-review";
  public GET_STAR_POINT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/star-point";
  public GET_NUMBER_REVIEW_NEED_APPROVE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/number-need-accept-review";
  public GET_REVIEW_NEED_APPROVE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/need-accept-review";
  public SAVE_MAJOR_UNI_DETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/save-detail-major";
  public DELETE_BLOCK_SCORE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/score/delete-block-score";
  public FIND_BY_MAJOR_ID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/university/find-by-major-id";
  public CHANGE_REVIEW_STATUS = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/change-review-status";
  public STAR_REIVEW_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/star-review-major";
  public SAVE_REVIEW_MAJOR_UNI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/save-review-major-uni";
  public CHECK_REVIEWED_UNI_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/check-reviewed-uni-major";
  public CHECK_REVIEWED_UNI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/review/check-reviewed-uni";
  public TOP_CORRLATE_UNI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/corrlate/top-corrlate-uni";
  public GET_MAJOR_UNIVERSITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-major-uni";
  public GET_FOR_TAG = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-major-for-tag";
  public GET_LOCATION_UNIVERSITY = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-location-by-uni";
  public GET_UIVERSITY_BY_LOCATION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-uni-by-location";
  public GET_UIVERSITY_BY_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-by-major-id";
  public GET_BY_LOCATION_AND_MAJOR = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/university/get-by-location-and-major";
  public TOP_UNI_MBTI = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH +"/corrlate/top-uni-mbti";
  public SAVE_ARTICLE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/save-article";
  public SHOW_ARTICLE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/show-article";
  public DELETE_ARTICLE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/delete";
  public GET_ARTICLE_BY_ID = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/get-article-by-id";
  public UPDATE_ARTICLE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/update";
  public GET_NEWEST_ARTICLE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/get-newest-article";
  public SAVE_QUESTION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/save";
  public GET_ALL_QUESTION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/questions";
  public GET_QUESTION_DETAIL = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/view";
  public QUESTIONS_BY_USER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/questions-by-user";
  public ANSWER_BY_QUESTION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/answer-by-question";
  public CHANGE_STATUS_QUESTION_ANSWER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/change-question-status";
  public GET_NUMBER_QUESTION_NEED_APPROVE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/number-question-need-accept";
  public QUESTION_NEED_TO_APPROVE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/question-need-accept";
  public UPDATE_QUESTION_ANSWER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/update";
  public COUNT_ANSWER = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/count-answer";
  public GET_TAG_QUESTION = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/get-tag-question";
  public VOTE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/vote/save";
  public GET_TAG_ARTICLE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/get-tag-article";
  public SAVE_FAVORITE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/favorite/save-favorite";
  public CHECK_FAVORITE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/favorite/check-favorite";
  public DELETE_FAVORITE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/favorite/delete";
  public GET_YOUR_ARTICLE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/article/get-your-article";
  public GET_USER_FAVORITE = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/favorite/get-user-favorite";
  public GET_ALL_TAG = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/get-all-tag";
  public REPORT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/report/save";
  public GET_ALL_REPORT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/get-all-report";
  public CHANGE_REPORT_STATUS = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/change-report-status";
  public NUMBER_REPORT = this.HTTP + this.SERVER_IP + this.SERVER_PORT + this.SERVER_PATH + "/qa/number-report";
  //ERROR
  public UNAUTHORIZED = 401;
  public CONFLICT = 409;
  public NOT_FOUND = 404;

  public QUESTION = 1;
  public ANWSER = 2
  constructor(){}
}
