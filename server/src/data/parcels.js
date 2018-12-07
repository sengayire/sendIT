import uuid from 'uuid';

const parcels = [
  {
    id: uuid(),
    userId: '3434-5656-5656-9999',
    origin: 'huye',
    destination: 'kigali',
    riciever: 'mutabazi',
    status: 'delivered',
  },
  {
    id: uuid(),
    userId: '3434-34-567-6458',
    origin: 'kigali',
    destination: 'mutara',
    riciever: 'gabiro',
    status: 'in proccess',
  },
];
export default parcels;
