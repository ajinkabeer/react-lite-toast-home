import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Syntax = ({ code }) => {
    return (
        <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ width: '80%' }}>
            {code}
        </SyntaxHighlighter>
    )
}

export default Syntax