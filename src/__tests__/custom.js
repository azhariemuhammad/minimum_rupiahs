import "../setupTests"
import UseNumberForm from "../UseNumberForm";
import { renderHook, act, testHook, cleanup } from 'react-hooks-testing-library'

describe('custom hooks', () => {

    test('values.number equal 150000', () => {
        const { result } = renderHook(() => UseNumberForm())
        act(() => {
            result.current.setValues({number: '15000'})
        }) 
        expect(result.current.values).toStrictEqual({"number": "15000"})
    })

    test('fraction.number equal 150000', () => {
        const { result } = renderHook(() => UseNumberForm())
        const errors = {status: false}
        act(() => {
            result.current.calculate('15000', errors)
        }) 
        expect(result.current.fraction.fraction).toEqual(
            [{count: 1, value: 10000}, {count: 1, value: 5000}]
            )
    })
})
