import React from 'react';

const TimeBasedGreeting = ({ username }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour >= 3 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <div className="greeting">
      <h1>{getGreeting()}{username ? `, ${username}` : ''}!</h1>
    </div>
  );
};

export default TimeBasedGreeting;