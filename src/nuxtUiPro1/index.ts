import { getComponentMap, getPropsMap } from './mapping'

export function nuxtUiPro1() {
  return {
    uiName: '@nuxt/ui-pro1',
    map: getPropsMap(),
    lib: '@nuxt/ui-pro',
    prefix: 'U',
  }
}

export function nuxtUiPro1Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: 'U',
    lib: '@nuxt/ui-pro',
    isReact: false,
  }
}
