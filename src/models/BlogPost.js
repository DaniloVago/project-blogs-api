module.exports = (sequelize, DataTypes) =>{
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            foreignKey: true,
            type: DataTypes.INTEGER
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        tablename: 'blog_posts',
        underscored: true,
        timestamps: false,
    })

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, 
          { foreignKey: 'userId', as: 'user'}
         )
        BlogPost.hasMany(models.PostCategory,
          { foreignKey: 'postId', as: 'post'}
        )
      }
    
    return BlogPost;
};