import models from '../models';

const { NewsFrench } = models;

class NewsServices {
  static createNews = async (data) => {
    const {dataValues} = await NewsFrench.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'userId',
        'title',
        'description',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllNews = async () => {
    const allNews = await NewsFrench.findAll();
    return allNews;
  }
  static getNews = async (id) => {
    const allNews = await NewsFrench.findOne({ where: { id: id } });
    return allNews;
  }
  static deleteNews = async (id) => {
    const deletedNews = await NewsFrench.destroy(
      { where: { id: id } }
    );
    return deletedNews;
  }
  static updateNews = async (newData) => {
    const updatedNews = await NewsFrench.update(
      { 
        title: newData.title,
        description: newData.description,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedNews;
  }
  static async newsExists(attr, val) {
    const news = await NewsFrench.findOne({ where: { [attr]: val } });
    return news;
  }
}

export default NewsServices;