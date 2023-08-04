import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import RegisterStudent from '@/components/buttons/RegisterStudent.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

describe('RegisterStudent.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(RegisterStudent)
    })   

    it('renders data.type if is register', () => {
        expect(wrapper.vm.$data.type).to.equal('register')
    })

    it('renders data.readonly if is false', () => {
        expect(wrapper.vm.$data.readonly).to.equal(false)
    })

    it('renders router-link data.nameComponent if is  FormRegister', () => {
        expect(wrapper.vm.$data.nameComponent).to.equal('FormRegister')
    })
})