import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const CountryModel = sequelize.define(
    'CountryModel',
    {
        country_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.country_country_id_seq'::regclass)"),
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        }
    },
    {
        tableName: 'country',
        timestamps: false,
    }
)

export default CountryModel;