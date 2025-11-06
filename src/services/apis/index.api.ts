import Taro from '@tarojs/taro';
import HttpCustom from '@/common/http';
import appConst from '@/constants/app.const';
import { identifyTaskListAction, uploadFileAction, createAppraisalAction } from '../actions';

export interface ReqStatsInfo {
  id: string;
}

export interface ResStatsInfo {
  catHouseNum: number;
  userNum: number;
  tnrCatNum: number;
  hospitalNum: number;
}

/**
 * 鉴定任务项
 */
export interface IdentifyTaskItem {
  id: number;
  userId: number;
  templateId: number;
  aiResult: number;
  aiReason: string;
  firstImageUrl: string;
  createTime: number;
  updateTime: number;
  userPic: string;
  nickName: string;
}

/**
 * 查询鉴定任务列表请求参数
 */
export interface ReqIdentifyTaskList {
  pageNo: number;
  pageSize: number;
}

/**
 * 查询鉴定任务列表响应数据
 */
export interface ResIdentifyTaskList {
  total: number;
  pageCount: number;
  pageNo: number;
  pageSize: number;
  data: IdentifyTaskItem[];
}

/**
 * 查询鉴定任务列表响应
 */
export interface IdentifyTaskListResponse {
  code: number;
  msg: string;
  data: ResIdentifyTaskList;
}

/**
 * 查询所有鉴定任务
 * @param params 请求参数
 * @param config 请求配置（可选）
 * @returns Promise<IdentifyTaskListResponse>
 */
export function requestIdentifyTaskListApi(
  params: ReqIdentifyTaskList,
  config?: { includeToken?: boolean; timeout?: number },
) {
  // 从 params 中提取 includeToken（如果存在），避免传入请求体
  const {
    includeToken,
    ...requestParams
  } = params as ReqIdentifyTaskList & { includeToken?: boolean };

  // 合并 config，优先使用 params 中的 includeToken，然后是 config 中的
  const finalConfig = {
    includeToken: includeToken ?? config?.includeToken,
    timeout: config?.timeout,
  };

  return HttpCustom.post<IdentifyTaskListResponse>(
    identifyTaskListAction,
    requestParams,
    finalConfig,
  );
}

/**
 * 上传文件响应数据
 */
export interface UploadFileResponse {
  /**
   * 文件URL
   */
  url?: string;
  /**
   * 文件ID
   */
  fileId?: string;
  [key: string]: unknown;
}

/**
 * 上传文件请求参数
 */
export interface ReqUploadFile {
  /**
   * 文件路径（本地临时文件路径）
   */
  filePath: string;
  /**
   * 额外的请求数据（可选）
   */
  extraData?: Record<string, unknown>;
}

/**
 * 上传文件接口（base64 格式上传）
 * @param params 上传参数
 * @returns Promise<UploadFileResponse>
 */
export function requestUploadFileApi(params: ReqUploadFile): Promise<UploadFileResponse> {
  return new Promise((resolve, reject) => {
    const { filePath, extraData = {} } = params;

    // 读取文件为 base64
    const fileManager = Taro.getFileSystemManager();
    fileManager.readFile({
      filePath,
      encoding: 'base64',
      success: (readRes) => {
        // 读取文件成功，构建请求体
        const requestBody = {
          action: uploadFileAction,
          file: readRes.data as string, // base64 字符串
          ...extraData, // 额外的数据
        };

        // 使用 POST 请求发送 base64 文件
        Taro.request({
          url: appConst.BASE_API,
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
          },
          data: requestBody,
          success: (res) => {
            try {
              // 处理响应数据
              let response;
              if (typeof res.data === 'string') {
                response = JSON.parse(res.data);
              } else {
                response = res.data;
              }

              if (response.code === 0) {
                resolve(response.data || { url: response.data?.url });
              } else {
                reject(new Error(response.message || '上传失败'));
              }
            } catch {
              reject(new Error('服务器返回数据格式错误'));
            }
          },
          fail: (err) => {
            reject(new Error(err.errMsg || '上传失败'));
          },
        });
      },
      fail: (err) => {
        reject(new Error(`读取文件失败: ${err.errMsg || '未知错误'}`));
      },
    });
  });
}

/**
 * 创建鉴定请求参数
 */
export interface ReqCreateAppraisal {
  /**
   * 卡片图片URL数组
   */
  card_image: string[];
}

/**
 * 创建鉴定响应数据
 */
export interface ResCreateAppraisal {
  /**
   * 鉴定任务ID
   */
  taskId?: string;
  /**
   * 鉴定结果
   */
  result?: number;
  [key: string]: unknown;
}

/**
 * 创建鉴定响应
 */
export interface CreateAppraisalResponse {
  code: number;
  message: string;
  data: ResCreateAppraisal;
}

/**
 * 创建鉴定接口
 * @param params 请求参数
 * @returns Promise<CreateAppraisalResponse>
 */
export function requestCreateAppraisalApi(params: ReqCreateAppraisal) {
  return HttpCustom.post<CreateAppraisalResponse>(
    createAppraisalAction,
    params,
    {
      timeout: 60000, // 设置超时时间为 1 分钟（60秒 = 60000毫秒）
    },
  );
}
