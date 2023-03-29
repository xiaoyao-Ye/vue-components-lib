import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { <%= prefixU %><%= displayName %> } from '../index'

describe('<%= displayName %>', () => {
  test('class', () => {
    const wrapper = mount(<%= prefixU %><%= displayName %>)
    expect(wrapper.classes()).toContain('<%= prefixL %>-<%= name %>')
  })
})
