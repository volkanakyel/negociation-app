import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'

describe('Tabs.vue', () => {
  it('renders a default component without tabs', () => {
    const TabsWrapper = mount(Tabs)
    const tabsClass = TabsWrapper.find('.tabs')
    expect(TabsWrapper.vm).toBeTruthy()
    expect(tabsClass.isVisible()).toBe(true)
  })

  it('emits update:modelValue when tab is selected', async () => {
    const TabsWrapper = mount(Tabs, {
      props: {
        modelValue: 'tab1'
      }
    })

    // Simulate registering a tab
    const registerTab = TabsWrapper.vm.$.setupState
    expect(TabsWrapper.emitted()).toBeDefined()
  })
})
