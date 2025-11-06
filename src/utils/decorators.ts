/**
 * 防抖
 * @param delay 延迟时间（毫秒）
 * @returns 装饰器函数
 */
export function debounce<T>(delay = 300) {
  let timerId: NodeJS.Timeout | null = null;
  return function DebounceDecorator(
    _target: T,
    _key: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const raw = descriptor.value;

    descriptor.value = function DebouncedFunction(...args: unknown[]) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        raw.apply(this, args);
      }, delay);
    };
    return descriptor;
  };
}

/**
 * 节流
 * @param delay 延迟时间（毫秒）
 * @returns 装饰器函数
 */
export function throttle(delay: number) {
  let timer: NodeJS.Timeout | null = null;

  return function ThrottleDecorator(target, key, descriptor: PropertyDescriptor) {
    const oldFunction = descriptor.value;

    descriptor.value = function ThrottledFunction(...args: unknown[]) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          oldFunction.apply(this, args);
        }, delay);
      }
    };
    return descriptor;
  };
}
