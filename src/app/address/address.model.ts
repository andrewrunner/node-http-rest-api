import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const AddressModel = sequelize.define(
    'AddressModel',
    {
        address_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.address_address_id_seq'::regclass)"),
        },
        address: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING(50),
        },
        district: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        city_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        postal_code: {
            type: DataTypes.STRING(10),
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        }        
    },
    {
        tableName: 'address',
        timestamps: false,
    }
)

export default AddressModel;