import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import EditStudent from '@/components/buttons/EditStudent.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

describe('EditStudent.vue', () => {
    let wrapper;
    const student = {
        id: 1, name: "Joel",
        email: "joel@email.com",
        cpf: "12345678999",
        ra: "101325"
    }

    beforeEach(() => {
        wrapper = shallowMount(EditStudent, {
            propsData: { student }
        })
    })

    it('renders props.student.name when passed value', () => {
        expect(wrapper.vm.$props.student).to.a('object')
    })

    it('renders props.student.id when passed value', () => {
        expect(wrapper.vm.$props.student.id).to.equal(1)
    })

    it('renders data.type if is edit', () => {
        expect(wrapper.vm.$data.type).to.equal('edit')
    })

    it('renders data.readonly if is true', () => {
        expect(wrapper.vm.$data.readonly).to.equal(true)
    })

    it('renders router-link data.nameComponent if is  FormEdit', () => {
        expect(wrapper.vm.$data.nameComponent).to.equal('FormEdit')
    })
})