
import uuid from 'uuid/v1';
import { celebrate, Joi } from 'celebrate';
import parcels from '../data/parcels';
import users from '../data/users';
import queries from '../database/parcelsqueries';

class ParcelsController {
  // create a parcel
  static createParcel(req, res) {
    celebrate({
      body: Joi.object().keys({
        origin: Joi.string().required().trim(),
        destination: Joi.string().required().trim(),
        weight: Joi.number().integer().required(),
      }),
    });

    const {
      id, origin, destination, userId, createdDate, presentLocation, price, weight,
    } = req.body;

    if (!origin || !destination || !weight) {
      res.status(400).send({ message: 'Please provide all details' });
    }
    const parcel = [
      id,
      origin,
      destination,
      userId,
      createdDate,
      presentLocation,
      price,
      weight,
    ];
    // parcels.push(parcel);

    queries.insert(parcel);

    res.status(201).send({
      Message: 'Parcel created successfully!',
      Parcel: {
        id: uuid(),
        weight: 23,
      },
    });
  }

  // update  a parcel
  static updateParcel(req, res) {
    const { body } = req;
    if (!body.from || !body.receiver || !body.destination) {
      res.status(404).send({ message: ' details mising!!!' });
    }
    const parcel = {
      destination: body.sender,
    };

    parcels.push(parcel);

    res.status(200).send({
      message: ' details mising!!!',
      parcel,
    });
  }


  // get all available parcels
  static getAllParcels(req, res) {
    res.status(200).send(parcels);
  }

  // getting a single parcel by id
  static getOneParcel(req, res) {
    const { id } = req.params;
    const parcel = parcels.find(value => value.id === id);

    if (!parcel) {
      res.status(404).send({ message: 'Not found!!!' });
    }
    res.status(200).send({
      parcel,
    });
  }

  // get single user's parcels
  static getAllParcelUser(req, res) {
    const { id } = req.params;
    const parcel = users.find(value => value.userId === id);

    if (!parcel) {
      res.status(401).send({
        message: 'there is no parcel for this user',
      });
    }
    return res.status(200).send({
      parcel,
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
      message: ' all parcels has been deleted',
    });
  }
}
export default ParcelsController;
