import CountdownTimer from '.';

const CountdownTimerTest = () => {

    const handleTimeFinish = () => {

    }

    return (
        <div className="countdown-timer-container">
            <h1>Countdown Timer</h1>
            <CountdownTimer test="shiva" initialTime={100} onTimeFinish={handleTimeFinish} />
        </div>
    )
};

export default CountdownTimerTest;