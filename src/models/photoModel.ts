import { observable } from 'mobx';

class PhotoModel {
  // 存储拍摄的照片数据
  @observable photos: { [key: number]: string } = {};

  /**
   * 设置照片
   * @param step 拍摄步骤 (1-4)
   * @param photoUrl 照片URL
   */
  setPhoto(step: number, photoUrl: string) {
    this.photos[step] = photoUrl;
  }

  /**
   * 获取照片
   * @param step 拍摄步骤 (1-4)
   * @returns 照片URL
   */
  getPhoto(step: number): string | undefined {
    return this.photos[step];
  }

  /**
   * 获取所有照片
   * @returns 所有照片对象
   */
  getAllPhotos(): { [key: number]: string } {
    return { ...this.photos };
  }

  /**
   * 清除所有照片
   */
  clearPhotos() {
    this.photos = {};
  }

  /**
   * 清除指定步骤的照片
   * @param step 拍摄步骤 (1-4)
   */
  clearPhoto(step: number) {
    delete this.photos[step];
  }

  /**
   * 检查是否所有必需照片都已拍摄
   * @returns 是否完成所有拍摄
   */
  isAllPhotosComplete(): boolean {
    return !!(this.photos[1] && this.photos[2] && this.photos[3] && this.photos[4]);
  }

  /**
   * 获取已拍摄照片数量
   * @returns 已拍摄照片数量
   */
  getPhotoCount(): number {
    return Object.keys(this.photos).length;
  }

  /**
   * 获取拍摄步骤的描述
   * @param step 拍摄步骤 (1-4)
   * @returns 步骤描述
   */
  getStepDescription(step: number): string {
    const descriptions = {
      1: '小卡正面',
      2: '小卡背面',
      3: '背面文字logo',
      4: '小卡像素点',
    };
    return descriptions[step] || '';
  }

  /**
   * 获取拍摄步骤的标签
   * @param step 拍摄步骤 (1-4)
   * @returns 步骤标签
   */
  getStepLabel(step: number): string {
    const labels = {
      1: '小卡正面',
      2: '小卡背面',
      3: '背面文字logo',
      4: '小卡像素点',
    };
    return labels[step] || '';
  }
}

export default new PhotoModel();
