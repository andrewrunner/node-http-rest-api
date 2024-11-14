import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const PaymentModel = sequelize.define(
    'PaymentModel',
    {
        payment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.payment_payment_id_seq'::regclass)"),
        },
        customer_id: {
            type: DataTypes.SMALLINT,
            allowNull:false,
        },
        staff_id: {
            type: DataTypes.SMALLINT,
            allowNull:false,
        },
        rental_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        amount: {
            type: DataTypes.DECIMAL(5,2),
            allowNull:false,
        },
        payment_date: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        }
    },
    {
        tableName: 'payment',
        timestamps: false,
    }
)

export default PaymentModel;