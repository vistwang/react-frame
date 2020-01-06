
import { useState, useEffect } from 'react';
import * as React from 'react';

export default (props: any) => {
    const [hobby, setHobby] = useState([...props.hobby]);

    useEffect(() => {
        document.title = `You clicked times`;
    });
    // hobby 变化就会检测
    useEffect(() => {
        document.title = `hobby 变化了`;

        setHobby(props.hobby);
        // 告诉我们，react 在每次渲染之前都要执行销毁操作
        return function DestroyClear() {
            console.log('销毁了');
        };
    }, [props.hobby]);

    return (
        <div>
            <p>我的爱好</p>
            <ul>
                {hobby.map((item, index) => {
                    return (<li key={index}>{item}</li>)
                })}
            </ul>

            <button onClick={() => setHobby(['乐'])}>change</button>
        </div>
    );
}
