#!/usr/bin/node


const welcomeMessage = (fullName) => {
  return () => {
    if (fullName) {
      alert(`Welcome ${fullName}`);
    }
  };
};

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
