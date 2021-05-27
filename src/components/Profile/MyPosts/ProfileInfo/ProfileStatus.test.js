import {act, create} from 'react-test-renderer'
import React from 'react'
import ProfileStatus from "./ProfileStatus";
import { render, screen } from '@testing-library/react';


describe('ProfileStatus component', () => {
    test('Props should be the same as come', () => {
        const component = create(<ProfileStatus status='This is a new message'/>)
        const root = component.root
        expect(root.props.status).toBe('This is a new message')
    })
    test('after render input element should be hidden', () => {
        const component = create(<ProfileStatus status='This is a new message'/>)
        expect(() => {
            component.root.findByType("input")
        }).toThrowError()
    })
    test('after render, span element must be displayed', () => {
        const component = create(<ProfileStatus status='This is a new message'/>)
        const root = component.root
        const span = root.findByType("span")
        expect(span.children[0]).toBe('This is a new message')
    })
    test('after click on span, editMode should be true', () => {
        const component = create(<ProfileStatus status='This is a new message'/>)
        const root = component.root
        let spanEl = root.findByType("span")
        spanEl.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('This is a new message')
    })
    it('callback should be called', async () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='This is a new message' updateUserStatus={mockCallback}/>)
        const root = component.root
        let spanEl = root.findByType("span")
        act(() => {
            spanEl.props.onDoubleClick()
        })
        let inputEl = root.findByType("input")
        act(() => {
            inputEl.props.onBlur()
        })
        expect(mockCallback.mock.calls.length).toBe(1)
    })
    it('should get the correct arguments', function () {
        render(<ProfileStatus status='new status'/>)
        expect(screen.getByText(/new status/i)).toBeInTheDocument()
    });
})