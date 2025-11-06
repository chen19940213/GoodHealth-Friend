// EventBus 已移除，使用空对象替代
export const LoginEvent = {
  on: (_cb: (...args: unknown[]) => void) => {},
  off: (_cb: (...args: unknown[]) => void) => {},
  offCurrent: () => {},
  trigger: (..._args: unknown[]) => {},
};

export const TestEvent = {
  on: (_cb: (...args: unknown[]) => void) => {},
  off: (_cb: (...args: unknown[]) => void) => {},
  offCurrent: () => {},
  trigger: (..._args: unknown[]) => {},
};
