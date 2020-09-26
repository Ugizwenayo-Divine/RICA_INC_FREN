import models from '../models';

const { AnnouncementFrench } = models;

class AnnouncementService {
  static async saveAnnouncement(announcement) {
    const acceptedAnnouncement = await AnnouncementFrench.create(
      {
        ...announcement,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: ['announcedBy', 'title', 'announcement'],
      }
    );

    return acceptedAnnouncement;
  }
  static getAllAnnouncement = async () => {
    const allAnnouncements = await AnnouncementFrench.findAll();
    return allAnnouncements;
  };
  static getAnnouncement = async (id) => {
    const allAnnouncements = await AnnouncementFrench.findOne({ where: { id: id } });
    return allAnnouncements;
  };
  static deleteAnnouncement = async (id) => {
    const deletedAnnouncement = await AnnouncementFrench.destroy({ where: { id: id } });
    return deletedAnnouncement;
  };
  static updateAnnouncement = async (newData) => {
    const updatedAnnouncement = await AnnouncementFrench.update(
      {
        title: newData.title,
        announcement: newData.announcement,
      },
      { where: { id: newData.id } }
    );
    return updatedAnnouncement;
  };
  static async AnnouncementExists(attr, val) {
    const announcement = await AnnouncementFrench.findOne({ where: { [attr]: val } });
    return announcement;
  }
}

export default AnnouncementService;
