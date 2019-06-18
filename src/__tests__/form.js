import React from "react";
import "../setupTests"
import {Form} from "../Form";
import { render, fireEvent, cleanup } from '@testing-library/react'

describe("Form", () => {

    const setup = () => {
        const utils = render(<Form />)
        const numberNode = utils.getByTestId("input-number")
        const submitNode = utils.getByTestId('submit-number')
        const initialValue = "15000"

        return {
          initialValue,
          numberNode,
          submitNode,
          utils,
        }
      }

    afterEach(cleanup)

    it("Form Input loads with initial state of 150000", () => {
        const {numberNode, initialValue} = setup()
        fireEvent.change(numberNode, { target: { value: initialValue } });
    
        expect(numberNode.value).toEqual(initialValue);
    });

    it('Form got error *invalid separator ', () => {
        const wrongInput = "15 0000"
        const {numberNode, utils, submitNode} = setup()
        fireEvent.change(numberNode, { target: { value: wrongInput } });
        fireEvent.click(submitNode)
        const errorNode = utils.getByTestId('error-msg')
        expect(errorNode.textContent).toEqual('*Invalid Separator')
    })

    it('Form got error Valid character in wrong position ', () => {
        const wrongInput = "150000 Rp"
        const {numberNode, utils, submitNode} = setup()
        fireEvent.change(numberNode, { target: { value: wrongInput } });
        fireEvent.click(submitNode)
        const errorNode = utils.getByTestId('error-msg')
        expect(errorNode.textContent).toEqual('*Valid character in wrong position')
    })

    it('Form got error Missing Value ', () => {
        const wrongInput = "Rp"
        const {numberNode, utils, submitNode} = setup()
        fireEvent.change(numberNode, { target: { value: wrongInput } });
        fireEvent.click(submitNode)
        const errorNode = utils.getByTestId('error-msg')
        expect(errorNode.textContent).toEqual('*Missing Value')
    })
})
