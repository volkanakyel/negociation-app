import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonComp from '@/components/ButtonComp.vue'

describe('ButtonComp.vue', () => {
  it('renders a visible button with vlk-btn class', () => {
    const ButtonWrapper = mount(ButtonComp, {
      props: { buttonName: 'Test Button' }
    })
    expect(ButtonWrapper.isVisible()).toBe(true)
    expect(ButtonWrapper.find('.vlk-btn').exists()).toBe(true)
  })

  it('displays the correct button text from props', () => {
    const ButtonWrapper = mount(ButtonComp, {
      props: { buttonName: 'Test Button' }
    })
    const buttonText = ButtonWrapper.find('.vlk-btn')
    expect(buttonText.text()).toBe('Test Button')
  })

  it('emits buttonEvent when clicked', async () => {
    const ButtonWrapper = mount(ButtonComp, {
      props: { buttonName: 'Test Button' }
    })
    await ButtonWrapper.find('.vlk-btn').trigger('click')
    expect(ButtonWrapper.emitted().buttonEvent).toBeTruthy()
    expect(ButtonWrapper.emitted().buttonEvent.length).toBe(1)
  })
})
