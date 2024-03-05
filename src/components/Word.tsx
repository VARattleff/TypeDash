import React from 'react';

interface WordProps {
    text: string;
    active: boolean;
    correct?: boolean | null;
}

function Word(props: WordProps) {
    const { text, active, correct } = props;

    if (correct === true) {
        return <span className='correct'>{text} </span>;
    }
    if (correct === false) {
        return <span className='incorrect'>{text} </span>;
    }
    if (active) {
        return <span className='active'>{text} </span>;
    }

    return <span>{text} </span>;
}

export default React.memo(Word);
