/**
 * Referred to Arpy Vanyan
 * https://medium.com/@arpyvanyan
 * */
import passportJWT from 'passport-jwt';
// import Queries from '../database/queries';
// import { jwtsecret } from '../config/secret';

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const passportStrategy = (passport) => {
  passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'princesengayire',
  },
  (jwtPayload, done) => {
    Queries.findOneByID(jwtPayload.user_id)
      .then(user => done(null, user))
      .catch(err => done(err));
  }));
};


export default passportStrategy;
