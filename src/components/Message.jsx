import React, { useEffect, useState } from 'react';

function Message() {
  const [message, setMessage] = useState('...');

  useEffect(() => {
    const getMessage = async () => {
      const response = await fetch(`/api/message`);
      const { text } = await response.json();
      setMessage(text);
    };
    getMessage();
  }, []);

  return <span>{message}</span>;
}

export default Message;
