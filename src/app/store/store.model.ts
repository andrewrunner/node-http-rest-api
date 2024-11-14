import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const StoreModel = sequelize.define(
    'StoreModel',
    {
        store_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.literal("nextval('public.store_store_id_seq'::regclass)"),
        },
        manager_staff_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        address_id: {
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
        tableName: 'store',
        timestamps: false,
    }
)

export default StoreModel;