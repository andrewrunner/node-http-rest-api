import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const CategoryModel = sequelize.define(
    'CategoryModel',
    {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.category_category_id_seq'::regclass)"),
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        }
    },
    {
        tableName: 'category',
        timestamps: false,
    }
)

export default CategoryModel;