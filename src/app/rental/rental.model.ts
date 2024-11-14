import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const RentalModel = sequelize.define(
    'RentalModel',
    {
        rental_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.rental_rental_id_seq'::regclass)"),
        },
        rental_date: {
            type: DataTypes.DATE,                           
            allowNull: false,                          
        }, 
        inventory_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        customer_id: {
            type: DataTypes.SMALLINT,
            allowNull:false,
        },
        return_date: {
            type: DataTypes.DATE,                    
        },
        staff_id: {
            type: DataTypes.SMALLINT,
            allowNull:false,
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        },
    },
    {
        tableName: 'rental',
        timestamps: false,
    }
)

export default RentalModel;