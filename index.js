
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    function handleChange(event) {
        setMarkdown(event.target.value);
    }

    return (
        <div>
            <textarea value={markdown} onChange={handleChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default MarkdownEditor;

// reverse a sentence
// the start of the new sentence must be capitalized

function reverseSentence(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        let newWord = word[0].toUpperCase() + word.slice(1);
        newWords.push(newWord);
    }

    return newWords.join(' ');
}

const data =[
    [{ name: 'John', age: 21 }, { name: 'Mike', age: 20 }],
    [{ name: 'Bob', age: 21 }]
];

// as an illustration, pull names out of the data array

const names = data.map((arr) => {
    return arr.map((obj) => {
        return obj.name;
    });
}
);

// map through an array of arrays of object
// Example: Extract names from the data array
// Desired outcome: ['John', 'Mike', 'Bob']

const _names = data.map((arr) => {
    return arr.map((obj) => {
        return obj.name;
    });
}
);