import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import DeleteStudent from '@/components/alerts/DeleteStudent.vue'

describe('DeleteStudent.vue', () => {
  let wrapper;
  const student = { id: 1, name: "Joel" }

  beforeEach(() => {
    wrapper = shallowMount(DeleteStudent, {
      propsData: { student }
    })
  })

  it('renders props.student.name when passed value', () => {
    expect(wrapper.text()).to.include(student.name)
  })

  it('renders props.student.id when passed value', () => {
    expect(wrapper.vm.$props.student.id).to.equal(1)
  })

  it('renders data.dialog if is false', () => {
    expect(wrapper.vm.$data.dialog).to.equal(false)
  })
})