export class User {
  username: string;
  image: string;
  name: string;
  email: string;
  providerName: string;
  token: string;
  role: string;
  constructor(data: any) {
    if (data) {
      if (data.image) {
        this.image = data.image;
      } else {
        this.image = '../../../assets/image/avatar-default.jpg';
      }
      if (data.name) {
        this.name = data.name;
      } else {
        this.name = data.username;
      }
      if (data.username) {
        this.username = data.username;
      }
      if (data.provider) {
        this.providerName = data.provider;
      }
      if (data.token) {
        this.token = data.token;
      }
      this.email = data.email;
      if (data.role) {
        this.role = data.role;
      }
    }
  }
  // public getRole(){
  //   return this.role;
  // }
}
