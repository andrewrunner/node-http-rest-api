import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/db";

const StaffModel = sequelize.define(
    'StaffModel',
    {
        staff_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.staff_staff_id_seq'::regclass)"),
        },
        first_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        address_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
        },
        store_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(40),
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        },
        picture: {
            type: DataTypes.BLOB,   
        }
    },
    {
        tableName: 'staff',
        timestamps: false,
    }
)

export default StaffModel;