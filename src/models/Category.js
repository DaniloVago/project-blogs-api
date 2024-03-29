module.exports = (sequelize, DataTypes) =>{
    const Category = sequelize.define('Category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
    }, {
        tablename: 'categories',
        underscored: true,
        timestamps: false,
    })
    
    return Category;
};