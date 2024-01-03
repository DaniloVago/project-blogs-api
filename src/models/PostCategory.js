module.exports = (sequelize, DataTypes) =>{
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            foreignKey: true,
            type: DataTypes.INTEGER,
        },
        categoryId: {
            foreignKey: true,
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false,
    })

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
          as: 'posts'
        });
      
        models.BlogPost.belongsToMany(models.Category, {
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
          as: 'categories'
        });
      };
      
    
    return PostCategory;
};