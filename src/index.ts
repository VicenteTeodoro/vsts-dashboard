export default class Main {
  private anyVar: string = 'this is only to say ok';
  constructor() {
    setTimeout(this.init.bind(this), 0);
  }
  public init() {
    document.body.innerHTML = this.anyVar;
  }
}
let main: Main = new Main();