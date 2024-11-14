import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const ActorModel = sequelize.define(
    'ActorModel',
    {
        actor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.actor_actor_id_seq'::regclass)"),
        },
        first_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),       
        }
    },
    {
        tableName: 'actor',
        timestamps: false,
    }
)

export default ActorModel;