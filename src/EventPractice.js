import React, { Component } from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder='아무거나 입력하세요(동기)'
                    onChange={
                        (e) => {
                            // 변경될때마다 값 console에 기록
                            console.log(e.target.value);
                        }
                    }
                    />
            </div>
        );
    }
}

export default EventPractice;

