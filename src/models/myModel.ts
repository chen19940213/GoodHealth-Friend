import { action, observable } from 'mobx';
import { ResUserInfoVo } from '@/services/apis/app.api';
import {
  requestIdentifyTaskListApi, IdentifyTaskItem,
} from '@/services/apis/index.api';

class MyModel {
  @observable userInfo: ResUserInfoVo = Object.call(null);

  @observable cardList: IdentifyTaskItem[] = [];

  @observable loading = false;

  @observable pageNo = 1;

  @observable pageSize = 20;

  @observable hasMore = true;

  @action
  setUserInfo(userInfo: ResUserInfoVo) {
    this.userInfo = userInfo;
  }

  /**
   * 获取我的鉴定任务列表（包含 token）
   */
  @action
  async getMyIdentifyTaskList(reset = false) {
    if (this.loading) return;

    if (reset) {
      this.pageNo = 1;
      this.cardList = [];
      this.hasMore = true;
    }

    if (!this.hasMore) return;

    this.loading = true;

    try {
      const result = await requestIdentifyTaskListApi(
        {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
        },
        {
          includeToken: true, // 我的页面必须包含 token
        },
      );

      // Http.post 返回格式: { code: 0, message: 'success', data: IdentifyTaskListResponse }
      // result.data 就是 IdentifyTaskListResponse
      // IdentifyTaskListResponse: { code: 0, msg: 'success', data: ResIdentifyTaskList }
      // result.data.data 就是 ResIdentifyTaskList: { total, pageCount, data: IdentifyTaskItem[] }
      // 检查 result.code 和 result.data.code
      if (result.code === 0 && result.data) {
        // const taskListData = result.data.data; // ResIdentifyTaskList
        const { total, pageCount, data } = result.data;

        if (data && Array.isArray(data)) {
          this.cardList = reset
            ? data
            : [...this.cardList, ...data];
          this.pageNo += 1;
          this.hasMore = this.cardList.length < total;
        } else {
          // eslint-disable-next-line no-console
          console.warn('鉴定任务列表数据格式异常:', data);
        }
      } else {
        // eslint-disable-next-line no-console
        console.warn('鉴定任务列表请求失败:', result);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('获取鉴定任务列表失败:', error);
    } finally {
      this.loading = false;
    }
  }

  /**
   * 将 aiResult 转换为结果文本
   */
  getResultText(aiResult: number): string {
    const resultMap: { [key: number]: string } = {
      1: '符合正品特征',
      2: '疑似假货',
      3: '无法鉴定',
    };
    return resultMap[aiResult] || '未知';
  }

    /**
   * 清空列表数据
   */
    @action
  clearCardList() {
    this.cardList = [];
    this.pageNo = 1;
    this.hasMore = true;
  }
}

export default new MyModel();
