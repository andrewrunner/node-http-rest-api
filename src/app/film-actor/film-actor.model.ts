import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const FilmActorModel = sequelize.define(
    'FilmActorModel',
    {
        film_id: {
            type: DataTypes.SMALLINT,
            allowNull: false, 
            primaryKey: true
        },
        actor_id: {
            type: DataTypes.SMALLINT,
            allowNull: false, 
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        }
    },
    {
        tableName: 'film_actor',
        timestamps: false,
    }
)

export default FilmActorModel;