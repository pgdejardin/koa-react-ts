export default class NotFoundError extends Error {
  private key: any;

  constructor(key: any, message: string = '') {
    super(message);
    this.key = key;
    this.message = message;
  }
}
