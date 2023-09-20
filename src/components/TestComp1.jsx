import { x } from "@services/test-service-1"

function TestComp1() {
    const text = x()

    return (
        <div className='test'>
            <p>AAAA</p>
            <p>{text}</p>
        </div>
    )
}

export default TestComp1