import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const InventoryModel = sequelize.define(
    'InventoryModel',
    {
        inventory_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.inventory_inventory_id_seq'::regclass)"),
        },
        film_id: {
            type: DataTypes.SMALLINT,
            allowNull:false,
        },
        store_id: {
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
        tableName: 'inventory',
        timestamps: false,
    }
)

export default InventoryModel;