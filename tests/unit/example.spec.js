import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('is a vue app', () => {
    const wrapper = shallowMount(App)
    expect(wrapper).toBeTruthy()
  })
})
