'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@test.com',
      premium: 'yes',
      role: 'member'
    }, {
      firstName: 'JuJu',
      lastName: 'Vanhack',
      email: 'jujuvanhack@test.com',
      premium: 'no',
      role: 'admin'
    }, {
      firstName: 'Stephen',
      lastName: 'Stegal',
      email: 'stephenstegal@test.com',
      premium: 'yes',
      role: 'member'
    }, {
      firstName: 'Luan',
      lastName: 'Giovani',
      email: 'luangiovani@gmail.com',
      premium: 'yes',
      role: 'member'
    }, {
      firstName: 'varghese',
      lastName: 'Arun',
      email: 'varghesearun@test.com',
      premium: 'no',
      role: 'member'
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
