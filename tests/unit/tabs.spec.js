import { mount } from "@vue/test-utils";
import Tabs from "@/components/Tabs.vue";
//Wrapped Tabs component
const TabsWrapper = mount(Tabs);
describe("Tabs.vue", () => {
  it("renders a default component without tabs", () => {
    const tabsClass = TabsWrapper.find(".tabs");
    expect(TabsWrapper.isVueInstance()).toBe(true);
    expect(tabsClass.isVisible()).toBe(true);
  });
});
