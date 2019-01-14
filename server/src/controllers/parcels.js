import uuid from 'uuid';
import jwt from 'jsonwebtoken';
import parcels from '../data/parcels';
import execute from '../database/database';


class ParcelsController {
  // create a parcel

  static async createTable(req, res) {
    // create a parcel table
    const createTable = `CREATE TABLE parcels(
      id UUID  PRIMARY KEY,
      origin VARCHAR(30),
      destination   VARCHAR(30),
      user_id VARCHAR(30),
      created_date DATE,
      price INT,
      present_location VARCHAR(20),
      weight int )`;

    res.status(200).send({
      message: 'Parcels table created successfull,',
    });
    return execute(createTable);
  }

  static verify(req, res, next) {
    const bearer = req.body.authorization;
    if (typeof bearer !== 'undefined') {
      const bear = bearer.split(' ');
      const bearToken = bear[1];
      req.token = bearToken;
      next();
    } else {
      res.send('forbiden');
    }
  }
  // ///////////

  static async createParcel(req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, datas) => {
      if (err) {
        res.sendStatus(203);
      } else {
        const {
          origin, destination, userId, createdDate, price, presentLocation, weight,
        } = req.body;

        if (!origin || !destination || !weight) {
          const error = new Error('cannot handle request with data provided');
          error.httpStatusCode = 400;

          // raise this as an error so that our
          // default error handler at
          // line 15 to line 22 of server.js
          // can handler at
          return next(error);
        }
        const addParcles = 'INSERT INTO parcels VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id';
        // we're using uuid() to generate a random but unique value
        // we can use as the Id for this record to be created
        // this only works if we created the table to have the id
        // column as a String and not Integer

        const data = [
          uuid(), origin,
          destination,
          userId,
          createdDate,
          price,
          presentLocation,
          weight,
        ];

        const result = execute(addParcles, data);

        // get back the record we just created
        const record = result.rows[0];

        // respond to the client with an appropriate HTTP status code,
        // as well as the id of the newly created Parcel
        res.status(200).send({
          // success: true,
          datas,
          parcel: record.id,
        });
      }
    });
  }

  // update a parcel
  static async updateParcel(req, res) {
    const { id } = req.params;
    const { destination } = req.body;
    // if (id) {
    //   const selectAParcelsSQL = 'UPDATE parcels SET destination=$1 WHERE id=$2';
    //   const { rows } = await execute(selectAParcelsSQL, [id, destination]);

    //   res.status(200).send({
    //     message: 'parcel Updated successfully',
    //     parcel: rows[0],
    // const parcel = orders.find(item => item.id === orderid);
    const selectAParcelsSQL = 'UPDATE parcels SET destination=$1 WHERE id=$2 RETURNING *';
    const parcel = execute(selectAParcelsSQL, [destination, id]);
    parcel.then((response) => {
      if (response) {
        res.status(200).send({ message: 'The parcel was updated successfully', response: response[0] });
      } else {
        res.status(404).send({
          message: 'There is no parcel with that id',
          id,
        });
      }
    }).catch(error => console.log(error));
  }

  // get all available parcels
  static async getAllParcels(req, res) {
    const { sort, type } = req.query;
    let selectAParcelsSQL = 'SELECT * FROM parcels';
    if (sort && type) {
      // user wants to sort, so modify the
      // selectAllParcelsSQL query above
      // sort can be the field to sort by, and type can
      // be the sort direction, either ASC or DESC
      // an example API request for this handle will be
      // /api/v1/parcels?sort=origin&type=DESC
      selectAParcelsSQL += ''; // add the missing bit
    }

    const { rows } = await execute(selectAParcelsSQL);

    res.status(200).send({
      parcel: rows,
    });
  }

  // getting a single parcel by id
  static async getOneParcel(req, res, next) {
    const { id } = req.params;
    if (!id) {
      const error = new Error('cannot handle request with data provided');
      error.httpStatusCode = 400;

      // raise this as an error so that our
      // default error handler at
      // line 15 to line 22 of server.js
      // can handler at
      next(error);
      return;
    }

    const selectAParcelsSQL = 'SELECT * FROM parcels WHERE id = $1';
    const { rows } = await execute(selectAParcelsSQL, [id]);

    res.status(200).send({
      parcel: rows[0],
    });
  }

  // get single user's parcels

  // Fetch a delivery order by a user.
  static async getAllParcelUser(req, res, next) {
    const userId = req.params.id;

    if (!userId) {
      const error = new Error('cannot handle request with data provided');
      error.httpStatusCode = 400;
      // raise this as an error so that our
      // default error handler at
      // line 15 to line 22 of server.js
      // can handler at
      next(error);
      return;
    }

    const selectAParcelsSQL = 'SELECT * FROM parcels WHERE user_id=$1';
    const { rows } = await execute(selectAParcelsSQL, [userId]);
    return res.status(200).send({
      parcel: rows,
    });
  }

  // cancel a parcel
  static cancelParcel(req, res) {
    const { id } = req.params;
    const parcel = parcels.find(value => value.id === id);

    if (!parcel) {
      res.status(404).send({ message: 'Not found!!!' });
    }
    res.status(200).send({
      message: 'parcel canceled successfull',
      parcel: {
        id: 11,
        weight: 10,
      },
    });
  }

  // deleting all parcel
  static deleteParcel(req, res) {
    res.status(200).send({
      message: 'all parcels has been deleted',
    });
  }
}
export default ParcelsController;
