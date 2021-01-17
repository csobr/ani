'use strict';

const slugify = require('slugify');

module.exports = {
  lifecycle: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.slug = slugify(data.title);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title) {
        data.slug = slugify(data.title);
      }
    },
  },
};
