/* 电话号码 */
export const mobileReg = /^(1\d{10})$/;

/** 数字 */
export const numberReg = /^([1-9]\d*|[0])(\.\d{1,2})?$/;

/** 身份证 */
export const idCardReg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;

/** money */
export const moneyReg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;

/** 车牌号 */
export const carIdReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
