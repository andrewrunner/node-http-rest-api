import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const CityModel = sequelize.define(
    'CityModel',
    {
        city_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.city_city_id_seq'::regclass)"),
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        country_id: {
            type: DataTypes.SMALLINT,
            allowNull:false,
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        }
    },
    {
        tableName: 'city',
        timestamps: false,
    }
)

export default CityModel;