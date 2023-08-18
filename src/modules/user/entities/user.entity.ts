export class User {
  public email: string;
  public name: string;
  private isAuth: boolean;

  constructor(data: any = {}) {
    this.email = data.email || '';
    this.name = data.name || '';
    this.isAuth = false;
  }

  get isAutenticated() {
    return this.isAuth;
  }

  get isLogged() {
    return this.isAuth ? 'Logado' : 'Não logado';
  }

  setIsAuthentication(isAutenticated: boolean) {
    this.isAuth = isAutenticated;
  }
}
