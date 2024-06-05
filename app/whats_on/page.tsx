'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Page() {
    const [value, setValue] = useState<Value>(new Date());

    const handleChange = (newValue: Value) => {
        setValue(newValue);

        alert(value);
    };

    return (
        <main className="mb-3 flex flex-col">
            <Calendar onChange={handleChange} value={value} />
        </main>
    );
}
