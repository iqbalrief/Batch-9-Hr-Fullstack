import regions from './regions';
import Sequelize from 'sequelize';
import { sequelize } from '../../config/config-db';
import employee from './employee'
import users from './users'


const models = {
    Regions: regions(sequelize, Sequelize),
    Employees: employee(sequelize, Sequelize),
    Users: users(sequelize, Sequelize),
}

//4. create relation OneToMany | ManyToMany
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

// 5. export sequalize agar bisa di-call di module lain
export default models;