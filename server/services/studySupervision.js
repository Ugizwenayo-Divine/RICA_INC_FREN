import models from '../models';

const { StudySupervisionFrench } = models;

class StudySupervisionServices {
  static createStudySupervision = async (data) => {
    const {dataValues} = await StudySupervisionFrench.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'studyBy',
        'description',
        'image',
        'cloudinaryId',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllStudySupervision = async () => {
    const allStudySupervision = await StudySupervisionFrench.findAll();
    return allStudySupervision;
  }
  static getStudySupervision = async (id) => {
    const allStudySupervision = await StudySupervisionFrench.findOne({ where: { id: id } });
    return allStudySupervision;
  }
  static deleteStudySupervision = async (id) => {
    const deletedStudySupervision = await StudySupervisionFrench.destroy(
      { where: { id: id } }
    );
    return deletedStudySupervision;
  }
  static updateStudySupervision = async (newData) => {
    const updatedStudySupervision = await StudySupervisionFrench.update(
      { 
        description: newData.description,
        image: newData.image,
        cloudinaryId: newData.cloudinaryId,
      }, 
      { where: { id: newData.id } }
    );
    return updatedStudySupervision;
  }
  static async StudySupervisionExists(attr, val) {
    const studySupervision = await StudySupervisionFrench.findOne({ where: { [attr]: val } });
    return studySupervision;
  }
}

export default StudySupervisionServices;