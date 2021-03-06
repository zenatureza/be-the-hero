const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

const ONGS_TABLE = 'ongs';

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    // const id = crypto.randomBytes(4).toString('HEX');
    const id = generateUniqueId();

    await connection(ONGS_TABLE).insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id });
  },

  async index(request, response) {
    const ongs = await connection(ONGS_TABLE).select('*');

    return response.json(ongs);
  }
}