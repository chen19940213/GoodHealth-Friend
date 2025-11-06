import {
  exampleImage1, exampleImage2, exampleImage3, exampleImage4,
} from '@/assets/index';

/** 业务级别常量  */
export const defaultUserAvatar = 'https://m.hellobike.com/resource/gallery/146/ZXjt3BBT_user-avatar1.png';

/** 相机拍摄步骤配置 */
export const CAMERA_STEP_INFO = {
  1: {
    title: '拍摄「小卡正面」',
    label: '小卡正面',
    description: '裸卡状态下，将手机垂直正对卡面，靠近镜头使卡面铺满，避免角度倾斜和反光，光线充足，对焦清晰',
    required: true,
    image: exampleImage1,
  },
  2: {
    title: '拍摄「小卡背面」',
    label: '小卡背面',
    description: '裸卡状态下，将手机垂直正对卡面，靠近镜头使卡面铺满，避免角度倾斜和反光，光线充足，对焦清晰',
    required: true,
    image: exampleImage2,
  },
  3: {
    title: '拍摄「小卡正面纹路对光」',
    label: '小卡正面纹路对光',
    description: '光线充足，对焦清晰，卡面不要反光，能看清字体符号等细节，主要拍摄logo等文字细节',
    required: false,
    image: exampleImage2,
  },
  4: {
    title: '拍摄「背面文字logo」',
    label: '背面文字logo',
    description: '裸卡状态下，将手机垂直正对卡面，靠近镜头使卡面铺满，避免角度倾斜和反光，光线充足，对焦清晰',
    required: false,
    image: exampleImage3,
  },
  5: {
    title: '拍摄「小卡像素点」',
    label: '小卡像素点',
    description: '裸卡状态下，将手机垂直正对卡面，靠近镜头使卡面铺满，避免角度倾斜和反光，光线充足，对焦清晰',
    required: false,
    image: exampleImage4,
  },
} as const;
