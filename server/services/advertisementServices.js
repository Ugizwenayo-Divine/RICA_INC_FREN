import models from '../models';

const { AdvertisementFrench } = models;

class AdvertisementServices {
  static createAdvertisement = async (data) => {
    const {dataValues} = await AdvertisementFrench.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'advertisedBy',
        'title',
        'description',
        'type',
        'advertisingCompany',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllAdvertisement = async () => {
    const allAdvertisement = await AdvertisementFrench.findAll();
    return allAdvertisement;
  }
  static getAdvertisement = async (id) => {
    const allAdvertisement = await AdvertisementFrench.findOne({ where: { id: id } });
    return allAdvertisement;
  }
  static deleteAdvertisement = async (id) => {
    const deletedAdvertisement = await AdvertisementFrench.destroy(
      { where: { id: id } }
    );
    return deletedAdvertisement;
  }
  static updateAdvertisement = async (newData) => {
    const updatedAdvertisement = await AdvertisementFrench.update(
      { 
        title: newData.title,
        description: newData.description,
        type: newData.type,
        advertisingCompany: newData.advertisingCompany,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedAdvertisement;
  }
  static async advertisementExists(attr, val) {
    const advertisement = await AdvertisementFrench.findOne({ where: { [attr]: val } });
    return advertisement;
  }
  static getAllAdvertisementByType = async (type) => {
    const allAdvertisement = await AdvertisementFrench.findAll({ where: { type: type } });
    return allAdvertisement;
}
}

export default AdvertisementServices;