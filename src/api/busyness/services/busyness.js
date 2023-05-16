'use strict';

/**
 * busyness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::busyness.busyness');
