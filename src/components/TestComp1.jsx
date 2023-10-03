import services1 from "@services/test-service-1"

function TestComp1() {
    const textX = services1.x()
    const textY = services1.y()

    return (
        <div className='test-component-1'>
            <p>AAAA</p>
            <p>{textX}</p>
            <p>{textY}</p>
        </div>
    )
}

export default TestComp1