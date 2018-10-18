'use strict';

const axios = require('axios');

const v2URI = "https://api.guildwars2.com/v2";
const itemURI = `${v2URI}/item`;
const itemsURI = `${v2URI}/items`;

module.exports = {
  Query: {
    async Item(obj, args, context) {
      let { id } = args;
      return (await axios.get(itemURI)).data;
    }
    // Items(obj, args, context) {
    //   return {};
    //   let { skip, first, ids } = args;
    //   if (!ids || ids.length < 1) {
    //     let itemIDs = (await axios.get(itemsURI)).data;
    //     return Promise.all(itemIDs.map(() => {
    //       return axios.get(`${itemURI}?ids={ids}`);
    //     }))
    //   }
    // }
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
