import to from 'await-to-js' // 需要安裝 await-to-js，用來簡化response與錯誤處理
import { useQuasar } from 'quasar' // 舉例由quasar提供的notify組件顯示訊息

export function useCallApi() {
  const $q = useQuasar()
  const callApi = async ({ actionFn, msg, callBack }) => {
    const [err, res] = await to(actionFn())
    // 只返回 API 的 res.data，不包括 res.success的話，需要做個防呆檢查
    const isSuccess = res?.success !== undefined ? res.success : true
    // 如果回傳的有success屬性，就直接套用，否則就預設將isSuccess設為true
    if (err || !isSuccess) {
      msg?.failed && $q.notify({ color: 'negative', timeout: 1000, message: msg.failed, icon: 'close',position:'top' })
      console.error(msg?.failed);
      return
    }

    msg?.success && $q.notify({ color: 'positive', timeout: 1000, message: msg.success, icon: 'check',position:'top' })
    if (typeof callBack === 'function') {
      await callBack(res)
    }
  }
  
  return { callApi }
}