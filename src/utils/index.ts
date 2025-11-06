/**
 * 获取缩放后的Gif图片
 * @see https://help.aliyun.com/zh/oss/user-guide/latest-version-of-img-guide/?spm=a2c4g.11186623.0.0.4c6f6bd7zuIw9l
 * @param url 符合阿里云OSS的Gif地址
 * @returns
 */
export function getOssGifUrl(url: string, width = 0, height = 0) {
  if (url) {
    return `${url}?x-oss-process=image/resize,m_lfit,w_${width || 0},h_${height || 0
    },animation`;
  }
  return '';
}

/**
 * 获取视频首帧封面
 * @param url 符合阿里云OSS的视频地址
 * @returns 视频封面的URL
 */
export function getVideoCoverUrl(url: string) {
  if (url) {
    return `${url}?x-oss-process=video/snapshot,t_1000,f_jpg,w_0,h_0,ar_auto`;
  }
  return '';
}

/**
 * 生成一个基于时间的UUID。
 * UUID是一个全局唯一的标识符，这里使用时间戳和随机数来生成，确保了唯一性。
 * @returns 返回生成的UUID
 */
export function createTimeBasedUUID() {
  // 获取当前时间戳
  let d = new Date().getTime();
  // 使用模板字符串生成UUID的格式，并通过正则表达式替换其中的x和y
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // 根据当前时间戳和随机数计算出UUID的每一位
    // eslint-disable-next-line no-bitwise
    const r = (d + Math.random() * 16) % 16 | 0;
    // 更新时间戳，除以16取整
    d = Math.floor(d / 16);
    // 根据c是x还是y，计算出UUID中y的特殊位
    // eslint-disable-next-line no-bitwise, no-mixed-operators
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    // 将计算结果转换为16进制字符串
    return v.toString(16);
  });
  // 返回生成的UUID
  return uuid;
}
/**
 * 计算两个GPS坐标之间的距离
 * @param lat1 第一个坐标的纬度
 * @param lng1 第一个坐标的经度
 * @param lat2 第二个坐标的纬度
 * @param lng2 第二个坐标的经度
 * @returns 返回两个坐标之间的距离（单位：米），保留两位小数
 */
export function calculateGpsDistance(
  lat1 = 0,
  lng1 = 0,
  lat2 = 0,
  lng2 = 0,
) {
  const rad1 = lat1 * (Math.PI / 180.0);
  const rad2 = lat2 * (Math.PI / 180.0);
  const a = rad1 - rad2;
  const b = lng1 * (Math.PI / 180.0) - lng2 * (Math.PI / 180.0);
  const r = 6378137;
  const distance = r
    * 2
    * Math.asin(
      Math.sqrt(
        Math.sin(a / 2) ** 2
        + Math.cos(rad1) * Math.cos(rad2) * Math.sin(b / 2) ** 2,
      ),
    );
  return distance.toFixed(2);
}

/**
 * 从对象中删除指定的属性，返回一个新的对象。
 * @param obj 要处理的对象，默认为空对象。
 * @param fields 要删除的属性名称数组。
 * @returns 返回一个新的对象，不包含指定的属性。如果原始对象为空或未定义，则返回空对象。
 */
export function omit(obj = {}, fields: string[] = []) {
  // 创建一个浅拷贝对象，以避免修改原始对象。
  const shallowCopy = { ...obj };
  // 遍历要删除的属性数组，逐个从浅拷贝对象中删除这些属性。
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  // 返回处理后的浅拷贝对象，如果原始对象为空或未定义，则返回空对象。
  return shallowCopy || {};
}

/**
 * 将 SVG 字符串转换为 Data URL
 * - 此函数的目的是将给定的 SVG 字符串处理成一个 Data URL，以便在 Webview 中使用背景图
 * - 它会移除 SVG 中不必要的元素和属性，以减小数据量，并确保生成的 URL 能被正确解析
 * @param svg SVG 字符串
 * @param ignoreTags 可选参数，指定需要忽略的标签，默认为 'title|desc|defs'
 * @returns 转换后的 Data URL 字符串
 */
export function convertSvgToDataUrl(svg: string, ignoreTags?: string) {
  let mySvg = svg;
  // 将被设置到 dataset 中的属性还原出来
  mySvg = mySvg.replace(/data-(.*?=(['"]).*?\2)/g, '$1');

  // 将被设置到 data-xlink-href 的属性还原出来
  mySvg = mySvg.replace(/xlink-href=/g, 'xlink:href=');

  // 将 dataset 中被变成 kebab-case 写法的 viewBox 还原出来
  mySvg = mySvg.replace(/view-box=/g, 'viewBox=');

  // 清除 SVG 中不应该显示的 title、desc、defs 元素
  const defIgnoreTags = 'title|desc|defs';
  const reg = new RegExp(
    `<(${ignoreTags || defIgnoreTags})>[\\s\\S]*?<\\/\\1>`,
    'g',
  );
  mySvg = mySvg.replace(reg, '');
  // 为非标准 XML 的 SVG 添加 xmlns，防止视图层解析出错
  if (!/xmlns=/.test(mySvg)) mySvg = mySvg.replace(/<svg/, "<svg xmlns='http://www.w3.org/2000/svg'");

  // 对 SVG 中出现的浮点数统一取最多两位小数，缓解数据量过大问题
  const parse = (match: string) => parseFloat(match).toFixed(2);
  mySvg = mySvg.replace(/\d+\.\d+/g, (match) => `${parseFloat(parse(match))}`);

  // 清除注释，缓解数据量过大的问题
  mySvg = mySvg.replace(/<!--[\s\S]*?-->/g, '');

  // 模拟 HTML 的 white-space 行为，将多个空格或换行符换成一个空格，减少数据量
  mySvg = mySvg.replace(/\s+/g, ' ');

  // 对特殊符号进行转义，这里参考了 https://github.com/bhovhannes/svg-url-loader/blob/master/src/loader.js
  // eslint-disable-next-line no-useless-escape
  mySvg = mySvg.replace(
    /[{}|\\^~[\]`"<>#%]/g,
    (match) => `%${match[0].charCodeAt(0).toString(16).toUpperCase()}`,
  );

  // 单引号替换为 \'，由于 kbone 的 bug，节点属性中的双引号在生成 outerHTML 时不会被转义导致出错
  // 因此 background-image: url( 后面只能跟单引号，所以生成的 URI 内部也就只能用斜杠转义单引号了
  mySvg = mySvg.replace(/'/g, "\\'");

  // 最后添加 mime 头部，变成 Webview 可以识别的 Data URI
  return `data:image/svg+xml,${mySvg.trim()}`;
}

/**
 * 格式化电话号码
 * @param value
 */
export function formatPhoneNumber(value: string) {
  // 清除所有非数字字符
  const digits = value.replace(/\D/g, '');

  // 确保不会超出字符串范围
  const formatted = digits.slice(0, 3)
    + (digits.length > 3 ? ' ' : '')
    + digits.slice(3, 7)
    + (digits.length > 7 ? ' ' : '')
    + digits.slice(7);

  return formatted.trim(); // 移除两端的空格
}
