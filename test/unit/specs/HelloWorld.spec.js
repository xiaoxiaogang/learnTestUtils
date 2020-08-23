import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { mount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  beforeEach(() => console.info('在本区块的每个测试用例之前执行'))
  afterEach(() => console.info('在本区块的每个测试用例之后执行'))
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
  test('是一个 Vue 实例', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
