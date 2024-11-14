import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const FilmCategoryModel = sequelize.define(
    'FilmCategoryModel',
    {
        film_id: {
            type: DataTypes.SMALLINT,
            allowNull: false, 
            primaryKey: true
        },
        category_id: {
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
        tableName: 'film_category',
        timestamps: false,
    }
)

export default FilmCategoryModel;