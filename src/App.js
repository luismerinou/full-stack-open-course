function Header(props) {
    return (
        <header>
            <h1>{props.courseName} </h1>
        </header>
    );
}

function Content(props) {
    return (
        <div>
            <h3>
                {props.part1} {props.exercises1}
            </h3>
            <h3>
                {props.part2} {props.exercises2}
            </h3>
            <h3>
                {props.part3} {props.exercises3}
            </h3>
        </div>
    );
}

function Total(props) {
    return (
        <h3><u>Total number of exercises {props.total} </u></h3>
    );

}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const totalApp= exercises1 + exercises2 + exercises3

    return (
        <div>
            <Header courseName={course}/>
            <Content
                part1={part1} exercises1={exercises1}
                part2={part2} exercises2={exercises2}
                part3={part3} exercises3={exercises3}
            />
            <Total total={totalApp} />
        </div>
    );
}

export default App;