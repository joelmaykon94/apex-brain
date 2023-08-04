import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import FormEdit from '@/components/forms/Students.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

describe('FormEdit', () => {
	let wrapper;
	const student = {
		id: 1,
		name: "Joel",
		email: "joel@email.com",		
		RA:"101012",
		CPF:"99999999999"	
	}
	beforeEach(() => {
		wrapper = shallowMount(FormEdit, {
			propsData: {
				student,
				type: 'edit',
				readonly: true,
			},
		})
	})

	it('renders data.type if is edit', async () => {
		expect(wrapper.vm.$props.type).to.equal('edit')
	})

	it('renders data.readonly if is false', () => {
		expect(wrapper.vm.$props.readonly).to.equal(true)
	})

	it('renders changers the fields of students',async () => {
		expect(wrapper.vm.$data.id).to.equal(1);
		expect(wrapper.vm.$data.name).to.equal('Joel');
		expect(wrapper.vm.$data.email).to.equal('joel@email.com');
		expect(wrapper.vm.$data.ra).to.equal('101012');
		expect(wrapper.vm.$data.cpf).to.equal('99999999999')
	})
})