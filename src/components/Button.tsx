import React from 'react';

interface Button {
  text: string;
  style: string;
}

export default function Button({ text, style }: Button) {
  return (
    <button className={`rounded-lg py-4 px-3 text-sm shadow-xl ${style}`}>
      {text}
    </button>
  );
}
