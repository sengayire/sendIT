import express from 'express';
import uuid from 'uuid/v1';
import { celebrate, Joi } from 'celebrate';
import parcels from '../data/parcels';

class ParcelsController {
// create a parcel
  static createParcel() {
    return celebrate({
      body: Joi.object().keys({
        from: Joi.string().required().trim(),
        receiver: Joi.string().required().trim(),
        destination: Joi.string().required().trim(),
      }),
    }), (req, res) => {
      const { body } = req;
  
      if (!body.from || !body.receiver || !body.destination) {
        res.status(400).send({ message: 'Please provide all details' });
      }
      const parcel = {
        id: uuid(),
        from: body.from,
        sender: body.sender,
        destination: body.destination,
        riceiver: body.receiver,
        userId: body.userId,
      };
    }
      parcels.push(parcel);
  
      res.status(200).send({
          Message: "Parcel created successfully!",
          Parcel: {
              id: 12,
              weight: 23,
          }
      }
      );
    }
  };

// update parcel
static updateParcel((req, res) => {
  const { body } = req;
  if (!body.from || !body.receiver || !body.destination) {
    res.status(404).send({ message: ' details mising!!!' });
  }
  const parcel = {
    destination: body.sender,
  };

  parcels.push(parcel);

  res.status(200).send({
    essage: ' details mising!!!',
    parcel,
  });
});


// get all available parcels
static getAllParcels((req, res) => {
  res.status(200).send(parcels);
});

// getting a single parcel by id
static getOneParcel((req, res) => {
  const { id } = req.params;
  const parcel = parcels.find(value => value.id === id);

  if (!parcel) {
    res.status(404).send({ message: 'Not found!!!' });
  }
  res.status(200).send({
    parcel,
  });
});

// cancel a parcel
static cancelParcel((req, res) => {
  const { id } = req.params;
  const parcel = parcels.find(value => value.id === id);

  if (!parcel) {
    res.status(404).send({ message: 'Not found!!!' });
  }
  res.status(200).send({
    message: 'parcel canceled successfull',
    parcel:{
      id:11,
      weight:10,
    },
  });
});

// deleting all parcel
static deleteParcel((req, res) => {
  res.status(200).send({
    message: ' all parcels has been deleted',
  });
});
}

export default ParcelsController;
