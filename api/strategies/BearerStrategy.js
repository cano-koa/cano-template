import { Strategy } from 'passport-http-bearer';

/**
 * @class BearerStrategy
 * @description This class represents an auth strategy and is responsible of
 * verify the accessTokens sended by the users
 * @author Antonio Mejias
 */
class BearerStrategy extends Strategy {

    constructor() {
        super(BearerStrategy.verify);
    }

    /**
   * @method verify
   * @description This method is the responsible of verify the tokens of the
   * users
   * @param {string} accessToken is a bearer access token
   * @author Antonio Mejias
   */
    static async verify(accessToken, done) {
        // Here you must to place your code for validate the accessToken
        done(null, true);
    }
}

module.exports = BearerStrategy;
