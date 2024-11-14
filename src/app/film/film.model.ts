import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../database/db";

const FilmModel = sequelize.define(
    'FilmModel',
    {
        film_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, 
            defaultValue: Sequelize.literal("nextval('public.film_film_id_seq'::regclass)"),
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        description: {
            type: DataTypes.TEXT,
        },
        release_year: {
            type: DataTypes.INTEGER,
        },
        language_id: {
            type: DataTypes.SMALLINT,
            allowNull: false, 
        },
        rental_duration: {
            type: DataTypes.SMALLINT,
            allowNull: false, 
            defaultValue: 3,
        },
        rental_rate: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false, 
            defaultValue: 4.99,
        },
        length: {
            type: DataTypes.SMALLINT, 
        },
        replacement_cost: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false, 
            defaultValue: 19.99,
        },
        rating: {
            type: DataTypes.ENUM('G', 'PG', 'PG-13', 'R', 'NC-17'), 
            defaultValue: Sequelize.literal("'G'::public.mpaa_rating"),
        },
        last_update: {
            type: DataTypes.DATE,                           
            allowNull: false,                               
            defaultValue: Sequelize.literal('NOW()'),  
        },
        special_features: {
            type: DataTypes.ARRAY(DataTypes.STRING),

        },
        fulltext: {
            type: DataTypes.TSVECTOR,
            allowNull: false, 
        }
        
    },
    {
        tableName: 'film',
        timestamps: false,
    }
)

export default FilmModel;