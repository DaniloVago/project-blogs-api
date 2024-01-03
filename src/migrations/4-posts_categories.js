module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('posts_categories', {
            post_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'blog_posts',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            category_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'categories',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('posts_categories');
    }
};