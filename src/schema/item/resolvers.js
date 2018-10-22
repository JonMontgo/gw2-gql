'use strict';

const axios = require('axios');

const v2URI = "https://api.guildwars2.com/v2/";
const itemsURI = `${v2URI}items`;

module.exports = {
  Query: {
    async Item(obj, args, context) {
      let { id } = args;
      let resp;
      try {
        resp = await axios.get(itemsURI + "/" + id);
      }
      catch (err){
        if (err.response.status == 404) {
          return {};
        }
        throw new Error(err.response.data);
      }
      return resp.data;
    },
    async Items(obj, args, context) {
      let { skip, first, ids } = args;
      if (!ids || ids.length < 1) {
        let itemIDs = (await axios.get(itemsURI)).data;
        return Promise.all(itemIDs.map((id) => {
          return axios.get(`${itemsURI}/${id}`);
        }));
      }
    }
  },

  // Mutation: {
  //
  // },

  // Item: {
  //   ItemStats: (item) => {
  //
  //   },
  //   Listings: (item) => {
  //
  //   },
  //   Prices: (item) => {
  //
  //   }
  // }
};
