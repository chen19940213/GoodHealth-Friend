# FUSION 跨端小程序开发规范

## 一、快速上手

### 1、安装

```
npm install
```
> 注意：Node Version >= 18 

### 2、配置
#### 2.1 系统配置
所有配置字段均以`<XXX>`命名，全局搜索替换即可，具体配置字段如下：
| 配置字段       | 含义                     |
|----------------|-------------------------|
| `<ProjectName>` | 小程序工程名称，CLI 下载时会自动替换为指定的工程名称 |
| `<WeAppId>`    | 微信小程序 AppId       |
| `<TTAppId>`    | 抖音小程序 AppId       |

#### 2.2 环境配置
`dotenv/` 目录下定义了每个端口的环境配置，目前有以下环境配置： 
| 配置字段       | 含义                     |
|----------------|-------------------------|
| `FUSION_APP_CATEGORY_ID` | 业务线标识ID |
| `FUSION_APP_SYSTEM_CODE`    | systemCode  |
| `FUSION_APP_PAY_CHANNEL`    | 支付渠道   |
| `FUSION_APP_MINA_ORIGIN_ID`    | 微信小程序原始ID   |
| `FUSION_APP_LOCATION_ENABLE`    | 是否启用定位   |
| `FUSION_APP_WISHDOM_ENABLE`    | 是否启用wishdom   |

以上变量均可通过 `process.env.<NAME>` 获取，注意 `NAME` 取 `FUSION_APP_`后面的部分，比如：
``` ts
process.env.CATEGORY_ID;
process.env.SYSTEM_CODE;
process.env.PAY_CHANNEL;
```
注意事项：
- 只有 `FUSION_APP_` 开头的变量，可以通过 `process.env.` 获取。
- 注意：修改配置后，需重新启动项目，变更才会生效。

### 3、启动
本地开发命令动态匹配多端，匹配规则如下：
``` bash
# watch 模式
npm run fat <MP_TYPE> 
# build 模式
npm run build <MP_TYPE>
```
> MP_TYPE 枚举：`weapp` `alipay` `tt` `pet` `petbos` `hello` `rent`

举例如下：
``` bash
# watch 模式
npm run fat weapp # fat开发: 微信小程序
npm run uat hello # uat开发: hello小程序
npm run pro rent # rent开发: rent小程序

# build 模式
npm run build weapp # build: 微信小程序
npm run build tt # build: tt小程序
npm run build pet # build: pet小程序
```

### 4、预览
打开小程序开发者工具，选择 `dist/` 下对应的小程序产物，即可预览效果。
