"use client";

import React, { useState } from "react";
import { countSelector, decrement, decrementByAmount, increment, incrementByAmount } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useInput from "@/lib/hooks/useInput";

function CounterBox()
{
    const count = useAppSelector(countSelector);
    const dispatch = useAppDispatch();

    const [incrementAmount, onChangeIncrementAmount, setIncrementAmount] = useInput('0');
    const [decrementAmount, onChangeDecrementAmount, setDecrementAmount] = useInput('0');

    const onIncrement = () =>
    {
        dispatch(increment());
    };

    const onDecrement = () =>
    {
        dispatch(decrement());
    };

    const onIncrementByAmount = () =>
    {
        dispatch(incrementByAmount(Number(incrementAmount)));
    };

    const onDecrementByAmount = () =>
    {
        dispatch(decrementByAmount(Number(decrementAmount)));
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="flex justify-center text-[32px]">{count}</h1>
            <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-2">
                    <button className="flex items-center justify-center bg-element3 h-[32px] w-[60px] rounded" onClick={onIncrement}>증가</button>
                    <button className="flex items-center justify-center bg-element3 h-[32px] w-[60px] rounded" onClick={onDecrement}>감소</button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <input type="number" className="rounded text-black p-2" placeholder="증가시킬 수" value={incrementAmount} onChange={onChangeIncrementAmount} />
                        <button className="flex items-center justify-center bg-element3 h-[40px] w-[60px] rounded" onClick={onIncrementByAmount}>증가</button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="number" className="rounded text-black p-2" placeholder="감소시킬 수" value={decrementAmount} onChange={onChangeDecrementAmount} />
                        <button className="flex items-center justify-center bg-element3 h-[40px] w-[60px] rounded" onClick={onDecrementByAmount}>감소</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterBox;
