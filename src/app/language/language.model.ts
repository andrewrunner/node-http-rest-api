import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const LanguageModel = sequelize.define(
    'LanguageModel',
    {
        language_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.language_language_id_seq'::regclass)"),
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        },
    },
    {
        tableName: 'language',
        timestamps: false,
    }
)

export default LanguageModel;