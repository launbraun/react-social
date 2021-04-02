import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import * as jest from "jest";


describe("ProfileStatus component", () => {
    test("Status from props should be in state", () => {
        const component = create(<ProfileStatus status="Alexandr Launbraun" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Alexandr Launbraun");
    });

    test("After creation Input should be displayed", () => {
        const component = create(<ProfileStatus status="Alexandr Launbraun" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    });

    test("After creation Span shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Alexandr Launbraun" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Alexandr Launbraun");
    });

    test("Input should be displayed in EditMode instead of span", () => {
        const component = create(<ProfileStatus status="Alexandr Launbraun" />);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("Alexandr Launbraun");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Alexandr Launbraun" updateStatus={mockCallback}/>);
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
