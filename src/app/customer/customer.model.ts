import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const CustomerModel = sequelize.define(
    'CustomerModel',
    {
        customer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.customer_customer_id_seq'::regclass)"),
            
        },
        store_id: {
            type: DataTypes.SMALLINT,
            allowNull: false, 
        },
        first_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
        },
        address_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        activebool: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        create_date: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal("('now'::text)::date"),  
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        },
        active: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'customer',
        timestamps: false,
    }
)

export default CustomerModel;

   