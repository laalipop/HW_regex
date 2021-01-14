export default class Validator {
  validateUsername(nick) {
    this.nick = nick;

    const result = /^[a-z][\w-]+[a-z]$/i.test(nick)
        && !/\d{4,}/.test(nick);
    console.log(result, nick);
    return result;
  }
}
