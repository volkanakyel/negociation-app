import { describe, it, expect, vi } from 'vitest'
import { mount, config } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'

// Stub the Teleport component to render content in place
config.global.stubs = {
  Teleport: true
}

// Mock the eventServices module
vi.mock('@/services/eventServices.js', () => ({
  default: {
    getForecast: vi.fn().mockResolvedValue({
      data: {
        name: 'London',
        weather: [{ description: 'clear sky' }]
      }
    })
  }
}))

describe('Modal.vue', () => {
  it('renders a vue instance', () => {
    const ModalWrapper = mount(Modal, {
      props: {
        success: true,
        employerOffer: 5000,
        employeeSalary: 4000
      }
    })
    expect(ModalWrapper.vm).toBeTruthy()
  })

  it('displays success message when success prop is true', () => {
    const wrapper = mount(Modal, {
      props: {
        success: true,
        employerOffer: 5000,
        employeeSalary: 4000
      }
    })
    expect(wrapper.find('.win').exists()).toBe(true)
    expect(wrapper.text()).toContain('Success!')
  })

  it('displays failure message when success prop is false', () => {
    const wrapper = mount(Modal, {
      props: {
        success: false,
        employerOffer: 3000,
        employeeSalary: 4000
      }
    })
    expect(wrapper.find('.loose').exists()).toBe(true)
    expect(wrapper.text()).toContain('No Deal')
  })

  it('emits close event when OK button is clicked', async () => {
    const wrapper = mount(Modal, {
      props: {
        success: true,
        employerOffer: 5000,
        employeeSalary: 4000
      }
    })
    await wrapper.find('.close-modal').trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })
})
